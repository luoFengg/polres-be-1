/**
 * Script untuk test deployment Vercel
 * Jalankan dengan: node test-deployment.js
 */

const https = require('https');

// URL deployment Vercel Anda
const VERCEL_URL = 'https://polres-be-1-r5cc.vercel.app'; // Updated URL

// Test data untuk login
const loginData = {
  nrp: "12345",
  password: "password123"
};

// Function untuk make HTTP request
function makeRequest(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Node.js Test Script'
      }
    };

    if (data) {
      const postData = JSON.stringify(data);
      options.headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: responseData
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

// Test functions
async function testRootEndpoint() {
  console.log('\n🔍 Testing root endpoint...');
  try {
    const response = await makeRequest(VERCEL_URL);
    console.log(`✅ Root endpoint: ${response.statusCode}`);
    
    if (response.statusCode === 200) {
      const body = JSON.parse(response.body);
      console.log('📦 Response:', body);
    } else {
      console.log('❌ Response body:', response.body);
    }
  } catch (error) {
    console.error('❌ Root endpoint failed:', error.message);
  }
}

async function testLoginEndpoint() {
  console.log('\n🔍 Testing login endpoint...');
  try {
    const response = await makeRequest(`${VERCEL_URL}/auth/login`, 'POST', loginData);
    console.log(`📊 Login endpoint: ${response.statusCode}`);
    
    if (response.statusCode === 200) {
      const body = JSON.parse(response.body);
      console.log('✅ Login successful!');
      console.log('🎫 Token received:', body.token ? 'Yes' : 'No');
    } else if (response.statusCode === 401) {
      console.log('🔐 Login failed: Invalid credentials (expected for test)');
    } else if (response.statusCode === 500) {
      console.log('❌ Server error - Database connection issue');
      console.log('📄 Error details:', response.body);
    } else {
      console.log('📄 Response:', response.body);
    }
  } catch (error) {
    console.error('❌ Login endpoint failed:', error.message);
  }
}

async function testHealthCheck() {
  console.log('\n🔍 Testing health check...');
  try {
    const response = await makeRequest(`${VERCEL_URL}/health`);
    console.log(`🏥 Health check: ${response.statusCode}`);
    
    if (response.statusCode === 200) {
      console.log('✅ Health check passed');
    } else {
      console.log('❌ Health check failed');
    }
  } catch (error) {
    console.error('❌ Health check failed:', error.message);
  }
}

// Main test runner
async function runTests() {
  console.log('🚀 Testing Vercel Deployment');
  console.log('🌐 Target URL:', VERCEL_URL);
  console.log('=' .repeat(50));

  await testRootEndpoint();
  await testLoginEndpoint();
  await testHealthCheck();

  console.log('\n' + '='.repeat(50));
  console.log('🏁 Test completed!');
  
  console.log('\n📋 Next steps:');
  console.log('1. Check Vercel deployment logs if any test failed');
  console.log('2. Verify environment variables are set correctly');
  console.log('3. Test with valid login credentials using Postman');
}

// Run tests
runTests().catch(console.error);
