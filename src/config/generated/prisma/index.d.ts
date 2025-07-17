
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Anggota
 * 
 */
export type Anggota = $Result.DefaultSelection<Prisma.$AnggotaPayload>
/**
 * Model Simpanan
 * 
 */
export type Simpanan = $Result.DefaultSelection<Prisma.$SimpananPayload>
/**
 * Model TokoKategori
 * 
 */
export type TokoKategori = $Result.DefaultSelection<Prisma.$TokoKategoriPayload>
/**
 * Model TokoProduk
 * 
 */
export type TokoProduk = $Result.DefaultSelection<Prisma.$TokoProdukPayload>
/**
 * Model Piutang
 * 
 */
export type Piutang = $Result.DefaultSelection<Prisma.$PiutangPayload>
/**
 * Model PiutangTransaction
 * 
 */
export type PiutangTransaction = $Result.DefaultSelection<Prisma.$PiutangTransactionPayload>
/**
 * Model SimpananTransaction
 * 
 */
export type SimpananTransaction = $Result.DefaultSelection<Prisma.$SimpananTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  adminKoperasi: 'adminKoperasi',
  anggota: 'anggota'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Anggotas
 * const anggotas = await prisma.anggota.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Anggotas
   * const anggotas = await prisma.anggota.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.anggota`: Exposes CRUD operations for the **Anggota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anggotas
    * const anggotas = await prisma.anggota.findMany()
    * ```
    */
  get anggota(): Prisma.AnggotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.simpanan`: Exposes CRUD operations for the **Simpanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Simpanans
    * const simpanans = await prisma.simpanan.findMany()
    * ```
    */
  get simpanan(): Prisma.SimpananDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokoKategori`: Exposes CRUD operations for the **TokoKategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokoKategoris
    * const tokoKategoris = await prisma.tokoKategori.findMany()
    * ```
    */
  get tokoKategori(): Prisma.TokoKategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokoProduk`: Exposes CRUD operations for the **TokoProduk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokoProduks
    * const tokoProduks = await prisma.tokoProduk.findMany()
    * ```
    */
  get tokoProduk(): Prisma.TokoProdukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.piutang`: Exposes CRUD operations for the **Piutang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Piutangs
    * const piutangs = await prisma.piutang.findMany()
    * ```
    */
  get piutang(): Prisma.PiutangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.piutangTransaction`: Exposes CRUD operations for the **PiutangTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PiutangTransactions
    * const piutangTransactions = await prisma.piutangTransaction.findMany()
    * ```
    */
  get piutangTransaction(): Prisma.PiutangTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.simpananTransaction`: Exposes CRUD operations for the **SimpananTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SimpananTransactions
    * const simpananTransactions = await prisma.simpananTransaction.findMany()
    * ```
    */
  get simpananTransaction(): Prisma.SimpananTransactionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Anggota: 'Anggota',
    Simpanan: 'Simpanan',
    TokoKategori: 'TokoKategori',
    TokoProduk: 'TokoProduk',
    Piutang: 'Piutang',
    PiutangTransaction: 'PiutangTransaction',
    SimpananTransaction: 'SimpananTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "anggota" | "simpanan" | "tokoKategori" | "tokoProduk" | "piutang" | "piutangTransaction" | "simpananTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Anggota: {
        payload: Prisma.$AnggotaPayload<ExtArgs>
        fields: Prisma.AnggotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnggotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnggotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload>
          }
          findFirst: {
            args: Prisma.AnggotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnggotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload>
          }
          findMany: {
            args: Prisma.AnggotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload>[]
          }
          create: {
            args: Prisma.AnggotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload>
          }
          createMany: {
            args: Prisma.AnggotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnggotaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload>[]
          }
          delete: {
            args: Prisma.AnggotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload>
          }
          update: {
            args: Prisma.AnggotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload>
          }
          deleteMany: {
            args: Prisma.AnggotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnggotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnggotaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload>[]
          }
          upsert: {
            args: Prisma.AnggotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaPayload>
          }
          aggregate: {
            args: Prisma.AnggotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnggota>
          }
          groupBy: {
            args: Prisma.AnggotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnggotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnggotaCountArgs<ExtArgs>
            result: $Utils.Optional<AnggotaCountAggregateOutputType> | number
          }
        }
      }
      Simpanan: {
        payload: Prisma.$SimpananPayload<ExtArgs>
        fields: Prisma.SimpananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SimpananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SimpananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload>
          }
          findFirst: {
            args: Prisma.SimpananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SimpananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload>
          }
          findMany: {
            args: Prisma.SimpananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload>[]
          }
          create: {
            args: Prisma.SimpananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload>
          }
          createMany: {
            args: Prisma.SimpananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SimpananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload>[]
          }
          delete: {
            args: Prisma.SimpananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload>
          }
          update: {
            args: Prisma.SimpananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload>
          }
          deleteMany: {
            args: Prisma.SimpananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SimpananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SimpananUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload>[]
          }
          upsert: {
            args: Prisma.SimpananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananPayload>
          }
          aggregate: {
            args: Prisma.SimpananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimpanan>
          }
          groupBy: {
            args: Prisma.SimpananGroupByArgs<ExtArgs>
            result: $Utils.Optional<SimpananGroupByOutputType>[]
          }
          count: {
            args: Prisma.SimpananCountArgs<ExtArgs>
            result: $Utils.Optional<SimpananCountAggregateOutputType> | number
          }
        }
      }
      TokoKategori: {
        payload: Prisma.$TokoKategoriPayload<ExtArgs>
        fields: Prisma.TokoKategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokoKategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokoKategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload>
          }
          findFirst: {
            args: Prisma.TokoKategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokoKategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload>
          }
          findMany: {
            args: Prisma.TokoKategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload>[]
          }
          create: {
            args: Prisma.TokoKategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload>
          }
          createMany: {
            args: Prisma.TokoKategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokoKategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload>[]
          }
          delete: {
            args: Prisma.TokoKategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload>
          }
          update: {
            args: Prisma.TokoKategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload>
          }
          deleteMany: {
            args: Prisma.TokoKategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokoKategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokoKategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload>[]
          }
          upsert: {
            args: Prisma.TokoKategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoKategoriPayload>
          }
          aggregate: {
            args: Prisma.TokoKategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokoKategori>
          }
          groupBy: {
            args: Prisma.TokoKategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokoKategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokoKategoriCountArgs<ExtArgs>
            result: $Utils.Optional<TokoKategoriCountAggregateOutputType> | number
          }
        }
      }
      TokoProduk: {
        payload: Prisma.$TokoProdukPayload<ExtArgs>
        fields: Prisma.TokoProdukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokoProdukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokoProdukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload>
          }
          findFirst: {
            args: Prisma.TokoProdukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokoProdukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload>
          }
          findMany: {
            args: Prisma.TokoProdukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload>[]
          }
          create: {
            args: Prisma.TokoProdukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload>
          }
          createMany: {
            args: Prisma.TokoProdukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokoProdukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload>[]
          }
          delete: {
            args: Prisma.TokoProdukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload>
          }
          update: {
            args: Prisma.TokoProdukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload>
          }
          deleteMany: {
            args: Prisma.TokoProdukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokoProdukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokoProdukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload>[]
          }
          upsert: {
            args: Prisma.TokoProdukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokoProdukPayload>
          }
          aggregate: {
            args: Prisma.TokoProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokoProduk>
          }
          groupBy: {
            args: Prisma.TokoProdukGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokoProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokoProdukCountArgs<ExtArgs>
            result: $Utils.Optional<TokoProdukCountAggregateOutputType> | number
          }
        }
      }
      Piutang: {
        payload: Prisma.$PiutangPayload<ExtArgs>
        fields: Prisma.PiutangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PiutangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PiutangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          findFirst: {
            args: Prisma.PiutangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PiutangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          findMany: {
            args: Prisma.PiutangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>[]
          }
          create: {
            args: Prisma.PiutangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          createMany: {
            args: Prisma.PiutangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PiutangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>[]
          }
          delete: {
            args: Prisma.PiutangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          update: {
            args: Prisma.PiutangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          deleteMany: {
            args: Prisma.PiutangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PiutangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PiutangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>[]
          }
          upsert: {
            args: Prisma.PiutangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          aggregate: {
            args: Prisma.PiutangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePiutang>
          }
          groupBy: {
            args: Prisma.PiutangGroupByArgs<ExtArgs>
            result: $Utils.Optional<PiutangGroupByOutputType>[]
          }
          count: {
            args: Prisma.PiutangCountArgs<ExtArgs>
            result: $Utils.Optional<PiutangCountAggregateOutputType> | number
          }
        }
      }
      PiutangTransaction: {
        payload: Prisma.$PiutangTransactionPayload<ExtArgs>
        fields: Prisma.PiutangTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PiutangTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PiutangTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload>
          }
          findFirst: {
            args: Prisma.PiutangTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PiutangTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload>
          }
          findMany: {
            args: Prisma.PiutangTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload>[]
          }
          create: {
            args: Prisma.PiutangTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload>
          }
          createMany: {
            args: Prisma.PiutangTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PiutangTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload>[]
          }
          delete: {
            args: Prisma.PiutangTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload>
          }
          update: {
            args: Prisma.PiutangTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PiutangTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PiutangTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PiutangTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload>[]
          }
          upsert: {
            args: Prisma.PiutangTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangTransactionPayload>
          }
          aggregate: {
            args: Prisma.PiutangTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePiutangTransaction>
          }
          groupBy: {
            args: Prisma.PiutangTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PiutangTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PiutangTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PiutangTransactionCountAggregateOutputType> | number
          }
        }
      }
      SimpananTransaction: {
        payload: Prisma.$SimpananTransactionPayload<ExtArgs>
        fields: Prisma.SimpananTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SimpananTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SimpananTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload>
          }
          findFirst: {
            args: Prisma.SimpananTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SimpananTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload>
          }
          findMany: {
            args: Prisma.SimpananTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload>[]
          }
          create: {
            args: Prisma.SimpananTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload>
          }
          createMany: {
            args: Prisma.SimpananTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SimpananTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload>[]
          }
          delete: {
            args: Prisma.SimpananTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload>
          }
          update: {
            args: Prisma.SimpananTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload>
          }
          deleteMany: {
            args: Prisma.SimpananTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SimpananTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SimpananTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload>[]
          }
          upsert: {
            args: Prisma.SimpananTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimpananTransactionPayload>
          }
          aggregate: {
            args: Prisma.SimpananTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimpananTransaction>
          }
          groupBy: {
            args: Prisma.SimpananTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SimpananTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SimpananTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<SimpananTransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    anggota?: AnggotaOmit
    simpanan?: SimpananOmit
    tokoKategori?: TokoKategoriOmit
    tokoProduk?: TokoProdukOmit
    piutang?: PiutangOmit
    piutangTransaction?: PiutangTransactionOmit
    simpananTransaction?: SimpananTransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AnggotaCountOutputType
   */

  export type AnggotaCountOutputType = {
    piutang: number
    processedTransactions: number
    updatedSimpanan: number
    simpananTransactions: number
    processedSimpananTransactions: number
  }

  export type AnggotaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piutang?: boolean | AnggotaCountOutputTypeCountPiutangArgs
    processedTransactions?: boolean | AnggotaCountOutputTypeCountProcessedTransactionsArgs
    updatedSimpanan?: boolean | AnggotaCountOutputTypeCountUpdatedSimpananArgs
    simpananTransactions?: boolean | AnggotaCountOutputTypeCountSimpananTransactionsArgs
    processedSimpananTransactions?: boolean | AnggotaCountOutputTypeCountProcessedSimpananTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AnggotaCountOutputType without action
   */
  export type AnggotaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaCountOutputType
     */
    select?: AnggotaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnggotaCountOutputType without action
   */
  export type AnggotaCountOutputTypeCountPiutangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiutangWhereInput
  }

  /**
   * AnggotaCountOutputType without action
   */
  export type AnggotaCountOutputTypeCountProcessedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiutangTransactionWhereInput
  }

  /**
   * AnggotaCountOutputType without action
   */
  export type AnggotaCountOutputTypeCountUpdatedSimpananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimpananWhereInput
  }

  /**
   * AnggotaCountOutputType without action
   */
  export type AnggotaCountOutputTypeCountSimpananTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimpananTransactionWhereInput
  }

  /**
   * AnggotaCountOutputType without action
   */
  export type AnggotaCountOutputTypeCountProcessedSimpananTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimpananTransactionWhereInput
  }


  /**
   * Count Type SimpananCountOutputType
   */

  export type SimpananCountOutputType = {
    simpananTransactions: number
  }

  export type SimpananCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simpananTransactions?: boolean | SimpananCountOutputTypeCountSimpananTransactionsArgs
  }

  // Custom InputTypes
  /**
   * SimpananCountOutputType without action
   */
  export type SimpananCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananCountOutputType
     */
    select?: SimpananCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SimpananCountOutputType without action
   */
  export type SimpananCountOutputTypeCountSimpananTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimpananTransactionWhereInput
  }


  /**
   * Count Type TokoKategoriCountOutputType
   */

  export type TokoKategoriCountOutputType = {
    produk: number
  }

  export type TokoKategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | TokoKategoriCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * TokoKategoriCountOutputType without action
   */
  export type TokoKategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategoriCountOutputType
     */
    select?: TokoKategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokoKategoriCountOutputType without action
   */
  export type TokoKategoriCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokoProdukWhereInput
  }


  /**
   * Count Type PiutangCountOutputType
   */

  export type PiutangCountOutputType = {
    transactions: number
  }

  export type PiutangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | PiutangCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * PiutangCountOutputType without action
   */
  export type PiutangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangCountOutputType
     */
    select?: PiutangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PiutangCountOutputType without action
   */
  export type PiutangCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiutangTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Anggota
   */

  export type AggregateAnggota = {
    _count: AnggotaCountAggregateOutputType | null
    _min: AnggotaMinAggregateOutputType | null
    _max: AnggotaMaxAggregateOutputType | null
  }

  export type AnggotaMinAggregateOutputType = {
    id: string | null
    nrp: string | null
    nama: string | null
    jabatan: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnggotaMaxAggregateOutputType = {
    id: string | null
    nrp: string | null
    nama: string | null
    jabatan: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnggotaCountAggregateOutputType = {
    id: number
    nrp: number
    nama: number
    jabatan: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnggotaMinAggregateInputType = {
    id?: true
    nrp?: true
    nama?: true
    jabatan?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnggotaMaxAggregateInputType = {
    id?: true
    nrp?: true
    nama?: true
    jabatan?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnggotaCountAggregateInputType = {
    id?: true
    nrp?: true
    nama?: true
    jabatan?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnggotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anggota to aggregate.
     */
    where?: AnggotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anggotas to fetch.
     */
    orderBy?: AnggotaOrderByWithRelationInput | AnggotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnggotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anggotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anggotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anggotas
    **/
    _count?: true | AnggotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnggotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnggotaMaxAggregateInputType
  }

  export type GetAnggotaAggregateType<T extends AnggotaAggregateArgs> = {
        [P in keyof T & keyof AggregateAnggota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnggota[P]>
      : GetScalarType<T[P], AggregateAnggota[P]>
  }




  export type AnggotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnggotaWhereInput
    orderBy?: AnggotaOrderByWithAggregationInput | AnggotaOrderByWithAggregationInput[]
    by: AnggotaScalarFieldEnum[] | AnggotaScalarFieldEnum
    having?: AnggotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnggotaCountAggregateInputType | true
    _min?: AnggotaMinAggregateInputType
    _max?: AnggotaMaxAggregateInputType
  }

  export type AnggotaGroupByOutputType = {
    id: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: AnggotaCountAggregateOutputType | null
    _min: AnggotaMinAggregateOutputType | null
    _max: AnggotaMaxAggregateOutputType | null
  }

  type GetAnggotaGroupByPayload<T extends AnggotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnggotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnggotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnggotaGroupByOutputType[P]>
            : GetScalarType<T[P], AnggotaGroupByOutputType[P]>
        }
      >
    >


  export type AnggotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nrp?: boolean
    nama?: boolean
    jabatan?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    piutang?: boolean | Anggota$piutangArgs<ExtArgs>
    processedTransactions?: boolean | Anggota$processedTransactionsArgs<ExtArgs>
    simpanan?: boolean | Anggota$simpananArgs<ExtArgs>
    updatedSimpanan?: boolean | Anggota$updatedSimpananArgs<ExtArgs>
    simpananTransactions?: boolean | Anggota$simpananTransactionsArgs<ExtArgs>
    processedSimpananTransactions?: boolean | Anggota$processedSimpananTransactionsArgs<ExtArgs>
    _count?: boolean | AnggotaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anggota"]>

  export type AnggotaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nrp?: boolean
    nama?: boolean
    jabatan?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["anggota"]>

  export type AnggotaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nrp?: boolean
    nama?: boolean
    jabatan?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["anggota"]>

  export type AnggotaSelectScalar = {
    id?: boolean
    nrp?: boolean
    nama?: boolean
    jabatan?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnggotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nrp" | "nama" | "jabatan" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["anggota"]>
  export type AnggotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piutang?: boolean | Anggota$piutangArgs<ExtArgs>
    processedTransactions?: boolean | Anggota$processedTransactionsArgs<ExtArgs>
    simpanan?: boolean | Anggota$simpananArgs<ExtArgs>
    updatedSimpanan?: boolean | Anggota$updatedSimpananArgs<ExtArgs>
    simpananTransactions?: boolean | Anggota$simpananTransactionsArgs<ExtArgs>
    processedSimpananTransactions?: boolean | Anggota$processedSimpananTransactionsArgs<ExtArgs>
    _count?: boolean | AnggotaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnggotaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnggotaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnggotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anggota"
    objects: {
      piutang: Prisma.$PiutangPayload<ExtArgs>[]
      processedTransactions: Prisma.$PiutangTransactionPayload<ExtArgs>[]
      simpanan: Prisma.$SimpananPayload<ExtArgs> | null
      updatedSimpanan: Prisma.$SimpananPayload<ExtArgs>[]
      simpananTransactions: Prisma.$SimpananTransactionPayload<ExtArgs>[]
      processedSimpananTransactions: Prisma.$SimpananTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nrp: string
      nama: string
      jabatan: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["anggota"]>
    composites: {}
  }

  type AnggotaGetPayload<S extends boolean | null | undefined | AnggotaDefaultArgs> = $Result.GetResult<Prisma.$AnggotaPayload, S>

  type AnggotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnggotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnggotaCountAggregateInputType | true
    }

  export interface AnggotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anggota'], meta: { name: 'Anggota' } }
    /**
     * Find zero or one Anggota that matches the filter.
     * @param {AnggotaFindUniqueArgs} args - Arguments to find a Anggota
     * @example
     * // Get one Anggota
     * const anggota = await prisma.anggota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnggotaFindUniqueArgs>(args: SelectSubset<T, AnggotaFindUniqueArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anggota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnggotaFindUniqueOrThrowArgs} args - Arguments to find a Anggota
     * @example
     * // Get one Anggota
     * const anggota = await prisma.anggota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnggotaFindUniqueOrThrowArgs>(args: SelectSubset<T, AnggotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anggota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaFindFirstArgs} args - Arguments to find a Anggota
     * @example
     * // Get one Anggota
     * const anggota = await prisma.anggota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnggotaFindFirstArgs>(args?: SelectSubset<T, AnggotaFindFirstArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anggota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaFindFirstOrThrowArgs} args - Arguments to find a Anggota
     * @example
     * // Get one Anggota
     * const anggota = await prisma.anggota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnggotaFindFirstOrThrowArgs>(args?: SelectSubset<T, AnggotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anggotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anggotas
     * const anggotas = await prisma.anggota.findMany()
     * 
     * // Get first 10 Anggotas
     * const anggotas = await prisma.anggota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anggotaWithIdOnly = await prisma.anggota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnggotaFindManyArgs>(args?: SelectSubset<T, AnggotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anggota.
     * @param {AnggotaCreateArgs} args - Arguments to create a Anggota.
     * @example
     * // Create one Anggota
     * const Anggota = await prisma.anggota.create({
     *   data: {
     *     // ... data to create a Anggota
     *   }
     * })
     * 
     */
    create<T extends AnggotaCreateArgs>(args: SelectSubset<T, AnggotaCreateArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anggotas.
     * @param {AnggotaCreateManyArgs} args - Arguments to create many Anggotas.
     * @example
     * // Create many Anggotas
     * const anggota = await prisma.anggota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnggotaCreateManyArgs>(args?: SelectSubset<T, AnggotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anggotas and returns the data saved in the database.
     * @param {AnggotaCreateManyAndReturnArgs} args - Arguments to create many Anggotas.
     * @example
     * // Create many Anggotas
     * const anggota = await prisma.anggota.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anggotas and only return the `id`
     * const anggotaWithIdOnly = await prisma.anggota.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnggotaCreateManyAndReturnArgs>(args?: SelectSubset<T, AnggotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Anggota.
     * @param {AnggotaDeleteArgs} args - Arguments to delete one Anggota.
     * @example
     * // Delete one Anggota
     * const Anggota = await prisma.anggota.delete({
     *   where: {
     *     // ... filter to delete one Anggota
     *   }
     * })
     * 
     */
    delete<T extends AnggotaDeleteArgs>(args: SelectSubset<T, AnggotaDeleteArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anggota.
     * @param {AnggotaUpdateArgs} args - Arguments to update one Anggota.
     * @example
     * // Update one Anggota
     * const anggota = await prisma.anggota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnggotaUpdateArgs>(args: SelectSubset<T, AnggotaUpdateArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anggotas.
     * @param {AnggotaDeleteManyArgs} args - Arguments to filter Anggotas to delete.
     * @example
     * // Delete a few Anggotas
     * const { count } = await prisma.anggota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnggotaDeleteManyArgs>(args?: SelectSubset<T, AnggotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anggotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anggotas
     * const anggota = await prisma.anggota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnggotaUpdateManyArgs>(args: SelectSubset<T, AnggotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anggotas and returns the data updated in the database.
     * @param {AnggotaUpdateManyAndReturnArgs} args - Arguments to update many Anggotas.
     * @example
     * // Update many Anggotas
     * const anggota = await prisma.anggota.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anggotas and only return the `id`
     * const anggotaWithIdOnly = await prisma.anggota.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnggotaUpdateManyAndReturnArgs>(args: SelectSubset<T, AnggotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Anggota.
     * @param {AnggotaUpsertArgs} args - Arguments to update or create a Anggota.
     * @example
     * // Update or create a Anggota
     * const anggota = await prisma.anggota.upsert({
     *   create: {
     *     // ... data to create a Anggota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anggota we want to update
     *   }
     * })
     */
    upsert<T extends AnggotaUpsertArgs>(args: SelectSubset<T, AnggotaUpsertArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anggotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaCountArgs} args - Arguments to filter Anggotas to count.
     * @example
     * // Count the number of Anggotas
     * const count = await prisma.anggota.count({
     *   where: {
     *     // ... the filter for the Anggotas we want to count
     *   }
     * })
    **/
    count<T extends AnggotaCountArgs>(
      args?: Subset<T, AnggotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnggotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anggota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnggotaAggregateArgs>(args: Subset<T, AnggotaAggregateArgs>): Prisma.PrismaPromise<GetAnggotaAggregateType<T>>

    /**
     * Group by Anggota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnggotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnggotaGroupByArgs['orderBy'] }
        : { orderBy?: AnggotaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnggotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnggotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anggota model
   */
  readonly fields: AnggotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anggota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnggotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    piutang<T extends Anggota$piutangArgs<ExtArgs> = {}>(args?: Subset<T, Anggota$piutangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    processedTransactions<T extends Anggota$processedTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Anggota$processedTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    simpanan<T extends Anggota$simpananArgs<ExtArgs> = {}>(args?: Subset<T, Anggota$simpananArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedSimpanan<T extends Anggota$updatedSimpananArgs<ExtArgs> = {}>(args?: Subset<T, Anggota$updatedSimpananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    simpananTransactions<T extends Anggota$simpananTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Anggota$simpananTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    processedSimpananTransactions<T extends Anggota$processedSimpananTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Anggota$processedSimpananTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Anggota model
   */
  interface AnggotaFieldRefs {
    readonly id: FieldRef<"Anggota", 'String'>
    readonly nrp: FieldRef<"Anggota", 'String'>
    readonly nama: FieldRef<"Anggota", 'String'>
    readonly jabatan: FieldRef<"Anggota", 'String'>
    readonly password: FieldRef<"Anggota", 'String'>
    readonly role: FieldRef<"Anggota", 'Role'>
    readonly createdAt: FieldRef<"Anggota", 'DateTime'>
    readonly updatedAt: FieldRef<"Anggota", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Anggota findUnique
   */
  export type AnggotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    /**
     * Filter, which Anggota to fetch.
     */
    where: AnggotaWhereUniqueInput
  }

  /**
   * Anggota findUniqueOrThrow
   */
  export type AnggotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    /**
     * Filter, which Anggota to fetch.
     */
    where: AnggotaWhereUniqueInput
  }

  /**
   * Anggota findFirst
   */
  export type AnggotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    /**
     * Filter, which Anggota to fetch.
     */
    where?: AnggotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anggotas to fetch.
     */
    orderBy?: AnggotaOrderByWithRelationInput | AnggotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anggotas.
     */
    cursor?: AnggotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anggotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anggotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anggotas.
     */
    distinct?: AnggotaScalarFieldEnum | AnggotaScalarFieldEnum[]
  }

  /**
   * Anggota findFirstOrThrow
   */
  export type AnggotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    /**
     * Filter, which Anggota to fetch.
     */
    where?: AnggotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anggotas to fetch.
     */
    orderBy?: AnggotaOrderByWithRelationInput | AnggotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anggotas.
     */
    cursor?: AnggotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anggotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anggotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anggotas.
     */
    distinct?: AnggotaScalarFieldEnum | AnggotaScalarFieldEnum[]
  }

  /**
   * Anggota findMany
   */
  export type AnggotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    /**
     * Filter, which Anggotas to fetch.
     */
    where?: AnggotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anggotas to fetch.
     */
    orderBy?: AnggotaOrderByWithRelationInput | AnggotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anggotas.
     */
    cursor?: AnggotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anggotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anggotas.
     */
    skip?: number
    distinct?: AnggotaScalarFieldEnum | AnggotaScalarFieldEnum[]
  }

  /**
   * Anggota create
   */
  export type AnggotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    /**
     * The data needed to create a Anggota.
     */
    data: XOR<AnggotaCreateInput, AnggotaUncheckedCreateInput>
  }

  /**
   * Anggota createMany
   */
  export type AnggotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anggotas.
     */
    data: AnggotaCreateManyInput | AnggotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anggota createManyAndReturn
   */
  export type AnggotaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * The data used to create many Anggotas.
     */
    data: AnggotaCreateManyInput | AnggotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anggota update
   */
  export type AnggotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    /**
     * The data needed to update a Anggota.
     */
    data: XOR<AnggotaUpdateInput, AnggotaUncheckedUpdateInput>
    /**
     * Choose, which Anggota to update.
     */
    where: AnggotaWhereUniqueInput
  }

  /**
   * Anggota updateMany
   */
  export type AnggotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anggotas.
     */
    data: XOR<AnggotaUpdateManyMutationInput, AnggotaUncheckedUpdateManyInput>
    /**
     * Filter which Anggotas to update
     */
    where?: AnggotaWhereInput
    /**
     * Limit how many Anggotas to update.
     */
    limit?: number
  }

  /**
   * Anggota updateManyAndReturn
   */
  export type AnggotaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * The data used to update Anggotas.
     */
    data: XOR<AnggotaUpdateManyMutationInput, AnggotaUncheckedUpdateManyInput>
    /**
     * Filter which Anggotas to update
     */
    where?: AnggotaWhereInput
    /**
     * Limit how many Anggotas to update.
     */
    limit?: number
  }

  /**
   * Anggota upsert
   */
  export type AnggotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    /**
     * The filter to search for the Anggota to update in case it exists.
     */
    where: AnggotaWhereUniqueInput
    /**
     * In case the Anggota found by the `where` argument doesn't exist, create a new Anggota with this data.
     */
    create: XOR<AnggotaCreateInput, AnggotaUncheckedCreateInput>
    /**
     * In case the Anggota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnggotaUpdateInput, AnggotaUncheckedUpdateInput>
  }

  /**
   * Anggota delete
   */
  export type AnggotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    /**
     * Filter which Anggota to delete.
     */
    where: AnggotaWhereUniqueInput
  }

  /**
   * Anggota deleteMany
   */
  export type AnggotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anggotas to delete
     */
    where?: AnggotaWhereInput
    /**
     * Limit how many Anggotas to delete.
     */
    limit?: number
  }

  /**
   * Anggota.piutang
   */
  export type Anggota$piutangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    where?: PiutangWhereInput
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    cursor?: PiutangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * Anggota.processedTransactions
   */
  export type Anggota$processedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    where?: PiutangTransactionWhereInput
    orderBy?: PiutangTransactionOrderByWithRelationInput | PiutangTransactionOrderByWithRelationInput[]
    cursor?: PiutangTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PiutangTransactionScalarFieldEnum | PiutangTransactionScalarFieldEnum[]
  }

  /**
   * Anggota.simpanan
   */
  export type Anggota$simpananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    where?: SimpananWhereInput
  }

  /**
   * Anggota.updatedSimpanan
   */
  export type Anggota$updatedSimpananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    where?: SimpananWhereInput
    orderBy?: SimpananOrderByWithRelationInput | SimpananOrderByWithRelationInput[]
    cursor?: SimpananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimpananScalarFieldEnum | SimpananScalarFieldEnum[]
  }

  /**
   * Anggota.simpananTransactions
   */
  export type Anggota$simpananTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    where?: SimpananTransactionWhereInput
    orderBy?: SimpananTransactionOrderByWithRelationInput | SimpananTransactionOrderByWithRelationInput[]
    cursor?: SimpananTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimpananTransactionScalarFieldEnum | SimpananTransactionScalarFieldEnum[]
  }

  /**
   * Anggota.processedSimpananTransactions
   */
  export type Anggota$processedSimpananTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    where?: SimpananTransactionWhereInput
    orderBy?: SimpananTransactionOrderByWithRelationInput | SimpananTransactionOrderByWithRelationInput[]
    cursor?: SimpananTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimpananTransactionScalarFieldEnum | SimpananTransactionScalarFieldEnum[]
  }

  /**
   * Anggota without action
   */
  export type AnggotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
  }


  /**
   * Model Simpanan
   */

  export type AggregateSimpanan = {
    _count: SimpananCountAggregateOutputType | null
    _avg: SimpananAvgAggregateOutputType | null
    _sum: SimpananSumAggregateOutputType | null
    _min: SimpananMinAggregateOutputType | null
    _max: SimpananMaxAggregateOutputType | null
  }

  export type SimpananAvgAggregateOutputType = {
    simpananPokok: Decimal | null
    simpananWajib: Decimal | null
    simpananSukarela: Decimal | null
    tabunganHariRaya: Decimal | null
  }

  export type SimpananSumAggregateOutputType = {
    simpananPokok: Decimal | null
    simpananWajib: Decimal | null
    simpananSukarela: Decimal | null
    tabunganHariRaya: Decimal | null
  }

  export type SimpananMinAggregateOutputType = {
    anggotaId: string | null
    simpananPokok: Decimal | null
    simpananWajib: Decimal | null
    simpananSukarela: Decimal | null
    tabunganHariRaya: Decimal | null
    updatedAt: Date | null
    createdAt: Date | null
    lastUpdatedBy: string | null
  }

  export type SimpananMaxAggregateOutputType = {
    anggotaId: string | null
    simpananPokok: Decimal | null
    simpananWajib: Decimal | null
    simpananSukarela: Decimal | null
    tabunganHariRaya: Decimal | null
    updatedAt: Date | null
    createdAt: Date | null
    lastUpdatedBy: string | null
  }

  export type SimpananCountAggregateOutputType = {
    anggotaId: number
    simpananPokok: number
    simpananWajib: number
    simpananSukarela: number
    tabunganHariRaya: number
    updatedAt: number
    createdAt: number
    lastUpdatedBy: number
    _all: number
  }


  export type SimpananAvgAggregateInputType = {
    simpananPokok?: true
    simpananWajib?: true
    simpananSukarela?: true
    tabunganHariRaya?: true
  }

  export type SimpananSumAggregateInputType = {
    simpananPokok?: true
    simpananWajib?: true
    simpananSukarela?: true
    tabunganHariRaya?: true
  }

  export type SimpananMinAggregateInputType = {
    anggotaId?: true
    simpananPokok?: true
    simpananWajib?: true
    simpananSukarela?: true
    tabunganHariRaya?: true
    updatedAt?: true
    createdAt?: true
    lastUpdatedBy?: true
  }

  export type SimpananMaxAggregateInputType = {
    anggotaId?: true
    simpananPokok?: true
    simpananWajib?: true
    simpananSukarela?: true
    tabunganHariRaya?: true
    updatedAt?: true
    createdAt?: true
    lastUpdatedBy?: true
  }

  export type SimpananCountAggregateInputType = {
    anggotaId?: true
    simpananPokok?: true
    simpananWajib?: true
    simpananSukarela?: true
    tabunganHariRaya?: true
    updatedAt?: true
    createdAt?: true
    lastUpdatedBy?: true
    _all?: true
  }

  export type SimpananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simpanan to aggregate.
     */
    where?: SimpananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simpanans to fetch.
     */
    orderBy?: SimpananOrderByWithRelationInput | SimpananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SimpananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simpanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simpanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Simpanans
    **/
    _count?: true | SimpananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SimpananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SimpananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SimpananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SimpananMaxAggregateInputType
  }

  export type GetSimpananAggregateType<T extends SimpananAggregateArgs> = {
        [P in keyof T & keyof AggregateSimpanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimpanan[P]>
      : GetScalarType<T[P], AggregateSimpanan[P]>
  }




  export type SimpananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimpananWhereInput
    orderBy?: SimpananOrderByWithAggregationInput | SimpananOrderByWithAggregationInput[]
    by: SimpananScalarFieldEnum[] | SimpananScalarFieldEnum
    having?: SimpananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SimpananCountAggregateInputType | true
    _avg?: SimpananAvgAggregateInputType
    _sum?: SimpananSumAggregateInputType
    _min?: SimpananMinAggregateInputType
    _max?: SimpananMaxAggregateInputType
  }

  export type SimpananGroupByOutputType = {
    anggotaId: string
    simpananPokok: Decimal
    simpananWajib: Decimal
    simpananSukarela: Decimal
    tabunganHariRaya: Decimal
    updatedAt: Date
    createdAt: Date
    lastUpdatedBy: string | null
    _count: SimpananCountAggregateOutputType | null
    _avg: SimpananAvgAggregateOutputType | null
    _sum: SimpananSumAggregateOutputType | null
    _min: SimpananMinAggregateOutputType | null
    _max: SimpananMaxAggregateOutputType | null
  }

  type GetSimpananGroupByPayload<T extends SimpananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SimpananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SimpananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimpananGroupByOutputType[P]>
            : GetScalarType<T[P], SimpananGroupByOutputType[P]>
        }
      >
    >


  export type SimpananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anggotaId?: boolean
    simpananPokok?: boolean
    simpananWajib?: boolean
    simpananSukarela?: boolean
    tabunganHariRaya?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    lastUpdatedBy?: boolean
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    updatedBy?: boolean | Simpanan$updatedByArgs<ExtArgs>
    simpananTransactions?: boolean | Simpanan$simpananTransactionsArgs<ExtArgs>
    _count?: boolean | SimpananCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simpanan"]>

  export type SimpananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anggotaId?: boolean
    simpananPokok?: boolean
    simpananWajib?: boolean
    simpananSukarela?: boolean
    tabunganHariRaya?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    lastUpdatedBy?: boolean
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    updatedBy?: boolean | Simpanan$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["simpanan"]>

  export type SimpananSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anggotaId?: boolean
    simpananPokok?: boolean
    simpananWajib?: boolean
    simpananSukarela?: boolean
    tabunganHariRaya?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    lastUpdatedBy?: boolean
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    updatedBy?: boolean | Simpanan$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["simpanan"]>

  export type SimpananSelectScalar = {
    anggotaId?: boolean
    simpananPokok?: boolean
    simpananWajib?: boolean
    simpananSukarela?: boolean
    tabunganHariRaya?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    lastUpdatedBy?: boolean
  }

  export type SimpananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"anggotaId" | "simpananPokok" | "simpananWajib" | "simpananSukarela" | "tabunganHariRaya" | "updatedAt" | "createdAt" | "lastUpdatedBy", ExtArgs["result"]["simpanan"]>
  export type SimpananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    updatedBy?: boolean | Simpanan$updatedByArgs<ExtArgs>
    simpananTransactions?: boolean | Simpanan$simpananTransactionsArgs<ExtArgs>
    _count?: boolean | SimpananCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SimpananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    updatedBy?: boolean | Simpanan$updatedByArgs<ExtArgs>
  }
  export type SimpananIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    updatedBy?: boolean | Simpanan$updatedByArgs<ExtArgs>
  }

  export type $SimpananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Simpanan"
    objects: {
      anggota: Prisma.$AnggotaPayload<ExtArgs>
      updatedBy: Prisma.$AnggotaPayload<ExtArgs> | null
      simpananTransactions: Prisma.$SimpananTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      anggotaId: string
      simpananPokok: Prisma.Decimal
      simpananWajib: Prisma.Decimal
      simpananSukarela: Prisma.Decimal
      tabunganHariRaya: Prisma.Decimal
      updatedAt: Date
      createdAt: Date
      lastUpdatedBy: string | null
    }, ExtArgs["result"]["simpanan"]>
    composites: {}
  }

  type SimpananGetPayload<S extends boolean | null | undefined | SimpananDefaultArgs> = $Result.GetResult<Prisma.$SimpananPayload, S>

  type SimpananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimpananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimpananCountAggregateInputType | true
    }

  export interface SimpananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Simpanan'], meta: { name: 'Simpanan' } }
    /**
     * Find zero or one Simpanan that matches the filter.
     * @param {SimpananFindUniqueArgs} args - Arguments to find a Simpanan
     * @example
     * // Get one Simpanan
     * const simpanan = await prisma.simpanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimpananFindUniqueArgs>(args: SelectSubset<T, SimpananFindUniqueArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Simpanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimpananFindUniqueOrThrowArgs} args - Arguments to find a Simpanan
     * @example
     * // Get one Simpanan
     * const simpanan = await prisma.simpanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimpananFindUniqueOrThrowArgs>(args: SelectSubset<T, SimpananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simpanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananFindFirstArgs} args - Arguments to find a Simpanan
     * @example
     * // Get one Simpanan
     * const simpanan = await prisma.simpanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimpananFindFirstArgs>(args?: SelectSubset<T, SimpananFindFirstArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simpanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananFindFirstOrThrowArgs} args - Arguments to find a Simpanan
     * @example
     * // Get one Simpanan
     * const simpanan = await prisma.simpanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimpananFindFirstOrThrowArgs>(args?: SelectSubset<T, SimpananFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Simpanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Simpanans
     * const simpanans = await prisma.simpanan.findMany()
     * 
     * // Get first 10 Simpanans
     * const simpanans = await prisma.simpanan.findMany({ take: 10 })
     * 
     * // Only select the `anggotaId`
     * const simpananWithAnggotaIdOnly = await prisma.simpanan.findMany({ select: { anggotaId: true } })
     * 
     */
    findMany<T extends SimpananFindManyArgs>(args?: SelectSubset<T, SimpananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Simpanan.
     * @param {SimpananCreateArgs} args - Arguments to create a Simpanan.
     * @example
     * // Create one Simpanan
     * const Simpanan = await prisma.simpanan.create({
     *   data: {
     *     // ... data to create a Simpanan
     *   }
     * })
     * 
     */
    create<T extends SimpananCreateArgs>(args: SelectSubset<T, SimpananCreateArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Simpanans.
     * @param {SimpananCreateManyArgs} args - Arguments to create many Simpanans.
     * @example
     * // Create many Simpanans
     * const simpanan = await prisma.simpanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SimpananCreateManyArgs>(args?: SelectSubset<T, SimpananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Simpanans and returns the data saved in the database.
     * @param {SimpananCreateManyAndReturnArgs} args - Arguments to create many Simpanans.
     * @example
     * // Create many Simpanans
     * const simpanan = await prisma.simpanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Simpanans and only return the `anggotaId`
     * const simpananWithAnggotaIdOnly = await prisma.simpanan.createManyAndReturn({
     *   select: { anggotaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SimpananCreateManyAndReturnArgs>(args?: SelectSubset<T, SimpananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Simpanan.
     * @param {SimpananDeleteArgs} args - Arguments to delete one Simpanan.
     * @example
     * // Delete one Simpanan
     * const Simpanan = await prisma.simpanan.delete({
     *   where: {
     *     // ... filter to delete one Simpanan
     *   }
     * })
     * 
     */
    delete<T extends SimpananDeleteArgs>(args: SelectSubset<T, SimpananDeleteArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Simpanan.
     * @param {SimpananUpdateArgs} args - Arguments to update one Simpanan.
     * @example
     * // Update one Simpanan
     * const simpanan = await prisma.simpanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SimpananUpdateArgs>(args: SelectSubset<T, SimpananUpdateArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Simpanans.
     * @param {SimpananDeleteManyArgs} args - Arguments to filter Simpanans to delete.
     * @example
     * // Delete a few Simpanans
     * const { count } = await prisma.simpanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SimpananDeleteManyArgs>(args?: SelectSubset<T, SimpananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simpanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Simpanans
     * const simpanan = await prisma.simpanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SimpananUpdateManyArgs>(args: SelectSubset<T, SimpananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simpanans and returns the data updated in the database.
     * @param {SimpananUpdateManyAndReturnArgs} args - Arguments to update many Simpanans.
     * @example
     * // Update many Simpanans
     * const simpanan = await prisma.simpanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Simpanans and only return the `anggotaId`
     * const simpananWithAnggotaIdOnly = await prisma.simpanan.updateManyAndReturn({
     *   select: { anggotaId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SimpananUpdateManyAndReturnArgs>(args: SelectSubset<T, SimpananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Simpanan.
     * @param {SimpananUpsertArgs} args - Arguments to update or create a Simpanan.
     * @example
     * // Update or create a Simpanan
     * const simpanan = await prisma.simpanan.upsert({
     *   create: {
     *     // ... data to create a Simpanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Simpanan we want to update
     *   }
     * })
     */
    upsert<T extends SimpananUpsertArgs>(args: SelectSubset<T, SimpananUpsertArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Simpanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananCountArgs} args - Arguments to filter Simpanans to count.
     * @example
     * // Count the number of Simpanans
     * const count = await prisma.simpanan.count({
     *   where: {
     *     // ... the filter for the Simpanans we want to count
     *   }
     * })
    **/
    count<T extends SimpananCountArgs>(
      args?: Subset<T, SimpananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimpananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Simpanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SimpananAggregateArgs>(args: Subset<T, SimpananAggregateArgs>): Prisma.PrismaPromise<GetSimpananAggregateType<T>>

    /**
     * Group by Simpanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SimpananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimpananGroupByArgs['orderBy'] }
        : { orderBy?: SimpananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SimpananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimpananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Simpanan model
   */
  readonly fields: SimpananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Simpanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimpananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anggota<T extends AnggotaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnggotaDefaultArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends Simpanan$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Simpanan$updatedByArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    simpananTransactions<T extends Simpanan$simpananTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Simpanan$simpananTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Simpanan model
   */
  interface SimpananFieldRefs {
    readonly anggotaId: FieldRef<"Simpanan", 'String'>
    readonly simpananPokok: FieldRef<"Simpanan", 'Decimal'>
    readonly simpananWajib: FieldRef<"Simpanan", 'Decimal'>
    readonly simpananSukarela: FieldRef<"Simpanan", 'Decimal'>
    readonly tabunganHariRaya: FieldRef<"Simpanan", 'Decimal'>
    readonly updatedAt: FieldRef<"Simpanan", 'DateTime'>
    readonly createdAt: FieldRef<"Simpanan", 'DateTime'>
    readonly lastUpdatedBy: FieldRef<"Simpanan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Simpanan findUnique
   */
  export type SimpananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    /**
     * Filter, which Simpanan to fetch.
     */
    where: SimpananWhereUniqueInput
  }

  /**
   * Simpanan findUniqueOrThrow
   */
  export type SimpananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    /**
     * Filter, which Simpanan to fetch.
     */
    where: SimpananWhereUniqueInput
  }

  /**
   * Simpanan findFirst
   */
  export type SimpananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    /**
     * Filter, which Simpanan to fetch.
     */
    where?: SimpananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simpanans to fetch.
     */
    orderBy?: SimpananOrderByWithRelationInput | SimpananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simpanans.
     */
    cursor?: SimpananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simpanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simpanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simpanans.
     */
    distinct?: SimpananScalarFieldEnum | SimpananScalarFieldEnum[]
  }

  /**
   * Simpanan findFirstOrThrow
   */
  export type SimpananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    /**
     * Filter, which Simpanan to fetch.
     */
    where?: SimpananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simpanans to fetch.
     */
    orderBy?: SimpananOrderByWithRelationInput | SimpananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simpanans.
     */
    cursor?: SimpananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simpanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simpanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simpanans.
     */
    distinct?: SimpananScalarFieldEnum | SimpananScalarFieldEnum[]
  }

  /**
   * Simpanan findMany
   */
  export type SimpananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    /**
     * Filter, which Simpanans to fetch.
     */
    where?: SimpananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simpanans to fetch.
     */
    orderBy?: SimpananOrderByWithRelationInput | SimpananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Simpanans.
     */
    cursor?: SimpananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simpanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simpanans.
     */
    skip?: number
    distinct?: SimpananScalarFieldEnum | SimpananScalarFieldEnum[]
  }

  /**
   * Simpanan create
   */
  export type SimpananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    /**
     * The data needed to create a Simpanan.
     */
    data: XOR<SimpananCreateInput, SimpananUncheckedCreateInput>
  }

  /**
   * Simpanan createMany
   */
  export type SimpananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Simpanans.
     */
    data: SimpananCreateManyInput | SimpananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Simpanan createManyAndReturn
   */
  export type SimpananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * The data used to create many Simpanans.
     */
    data: SimpananCreateManyInput | SimpananCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Simpanan update
   */
  export type SimpananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    /**
     * The data needed to update a Simpanan.
     */
    data: XOR<SimpananUpdateInput, SimpananUncheckedUpdateInput>
    /**
     * Choose, which Simpanan to update.
     */
    where: SimpananWhereUniqueInput
  }

  /**
   * Simpanan updateMany
   */
  export type SimpananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Simpanans.
     */
    data: XOR<SimpananUpdateManyMutationInput, SimpananUncheckedUpdateManyInput>
    /**
     * Filter which Simpanans to update
     */
    where?: SimpananWhereInput
    /**
     * Limit how many Simpanans to update.
     */
    limit?: number
  }

  /**
   * Simpanan updateManyAndReturn
   */
  export type SimpananUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * The data used to update Simpanans.
     */
    data: XOR<SimpananUpdateManyMutationInput, SimpananUncheckedUpdateManyInput>
    /**
     * Filter which Simpanans to update
     */
    where?: SimpananWhereInput
    /**
     * Limit how many Simpanans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Simpanan upsert
   */
  export type SimpananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    /**
     * The filter to search for the Simpanan to update in case it exists.
     */
    where: SimpananWhereUniqueInput
    /**
     * In case the Simpanan found by the `where` argument doesn't exist, create a new Simpanan with this data.
     */
    create: XOR<SimpananCreateInput, SimpananUncheckedCreateInput>
    /**
     * In case the Simpanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimpananUpdateInput, SimpananUncheckedUpdateInput>
  }

  /**
   * Simpanan delete
   */
  export type SimpananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
    /**
     * Filter which Simpanan to delete.
     */
    where: SimpananWhereUniqueInput
  }

  /**
   * Simpanan deleteMany
   */
  export type SimpananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simpanans to delete
     */
    where?: SimpananWhereInput
    /**
     * Limit how many Simpanans to delete.
     */
    limit?: number
  }

  /**
   * Simpanan.updatedBy
   */
  export type Simpanan$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    where?: AnggotaWhereInput
  }

  /**
   * Simpanan.simpananTransactions
   */
  export type Simpanan$simpananTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    where?: SimpananTransactionWhereInput
    orderBy?: SimpananTransactionOrderByWithRelationInput | SimpananTransactionOrderByWithRelationInput[]
    cursor?: SimpananTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimpananTransactionScalarFieldEnum | SimpananTransactionScalarFieldEnum[]
  }

  /**
   * Simpanan without action
   */
  export type SimpananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simpanan
     */
    select?: SimpananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simpanan
     */
    omit?: SimpananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananInclude<ExtArgs> | null
  }


  /**
   * Model TokoKategori
   */

  export type AggregateTokoKategori = {
    _count: TokoKategoriCountAggregateOutputType | null
    _min: TokoKategoriMinAggregateOutputType | null
    _max: TokoKategoriMaxAggregateOutputType | null
  }

  export type TokoKategoriMinAggregateOutputType = {
    id: string | null
    namaKategori: string | null
  }

  export type TokoKategoriMaxAggregateOutputType = {
    id: string | null
    namaKategori: string | null
  }

  export type TokoKategoriCountAggregateOutputType = {
    id: number
    namaKategori: number
    _all: number
  }


  export type TokoKategoriMinAggregateInputType = {
    id?: true
    namaKategori?: true
  }

  export type TokoKategoriMaxAggregateInputType = {
    id?: true
    namaKategori?: true
  }

  export type TokoKategoriCountAggregateInputType = {
    id?: true
    namaKategori?: true
    _all?: true
  }

  export type TokoKategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokoKategori to aggregate.
     */
    where?: TokoKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokoKategoris to fetch.
     */
    orderBy?: TokoKategoriOrderByWithRelationInput | TokoKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokoKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokoKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokoKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokoKategoris
    **/
    _count?: true | TokoKategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokoKategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokoKategoriMaxAggregateInputType
  }

  export type GetTokoKategoriAggregateType<T extends TokoKategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateTokoKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokoKategori[P]>
      : GetScalarType<T[P], AggregateTokoKategori[P]>
  }




  export type TokoKategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokoKategoriWhereInput
    orderBy?: TokoKategoriOrderByWithAggregationInput | TokoKategoriOrderByWithAggregationInput[]
    by: TokoKategoriScalarFieldEnum[] | TokoKategoriScalarFieldEnum
    having?: TokoKategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokoKategoriCountAggregateInputType | true
    _min?: TokoKategoriMinAggregateInputType
    _max?: TokoKategoriMaxAggregateInputType
  }

  export type TokoKategoriGroupByOutputType = {
    id: string
    namaKategori: string
    _count: TokoKategoriCountAggregateOutputType | null
    _min: TokoKategoriMinAggregateOutputType | null
    _max: TokoKategoriMaxAggregateOutputType | null
  }

  type GetTokoKategoriGroupByPayload<T extends TokoKategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokoKategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokoKategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokoKategoriGroupByOutputType[P]>
            : GetScalarType<T[P], TokoKategoriGroupByOutputType[P]>
        }
      >
    >


  export type TokoKategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaKategori?: boolean
    produk?: boolean | TokoKategori$produkArgs<ExtArgs>
    _count?: boolean | TokoKategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokoKategori"]>

  export type TokoKategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaKategori?: boolean
  }, ExtArgs["result"]["tokoKategori"]>

  export type TokoKategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaKategori?: boolean
  }, ExtArgs["result"]["tokoKategori"]>

  export type TokoKategoriSelectScalar = {
    id?: boolean
    namaKategori?: boolean
  }

  export type TokoKategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaKategori", ExtArgs["result"]["tokoKategori"]>
  export type TokoKategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | TokoKategori$produkArgs<ExtArgs>
    _count?: boolean | TokoKategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokoKategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TokoKategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TokoKategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokoKategori"
    objects: {
      produk: Prisma.$TokoProdukPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaKategori: string
    }, ExtArgs["result"]["tokoKategori"]>
    composites: {}
  }

  type TokoKategoriGetPayload<S extends boolean | null | undefined | TokoKategoriDefaultArgs> = $Result.GetResult<Prisma.$TokoKategoriPayload, S>

  type TokoKategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokoKategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokoKategoriCountAggregateInputType | true
    }

  export interface TokoKategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokoKategori'], meta: { name: 'TokoKategori' } }
    /**
     * Find zero or one TokoKategori that matches the filter.
     * @param {TokoKategoriFindUniqueArgs} args - Arguments to find a TokoKategori
     * @example
     * // Get one TokoKategori
     * const tokoKategori = await prisma.tokoKategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokoKategoriFindUniqueArgs>(args: SelectSubset<T, TokoKategoriFindUniqueArgs<ExtArgs>>): Prisma__TokoKategoriClient<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokoKategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokoKategoriFindUniqueOrThrowArgs} args - Arguments to find a TokoKategori
     * @example
     * // Get one TokoKategori
     * const tokoKategori = await prisma.tokoKategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokoKategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, TokoKategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokoKategoriClient<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokoKategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoKategoriFindFirstArgs} args - Arguments to find a TokoKategori
     * @example
     * // Get one TokoKategori
     * const tokoKategori = await prisma.tokoKategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokoKategoriFindFirstArgs>(args?: SelectSubset<T, TokoKategoriFindFirstArgs<ExtArgs>>): Prisma__TokoKategoriClient<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokoKategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoKategoriFindFirstOrThrowArgs} args - Arguments to find a TokoKategori
     * @example
     * // Get one TokoKategori
     * const tokoKategori = await prisma.tokoKategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokoKategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, TokoKategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokoKategoriClient<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokoKategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoKategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokoKategoris
     * const tokoKategoris = await prisma.tokoKategori.findMany()
     * 
     * // Get first 10 TokoKategoris
     * const tokoKategoris = await prisma.tokoKategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokoKategoriWithIdOnly = await prisma.tokoKategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokoKategoriFindManyArgs>(args?: SelectSubset<T, TokoKategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokoKategori.
     * @param {TokoKategoriCreateArgs} args - Arguments to create a TokoKategori.
     * @example
     * // Create one TokoKategori
     * const TokoKategori = await prisma.tokoKategori.create({
     *   data: {
     *     // ... data to create a TokoKategori
     *   }
     * })
     * 
     */
    create<T extends TokoKategoriCreateArgs>(args: SelectSubset<T, TokoKategoriCreateArgs<ExtArgs>>): Prisma__TokoKategoriClient<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokoKategoris.
     * @param {TokoKategoriCreateManyArgs} args - Arguments to create many TokoKategoris.
     * @example
     * // Create many TokoKategoris
     * const tokoKategori = await prisma.tokoKategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokoKategoriCreateManyArgs>(args?: SelectSubset<T, TokoKategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokoKategoris and returns the data saved in the database.
     * @param {TokoKategoriCreateManyAndReturnArgs} args - Arguments to create many TokoKategoris.
     * @example
     * // Create many TokoKategoris
     * const tokoKategori = await prisma.tokoKategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokoKategoris and only return the `id`
     * const tokoKategoriWithIdOnly = await prisma.tokoKategori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokoKategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, TokoKategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokoKategori.
     * @param {TokoKategoriDeleteArgs} args - Arguments to delete one TokoKategori.
     * @example
     * // Delete one TokoKategori
     * const TokoKategori = await prisma.tokoKategori.delete({
     *   where: {
     *     // ... filter to delete one TokoKategori
     *   }
     * })
     * 
     */
    delete<T extends TokoKategoriDeleteArgs>(args: SelectSubset<T, TokoKategoriDeleteArgs<ExtArgs>>): Prisma__TokoKategoriClient<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokoKategori.
     * @param {TokoKategoriUpdateArgs} args - Arguments to update one TokoKategori.
     * @example
     * // Update one TokoKategori
     * const tokoKategori = await prisma.tokoKategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokoKategoriUpdateArgs>(args: SelectSubset<T, TokoKategoriUpdateArgs<ExtArgs>>): Prisma__TokoKategoriClient<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokoKategoris.
     * @param {TokoKategoriDeleteManyArgs} args - Arguments to filter TokoKategoris to delete.
     * @example
     * // Delete a few TokoKategoris
     * const { count } = await prisma.tokoKategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokoKategoriDeleteManyArgs>(args?: SelectSubset<T, TokoKategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokoKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoKategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokoKategoris
     * const tokoKategori = await prisma.tokoKategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokoKategoriUpdateManyArgs>(args: SelectSubset<T, TokoKategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokoKategoris and returns the data updated in the database.
     * @param {TokoKategoriUpdateManyAndReturnArgs} args - Arguments to update many TokoKategoris.
     * @example
     * // Update many TokoKategoris
     * const tokoKategori = await prisma.tokoKategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokoKategoris and only return the `id`
     * const tokoKategoriWithIdOnly = await prisma.tokoKategori.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokoKategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, TokoKategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokoKategori.
     * @param {TokoKategoriUpsertArgs} args - Arguments to update or create a TokoKategori.
     * @example
     * // Update or create a TokoKategori
     * const tokoKategori = await prisma.tokoKategori.upsert({
     *   create: {
     *     // ... data to create a TokoKategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokoKategori we want to update
     *   }
     * })
     */
    upsert<T extends TokoKategoriUpsertArgs>(args: SelectSubset<T, TokoKategoriUpsertArgs<ExtArgs>>): Prisma__TokoKategoriClient<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokoKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoKategoriCountArgs} args - Arguments to filter TokoKategoris to count.
     * @example
     * // Count the number of TokoKategoris
     * const count = await prisma.tokoKategori.count({
     *   where: {
     *     // ... the filter for the TokoKategoris we want to count
     *   }
     * })
    **/
    count<T extends TokoKategoriCountArgs>(
      args?: Subset<T, TokoKategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokoKategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokoKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoKategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokoKategoriAggregateArgs>(args: Subset<T, TokoKategoriAggregateArgs>): Prisma.PrismaPromise<GetTokoKategoriAggregateType<T>>

    /**
     * Group by TokoKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoKategoriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokoKategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokoKategoriGroupByArgs['orderBy'] }
        : { orderBy?: TokoKategoriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokoKategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokoKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokoKategori model
   */
  readonly fields: TokoKategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokoKategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokoKategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends TokoKategori$produkArgs<ExtArgs> = {}>(args?: Subset<T, TokoKategori$produkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokoKategori model
   */
  interface TokoKategoriFieldRefs {
    readonly id: FieldRef<"TokoKategori", 'String'>
    readonly namaKategori: FieldRef<"TokoKategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TokoKategori findUnique
   */
  export type TokoKategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    /**
     * Filter, which TokoKategori to fetch.
     */
    where: TokoKategoriWhereUniqueInput
  }

  /**
   * TokoKategori findUniqueOrThrow
   */
  export type TokoKategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    /**
     * Filter, which TokoKategori to fetch.
     */
    where: TokoKategoriWhereUniqueInput
  }

  /**
   * TokoKategori findFirst
   */
  export type TokoKategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    /**
     * Filter, which TokoKategori to fetch.
     */
    where?: TokoKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokoKategoris to fetch.
     */
    orderBy?: TokoKategoriOrderByWithRelationInput | TokoKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokoKategoris.
     */
    cursor?: TokoKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokoKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokoKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokoKategoris.
     */
    distinct?: TokoKategoriScalarFieldEnum | TokoKategoriScalarFieldEnum[]
  }

  /**
   * TokoKategori findFirstOrThrow
   */
  export type TokoKategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    /**
     * Filter, which TokoKategori to fetch.
     */
    where?: TokoKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokoKategoris to fetch.
     */
    orderBy?: TokoKategoriOrderByWithRelationInput | TokoKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokoKategoris.
     */
    cursor?: TokoKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokoKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokoKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokoKategoris.
     */
    distinct?: TokoKategoriScalarFieldEnum | TokoKategoriScalarFieldEnum[]
  }

  /**
   * TokoKategori findMany
   */
  export type TokoKategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    /**
     * Filter, which TokoKategoris to fetch.
     */
    where?: TokoKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokoKategoris to fetch.
     */
    orderBy?: TokoKategoriOrderByWithRelationInput | TokoKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokoKategoris.
     */
    cursor?: TokoKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokoKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokoKategoris.
     */
    skip?: number
    distinct?: TokoKategoriScalarFieldEnum | TokoKategoriScalarFieldEnum[]
  }

  /**
   * TokoKategori create
   */
  export type TokoKategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a TokoKategori.
     */
    data: XOR<TokoKategoriCreateInput, TokoKategoriUncheckedCreateInput>
  }

  /**
   * TokoKategori createMany
   */
  export type TokoKategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokoKategoris.
     */
    data: TokoKategoriCreateManyInput | TokoKategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokoKategori createManyAndReturn
   */
  export type TokoKategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * The data used to create many TokoKategoris.
     */
    data: TokoKategoriCreateManyInput | TokoKategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokoKategori update
   */
  export type TokoKategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a TokoKategori.
     */
    data: XOR<TokoKategoriUpdateInput, TokoKategoriUncheckedUpdateInput>
    /**
     * Choose, which TokoKategori to update.
     */
    where: TokoKategoriWhereUniqueInput
  }

  /**
   * TokoKategori updateMany
   */
  export type TokoKategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokoKategoris.
     */
    data: XOR<TokoKategoriUpdateManyMutationInput, TokoKategoriUncheckedUpdateManyInput>
    /**
     * Filter which TokoKategoris to update
     */
    where?: TokoKategoriWhereInput
    /**
     * Limit how many TokoKategoris to update.
     */
    limit?: number
  }

  /**
   * TokoKategori updateManyAndReturn
   */
  export type TokoKategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * The data used to update TokoKategoris.
     */
    data: XOR<TokoKategoriUpdateManyMutationInput, TokoKategoriUncheckedUpdateManyInput>
    /**
     * Filter which TokoKategoris to update
     */
    where?: TokoKategoriWhereInput
    /**
     * Limit how many TokoKategoris to update.
     */
    limit?: number
  }

  /**
   * TokoKategori upsert
   */
  export type TokoKategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the TokoKategori to update in case it exists.
     */
    where: TokoKategoriWhereUniqueInput
    /**
     * In case the TokoKategori found by the `where` argument doesn't exist, create a new TokoKategori with this data.
     */
    create: XOR<TokoKategoriCreateInput, TokoKategoriUncheckedCreateInput>
    /**
     * In case the TokoKategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokoKategoriUpdateInput, TokoKategoriUncheckedUpdateInput>
  }

  /**
   * TokoKategori delete
   */
  export type TokoKategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    /**
     * Filter which TokoKategori to delete.
     */
    where: TokoKategoriWhereUniqueInput
  }

  /**
   * TokoKategori deleteMany
   */
  export type TokoKategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokoKategoris to delete
     */
    where?: TokoKategoriWhereInput
    /**
     * Limit how many TokoKategoris to delete.
     */
    limit?: number
  }

  /**
   * TokoKategori.produk
   */
  export type TokoKategori$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    where?: TokoProdukWhereInput
    orderBy?: TokoProdukOrderByWithRelationInput | TokoProdukOrderByWithRelationInput[]
    cursor?: TokoProdukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokoProdukScalarFieldEnum | TokoProdukScalarFieldEnum[]
  }

  /**
   * TokoKategori without action
   */
  export type TokoKategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
  }


  /**
   * Model TokoProduk
   */

  export type AggregateTokoProduk = {
    _count: TokoProdukCountAggregateOutputType | null
    _avg: TokoProdukAvgAggregateOutputType | null
    _sum: TokoProdukSumAggregateOutputType | null
    _min: TokoProdukMinAggregateOutputType | null
    _max: TokoProdukMaxAggregateOutputType | null
  }

  export type TokoProdukAvgAggregateOutputType = {
    harga: Decimal | null
  }

  export type TokoProdukSumAggregateOutputType = {
    harga: Decimal | null
  }

  export type TokoProdukMinAggregateOutputType = {
    id: string | null
    namaProduk: string | null
    fotoProduk: string | null
    harga: Decimal | null
    kategoriId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deskripsi: string | null
  }

  export type TokoProdukMaxAggregateOutputType = {
    id: string | null
    namaProduk: string | null
    fotoProduk: string | null
    harga: Decimal | null
    kategoriId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deskripsi: string | null
  }

  export type TokoProdukCountAggregateOutputType = {
    id: number
    namaProduk: number
    fotoProduk: number
    harga: number
    kategoriId: number
    createdAt: number
    updatedAt: number
    deskripsi: number
    _all: number
  }


  export type TokoProdukAvgAggregateInputType = {
    harga?: true
  }

  export type TokoProdukSumAggregateInputType = {
    harga?: true
  }

  export type TokoProdukMinAggregateInputType = {
    id?: true
    namaProduk?: true
    fotoProduk?: true
    harga?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
    deskripsi?: true
  }

  export type TokoProdukMaxAggregateInputType = {
    id?: true
    namaProduk?: true
    fotoProduk?: true
    harga?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
    deskripsi?: true
  }

  export type TokoProdukCountAggregateInputType = {
    id?: true
    namaProduk?: true
    fotoProduk?: true
    harga?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
    deskripsi?: true
    _all?: true
  }

  export type TokoProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokoProduk to aggregate.
     */
    where?: TokoProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokoProduks to fetch.
     */
    orderBy?: TokoProdukOrderByWithRelationInput | TokoProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokoProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokoProduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokoProduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokoProduks
    **/
    _count?: true | TokoProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokoProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokoProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokoProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokoProdukMaxAggregateInputType
  }

  export type GetTokoProdukAggregateType<T extends TokoProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateTokoProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokoProduk[P]>
      : GetScalarType<T[P], AggregateTokoProduk[P]>
  }




  export type TokoProdukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokoProdukWhereInput
    orderBy?: TokoProdukOrderByWithAggregationInput | TokoProdukOrderByWithAggregationInput[]
    by: TokoProdukScalarFieldEnum[] | TokoProdukScalarFieldEnum
    having?: TokoProdukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokoProdukCountAggregateInputType | true
    _avg?: TokoProdukAvgAggregateInputType
    _sum?: TokoProdukSumAggregateInputType
    _min?: TokoProdukMinAggregateInputType
    _max?: TokoProdukMaxAggregateInputType
  }

  export type TokoProdukGroupByOutputType = {
    id: string
    namaProduk: string
    fotoProduk: string | null
    harga: Decimal
    kategoriId: string | null
    createdAt: Date
    updatedAt: Date
    deskripsi: string | null
    _count: TokoProdukCountAggregateOutputType | null
    _avg: TokoProdukAvgAggregateOutputType | null
    _sum: TokoProdukSumAggregateOutputType | null
    _min: TokoProdukMinAggregateOutputType | null
    _max: TokoProdukMaxAggregateOutputType | null
  }

  type GetTokoProdukGroupByPayload<T extends TokoProdukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokoProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokoProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokoProdukGroupByOutputType[P]>
            : GetScalarType<T[P], TokoProdukGroupByOutputType[P]>
        }
      >
    >


  export type TokoProdukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaProduk?: boolean
    fotoProduk?: boolean
    harga?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deskripsi?: boolean
    kategori?: boolean | TokoProduk$kategoriArgs<ExtArgs>
  }, ExtArgs["result"]["tokoProduk"]>

  export type TokoProdukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaProduk?: boolean
    fotoProduk?: boolean
    harga?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deskripsi?: boolean
    kategori?: boolean | TokoProduk$kategoriArgs<ExtArgs>
  }, ExtArgs["result"]["tokoProduk"]>

  export type TokoProdukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaProduk?: boolean
    fotoProduk?: boolean
    harga?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deskripsi?: boolean
    kategori?: boolean | TokoProduk$kategoriArgs<ExtArgs>
  }, ExtArgs["result"]["tokoProduk"]>

  export type TokoProdukSelectScalar = {
    id?: boolean
    namaProduk?: boolean
    fotoProduk?: boolean
    harga?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deskripsi?: boolean
  }

  export type TokoProdukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaProduk" | "fotoProduk" | "harga" | "kategoriId" | "createdAt" | "updatedAt" | "deskripsi", ExtArgs["result"]["tokoProduk"]>
  export type TokoProdukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | TokoProduk$kategoriArgs<ExtArgs>
  }
  export type TokoProdukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | TokoProduk$kategoriArgs<ExtArgs>
  }
  export type TokoProdukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | TokoProduk$kategoriArgs<ExtArgs>
  }

  export type $TokoProdukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokoProduk"
    objects: {
      kategori: Prisma.$TokoKategoriPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaProduk: string
      fotoProduk: string | null
      harga: Prisma.Decimal
      kategoriId: string | null
      createdAt: Date
      updatedAt: Date
      deskripsi: string | null
    }, ExtArgs["result"]["tokoProduk"]>
    composites: {}
  }

  type TokoProdukGetPayload<S extends boolean | null | undefined | TokoProdukDefaultArgs> = $Result.GetResult<Prisma.$TokoProdukPayload, S>

  type TokoProdukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokoProdukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokoProdukCountAggregateInputType | true
    }

  export interface TokoProdukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokoProduk'], meta: { name: 'TokoProduk' } }
    /**
     * Find zero or one TokoProduk that matches the filter.
     * @param {TokoProdukFindUniqueArgs} args - Arguments to find a TokoProduk
     * @example
     * // Get one TokoProduk
     * const tokoProduk = await prisma.tokoProduk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokoProdukFindUniqueArgs>(args: SelectSubset<T, TokoProdukFindUniqueArgs<ExtArgs>>): Prisma__TokoProdukClient<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokoProduk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokoProdukFindUniqueOrThrowArgs} args - Arguments to find a TokoProduk
     * @example
     * // Get one TokoProduk
     * const tokoProduk = await prisma.tokoProduk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokoProdukFindUniqueOrThrowArgs>(args: SelectSubset<T, TokoProdukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokoProdukClient<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokoProduk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoProdukFindFirstArgs} args - Arguments to find a TokoProduk
     * @example
     * // Get one TokoProduk
     * const tokoProduk = await prisma.tokoProduk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokoProdukFindFirstArgs>(args?: SelectSubset<T, TokoProdukFindFirstArgs<ExtArgs>>): Prisma__TokoProdukClient<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokoProduk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoProdukFindFirstOrThrowArgs} args - Arguments to find a TokoProduk
     * @example
     * // Get one TokoProduk
     * const tokoProduk = await prisma.tokoProduk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokoProdukFindFirstOrThrowArgs>(args?: SelectSubset<T, TokoProdukFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokoProdukClient<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokoProduks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoProdukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokoProduks
     * const tokoProduks = await prisma.tokoProduk.findMany()
     * 
     * // Get first 10 TokoProduks
     * const tokoProduks = await prisma.tokoProduk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokoProdukWithIdOnly = await prisma.tokoProduk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokoProdukFindManyArgs>(args?: SelectSubset<T, TokoProdukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokoProduk.
     * @param {TokoProdukCreateArgs} args - Arguments to create a TokoProduk.
     * @example
     * // Create one TokoProduk
     * const TokoProduk = await prisma.tokoProduk.create({
     *   data: {
     *     // ... data to create a TokoProduk
     *   }
     * })
     * 
     */
    create<T extends TokoProdukCreateArgs>(args: SelectSubset<T, TokoProdukCreateArgs<ExtArgs>>): Prisma__TokoProdukClient<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokoProduks.
     * @param {TokoProdukCreateManyArgs} args - Arguments to create many TokoProduks.
     * @example
     * // Create many TokoProduks
     * const tokoProduk = await prisma.tokoProduk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokoProdukCreateManyArgs>(args?: SelectSubset<T, TokoProdukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokoProduks and returns the data saved in the database.
     * @param {TokoProdukCreateManyAndReturnArgs} args - Arguments to create many TokoProduks.
     * @example
     * // Create many TokoProduks
     * const tokoProduk = await prisma.tokoProduk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokoProduks and only return the `id`
     * const tokoProdukWithIdOnly = await prisma.tokoProduk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokoProdukCreateManyAndReturnArgs>(args?: SelectSubset<T, TokoProdukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokoProduk.
     * @param {TokoProdukDeleteArgs} args - Arguments to delete one TokoProduk.
     * @example
     * // Delete one TokoProduk
     * const TokoProduk = await prisma.tokoProduk.delete({
     *   where: {
     *     // ... filter to delete one TokoProduk
     *   }
     * })
     * 
     */
    delete<T extends TokoProdukDeleteArgs>(args: SelectSubset<T, TokoProdukDeleteArgs<ExtArgs>>): Prisma__TokoProdukClient<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokoProduk.
     * @param {TokoProdukUpdateArgs} args - Arguments to update one TokoProduk.
     * @example
     * // Update one TokoProduk
     * const tokoProduk = await prisma.tokoProduk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokoProdukUpdateArgs>(args: SelectSubset<T, TokoProdukUpdateArgs<ExtArgs>>): Prisma__TokoProdukClient<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokoProduks.
     * @param {TokoProdukDeleteManyArgs} args - Arguments to filter TokoProduks to delete.
     * @example
     * // Delete a few TokoProduks
     * const { count } = await prisma.tokoProduk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokoProdukDeleteManyArgs>(args?: SelectSubset<T, TokoProdukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokoProduks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoProdukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokoProduks
     * const tokoProduk = await prisma.tokoProduk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokoProdukUpdateManyArgs>(args: SelectSubset<T, TokoProdukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokoProduks and returns the data updated in the database.
     * @param {TokoProdukUpdateManyAndReturnArgs} args - Arguments to update many TokoProduks.
     * @example
     * // Update many TokoProduks
     * const tokoProduk = await prisma.tokoProduk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokoProduks and only return the `id`
     * const tokoProdukWithIdOnly = await prisma.tokoProduk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokoProdukUpdateManyAndReturnArgs>(args: SelectSubset<T, TokoProdukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokoProduk.
     * @param {TokoProdukUpsertArgs} args - Arguments to update or create a TokoProduk.
     * @example
     * // Update or create a TokoProduk
     * const tokoProduk = await prisma.tokoProduk.upsert({
     *   create: {
     *     // ... data to create a TokoProduk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokoProduk we want to update
     *   }
     * })
     */
    upsert<T extends TokoProdukUpsertArgs>(args: SelectSubset<T, TokoProdukUpsertArgs<ExtArgs>>): Prisma__TokoProdukClient<$Result.GetResult<Prisma.$TokoProdukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokoProduks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoProdukCountArgs} args - Arguments to filter TokoProduks to count.
     * @example
     * // Count the number of TokoProduks
     * const count = await prisma.tokoProduk.count({
     *   where: {
     *     // ... the filter for the TokoProduks we want to count
     *   }
     * })
    **/
    count<T extends TokoProdukCountArgs>(
      args?: Subset<T, TokoProdukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokoProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokoProduk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokoProdukAggregateArgs>(args: Subset<T, TokoProdukAggregateArgs>): Prisma.PrismaPromise<GetTokoProdukAggregateType<T>>

    /**
     * Group by TokoProduk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokoProdukGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokoProdukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokoProdukGroupByArgs['orderBy'] }
        : { orderBy?: TokoProdukGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokoProdukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokoProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokoProduk model
   */
  readonly fields: TokoProdukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokoProduk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokoProdukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends TokoProduk$kategoriArgs<ExtArgs> = {}>(args?: Subset<T, TokoProduk$kategoriArgs<ExtArgs>>): Prisma__TokoKategoriClient<$Result.GetResult<Prisma.$TokoKategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokoProduk model
   */
  interface TokoProdukFieldRefs {
    readonly id: FieldRef<"TokoProduk", 'String'>
    readonly namaProduk: FieldRef<"TokoProduk", 'String'>
    readonly fotoProduk: FieldRef<"TokoProduk", 'String'>
    readonly harga: FieldRef<"TokoProduk", 'Decimal'>
    readonly kategoriId: FieldRef<"TokoProduk", 'String'>
    readonly createdAt: FieldRef<"TokoProduk", 'DateTime'>
    readonly updatedAt: FieldRef<"TokoProduk", 'DateTime'>
    readonly deskripsi: FieldRef<"TokoProduk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TokoProduk findUnique
   */
  export type TokoProdukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    /**
     * Filter, which TokoProduk to fetch.
     */
    where: TokoProdukWhereUniqueInput
  }

  /**
   * TokoProduk findUniqueOrThrow
   */
  export type TokoProdukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    /**
     * Filter, which TokoProduk to fetch.
     */
    where: TokoProdukWhereUniqueInput
  }

  /**
   * TokoProduk findFirst
   */
  export type TokoProdukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    /**
     * Filter, which TokoProduk to fetch.
     */
    where?: TokoProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokoProduks to fetch.
     */
    orderBy?: TokoProdukOrderByWithRelationInput | TokoProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokoProduks.
     */
    cursor?: TokoProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokoProduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokoProduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokoProduks.
     */
    distinct?: TokoProdukScalarFieldEnum | TokoProdukScalarFieldEnum[]
  }

  /**
   * TokoProduk findFirstOrThrow
   */
  export type TokoProdukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    /**
     * Filter, which TokoProduk to fetch.
     */
    where?: TokoProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokoProduks to fetch.
     */
    orderBy?: TokoProdukOrderByWithRelationInput | TokoProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokoProduks.
     */
    cursor?: TokoProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokoProduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokoProduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokoProduks.
     */
    distinct?: TokoProdukScalarFieldEnum | TokoProdukScalarFieldEnum[]
  }

  /**
   * TokoProduk findMany
   */
  export type TokoProdukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    /**
     * Filter, which TokoProduks to fetch.
     */
    where?: TokoProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokoProduks to fetch.
     */
    orderBy?: TokoProdukOrderByWithRelationInput | TokoProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokoProduks.
     */
    cursor?: TokoProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokoProduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokoProduks.
     */
    skip?: number
    distinct?: TokoProdukScalarFieldEnum | TokoProdukScalarFieldEnum[]
  }

  /**
   * TokoProduk create
   */
  export type TokoProdukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    /**
     * The data needed to create a TokoProduk.
     */
    data: XOR<TokoProdukCreateInput, TokoProdukUncheckedCreateInput>
  }

  /**
   * TokoProduk createMany
   */
  export type TokoProdukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokoProduks.
     */
    data: TokoProdukCreateManyInput | TokoProdukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokoProduk createManyAndReturn
   */
  export type TokoProdukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * The data used to create many TokoProduks.
     */
    data: TokoProdukCreateManyInput | TokoProdukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokoProduk update
   */
  export type TokoProdukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    /**
     * The data needed to update a TokoProduk.
     */
    data: XOR<TokoProdukUpdateInput, TokoProdukUncheckedUpdateInput>
    /**
     * Choose, which TokoProduk to update.
     */
    where: TokoProdukWhereUniqueInput
  }

  /**
   * TokoProduk updateMany
   */
  export type TokoProdukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokoProduks.
     */
    data: XOR<TokoProdukUpdateManyMutationInput, TokoProdukUncheckedUpdateManyInput>
    /**
     * Filter which TokoProduks to update
     */
    where?: TokoProdukWhereInput
    /**
     * Limit how many TokoProduks to update.
     */
    limit?: number
  }

  /**
   * TokoProduk updateManyAndReturn
   */
  export type TokoProdukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * The data used to update TokoProduks.
     */
    data: XOR<TokoProdukUpdateManyMutationInput, TokoProdukUncheckedUpdateManyInput>
    /**
     * Filter which TokoProduks to update
     */
    where?: TokoProdukWhereInput
    /**
     * Limit how many TokoProduks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokoProduk upsert
   */
  export type TokoProdukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    /**
     * The filter to search for the TokoProduk to update in case it exists.
     */
    where: TokoProdukWhereUniqueInput
    /**
     * In case the TokoProduk found by the `where` argument doesn't exist, create a new TokoProduk with this data.
     */
    create: XOR<TokoProdukCreateInput, TokoProdukUncheckedCreateInput>
    /**
     * In case the TokoProduk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokoProdukUpdateInput, TokoProdukUncheckedUpdateInput>
  }

  /**
   * TokoProduk delete
   */
  export type TokoProdukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
    /**
     * Filter which TokoProduk to delete.
     */
    where: TokoProdukWhereUniqueInput
  }

  /**
   * TokoProduk deleteMany
   */
  export type TokoProdukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokoProduks to delete
     */
    where?: TokoProdukWhereInput
    /**
     * Limit how many TokoProduks to delete.
     */
    limit?: number
  }

  /**
   * TokoProduk.kategori
   */
  export type TokoProduk$kategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoKategori
     */
    select?: TokoKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoKategori
     */
    omit?: TokoKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoKategoriInclude<ExtArgs> | null
    where?: TokoKategoriWhereInput
  }

  /**
   * TokoProduk without action
   */
  export type TokoProdukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokoProduk
     */
    select?: TokoProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokoProduk
     */
    omit?: TokoProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokoProdukInclude<ExtArgs> | null
  }


  /**
   * Model Piutang
   */

  export type AggregatePiutang = {
    _count: PiutangCountAggregateOutputType | null
    _avg: PiutangAvgAggregateOutputType | null
    _sum: PiutangSumAggregateOutputType | null
    _min: PiutangMinAggregateOutputType | null
    _max: PiutangMaxAggregateOutputType | null
  }

  export type PiutangAvgAggregateOutputType = {
    besarPinjaman: Decimal | null
    totalPiutang: Decimal | null
    biayaAngsuran: Decimal | null
    sisaPiutang: Decimal | null
    sisaAngsuran: number | null
    totalAngsuran: number | null
  }

  export type PiutangSumAggregateOutputType = {
    besarPinjaman: Decimal | null
    totalPiutang: Decimal | null
    biayaAngsuran: Decimal | null
    sisaPiutang: Decimal | null
    sisaAngsuran: number | null
    totalAngsuran: number | null
  }

  export type PiutangMinAggregateOutputType = {
    id: string | null
    anggotaId: string | null
    jenis: string | null
    besarPinjaman: Decimal | null
    totalPiutang: Decimal | null
    biayaAngsuran: Decimal | null
    sisaPiutang: Decimal | null
    sisaAngsuran: number | null
    totalAngsuran: number | null
    status: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PiutangMaxAggregateOutputType = {
    id: string | null
    anggotaId: string | null
    jenis: string | null
    besarPinjaman: Decimal | null
    totalPiutang: Decimal | null
    biayaAngsuran: Decimal | null
    sisaPiutang: Decimal | null
    sisaAngsuran: number | null
    totalAngsuran: number | null
    status: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PiutangCountAggregateOutputType = {
    id: number
    anggotaId: number
    jenis: number
    besarPinjaman: number
    totalPiutang: number
    biayaAngsuran: number
    sisaPiutang: number
    sisaAngsuran: number
    totalAngsuran: number
    status: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PiutangAvgAggregateInputType = {
    besarPinjaman?: true
    totalPiutang?: true
    biayaAngsuran?: true
    sisaPiutang?: true
    sisaAngsuran?: true
    totalAngsuran?: true
  }

  export type PiutangSumAggregateInputType = {
    besarPinjaman?: true
    totalPiutang?: true
    biayaAngsuran?: true
    sisaPiutang?: true
    sisaAngsuran?: true
    totalAngsuran?: true
  }

  export type PiutangMinAggregateInputType = {
    id?: true
    anggotaId?: true
    jenis?: true
    besarPinjaman?: true
    totalPiutang?: true
    biayaAngsuran?: true
    sisaPiutang?: true
    sisaAngsuran?: true
    totalAngsuran?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PiutangMaxAggregateInputType = {
    id?: true
    anggotaId?: true
    jenis?: true
    besarPinjaman?: true
    totalPiutang?: true
    biayaAngsuran?: true
    sisaPiutang?: true
    sisaAngsuran?: true
    totalAngsuran?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PiutangCountAggregateInputType = {
    id?: true
    anggotaId?: true
    jenis?: true
    besarPinjaman?: true
    totalPiutang?: true
    biayaAngsuran?: true
    sisaPiutang?: true
    sisaAngsuran?: true
    totalAngsuran?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PiutangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Piutang to aggregate.
     */
    where?: PiutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piutangs to fetch.
     */
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PiutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Piutangs
    **/
    _count?: true | PiutangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PiutangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PiutangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PiutangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PiutangMaxAggregateInputType
  }

  export type GetPiutangAggregateType<T extends PiutangAggregateArgs> = {
        [P in keyof T & keyof AggregatePiutang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiutang[P]>
      : GetScalarType<T[P], AggregatePiutang[P]>
  }




  export type PiutangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiutangWhereInput
    orderBy?: PiutangOrderByWithAggregationInput | PiutangOrderByWithAggregationInput[]
    by: PiutangScalarFieldEnum[] | PiutangScalarFieldEnum
    having?: PiutangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PiutangCountAggregateInputType | true
    _avg?: PiutangAvgAggregateInputType
    _sum?: PiutangSumAggregateInputType
    _min?: PiutangMinAggregateInputType
    _max?: PiutangMaxAggregateInputType
  }

  export type PiutangGroupByOutputType = {
    id: string
    anggotaId: string
    jenis: string
    besarPinjaman: Decimal
    totalPiutang: Decimal
    biayaAngsuran: Decimal
    sisaPiutang: Decimal
    sisaAngsuran: number
    totalAngsuran: number
    status: string
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PiutangCountAggregateOutputType | null
    _avg: PiutangAvgAggregateOutputType | null
    _sum: PiutangSumAggregateOutputType | null
    _min: PiutangMinAggregateOutputType | null
    _max: PiutangMaxAggregateOutputType | null
  }

  type GetPiutangGroupByPayload<T extends PiutangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PiutangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PiutangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PiutangGroupByOutputType[P]>
            : GetScalarType<T[P], PiutangGroupByOutputType[P]>
        }
      >
    >


  export type PiutangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anggotaId?: boolean
    jenis?: boolean
    besarPinjaman?: boolean
    totalPiutang?: boolean
    biayaAngsuran?: boolean
    sisaPiutang?: boolean
    sisaAngsuran?: boolean
    totalAngsuran?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    transactions?: boolean | Piutang$transactionsArgs<ExtArgs>
    _count?: boolean | PiutangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piutang"]>

  export type PiutangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anggotaId?: boolean
    jenis?: boolean
    besarPinjaman?: boolean
    totalPiutang?: boolean
    biayaAngsuran?: boolean
    sisaPiutang?: boolean
    sisaAngsuran?: boolean
    totalAngsuran?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piutang"]>

  export type PiutangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anggotaId?: boolean
    jenis?: boolean
    besarPinjaman?: boolean
    totalPiutang?: boolean
    biayaAngsuran?: boolean
    sisaPiutang?: boolean
    sisaAngsuran?: boolean
    totalAngsuran?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piutang"]>

  export type PiutangSelectScalar = {
    id?: boolean
    anggotaId?: boolean
    jenis?: boolean
    besarPinjaman?: boolean
    totalPiutang?: boolean
    biayaAngsuran?: boolean
    sisaPiutang?: boolean
    sisaAngsuran?: boolean
    totalAngsuran?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PiutangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "anggotaId" | "jenis" | "besarPinjaman" | "totalPiutang" | "biayaAngsuran" | "sisaPiutang" | "sisaAngsuran" | "totalAngsuran" | "status" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["piutang"]>
  export type PiutangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    transactions?: boolean | Piutang$transactionsArgs<ExtArgs>
    _count?: boolean | PiutangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PiutangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
  }
  export type PiutangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
  }

  export type $PiutangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Piutang"
    objects: {
      anggota: Prisma.$AnggotaPayload<ExtArgs>
      transactions: Prisma.$PiutangTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      anggotaId: string
      jenis: string
      besarPinjaman: Prisma.Decimal
      totalPiutang: Prisma.Decimal
      biayaAngsuran: Prisma.Decimal
      sisaPiutang: Prisma.Decimal
      sisaAngsuran: number
      totalAngsuran: number
      status: string
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["piutang"]>
    composites: {}
  }

  type PiutangGetPayload<S extends boolean | null | undefined | PiutangDefaultArgs> = $Result.GetResult<Prisma.$PiutangPayload, S>

  type PiutangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PiutangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PiutangCountAggregateInputType | true
    }

  export interface PiutangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Piutang'], meta: { name: 'Piutang' } }
    /**
     * Find zero or one Piutang that matches the filter.
     * @param {PiutangFindUniqueArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PiutangFindUniqueArgs>(args: SelectSubset<T, PiutangFindUniqueArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Piutang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PiutangFindUniqueOrThrowArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PiutangFindUniqueOrThrowArgs>(args: SelectSubset<T, PiutangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piutang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangFindFirstArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PiutangFindFirstArgs>(args?: SelectSubset<T, PiutangFindFirstArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piutang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangFindFirstOrThrowArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PiutangFindFirstOrThrowArgs>(args?: SelectSubset<T, PiutangFindFirstOrThrowArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Piutangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Piutangs
     * const piutangs = await prisma.piutang.findMany()
     * 
     * // Get first 10 Piutangs
     * const piutangs = await prisma.piutang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const piutangWithIdOnly = await prisma.piutang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PiutangFindManyArgs>(args?: SelectSubset<T, PiutangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Piutang.
     * @param {PiutangCreateArgs} args - Arguments to create a Piutang.
     * @example
     * // Create one Piutang
     * const Piutang = await prisma.piutang.create({
     *   data: {
     *     // ... data to create a Piutang
     *   }
     * })
     * 
     */
    create<T extends PiutangCreateArgs>(args: SelectSubset<T, PiutangCreateArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Piutangs.
     * @param {PiutangCreateManyArgs} args - Arguments to create many Piutangs.
     * @example
     * // Create many Piutangs
     * const piutang = await prisma.piutang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PiutangCreateManyArgs>(args?: SelectSubset<T, PiutangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Piutangs and returns the data saved in the database.
     * @param {PiutangCreateManyAndReturnArgs} args - Arguments to create many Piutangs.
     * @example
     * // Create many Piutangs
     * const piutang = await prisma.piutang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Piutangs and only return the `id`
     * const piutangWithIdOnly = await prisma.piutang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PiutangCreateManyAndReturnArgs>(args?: SelectSubset<T, PiutangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Piutang.
     * @param {PiutangDeleteArgs} args - Arguments to delete one Piutang.
     * @example
     * // Delete one Piutang
     * const Piutang = await prisma.piutang.delete({
     *   where: {
     *     // ... filter to delete one Piutang
     *   }
     * })
     * 
     */
    delete<T extends PiutangDeleteArgs>(args: SelectSubset<T, PiutangDeleteArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Piutang.
     * @param {PiutangUpdateArgs} args - Arguments to update one Piutang.
     * @example
     * // Update one Piutang
     * const piutang = await prisma.piutang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PiutangUpdateArgs>(args: SelectSubset<T, PiutangUpdateArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Piutangs.
     * @param {PiutangDeleteManyArgs} args - Arguments to filter Piutangs to delete.
     * @example
     * // Delete a few Piutangs
     * const { count } = await prisma.piutang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PiutangDeleteManyArgs>(args?: SelectSubset<T, PiutangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Piutangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Piutangs
     * const piutang = await prisma.piutang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PiutangUpdateManyArgs>(args: SelectSubset<T, PiutangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Piutangs and returns the data updated in the database.
     * @param {PiutangUpdateManyAndReturnArgs} args - Arguments to update many Piutangs.
     * @example
     * // Update many Piutangs
     * const piutang = await prisma.piutang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Piutangs and only return the `id`
     * const piutangWithIdOnly = await prisma.piutang.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PiutangUpdateManyAndReturnArgs>(args: SelectSubset<T, PiutangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Piutang.
     * @param {PiutangUpsertArgs} args - Arguments to update or create a Piutang.
     * @example
     * // Update or create a Piutang
     * const piutang = await prisma.piutang.upsert({
     *   create: {
     *     // ... data to create a Piutang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Piutang we want to update
     *   }
     * })
     */
    upsert<T extends PiutangUpsertArgs>(args: SelectSubset<T, PiutangUpsertArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Piutangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangCountArgs} args - Arguments to filter Piutangs to count.
     * @example
     * // Count the number of Piutangs
     * const count = await prisma.piutang.count({
     *   where: {
     *     // ... the filter for the Piutangs we want to count
     *   }
     * })
    **/
    count<T extends PiutangCountArgs>(
      args?: Subset<T, PiutangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PiutangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Piutang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PiutangAggregateArgs>(args: Subset<T, PiutangAggregateArgs>): Prisma.PrismaPromise<GetPiutangAggregateType<T>>

    /**
     * Group by Piutang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PiutangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PiutangGroupByArgs['orderBy'] }
        : { orderBy?: PiutangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PiutangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiutangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Piutang model
   */
  readonly fields: PiutangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Piutang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PiutangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anggota<T extends AnggotaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnggotaDefaultArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Piutang$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Piutang$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Piutang model
   */
  interface PiutangFieldRefs {
    readonly id: FieldRef<"Piutang", 'String'>
    readonly anggotaId: FieldRef<"Piutang", 'String'>
    readonly jenis: FieldRef<"Piutang", 'String'>
    readonly besarPinjaman: FieldRef<"Piutang", 'Decimal'>
    readonly totalPiutang: FieldRef<"Piutang", 'Decimal'>
    readonly biayaAngsuran: FieldRef<"Piutang", 'Decimal'>
    readonly sisaPiutang: FieldRef<"Piutang", 'Decimal'>
    readonly sisaAngsuran: FieldRef<"Piutang", 'Int'>
    readonly totalAngsuran: FieldRef<"Piutang", 'Int'>
    readonly status: FieldRef<"Piutang", 'String'>
    readonly completedAt: FieldRef<"Piutang", 'DateTime'>
    readonly createdAt: FieldRef<"Piutang", 'DateTime'>
    readonly updatedAt: FieldRef<"Piutang", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Piutang findUnique
   */
  export type PiutangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutang to fetch.
     */
    where: PiutangWhereUniqueInput
  }

  /**
   * Piutang findUniqueOrThrow
   */
  export type PiutangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutang to fetch.
     */
    where: PiutangWhereUniqueInput
  }

  /**
   * Piutang findFirst
   */
  export type PiutangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutang to fetch.
     */
    where?: PiutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piutangs to fetch.
     */
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Piutangs.
     */
    cursor?: PiutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Piutangs.
     */
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * Piutang findFirstOrThrow
   */
  export type PiutangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutang to fetch.
     */
    where?: PiutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piutangs to fetch.
     */
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Piutangs.
     */
    cursor?: PiutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Piutangs.
     */
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * Piutang findMany
   */
  export type PiutangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutangs to fetch.
     */
    where?: PiutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piutangs to fetch.
     */
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Piutangs.
     */
    cursor?: PiutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piutangs.
     */
    skip?: number
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * Piutang create
   */
  export type PiutangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * The data needed to create a Piutang.
     */
    data: XOR<PiutangCreateInput, PiutangUncheckedCreateInput>
  }

  /**
   * Piutang createMany
   */
  export type PiutangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Piutangs.
     */
    data: PiutangCreateManyInput | PiutangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Piutang createManyAndReturn
   */
  export type PiutangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * The data used to create many Piutangs.
     */
    data: PiutangCreateManyInput | PiutangCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Piutang update
   */
  export type PiutangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * The data needed to update a Piutang.
     */
    data: XOR<PiutangUpdateInput, PiutangUncheckedUpdateInput>
    /**
     * Choose, which Piutang to update.
     */
    where: PiutangWhereUniqueInput
  }

  /**
   * Piutang updateMany
   */
  export type PiutangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Piutangs.
     */
    data: XOR<PiutangUpdateManyMutationInput, PiutangUncheckedUpdateManyInput>
    /**
     * Filter which Piutangs to update
     */
    where?: PiutangWhereInput
    /**
     * Limit how many Piutangs to update.
     */
    limit?: number
  }

  /**
   * Piutang updateManyAndReturn
   */
  export type PiutangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * The data used to update Piutangs.
     */
    data: XOR<PiutangUpdateManyMutationInput, PiutangUncheckedUpdateManyInput>
    /**
     * Filter which Piutangs to update
     */
    where?: PiutangWhereInput
    /**
     * Limit how many Piutangs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Piutang upsert
   */
  export type PiutangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * The filter to search for the Piutang to update in case it exists.
     */
    where: PiutangWhereUniqueInput
    /**
     * In case the Piutang found by the `where` argument doesn't exist, create a new Piutang with this data.
     */
    create: XOR<PiutangCreateInput, PiutangUncheckedCreateInput>
    /**
     * In case the Piutang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PiutangUpdateInput, PiutangUncheckedUpdateInput>
  }

  /**
   * Piutang delete
   */
  export type PiutangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter which Piutang to delete.
     */
    where: PiutangWhereUniqueInput
  }

  /**
   * Piutang deleteMany
   */
  export type PiutangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Piutangs to delete
     */
    where?: PiutangWhereInput
    /**
     * Limit how many Piutangs to delete.
     */
    limit?: number
  }

  /**
   * Piutang.transactions
   */
  export type Piutang$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    where?: PiutangTransactionWhereInput
    orderBy?: PiutangTransactionOrderByWithRelationInput | PiutangTransactionOrderByWithRelationInput[]
    cursor?: PiutangTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PiutangTransactionScalarFieldEnum | PiutangTransactionScalarFieldEnum[]
  }

  /**
   * Piutang without action
   */
  export type PiutangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
  }


  /**
   * Model PiutangTransaction
   */

  export type AggregatePiutangTransaction = {
    _count: PiutangTransactionCountAggregateOutputType | null
    _avg: PiutangTransactionAvgAggregateOutputType | null
    _sum: PiutangTransactionSumAggregateOutputType | null
    _min: PiutangTransactionMinAggregateOutputType | null
    _max: PiutangTransactionMaxAggregateOutputType | null
  }

  export type PiutangTransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PiutangTransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PiutangTransactionMinAggregateOutputType = {
    id: string | null
    piutangId: string | null
    type: string | null
    amount: Decimal | null
    description: string | null
    processedBy: string | null
    createdAt: Date | null
  }

  export type PiutangTransactionMaxAggregateOutputType = {
    id: string | null
    piutangId: string | null
    type: string | null
    amount: Decimal | null
    description: string | null
    processedBy: string | null
    createdAt: Date | null
  }

  export type PiutangTransactionCountAggregateOutputType = {
    id: number
    piutangId: number
    type: number
    amount: number
    description: number
    processedBy: number
    createdAt: number
    _all: number
  }


  export type PiutangTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type PiutangTransactionSumAggregateInputType = {
    amount?: true
  }

  export type PiutangTransactionMinAggregateInputType = {
    id?: true
    piutangId?: true
    type?: true
    amount?: true
    description?: true
    processedBy?: true
    createdAt?: true
  }

  export type PiutangTransactionMaxAggregateInputType = {
    id?: true
    piutangId?: true
    type?: true
    amount?: true
    description?: true
    processedBy?: true
    createdAt?: true
  }

  export type PiutangTransactionCountAggregateInputType = {
    id?: true
    piutangId?: true
    type?: true
    amount?: true
    description?: true
    processedBy?: true
    createdAt?: true
    _all?: true
  }

  export type PiutangTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PiutangTransaction to aggregate.
     */
    where?: PiutangTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiutangTransactions to fetch.
     */
    orderBy?: PiutangTransactionOrderByWithRelationInput | PiutangTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PiutangTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiutangTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiutangTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PiutangTransactions
    **/
    _count?: true | PiutangTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PiutangTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PiutangTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PiutangTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PiutangTransactionMaxAggregateInputType
  }

  export type GetPiutangTransactionAggregateType<T extends PiutangTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePiutangTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiutangTransaction[P]>
      : GetScalarType<T[P], AggregatePiutangTransaction[P]>
  }




  export type PiutangTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiutangTransactionWhereInput
    orderBy?: PiutangTransactionOrderByWithAggregationInput | PiutangTransactionOrderByWithAggregationInput[]
    by: PiutangTransactionScalarFieldEnum[] | PiutangTransactionScalarFieldEnum
    having?: PiutangTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PiutangTransactionCountAggregateInputType | true
    _avg?: PiutangTransactionAvgAggregateInputType
    _sum?: PiutangTransactionSumAggregateInputType
    _min?: PiutangTransactionMinAggregateInputType
    _max?: PiutangTransactionMaxAggregateInputType
  }

  export type PiutangTransactionGroupByOutputType = {
    id: string
    piutangId: string
    type: string
    amount: Decimal
    description: string | null
    processedBy: string | null
    createdAt: Date
    _count: PiutangTransactionCountAggregateOutputType | null
    _avg: PiutangTransactionAvgAggregateOutputType | null
    _sum: PiutangTransactionSumAggregateOutputType | null
    _min: PiutangTransactionMinAggregateOutputType | null
    _max: PiutangTransactionMaxAggregateOutputType | null
  }

  type GetPiutangTransactionGroupByPayload<T extends PiutangTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PiutangTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PiutangTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PiutangTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PiutangTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PiutangTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    piutangId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    processedBy?: boolean
    createdAt?: boolean
    piutang?: boolean | PiutangDefaultArgs<ExtArgs>
    processor?: boolean | PiutangTransaction$processorArgs<ExtArgs>
  }, ExtArgs["result"]["piutangTransaction"]>

  export type PiutangTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    piutangId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    processedBy?: boolean
    createdAt?: boolean
    piutang?: boolean | PiutangDefaultArgs<ExtArgs>
    processor?: boolean | PiutangTransaction$processorArgs<ExtArgs>
  }, ExtArgs["result"]["piutangTransaction"]>

  export type PiutangTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    piutangId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    processedBy?: boolean
    createdAt?: boolean
    piutang?: boolean | PiutangDefaultArgs<ExtArgs>
    processor?: boolean | PiutangTransaction$processorArgs<ExtArgs>
  }, ExtArgs["result"]["piutangTransaction"]>

  export type PiutangTransactionSelectScalar = {
    id?: boolean
    piutangId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    processedBy?: boolean
    createdAt?: boolean
  }

  export type PiutangTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "piutangId" | "type" | "amount" | "description" | "processedBy" | "createdAt", ExtArgs["result"]["piutangTransaction"]>
  export type PiutangTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piutang?: boolean | PiutangDefaultArgs<ExtArgs>
    processor?: boolean | PiutangTransaction$processorArgs<ExtArgs>
  }
  export type PiutangTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piutang?: boolean | PiutangDefaultArgs<ExtArgs>
    processor?: boolean | PiutangTransaction$processorArgs<ExtArgs>
  }
  export type PiutangTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piutang?: boolean | PiutangDefaultArgs<ExtArgs>
    processor?: boolean | PiutangTransaction$processorArgs<ExtArgs>
  }

  export type $PiutangTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PiutangTransaction"
    objects: {
      piutang: Prisma.$PiutangPayload<ExtArgs>
      processor: Prisma.$AnggotaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      piutangId: string
      type: string
      amount: Prisma.Decimal
      description: string | null
      processedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["piutangTransaction"]>
    composites: {}
  }

  type PiutangTransactionGetPayload<S extends boolean | null | undefined | PiutangTransactionDefaultArgs> = $Result.GetResult<Prisma.$PiutangTransactionPayload, S>

  type PiutangTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PiutangTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PiutangTransactionCountAggregateInputType | true
    }

  export interface PiutangTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PiutangTransaction'], meta: { name: 'PiutangTransaction' } }
    /**
     * Find zero or one PiutangTransaction that matches the filter.
     * @param {PiutangTransactionFindUniqueArgs} args - Arguments to find a PiutangTransaction
     * @example
     * // Get one PiutangTransaction
     * const piutangTransaction = await prisma.piutangTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PiutangTransactionFindUniqueArgs>(args: SelectSubset<T, PiutangTransactionFindUniqueArgs<ExtArgs>>): Prisma__PiutangTransactionClient<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PiutangTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PiutangTransactionFindUniqueOrThrowArgs} args - Arguments to find a PiutangTransaction
     * @example
     * // Get one PiutangTransaction
     * const piutangTransaction = await prisma.piutangTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PiutangTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PiutangTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PiutangTransactionClient<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PiutangTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangTransactionFindFirstArgs} args - Arguments to find a PiutangTransaction
     * @example
     * // Get one PiutangTransaction
     * const piutangTransaction = await prisma.piutangTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PiutangTransactionFindFirstArgs>(args?: SelectSubset<T, PiutangTransactionFindFirstArgs<ExtArgs>>): Prisma__PiutangTransactionClient<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PiutangTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangTransactionFindFirstOrThrowArgs} args - Arguments to find a PiutangTransaction
     * @example
     * // Get one PiutangTransaction
     * const piutangTransaction = await prisma.piutangTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PiutangTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PiutangTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PiutangTransactionClient<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PiutangTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PiutangTransactions
     * const piutangTransactions = await prisma.piutangTransaction.findMany()
     * 
     * // Get first 10 PiutangTransactions
     * const piutangTransactions = await prisma.piutangTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const piutangTransactionWithIdOnly = await prisma.piutangTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PiutangTransactionFindManyArgs>(args?: SelectSubset<T, PiutangTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PiutangTransaction.
     * @param {PiutangTransactionCreateArgs} args - Arguments to create a PiutangTransaction.
     * @example
     * // Create one PiutangTransaction
     * const PiutangTransaction = await prisma.piutangTransaction.create({
     *   data: {
     *     // ... data to create a PiutangTransaction
     *   }
     * })
     * 
     */
    create<T extends PiutangTransactionCreateArgs>(args: SelectSubset<T, PiutangTransactionCreateArgs<ExtArgs>>): Prisma__PiutangTransactionClient<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PiutangTransactions.
     * @param {PiutangTransactionCreateManyArgs} args - Arguments to create many PiutangTransactions.
     * @example
     * // Create many PiutangTransactions
     * const piutangTransaction = await prisma.piutangTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PiutangTransactionCreateManyArgs>(args?: SelectSubset<T, PiutangTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PiutangTransactions and returns the data saved in the database.
     * @param {PiutangTransactionCreateManyAndReturnArgs} args - Arguments to create many PiutangTransactions.
     * @example
     * // Create many PiutangTransactions
     * const piutangTransaction = await prisma.piutangTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PiutangTransactions and only return the `id`
     * const piutangTransactionWithIdOnly = await prisma.piutangTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PiutangTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PiutangTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PiutangTransaction.
     * @param {PiutangTransactionDeleteArgs} args - Arguments to delete one PiutangTransaction.
     * @example
     * // Delete one PiutangTransaction
     * const PiutangTransaction = await prisma.piutangTransaction.delete({
     *   where: {
     *     // ... filter to delete one PiutangTransaction
     *   }
     * })
     * 
     */
    delete<T extends PiutangTransactionDeleteArgs>(args: SelectSubset<T, PiutangTransactionDeleteArgs<ExtArgs>>): Prisma__PiutangTransactionClient<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PiutangTransaction.
     * @param {PiutangTransactionUpdateArgs} args - Arguments to update one PiutangTransaction.
     * @example
     * // Update one PiutangTransaction
     * const piutangTransaction = await prisma.piutangTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PiutangTransactionUpdateArgs>(args: SelectSubset<T, PiutangTransactionUpdateArgs<ExtArgs>>): Prisma__PiutangTransactionClient<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PiutangTransactions.
     * @param {PiutangTransactionDeleteManyArgs} args - Arguments to filter PiutangTransactions to delete.
     * @example
     * // Delete a few PiutangTransactions
     * const { count } = await prisma.piutangTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PiutangTransactionDeleteManyArgs>(args?: SelectSubset<T, PiutangTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PiutangTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PiutangTransactions
     * const piutangTransaction = await prisma.piutangTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PiutangTransactionUpdateManyArgs>(args: SelectSubset<T, PiutangTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PiutangTransactions and returns the data updated in the database.
     * @param {PiutangTransactionUpdateManyAndReturnArgs} args - Arguments to update many PiutangTransactions.
     * @example
     * // Update many PiutangTransactions
     * const piutangTransaction = await prisma.piutangTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PiutangTransactions and only return the `id`
     * const piutangTransactionWithIdOnly = await prisma.piutangTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PiutangTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, PiutangTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PiutangTransaction.
     * @param {PiutangTransactionUpsertArgs} args - Arguments to update or create a PiutangTransaction.
     * @example
     * // Update or create a PiutangTransaction
     * const piutangTransaction = await prisma.piutangTransaction.upsert({
     *   create: {
     *     // ... data to create a PiutangTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PiutangTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PiutangTransactionUpsertArgs>(args: SelectSubset<T, PiutangTransactionUpsertArgs<ExtArgs>>): Prisma__PiutangTransactionClient<$Result.GetResult<Prisma.$PiutangTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PiutangTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangTransactionCountArgs} args - Arguments to filter PiutangTransactions to count.
     * @example
     * // Count the number of PiutangTransactions
     * const count = await prisma.piutangTransaction.count({
     *   where: {
     *     // ... the filter for the PiutangTransactions we want to count
     *   }
     * })
    **/
    count<T extends PiutangTransactionCountArgs>(
      args?: Subset<T, PiutangTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PiutangTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PiutangTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PiutangTransactionAggregateArgs>(args: Subset<T, PiutangTransactionAggregateArgs>): Prisma.PrismaPromise<GetPiutangTransactionAggregateType<T>>

    /**
     * Group by PiutangTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PiutangTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PiutangTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PiutangTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PiutangTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiutangTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PiutangTransaction model
   */
  readonly fields: PiutangTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PiutangTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PiutangTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    piutang<T extends PiutangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PiutangDefaultArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    processor<T extends PiutangTransaction$processorArgs<ExtArgs> = {}>(args?: Subset<T, PiutangTransaction$processorArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PiutangTransaction model
   */
  interface PiutangTransactionFieldRefs {
    readonly id: FieldRef<"PiutangTransaction", 'String'>
    readonly piutangId: FieldRef<"PiutangTransaction", 'String'>
    readonly type: FieldRef<"PiutangTransaction", 'String'>
    readonly amount: FieldRef<"PiutangTransaction", 'Decimal'>
    readonly description: FieldRef<"PiutangTransaction", 'String'>
    readonly processedBy: FieldRef<"PiutangTransaction", 'String'>
    readonly createdAt: FieldRef<"PiutangTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PiutangTransaction findUnique
   */
  export type PiutangTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PiutangTransaction to fetch.
     */
    where: PiutangTransactionWhereUniqueInput
  }

  /**
   * PiutangTransaction findUniqueOrThrow
   */
  export type PiutangTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PiutangTransaction to fetch.
     */
    where: PiutangTransactionWhereUniqueInput
  }

  /**
   * PiutangTransaction findFirst
   */
  export type PiutangTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PiutangTransaction to fetch.
     */
    where?: PiutangTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiutangTransactions to fetch.
     */
    orderBy?: PiutangTransactionOrderByWithRelationInput | PiutangTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PiutangTransactions.
     */
    cursor?: PiutangTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiutangTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiutangTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PiutangTransactions.
     */
    distinct?: PiutangTransactionScalarFieldEnum | PiutangTransactionScalarFieldEnum[]
  }

  /**
   * PiutangTransaction findFirstOrThrow
   */
  export type PiutangTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PiutangTransaction to fetch.
     */
    where?: PiutangTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiutangTransactions to fetch.
     */
    orderBy?: PiutangTransactionOrderByWithRelationInput | PiutangTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PiutangTransactions.
     */
    cursor?: PiutangTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiutangTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiutangTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PiutangTransactions.
     */
    distinct?: PiutangTransactionScalarFieldEnum | PiutangTransactionScalarFieldEnum[]
  }

  /**
   * PiutangTransaction findMany
   */
  export type PiutangTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PiutangTransactions to fetch.
     */
    where?: PiutangTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiutangTransactions to fetch.
     */
    orderBy?: PiutangTransactionOrderByWithRelationInput | PiutangTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PiutangTransactions.
     */
    cursor?: PiutangTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiutangTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiutangTransactions.
     */
    skip?: number
    distinct?: PiutangTransactionScalarFieldEnum | PiutangTransactionScalarFieldEnum[]
  }

  /**
   * PiutangTransaction create
   */
  export type PiutangTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a PiutangTransaction.
     */
    data: XOR<PiutangTransactionCreateInput, PiutangTransactionUncheckedCreateInput>
  }

  /**
   * PiutangTransaction createMany
   */
  export type PiutangTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PiutangTransactions.
     */
    data: PiutangTransactionCreateManyInput | PiutangTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PiutangTransaction createManyAndReturn
   */
  export type PiutangTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many PiutangTransactions.
     */
    data: PiutangTransactionCreateManyInput | PiutangTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PiutangTransaction update
   */
  export type PiutangTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a PiutangTransaction.
     */
    data: XOR<PiutangTransactionUpdateInput, PiutangTransactionUncheckedUpdateInput>
    /**
     * Choose, which PiutangTransaction to update.
     */
    where: PiutangTransactionWhereUniqueInput
  }

  /**
   * PiutangTransaction updateMany
   */
  export type PiutangTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PiutangTransactions.
     */
    data: XOR<PiutangTransactionUpdateManyMutationInput, PiutangTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PiutangTransactions to update
     */
    where?: PiutangTransactionWhereInput
    /**
     * Limit how many PiutangTransactions to update.
     */
    limit?: number
  }

  /**
   * PiutangTransaction updateManyAndReturn
   */
  export type PiutangTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * The data used to update PiutangTransactions.
     */
    data: XOR<PiutangTransactionUpdateManyMutationInput, PiutangTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PiutangTransactions to update
     */
    where?: PiutangTransactionWhereInput
    /**
     * Limit how many PiutangTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PiutangTransaction upsert
   */
  export type PiutangTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the PiutangTransaction to update in case it exists.
     */
    where: PiutangTransactionWhereUniqueInput
    /**
     * In case the PiutangTransaction found by the `where` argument doesn't exist, create a new PiutangTransaction with this data.
     */
    create: XOR<PiutangTransactionCreateInput, PiutangTransactionUncheckedCreateInput>
    /**
     * In case the PiutangTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PiutangTransactionUpdateInput, PiutangTransactionUncheckedUpdateInput>
  }

  /**
   * PiutangTransaction delete
   */
  export type PiutangTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
    /**
     * Filter which PiutangTransaction to delete.
     */
    where: PiutangTransactionWhereUniqueInput
  }

  /**
   * PiutangTransaction deleteMany
   */
  export type PiutangTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PiutangTransactions to delete
     */
    where?: PiutangTransactionWhereInput
    /**
     * Limit how many PiutangTransactions to delete.
     */
    limit?: number
  }

  /**
   * PiutangTransaction.processor
   */
  export type PiutangTransaction$processorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    where?: AnggotaWhereInput
  }

  /**
   * PiutangTransaction without action
   */
  export type PiutangTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiutangTransaction
     */
    select?: PiutangTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiutangTransaction
     */
    omit?: PiutangTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangTransactionInclude<ExtArgs> | null
  }


  /**
   * Model SimpananTransaction
   */

  export type AggregateSimpananTransaction = {
    _count: SimpananTransactionCountAggregateOutputType | null
    _avg: SimpananTransactionAvgAggregateOutputType | null
    _sum: SimpananTransactionSumAggregateOutputType | null
    _min: SimpananTransactionMinAggregateOutputType | null
    _max: SimpananTransactionMaxAggregateOutputType | null
  }

  export type SimpananTransactionAvgAggregateOutputType = {
    amount: Decimal | null
    balanceBefore: Decimal | null
    balanceAfter: Decimal | null
  }

  export type SimpananTransactionSumAggregateOutputType = {
    amount: Decimal | null
    balanceBefore: Decimal | null
    balanceAfter: Decimal | null
  }

  export type SimpananTransactionMinAggregateOutputType = {
    id: string | null
    anggotaId: string | null
    type: string | null
    category: string | null
    amount: Decimal | null
    balanceBefore: Decimal | null
    balanceAfter: Decimal | null
    description: string | null
    processedBy: string | null
    isSystemGenerated: boolean | null
    createdAt: Date | null
  }

  export type SimpananTransactionMaxAggregateOutputType = {
    id: string | null
    anggotaId: string | null
    type: string | null
    category: string | null
    amount: Decimal | null
    balanceBefore: Decimal | null
    balanceAfter: Decimal | null
    description: string | null
    processedBy: string | null
    isSystemGenerated: boolean | null
    createdAt: Date | null
  }

  export type SimpananTransactionCountAggregateOutputType = {
    id: number
    anggotaId: number
    type: number
    category: number
    amount: number
    balanceBefore: number
    balanceAfter: number
    description: number
    processedBy: number
    isSystemGenerated: number
    createdAt: number
    _all: number
  }


  export type SimpananTransactionAvgAggregateInputType = {
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type SimpananTransactionSumAggregateInputType = {
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type SimpananTransactionMinAggregateInputType = {
    id?: true
    anggotaId?: true
    type?: true
    category?: true
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
    description?: true
    processedBy?: true
    isSystemGenerated?: true
    createdAt?: true
  }

  export type SimpananTransactionMaxAggregateInputType = {
    id?: true
    anggotaId?: true
    type?: true
    category?: true
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
    description?: true
    processedBy?: true
    isSystemGenerated?: true
    createdAt?: true
  }

  export type SimpananTransactionCountAggregateInputType = {
    id?: true
    anggotaId?: true
    type?: true
    category?: true
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
    description?: true
    processedBy?: true
    isSystemGenerated?: true
    createdAt?: true
    _all?: true
  }

  export type SimpananTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SimpananTransaction to aggregate.
     */
    where?: SimpananTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimpananTransactions to fetch.
     */
    orderBy?: SimpananTransactionOrderByWithRelationInput | SimpananTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SimpananTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimpananTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimpananTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SimpananTransactions
    **/
    _count?: true | SimpananTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SimpananTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SimpananTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SimpananTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SimpananTransactionMaxAggregateInputType
  }

  export type GetSimpananTransactionAggregateType<T extends SimpananTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateSimpananTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimpananTransaction[P]>
      : GetScalarType<T[P], AggregateSimpananTransaction[P]>
  }




  export type SimpananTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimpananTransactionWhereInput
    orderBy?: SimpananTransactionOrderByWithAggregationInput | SimpananTransactionOrderByWithAggregationInput[]
    by: SimpananTransactionScalarFieldEnum[] | SimpananTransactionScalarFieldEnum
    having?: SimpananTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SimpananTransactionCountAggregateInputType | true
    _avg?: SimpananTransactionAvgAggregateInputType
    _sum?: SimpananTransactionSumAggregateInputType
    _min?: SimpananTransactionMinAggregateInputType
    _max?: SimpananTransactionMaxAggregateInputType
  }

  export type SimpananTransactionGroupByOutputType = {
    id: string
    anggotaId: string
    type: string
    category: string
    amount: Decimal
    balanceBefore: Decimal
    balanceAfter: Decimal
    description: string | null
    processedBy: string | null
    isSystemGenerated: boolean
    createdAt: Date
    _count: SimpananTransactionCountAggregateOutputType | null
    _avg: SimpananTransactionAvgAggregateOutputType | null
    _sum: SimpananTransactionSumAggregateOutputType | null
    _min: SimpananTransactionMinAggregateOutputType | null
    _max: SimpananTransactionMaxAggregateOutputType | null
  }

  type GetSimpananTransactionGroupByPayload<T extends SimpananTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SimpananTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SimpananTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimpananTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], SimpananTransactionGroupByOutputType[P]>
        }
      >
    >


  export type SimpananTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anggotaId?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    description?: boolean
    processedBy?: boolean
    isSystemGenerated?: boolean
    createdAt?: boolean
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    processor?: boolean | SimpananTransaction$processorArgs<ExtArgs>
    simpanan?: boolean | SimpananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simpananTransaction"]>

  export type SimpananTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anggotaId?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    description?: boolean
    processedBy?: boolean
    isSystemGenerated?: boolean
    createdAt?: boolean
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    processor?: boolean | SimpananTransaction$processorArgs<ExtArgs>
    simpanan?: boolean | SimpananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simpananTransaction"]>

  export type SimpananTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anggotaId?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    description?: boolean
    processedBy?: boolean
    isSystemGenerated?: boolean
    createdAt?: boolean
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    processor?: boolean | SimpananTransaction$processorArgs<ExtArgs>
    simpanan?: boolean | SimpananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simpananTransaction"]>

  export type SimpananTransactionSelectScalar = {
    id?: boolean
    anggotaId?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    description?: boolean
    processedBy?: boolean
    isSystemGenerated?: boolean
    createdAt?: boolean
  }

  export type SimpananTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "anggotaId" | "type" | "category" | "amount" | "balanceBefore" | "balanceAfter" | "description" | "processedBy" | "isSystemGenerated" | "createdAt", ExtArgs["result"]["simpananTransaction"]>
  export type SimpananTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    processor?: boolean | SimpananTransaction$processorArgs<ExtArgs>
    simpanan?: boolean | SimpananDefaultArgs<ExtArgs>
  }
  export type SimpananTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    processor?: boolean | SimpananTransaction$processorArgs<ExtArgs>
    simpanan?: boolean | SimpananDefaultArgs<ExtArgs>
  }
  export type SimpananTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | AnggotaDefaultArgs<ExtArgs>
    processor?: boolean | SimpananTransaction$processorArgs<ExtArgs>
    simpanan?: boolean | SimpananDefaultArgs<ExtArgs>
  }

  export type $SimpananTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SimpananTransaction"
    objects: {
      anggota: Prisma.$AnggotaPayload<ExtArgs>
      processor: Prisma.$AnggotaPayload<ExtArgs> | null
      simpanan: Prisma.$SimpananPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      anggotaId: string
      type: string
      category: string
      amount: Prisma.Decimal
      balanceBefore: Prisma.Decimal
      balanceAfter: Prisma.Decimal
      description: string | null
      processedBy: string | null
      isSystemGenerated: boolean
      createdAt: Date
    }, ExtArgs["result"]["simpananTransaction"]>
    composites: {}
  }

  type SimpananTransactionGetPayload<S extends boolean | null | undefined | SimpananTransactionDefaultArgs> = $Result.GetResult<Prisma.$SimpananTransactionPayload, S>

  type SimpananTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimpananTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimpananTransactionCountAggregateInputType | true
    }

  export interface SimpananTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SimpananTransaction'], meta: { name: 'SimpananTransaction' } }
    /**
     * Find zero or one SimpananTransaction that matches the filter.
     * @param {SimpananTransactionFindUniqueArgs} args - Arguments to find a SimpananTransaction
     * @example
     * // Get one SimpananTransaction
     * const simpananTransaction = await prisma.simpananTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimpananTransactionFindUniqueArgs>(args: SelectSubset<T, SimpananTransactionFindUniqueArgs<ExtArgs>>): Prisma__SimpananTransactionClient<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SimpananTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimpananTransactionFindUniqueOrThrowArgs} args - Arguments to find a SimpananTransaction
     * @example
     * // Get one SimpananTransaction
     * const simpananTransaction = await prisma.simpananTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimpananTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, SimpananTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimpananTransactionClient<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SimpananTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananTransactionFindFirstArgs} args - Arguments to find a SimpananTransaction
     * @example
     * // Get one SimpananTransaction
     * const simpananTransaction = await prisma.simpananTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimpananTransactionFindFirstArgs>(args?: SelectSubset<T, SimpananTransactionFindFirstArgs<ExtArgs>>): Prisma__SimpananTransactionClient<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SimpananTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananTransactionFindFirstOrThrowArgs} args - Arguments to find a SimpananTransaction
     * @example
     * // Get one SimpananTransaction
     * const simpananTransaction = await prisma.simpananTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimpananTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, SimpananTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimpananTransactionClient<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SimpananTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SimpananTransactions
     * const simpananTransactions = await prisma.simpananTransaction.findMany()
     * 
     * // Get first 10 SimpananTransactions
     * const simpananTransactions = await prisma.simpananTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const simpananTransactionWithIdOnly = await prisma.simpananTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SimpananTransactionFindManyArgs>(args?: SelectSubset<T, SimpananTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SimpananTransaction.
     * @param {SimpananTransactionCreateArgs} args - Arguments to create a SimpananTransaction.
     * @example
     * // Create one SimpananTransaction
     * const SimpananTransaction = await prisma.simpananTransaction.create({
     *   data: {
     *     // ... data to create a SimpananTransaction
     *   }
     * })
     * 
     */
    create<T extends SimpananTransactionCreateArgs>(args: SelectSubset<T, SimpananTransactionCreateArgs<ExtArgs>>): Prisma__SimpananTransactionClient<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SimpananTransactions.
     * @param {SimpananTransactionCreateManyArgs} args - Arguments to create many SimpananTransactions.
     * @example
     * // Create many SimpananTransactions
     * const simpananTransaction = await prisma.simpananTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SimpananTransactionCreateManyArgs>(args?: SelectSubset<T, SimpananTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SimpananTransactions and returns the data saved in the database.
     * @param {SimpananTransactionCreateManyAndReturnArgs} args - Arguments to create many SimpananTransactions.
     * @example
     * // Create many SimpananTransactions
     * const simpananTransaction = await prisma.simpananTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SimpananTransactions and only return the `id`
     * const simpananTransactionWithIdOnly = await prisma.simpananTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SimpananTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, SimpananTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SimpananTransaction.
     * @param {SimpananTransactionDeleteArgs} args - Arguments to delete one SimpananTransaction.
     * @example
     * // Delete one SimpananTransaction
     * const SimpananTransaction = await prisma.simpananTransaction.delete({
     *   where: {
     *     // ... filter to delete one SimpananTransaction
     *   }
     * })
     * 
     */
    delete<T extends SimpananTransactionDeleteArgs>(args: SelectSubset<T, SimpananTransactionDeleteArgs<ExtArgs>>): Prisma__SimpananTransactionClient<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SimpananTransaction.
     * @param {SimpananTransactionUpdateArgs} args - Arguments to update one SimpananTransaction.
     * @example
     * // Update one SimpananTransaction
     * const simpananTransaction = await prisma.simpananTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SimpananTransactionUpdateArgs>(args: SelectSubset<T, SimpananTransactionUpdateArgs<ExtArgs>>): Prisma__SimpananTransactionClient<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SimpananTransactions.
     * @param {SimpananTransactionDeleteManyArgs} args - Arguments to filter SimpananTransactions to delete.
     * @example
     * // Delete a few SimpananTransactions
     * const { count } = await prisma.simpananTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SimpananTransactionDeleteManyArgs>(args?: SelectSubset<T, SimpananTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SimpananTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SimpananTransactions
     * const simpananTransaction = await prisma.simpananTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SimpananTransactionUpdateManyArgs>(args: SelectSubset<T, SimpananTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SimpananTransactions and returns the data updated in the database.
     * @param {SimpananTransactionUpdateManyAndReturnArgs} args - Arguments to update many SimpananTransactions.
     * @example
     * // Update many SimpananTransactions
     * const simpananTransaction = await prisma.simpananTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SimpananTransactions and only return the `id`
     * const simpananTransactionWithIdOnly = await prisma.simpananTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SimpananTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, SimpananTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SimpananTransaction.
     * @param {SimpananTransactionUpsertArgs} args - Arguments to update or create a SimpananTransaction.
     * @example
     * // Update or create a SimpananTransaction
     * const simpananTransaction = await prisma.simpananTransaction.upsert({
     *   create: {
     *     // ... data to create a SimpananTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SimpananTransaction we want to update
     *   }
     * })
     */
    upsert<T extends SimpananTransactionUpsertArgs>(args: SelectSubset<T, SimpananTransactionUpsertArgs<ExtArgs>>): Prisma__SimpananTransactionClient<$Result.GetResult<Prisma.$SimpananTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SimpananTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananTransactionCountArgs} args - Arguments to filter SimpananTransactions to count.
     * @example
     * // Count the number of SimpananTransactions
     * const count = await prisma.simpananTransaction.count({
     *   where: {
     *     // ... the filter for the SimpananTransactions we want to count
     *   }
     * })
    **/
    count<T extends SimpananTransactionCountArgs>(
      args?: Subset<T, SimpananTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimpananTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SimpananTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SimpananTransactionAggregateArgs>(args: Subset<T, SimpananTransactionAggregateArgs>): Prisma.PrismaPromise<GetSimpananTransactionAggregateType<T>>

    /**
     * Group by SimpananTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimpananTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SimpananTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimpananTransactionGroupByArgs['orderBy'] }
        : { orderBy?: SimpananTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SimpananTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimpananTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SimpananTransaction model
   */
  readonly fields: SimpananTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SimpananTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimpananTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anggota<T extends AnggotaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnggotaDefaultArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    processor<T extends SimpananTransaction$processorArgs<ExtArgs> = {}>(args?: Subset<T, SimpananTransaction$processorArgs<ExtArgs>>): Prisma__AnggotaClient<$Result.GetResult<Prisma.$AnggotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    simpanan<T extends SimpananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimpananDefaultArgs<ExtArgs>>): Prisma__SimpananClient<$Result.GetResult<Prisma.$SimpananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SimpananTransaction model
   */
  interface SimpananTransactionFieldRefs {
    readonly id: FieldRef<"SimpananTransaction", 'String'>
    readonly anggotaId: FieldRef<"SimpananTransaction", 'String'>
    readonly type: FieldRef<"SimpananTransaction", 'String'>
    readonly category: FieldRef<"SimpananTransaction", 'String'>
    readonly amount: FieldRef<"SimpananTransaction", 'Decimal'>
    readonly balanceBefore: FieldRef<"SimpananTransaction", 'Decimal'>
    readonly balanceAfter: FieldRef<"SimpananTransaction", 'Decimal'>
    readonly description: FieldRef<"SimpananTransaction", 'String'>
    readonly processedBy: FieldRef<"SimpananTransaction", 'String'>
    readonly isSystemGenerated: FieldRef<"SimpananTransaction", 'Boolean'>
    readonly createdAt: FieldRef<"SimpananTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SimpananTransaction findUnique
   */
  export type SimpananTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SimpananTransaction to fetch.
     */
    where: SimpananTransactionWhereUniqueInput
  }

  /**
   * SimpananTransaction findUniqueOrThrow
   */
  export type SimpananTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SimpananTransaction to fetch.
     */
    where: SimpananTransactionWhereUniqueInput
  }

  /**
   * SimpananTransaction findFirst
   */
  export type SimpananTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SimpananTransaction to fetch.
     */
    where?: SimpananTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimpananTransactions to fetch.
     */
    orderBy?: SimpananTransactionOrderByWithRelationInput | SimpananTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SimpananTransactions.
     */
    cursor?: SimpananTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimpananTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimpananTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SimpananTransactions.
     */
    distinct?: SimpananTransactionScalarFieldEnum | SimpananTransactionScalarFieldEnum[]
  }

  /**
   * SimpananTransaction findFirstOrThrow
   */
  export type SimpananTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SimpananTransaction to fetch.
     */
    where?: SimpananTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimpananTransactions to fetch.
     */
    orderBy?: SimpananTransactionOrderByWithRelationInput | SimpananTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SimpananTransactions.
     */
    cursor?: SimpananTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimpananTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimpananTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SimpananTransactions.
     */
    distinct?: SimpananTransactionScalarFieldEnum | SimpananTransactionScalarFieldEnum[]
  }

  /**
   * SimpananTransaction findMany
   */
  export type SimpananTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SimpananTransactions to fetch.
     */
    where?: SimpananTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimpananTransactions to fetch.
     */
    orderBy?: SimpananTransactionOrderByWithRelationInput | SimpananTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SimpananTransactions.
     */
    cursor?: SimpananTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimpananTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimpananTransactions.
     */
    skip?: number
    distinct?: SimpananTransactionScalarFieldEnum | SimpananTransactionScalarFieldEnum[]
  }

  /**
   * SimpananTransaction create
   */
  export type SimpananTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a SimpananTransaction.
     */
    data: XOR<SimpananTransactionCreateInput, SimpananTransactionUncheckedCreateInput>
  }

  /**
   * SimpananTransaction createMany
   */
  export type SimpananTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SimpananTransactions.
     */
    data: SimpananTransactionCreateManyInput | SimpananTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SimpananTransaction createManyAndReturn
   */
  export type SimpananTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many SimpananTransactions.
     */
    data: SimpananTransactionCreateManyInput | SimpananTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SimpananTransaction update
   */
  export type SimpananTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a SimpananTransaction.
     */
    data: XOR<SimpananTransactionUpdateInput, SimpananTransactionUncheckedUpdateInput>
    /**
     * Choose, which SimpananTransaction to update.
     */
    where: SimpananTransactionWhereUniqueInput
  }

  /**
   * SimpananTransaction updateMany
   */
  export type SimpananTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SimpananTransactions.
     */
    data: XOR<SimpananTransactionUpdateManyMutationInput, SimpananTransactionUncheckedUpdateManyInput>
    /**
     * Filter which SimpananTransactions to update
     */
    where?: SimpananTransactionWhereInput
    /**
     * Limit how many SimpananTransactions to update.
     */
    limit?: number
  }

  /**
   * SimpananTransaction updateManyAndReturn
   */
  export type SimpananTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * The data used to update SimpananTransactions.
     */
    data: XOR<SimpananTransactionUpdateManyMutationInput, SimpananTransactionUncheckedUpdateManyInput>
    /**
     * Filter which SimpananTransactions to update
     */
    where?: SimpananTransactionWhereInput
    /**
     * Limit how many SimpananTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SimpananTransaction upsert
   */
  export type SimpananTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the SimpananTransaction to update in case it exists.
     */
    where: SimpananTransactionWhereUniqueInput
    /**
     * In case the SimpananTransaction found by the `where` argument doesn't exist, create a new SimpananTransaction with this data.
     */
    create: XOR<SimpananTransactionCreateInput, SimpananTransactionUncheckedCreateInput>
    /**
     * In case the SimpananTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimpananTransactionUpdateInput, SimpananTransactionUncheckedUpdateInput>
  }

  /**
   * SimpananTransaction delete
   */
  export type SimpananTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
    /**
     * Filter which SimpananTransaction to delete.
     */
    where: SimpananTransactionWhereUniqueInput
  }

  /**
   * SimpananTransaction deleteMany
   */
  export type SimpananTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SimpananTransactions to delete
     */
    where?: SimpananTransactionWhereInput
    /**
     * Limit how many SimpananTransactions to delete.
     */
    limit?: number
  }

  /**
   * SimpananTransaction.processor
   */
  export type SimpananTransaction$processorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anggota
     */
    select?: AnggotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anggota
     */
    omit?: AnggotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaInclude<ExtArgs> | null
    where?: AnggotaWhereInput
  }

  /**
   * SimpananTransaction without action
   */
  export type SimpananTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimpananTransaction
     */
    select?: SimpananTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimpananTransaction
     */
    omit?: SimpananTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimpananTransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnggotaScalarFieldEnum: {
    id: 'id',
    nrp: 'nrp',
    nama: 'nama',
    jabatan: 'jabatan',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnggotaScalarFieldEnum = (typeof AnggotaScalarFieldEnum)[keyof typeof AnggotaScalarFieldEnum]


  export const SimpananScalarFieldEnum: {
    anggotaId: 'anggotaId',
    simpananPokok: 'simpananPokok',
    simpananWajib: 'simpananWajib',
    simpananSukarela: 'simpananSukarela',
    tabunganHariRaya: 'tabunganHariRaya',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    lastUpdatedBy: 'lastUpdatedBy'
  };

  export type SimpananScalarFieldEnum = (typeof SimpananScalarFieldEnum)[keyof typeof SimpananScalarFieldEnum]


  export const TokoKategoriScalarFieldEnum: {
    id: 'id',
    namaKategori: 'namaKategori'
  };

  export type TokoKategoriScalarFieldEnum = (typeof TokoKategoriScalarFieldEnum)[keyof typeof TokoKategoriScalarFieldEnum]


  export const TokoProdukScalarFieldEnum: {
    id: 'id',
    namaProduk: 'namaProduk',
    fotoProduk: 'fotoProduk',
    harga: 'harga',
    kategoriId: 'kategoriId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deskripsi: 'deskripsi'
  };

  export type TokoProdukScalarFieldEnum = (typeof TokoProdukScalarFieldEnum)[keyof typeof TokoProdukScalarFieldEnum]


  export const PiutangScalarFieldEnum: {
    id: 'id',
    anggotaId: 'anggotaId',
    jenis: 'jenis',
    besarPinjaman: 'besarPinjaman',
    totalPiutang: 'totalPiutang',
    biayaAngsuran: 'biayaAngsuran',
    sisaPiutang: 'sisaPiutang',
    sisaAngsuran: 'sisaAngsuran',
    totalAngsuran: 'totalAngsuran',
    status: 'status',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PiutangScalarFieldEnum = (typeof PiutangScalarFieldEnum)[keyof typeof PiutangScalarFieldEnum]


  export const PiutangTransactionScalarFieldEnum: {
    id: 'id',
    piutangId: 'piutangId',
    type: 'type',
    amount: 'amount',
    description: 'description',
    processedBy: 'processedBy',
    createdAt: 'createdAt'
  };

  export type PiutangTransactionScalarFieldEnum = (typeof PiutangTransactionScalarFieldEnum)[keyof typeof PiutangTransactionScalarFieldEnum]


  export const SimpananTransactionScalarFieldEnum: {
    id: 'id',
    anggotaId: 'anggotaId',
    type: 'type',
    category: 'category',
    amount: 'amount',
    balanceBefore: 'balanceBefore',
    balanceAfter: 'balanceAfter',
    description: 'description',
    processedBy: 'processedBy',
    isSystemGenerated: 'isSystemGenerated',
    createdAt: 'createdAt'
  };

  export type SimpananTransactionScalarFieldEnum = (typeof SimpananTransactionScalarFieldEnum)[keyof typeof SimpananTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AnggotaWhereInput = {
    AND?: AnggotaWhereInput | AnggotaWhereInput[]
    OR?: AnggotaWhereInput[]
    NOT?: AnggotaWhereInput | AnggotaWhereInput[]
    id?: StringFilter<"Anggota"> | string
    nrp?: StringFilter<"Anggota"> | string
    nama?: StringFilter<"Anggota"> | string
    jabatan?: StringFilter<"Anggota"> | string
    password?: StringFilter<"Anggota"> | string
    role?: EnumRoleFilter<"Anggota"> | $Enums.Role
    createdAt?: DateTimeFilter<"Anggota"> | Date | string
    updatedAt?: DateTimeFilter<"Anggota"> | Date | string
    piutang?: PiutangListRelationFilter
    processedTransactions?: PiutangTransactionListRelationFilter
    simpanan?: XOR<SimpananNullableScalarRelationFilter, SimpananWhereInput> | null
    updatedSimpanan?: SimpananListRelationFilter
    simpananTransactions?: SimpananTransactionListRelationFilter
    processedSimpananTransactions?: SimpananTransactionListRelationFilter
  }

  export type AnggotaOrderByWithRelationInput = {
    id?: SortOrder
    nrp?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    piutang?: PiutangOrderByRelationAggregateInput
    processedTransactions?: PiutangTransactionOrderByRelationAggregateInput
    simpanan?: SimpananOrderByWithRelationInput
    updatedSimpanan?: SimpananOrderByRelationAggregateInput
    simpananTransactions?: SimpananTransactionOrderByRelationAggregateInput
    processedSimpananTransactions?: SimpananTransactionOrderByRelationAggregateInput
  }

  export type AnggotaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nrp?: string
    AND?: AnggotaWhereInput | AnggotaWhereInput[]
    OR?: AnggotaWhereInput[]
    NOT?: AnggotaWhereInput | AnggotaWhereInput[]
    nama?: StringFilter<"Anggota"> | string
    jabatan?: StringFilter<"Anggota"> | string
    password?: StringFilter<"Anggota"> | string
    role?: EnumRoleFilter<"Anggota"> | $Enums.Role
    createdAt?: DateTimeFilter<"Anggota"> | Date | string
    updatedAt?: DateTimeFilter<"Anggota"> | Date | string
    piutang?: PiutangListRelationFilter
    processedTransactions?: PiutangTransactionListRelationFilter
    simpanan?: XOR<SimpananNullableScalarRelationFilter, SimpananWhereInput> | null
    updatedSimpanan?: SimpananListRelationFilter
    simpananTransactions?: SimpananTransactionListRelationFilter
    processedSimpananTransactions?: SimpananTransactionListRelationFilter
  }, "id" | "nrp">

  export type AnggotaOrderByWithAggregationInput = {
    id?: SortOrder
    nrp?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnggotaCountOrderByAggregateInput
    _max?: AnggotaMaxOrderByAggregateInput
    _min?: AnggotaMinOrderByAggregateInput
  }

  export type AnggotaScalarWhereWithAggregatesInput = {
    AND?: AnggotaScalarWhereWithAggregatesInput | AnggotaScalarWhereWithAggregatesInput[]
    OR?: AnggotaScalarWhereWithAggregatesInput[]
    NOT?: AnggotaScalarWhereWithAggregatesInput | AnggotaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Anggota"> | string
    nrp?: StringWithAggregatesFilter<"Anggota"> | string
    nama?: StringWithAggregatesFilter<"Anggota"> | string
    jabatan?: StringWithAggregatesFilter<"Anggota"> | string
    password?: StringWithAggregatesFilter<"Anggota"> | string
    role?: EnumRoleWithAggregatesFilter<"Anggota"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Anggota"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Anggota"> | Date | string
  }

  export type SimpananWhereInput = {
    AND?: SimpananWhereInput | SimpananWhereInput[]
    OR?: SimpananWhereInput[]
    NOT?: SimpananWhereInput | SimpananWhereInput[]
    anggotaId?: StringFilter<"Simpanan"> | string
    simpananPokok?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"Simpanan"> | Date | string
    createdAt?: DateTimeFilter<"Simpanan"> | Date | string
    lastUpdatedBy?: StringNullableFilter<"Simpanan"> | string | null
    anggota?: XOR<AnggotaScalarRelationFilter, AnggotaWhereInput>
    updatedBy?: XOR<AnggotaNullableScalarRelationFilter, AnggotaWhereInput> | null
    simpananTransactions?: SimpananTransactionListRelationFilter
  }

  export type SimpananOrderByWithRelationInput = {
    anggotaId?: SortOrder
    simpananPokok?: SortOrder
    simpananWajib?: SortOrder
    simpananSukarela?: SortOrder
    tabunganHariRaya?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    lastUpdatedBy?: SortOrderInput | SortOrder
    anggota?: AnggotaOrderByWithRelationInput
    updatedBy?: AnggotaOrderByWithRelationInput
    simpananTransactions?: SimpananTransactionOrderByRelationAggregateInput
  }

  export type SimpananWhereUniqueInput = Prisma.AtLeast<{
    anggotaId?: string
    AND?: SimpananWhereInput | SimpananWhereInput[]
    OR?: SimpananWhereInput[]
    NOT?: SimpananWhereInput | SimpananWhereInput[]
    simpananPokok?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"Simpanan"> | Date | string
    createdAt?: DateTimeFilter<"Simpanan"> | Date | string
    lastUpdatedBy?: StringNullableFilter<"Simpanan"> | string | null
    anggota?: XOR<AnggotaScalarRelationFilter, AnggotaWhereInput>
    updatedBy?: XOR<AnggotaNullableScalarRelationFilter, AnggotaWhereInput> | null
    simpananTransactions?: SimpananTransactionListRelationFilter
  }, "anggotaId">

  export type SimpananOrderByWithAggregationInput = {
    anggotaId?: SortOrder
    simpananPokok?: SortOrder
    simpananWajib?: SortOrder
    simpananSukarela?: SortOrder
    tabunganHariRaya?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    lastUpdatedBy?: SortOrderInput | SortOrder
    _count?: SimpananCountOrderByAggregateInput
    _avg?: SimpananAvgOrderByAggregateInput
    _max?: SimpananMaxOrderByAggregateInput
    _min?: SimpananMinOrderByAggregateInput
    _sum?: SimpananSumOrderByAggregateInput
  }

  export type SimpananScalarWhereWithAggregatesInput = {
    AND?: SimpananScalarWhereWithAggregatesInput | SimpananScalarWhereWithAggregatesInput[]
    OR?: SimpananScalarWhereWithAggregatesInput[]
    NOT?: SimpananScalarWhereWithAggregatesInput | SimpananScalarWhereWithAggregatesInput[]
    anggotaId?: StringWithAggregatesFilter<"Simpanan"> | string
    simpananPokok?: DecimalWithAggregatesFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalWithAggregatesFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalWithAggregatesFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalWithAggregatesFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeWithAggregatesFilter<"Simpanan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Simpanan"> | Date | string
    lastUpdatedBy?: StringNullableWithAggregatesFilter<"Simpanan"> | string | null
  }

  export type TokoKategoriWhereInput = {
    AND?: TokoKategoriWhereInput | TokoKategoriWhereInput[]
    OR?: TokoKategoriWhereInput[]
    NOT?: TokoKategoriWhereInput | TokoKategoriWhereInput[]
    id?: StringFilter<"TokoKategori"> | string
    namaKategori?: StringFilter<"TokoKategori"> | string
    produk?: TokoProdukListRelationFilter
  }

  export type TokoKategoriOrderByWithRelationInput = {
    id?: SortOrder
    namaKategori?: SortOrder
    produk?: TokoProdukOrderByRelationAggregateInput
  }

  export type TokoKategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    namaKategori?: string
    AND?: TokoKategoriWhereInput | TokoKategoriWhereInput[]
    OR?: TokoKategoriWhereInput[]
    NOT?: TokoKategoriWhereInput | TokoKategoriWhereInput[]
    produk?: TokoProdukListRelationFilter
  }, "id" | "namaKategori">

  export type TokoKategoriOrderByWithAggregationInput = {
    id?: SortOrder
    namaKategori?: SortOrder
    _count?: TokoKategoriCountOrderByAggregateInput
    _max?: TokoKategoriMaxOrderByAggregateInput
    _min?: TokoKategoriMinOrderByAggregateInput
  }

  export type TokoKategoriScalarWhereWithAggregatesInput = {
    AND?: TokoKategoriScalarWhereWithAggregatesInput | TokoKategoriScalarWhereWithAggregatesInput[]
    OR?: TokoKategoriScalarWhereWithAggregatesInput[]
    NOT?: TokoKategoriScalarWhereWithAggregatesInput | TokoKategoriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokoKategori"> | string
    namaKategori?: StringWithAggregatesFilter<"TokoKategori"> | string
  }

  export type TokoProdukWhereInput = {
    AND?: TokoProdukWhereInput | TokoProdukWhereInput[]
    OR?: TokoProdukWhereInput[]
    NOT?: TokoProdukWhereInput | TokoProdukWhereInput[]
    id?: StringFilter<"TokoProduk"> | string
    namaProduk?: StringFilter<"TokoProduk"> | string
    fotoProduk?: StringNullableFilter<"TokoProduk"> | string | null
    harga?: DecimalFilter<"TokoProduk"> | Decimal | DecimalJsLike | number | string
    kategoriId?: StringNullableFilter<"TokoProduk"> | string | null
    createdAt?: DateTimeFilter<"TokoProduk"> | Date | string
    updatedAt?: DateTimeFilter<"TokoProduk"> | Date | string
    deskripsi?: StringNullableFilter<"TokoProduk"> | string | null
    kategori?: XOR<TokoKategoriNullableScalarRelationFilter, TokoKategoriWhereInput> | null
  }

  export type TokoProdukOrderByWithRelationInput = {
    id?: SortOrder
    namaProduk?: SortOrder
    fotoProduk?: SortOrderInput | SortOrder
    harga?: SortOrder
    kategoriId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    kategori?: TokoKategoriOrderByWithRelationInput
  }

  export type TokoProdukWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokoProdukWhereInput | TokoProdukWhereInput[]
    OR?: TokoProdukWhereInput[]
    NOT?: TokoProdukWhereInput | TokoProdukWhereInput[]
    namaProduk?: StringFilter<"TokoProduk"> | string
    fotoProduk?: StringNullableFilter<"TokoProduk"> | string | null
    harga?: DecimalFilter<"TokoProduk"> | Decimal | DecimalJsLike | number | string
    kategoriId?: StringNullableFilter<"TokoProduk"> | string | null
    createdAt?: DateTimeFilter<"TokoProduk"> | Date | string
    updatedAt?: DateTimeFilter<"TokoProduk"> | Date | string
    deskripsi?: StringNullableFilter<"TokoProduk"> | string | null
    kategori?: XOR<TokoKategoriNullableScalarRelationFilter, TokoKategoriWhereInput> | null
  }, "id">

  export type TokoProdukOrderByWithAggregationInput = {
    id?: SortOrder
    namaProduk?: SortOrder
    fotoProduk?: SortOrderInput | SortOrder
    harga?: SortOrder
    kategoriId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    _count?: TokoProdukCountOrderByAggregateInput
    _avg?: TokoProdukAvgOrderByAggregateInput
    _max?: TokoProdukMaxOrderByAggregateInput
    _min?: TokoProdukMinOrderByAggregateInput
    _sum?: TokoProdukSumOrderByAggregateInput
  }

  export type TokoProdukScalarWhereWithAggregatesInput = {
    AND?: TokoProdukScalarWhereWithAggregatesInput | TokoProdukScalarWhereWithAggregatesInput[]
    OR?: TokoProdukScalarWhereWithAggregatesInput[]
    NOT?: TokoProdukScalarWhereWithAggregatesInput | TokoProdukScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokoProduk"> | string
    namaProduk?: StringWithAggregatesFilter<"TokoProduk"> | string
    fotoProduk?: StringNullableWithAggregatesFilter<"TokoProduk"> | string | null
    harga?: DecimalWithAggregatesFilter<"TokoProduk"> | Decimal | DecimalJsLike | number | string
    kategoriId?: StringNullableWithAggregatesFilter<"TokoProduk"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TokoProduk"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TokoProduk"> | Date | string
    deskripsi?: StringNullableWithAggregatesFilter<"TokoProduk"> | string | null
  }

  export type PiutangWhereInput = {
    AND?: PiutangWhereInput | PiutangWhereInput[]
    OR?: PiutangWhereInput[]
    NOT?: PiutangWhereInput | PiutangWhereInput[]
    id?: StringFilter<"Piutang"> | string
    anggotaId?: StringFilter<"Piutang"> | string
    jenis?: StringFilter<"Piutang"> | string
    besarPinjaman?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFilter<"Piutang"> | number
    totalAngsuran?: IntFilter<"Piutang"> | number
    status?: StringFilter<"Piutang"> | string
    completedAt?: DateTimeNullableFilter<"Piutang"> | Date | string | null
    createdAt?: DateTimeFilter<"Piutang"> | Date | string
    updatedAt?: DateTimeFilter<"Piutang"> | Date | string
    anggota?: XOR<AnggotaScalarRelationFilter, AnggotaWhereInput>
    transactions?: PiutangTransactionListRelationFilter
  }

  export type PiutangOrderByWithRelationInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    jenis?: SortOrder
    besarPinjaman?: SortOrder
    totalPiutang?: SortOrder
    biayaAngsuran?: SortOrder
    sisaPiutang?: SortOrder
    sisaAngsuran?: SortOrder
    totalAngsuran?: SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    anggota?: AnggotaOrderByWithRelationInput
    transactions?: PiutangTransactionOrderByRelationAggregateInput
  }

  export type PiutangWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PiutangWhereInput | PiutangWhereInput[]
    OR?: PiutangWhereInput[]
    NOT?: PiutangWhereInput | PiutangWhereInput[]
    anggotaId?: StringFilter<"Piutang"> | string
    jenis?: StringFilter<"Piutang"> | string
    besarPinjaman?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFilter<"Piutang"> | number
    totalAngsuran?: IntFilter<"Piutang"> | number
    status?: StringFilter<"Piutang"> | string
    completedAt?: DateTimeNullableFilter<"Piutang"> | Date | string | null
    createdAt?: DateTimeFilter<"Piutang"> | Date | string
    updatedAt?: DateTimeFilter<"Piutang"> | Date | string
    anggota?: XOR<AnggotaScalarRelationFilter, AnggotaWhereInput>
    transactions?: PiutangTransactionListRelationFilter
  }, "id">

  export type PiutangOrderByWithAggregationInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    jenis?: SortOrder
    besarPinjaman?: SortOrder
    totalPiutang?: SortOrder
    biayaAngsuran?: SortOrder
    sisaPiutang?: SortOrder
    sisaAngsuran?: SortOrder
    totalAngsuran?: SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PiutangCountOrderByAggregateInput
    _avg?: PiutangAvgOrderByAggregateInput
    _max?: PiutangMaxOrderByAggregateInput
    _min?: PiutangMinOrderByAggregateInput
    _sum?: PiutangSumOrderByAggregateInput
  }

  export type PiutangScalarWhereWithAggregatesInput = {
    AND?: PiutangScalarWhereWithAggregatesInput | PiutangScalarWhereWithAggregatesInput[]
    OR?: PiutangScalarWhereWithAggregatesInput[]
    NOT?: PiutangScalarWhereWithAggregatesInput | PiutangScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Piutang"> | string
    anggotaId?: StringWithAggregatesFilter<"Piutang"> | string
    jenis?: StringWithAggregatesFilter<"Piutang"> | string
    besarPinjaman?: DecimalWithAggregatesFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalWithAggregatesFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalWithAggregatesFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalWithAggregatesFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntWithAggregatesFilter<"Piutang"> | number
    totalAngsuran?: IntWithAggregatesFilter<"Piutang"> | number
    status?: StringWithAggregatesFilter<"Piutang"> | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Piutang"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Piutang"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Piutang"> | Date | string
  }

  export type PiutangTransactionWhereInput = {
    AND?: PiutangTransactionWhereInput | PiutangTransactionWhereInput[]
    OR?: PiutangTransactionWhereInput[]
    NOT?: PiutangTransactionWhereInput | PiutangTransactionWhereInput[]
    id?: StringFilter<"PiutangTransaction"> | string
    piutangId?: StringFilter<"PiutangTransaction"> | string
    type?: StringFilter<"PiutangTransaction"> | string
    amount?: DecimalFilter<"PiutangTransaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"PiutangTransaction"> | string | null
    processedBy?: StringNullableFilter<"PiutangTransaction"> | string | null
    createdAt?: DateTimeFilter<"PiutangTransaction"> | Date | string
    piutang?: XOR<PiutangScalarRelationFilter, PiutangWhereInput>
    processor?: XOR<AnggotaNullableScalarRelationFilter, AnggotaWhereInput> | null
  }

  export type PiutangTransactionOrderByWithRelationInput = {
    id?: SortOrder
    piutangId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    piutang?: PiutangOrderByWithRelationInput
    processor?: AnggotaOrderByWithRelationInput
  }

  export type PiutangTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PiutangTransactionWhereInput | PiutangTransactionWhereInput[]
    OR?: PiutangTransactionWhereInput[]
    NOT?: PiutangTransactionWhereInput | PiutangTransactionWhereInput[]
    piutangId?: StringFilter<"PiutangTransaction"> | string
    type?: StringFilter<"PiutangTransaction"> | string
    amount?: DecimalFilter<"PiutangTransaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"PiutangTransaction"> | string | null
    processedBy?: StringNullableFilter<"PiutangTransaction"> | string | null
    createdAt?: DateTimeFilter<"PiutangTransaction"> | Date | string
    piutang?: XOR<PiutangScalarRelationFilter, PiutangWhereInput>
    processor?: XOR<AnggotaNullableScalarRelationFilter, AnggotaWhereInput> | null
  }, "id">

  export type PiutangTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    piutangId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PiutangTransactionCountOrderByAggregateInput
    _avg?: PiutangTransactionAvgOrderByAggregateInput
    _max?: PiutangTransactionMaxOrderByAggregateInput
    _min?: PiutangTransactionMinOrderByAggregateInput
    _sum?: PiutangTransactionSumOrderByAggregateInput
  }

  export type PiutangTransactionScalarWhereWithAggregatesInput = {
    AND?: PiutangTransactionScalarWhereWithAggregatesInput | PiutangTransactionScalarWhereWithAggregatesInput[]
    OR?: PiutangTransactionScalarWhereWithAggregatesInput[]
    NOT?: PiutangTransactionScalarWhereWithAggregatesInput | PiutangTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PiutangTransaction"> | string
    piutangId?: StringWithAggregatesFilter<"PiutangTransaction"> | string
    type?: StringWithAggregatesFilter<"PiutangTransaction"> | string
    amount?: DecimalWithAggregatesFilter<"PiutangTransaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"PiutangTransaction"> | string | null
    processedBy?: StringNullableWithAggregatesFilter<"PiutangTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PiutangTransaction"> | Date | string
  }

  export type SimpananTransactionWhereInput = {
    AND?: SimpananTransactionWhereInput | SimpananTransactionWhereInput[]
    OR?: SimpananTransactionWhereInput[]
    NOT?: SimpananTransactionWhereInput | SimpananTransactionWhereInput[]
    id?: StringFilter<"SimpananTransaction"> | string
    anggotaId?: StringFilter<"SimpananTransaction"> | string
    type?: StringFilter<"SimpananTransaction"> | string
    category?: StringFilter<"SimpananTransaction"> | string
    amount?: DecimalFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"SimpananTransaction"> | string | null
    processedBy?: StringNullableFilter<"SimpananTransaction"> | string | null
    isSystemGenerated?: BoolFilter<"SimpananTransaction"> | boolean
    createdAt?: DateTimeFilter<"SimpananTransaction"> | Date | string
    anggota?: XOR<AnggotaScalarRelationFilter, AnggotaWhereInput>
    processor?: XOR<AnggotaNullableScalarRelationFilter, AnggotaWhereInput> | null
    simpanan?: XOR<SimpananScalarRelationFilter, SimpananWhereInput>
  }

  export type SimpananTransactionOrderByWithRelationInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
    anggota?: AnggotaOrderByWithRelationInput
    processor?: AnggotaOrderByWithRelationInput
    simpanan?: SimpananOrderByWithRelationInput
  }

  export type SimpananTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SimpananTransactionWhereInput | SimpananTransactionWhereInput[]
    OR?: SimpananTransactionWhereInput[]
    NOT?: SimpananTransactionWhereInput | SimpananTransactionWhereInput[]
    anggotaId?: StringFilter<"SimpananTransaction"> | string
    type?: StringFilter<"SimpananTransaction"> | string
    category?: StringFilter<"SimpananTransaction"> | string
    amount?: DecimalFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"SimpananTransaction"> | string | null
    processedBy?: StringNullableFilter<"SimpananTransaction"> | string | null
    isSystemGenerated?: BoolFilter<"SimpananTransaction"> | boolean
    createdAt?: DateTimeFilter<"SimpananTransaction"> | Date | string
    anggota?: XOR<AnggotaScalarRelationFilter, AnggotaWhereInput>
    processor?: XOR<AnggotaNullableScalarRelationFilter, AnggotaWhereInput> | null
    simpanan?: XOR<SimpananScalarRelationFilter, SimpananWhereInput>
  }, "id">

  export type SimpananTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
    _count?: SimpananTransactionCountOrderByAggregateInput
    _avg?: SimpananTransactionAvgOrderByAggregateInput
    _max?: SimpananTransactionMaxOrderByAggregateInput
    _min?: SimpananTransactionMinOrderByAggregateInput
    _sum?: SimpananTransactionSumOrderByAggregateInput
  }

  export type SimpananTransactionScalarWhereWithAggregatesInput = {
    AND?: SimpananTransactionScalarWhereWithAggregatesInput | SimpananTransactionScalarWhereWithAggregatesInput[]
    OR?: SimpananTransactionScalarWhereWithAggregatesInput[]
    NOT?: SimpananTransactionScalarWhereWithAggregatesInput | SimpananTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SimpananTransaction"> | string
    anggotaId?: StringWithAggregatesFilter<"SimpananTransaction"> | string
    type?: StringWithAggregatesFilter<"SimpananTransaction"> | string
    category?: StringWithAggregatesFilter<"SimpananTransaction"> | string
    amount?: DecimalWithAggregatesFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalWithAggregatesFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalWithAggregatesFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"SimpananTransaction"> | string | null
    processedBy?: StringNullableWithAggregatesFilter<"SimpananTransaction"> | string | null
    isSystemGenerated?: BoolWithAggregatesFilter<"SimpananTransaction"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SimpananTransaction"> | Date | string
  }

  export type AnggotaCreateInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaUncheckedCreateInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangUncheckedCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionUncheckedCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananUncheckedCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananUncheckedCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUncheckedUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUncheckedUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUncheckedUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUncheckedUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaCreateManyInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnggotaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggotaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananCreateInput = {
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    anggota: AnggotaCreateNestedOneWithoutSimpananInput
    updatedBy?: AnggotaCreateNestedOneWithoutUpdatedSimpananInput
    simpananTransactions?: SimpananTransactionCreateNestedManyWithoutSimpananInput
  }

  export type SimpananUncheckedCreateInput = {
    anggotaId: string
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    lastUpdatedBy?: string | null
    simpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutSimpananInput
  }

  export type SimpananUpdateInput = {
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggota?: AnggotaUpdateOneRequiredWithoutSimpananNestedInput
    updatedBy?: AnggotaUpdateOneWithoutUpdatedSimpananNestedInput
    simpananTransactions?: SimpananTransactionUpdateManyWithoutSimpananNestedInput
  }

  export type SimpananUncheckedUpdateInput = {
    anggotaId?: StringFieldUpdateOperationsInput | string
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    simpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutSimpananNestedInput
  }

  export type SimpananCreateManyInput = {
    anggotaId: string
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    lastUpdatedBy?: string | null
  }

  export type SimpananUpdateManyMutationInput = {
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananUncheckedUpdateManyInput = {
    anggotaId?: StringFieldUpdateOperationsInput | string
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokoKategoriCreateInput = {
    id?: string
    namaKategori: string
    produk?: TokoProdukCreateNestedManyWithoutKategoriInput
  }

  export type TokoKategoriUncheckedCreateInput = {
    id?: string
    namaKategori: string
    produk?: TokoProdukUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type TokoKategoriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKategori?: StringFieldUpdateOperationsInput | string
    produk?: TokoProdukUpdateManyWithoutKategoriNestedInput
  }

  export type TokoKategoriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKategori?: StringFieldUpdateOperationsInput | string
    produk?: TokoProdukUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type TokoKategoriCreateManyInput = {
    id?: string
    namaKategori: string
  }

  export type TokoKategoriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKategori?: StringFieldUpdateOperationsInput | string
  }

  export type TokoKategoriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKategori?: StringFieldUpdateOperationsInput | string
  }

  export type TokoProdukCreateInput = {
    id?: string
    namaProduk: string
    fotoProduk?: string | null
    harga?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deskripsi?: string | null
    kategori?: TokoKategoriCreateNestedOneWithoutProdukInput
  }

  export type TokoProdukUncheckedCreateInput = {
    id?: string
    namaProduk: string
    fotoProduk?: string | null
    harga?: Decimal | DecimalJsLike | number | string
    kategoriId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deskripsi?: string | null
  }

  export type TokoProdukUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaProduk?: StringFieldUpdateOperationsInput | string
    fotoProduk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: TokoKategoriUpdateOneWithoutProdukNestedInput
  }

  export type TokoProdukUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaProduk?: StringFieldUpdateOperationsInput | string
    fotoProduk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoriId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokoProdukCreateManyInput = {
    id?: string
    namaProduk: string
    fotoProduk?: string | null
    harga?: Decimal | DecimalJsLike | number | string
    kategoriId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deskripsi?: string | null
  }

  export type TokoProdukUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaProduk?: StringFieldUpdateOperationsInput | string
    fotoProduk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokoProdukUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaProduk?: StringFieldUpdateOperationsInput | string
    fotoProduk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoriId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PiutangCreateInput = {
    id?: string
    jenis: string
    besarPinjaman?: Decimal | DecimalJsLike | number | string
    totalPiutang?: Decimal | DecimalJsLike | number | string
    biayaAngsuran?: Decimal | DecimalJsLike | number | string
    sisaPiutang?: Decimal | DecimalJsLike | number | string
    sisaAngsuran?: number
    totalAngsuran?: number
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anggota: AnggotaCreateNestedOneWithoutPiutangInput
    transactions?: PiutangTransactionCreateNestedManyWithoutPiutangInput
  }

  export type PiutangUncheckedCreateInput = {
    id?: string
    anggotaId: string
    jenis: string
    besarPinjaman?: Decimal | DecimalJsLike | number | string
    totalPiutang?: Decimal | DecimalJsLike | number | string
    biayaAngsuran?: Decimal | DecimalJsLike | number | string
    sisaPiutang?: Decimal | DecimalJsLike | number | string
    sisaAngsuran?: number
    totalAngsuran?: number
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: PiutangTransactionUncheckedCreateNestedManyWithoutPiutangInput
  }

  export type PiutangUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    besarPinjaman?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFieldUpdateOperationsInput | number
    totalAngsuran?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggota?: AnggotaUpdateOneRequiredWithoutPiutangNestedInput
    transactions?: PiutangTransactionUpdateManyWithoutPiutangNestedInput
  }

  export type PiutangUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggotaId?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    besarPinjaman?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFieldUpdateOperationsInput | number
    totalAngsuran?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: PiutangTransactionUncheckedUpdateManyWithoutPiutangNestedInput
  }

  export type PiutangCreateManyInput = {
    id?: string
    anggotaId: string
    jenis: string
    besarPinjaman?: Decimal | DecimalJsLike | number | string
    totalPiutang?: Decimal | DecimalJsLike | number | string
    biayaAngsuran?: Decimal | DecimalJsLike | number | string
    sisaPiutang?: Decimal | DecimalJsLike | number | string
    sisaAngsuran?: number
    totalAngsuran?: number
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PiutangUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    besarPinjaman?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFieldUpdateOperationsInput | number
    totalAngsuran?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiutangUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggotaId?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    besarPinjaman?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFieldUpdateOperationsInput | number
    totalAngsuran?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiutangTransactionCreateInput = {
    id?: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    piutang: PiutangCreateNestedOneWithoutTransactionsInput
    processor?: AnggotaCreateNestedOneWithoutProcessedTransactionsInput
  }

  export type PiutangTransactionUncheckedCreateInput = {
    id?: string
    piutangId: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    createdAt?: Date | string
  }

  export type PiutangTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUpdateOneRequiredWithoutTransactionsNestedInput
    processor?: AnggotaUpdateOneWithoutProcessedTransactionsNestedInput
  }

  export type PiutangTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    piutangId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiutangTransactionCreateManyInput = {
    id?: string
    piutangId: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    createdAt?: Date | string
  }

  export type PiutangTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiutangTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    piutangId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananTransactionCreateInput = {
    id?: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    anggota: AnggotaCreateNestedOneWithoutSimpananTransactionsInput
    processor?: AnggotaCreateNestedOneWithoutProcessedSimpananTransactionsInput
    simpanan: SimpananCreateNestedOneWithoutSimpananTransactionsInput
  }

  export type SimpananTransactionUncheckedCreateInput = {
    id?: string
    anggotaId: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
  }

  export type SimpananTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggota?: AnggotaUpdateOneRequiredWithoutSimpananTransactionsNestedInput
    processor?: AnggotaUpdateOneWithoutProcessedSimpananTransactionsNestedInput
    simpanan?: SimpananUpdateOneRequiredWithoutSimpananTransactionsNestedInput
  }

  export type SimpananTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggotaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananTransactionCreateManyInput = {
    id?: string
    anggotaId: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
  }

  export type SimpananTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggotaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PiutangListRelationFilter = {
    every?: PiutangWhereInput
    some?: PiutangWhereInput
    none?: PiutangWhereInput
  }

  export type PiutangTransactionListRelationFilter = {
    every?: PiutangTransactionWhereInput
    some?: PiutangTransactionWhereInput
    none?: PiutangTransactionWhereInput
  }

  export type SimpananNullableScalarRelationFilter = {
    is?: SimpananWhereInput | null
    isNot?: SimpananWhereInput | null
  }

  export type SimpananListRelationFilter = {
    every?: SimpananWhereInput
    some?: SimpananWhereInput
    none?: SimpananWhereInput
  }

  export type SimpananTransactionListRelationFilter = {
    every?: SimpananTransactionWhereInput
    some?: SimpananTransactionWhereInput
    none?: SimpananTransactionWhereInput
  }

  export type PiutangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PiutangTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SimpananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SimpananTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnggotaCountOrderByAggregateInput = {
    id?: SortOrder
    nrp?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnggotaMaxOrderByAggregateInput = {
    id?: SortOrder
    nrp?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnggotaMinOrderByAggregateInput = {
    id?: SortOrder
    nrp?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AnggotaScalarRelationFilter = {
    is?: AnggotaWhereInput
    isNot?: AnggotaWhereInput
  }

  export type AnggotaNullableScalarRelationFilter = {
    is?: AnggotaWhereInput | null
    isNot?: AnggotaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SimpananCountOrderByAggregateInput = {
    anggotaId?: SortOrder
    simpananPokok?: SortOrder
    simpananWajib?: SortOrder
    simpananSukarela?: SortOrder
    tabunganHariRaya?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    lastUpdatedBy?: SortOrder
  }

  export type SimpananAvgOrderByAggregateInput = {
    simpananPokok?: SortOrder
    simpananWajib?: SortOrder
    simpananSukarela?: SortOrder
    tabunganHariRaya?: SortOrder
  }

  export type SimpananMaxOrderByAggregateInput = {
    anggotaId?: SortOrder
    simpananPokok?: SortOrder
    simpananWajib?: SortOrder
    simpananSukarela?: SortOrder
    tabunganHariRaya?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    lastUpdatedBy?: SortOrder
  }

  export type SimpananMinOrderByAggregateInput = {
    anggotaId?: SortOrder
    simpananPokok?: SortOrder
    simpananWajib?: SortOrder
    simpananSukarela?: SortOrder
    tabunganHariRaya?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    lastUpdatedBy?: SortOrder
  }

  export type SimpananSumOrderByAggregateInput = {
    simpananPokok?: SortOrder
    simpananWajib?: SortOrder
    simpananSukarela?: SortOrder
    tabunganHariRaya?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TokoProdukListRelationFilter = {
    every?: TokoProdukWhereInput
    some?: TokoProdukWhereInput
    none?: TokoProdukWhereInput
  }

  export type TokoProdukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokoKategoriCountOrderByAggregateInput = {
    id?: SortOrder
    namaKategori?: SortOrder
  }

  export type TokoKategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    namaKategori?: SortOrder
  }

  export type TokoKategoriMinOrderByAggregateInput = {
    id?: SortOrder
    namaKategori?: SortOrder
  }

  export type TokoKategoriNullableScalarRelationFilter = {
    is?: TokoKategoriWhereInput | null
    isNot?: TokoKategoriWhereInput | null
  }

  export type TokoProdukCountOrderByAggregateInput = {
    id?: SortOrder
    namaProduk?: SortOrder
    fotoProduk?: SortOrder
    harga?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deskripsi?: SortOrder
  }

  export type TokoProdukAvgOrderByAggregateInput = {
    harga?: SortOrder
  }

  export type TokoProdukMaxOrderByAggregateInput = {
    id?: SortOrder
    namaProduk?: SortOrder
    fotoProduk?: SortOrder
    harga?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deskripsi?: SortOrder
  }

  export type TokoProdukMinOrderByAggregateInput = {
    id?: SortOrder
    namaProduk?: SortOrder
    fotoProduk?: SortOrder
    harga?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deskripsi?: SortOrder
  }

  export type TokoProdukSumOrderByAggregateInput = {
    harga?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PiutangCountOrderByAggregateInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    jenis?: SortOrder
    besarPinjaman?: SortOrder
    totalPiutang?: SortOrder
    biayaAngsuran?: SortOrder
    sisaPiutang?: SortOrder
    sisaAngsuran?: SortOrder
    totalAngsuran?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PiutangAvgOrderByAggregateInput = {
    besarPinjaman?: SortOrder
    totalPiutang?: SortOrder
    biayaAngsuran?: SortOrder
    sisaPiutang?: SortOrder
    sisaAngsuran?: SortOrder
    totalAngsuran?: SortOrder
  }

  export type PiutangMaxOrderByAggregateInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    jenis?: SortOrder
    besarPinjaman?: SortOrder
    totalPiutang?: SortOrder
    biayaAngsuran?: SortOrder
    sisaPiutang?: SortOrder
    sisaAngsuran?: SortOrder
    totalAngsuran?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PiutangMinOrderByAggregateInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    jenis?: SortOrder
    besarPinjaman?: SortOrder
    totalPiutang?: SortOrder
    biayaAngsuran?: SortOrder
    sisaPiutang?: SortOrder
    sisaAngsuran?: SortOrder
    totalAngsuran?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PiutangSumOrderByAggregateInput = {
    besarPinjaman?: SortOrder
    totalPiutang?: SortOrder
    biayaAngsuran?: SortOrder
    sisaPiutang?: SortOrder
    sisaAngsuran?: SortOrder
    totalAngsuran?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PiutangScalarRelationFilter = {
    is?: PiutangWhereInput
    isNot?: PiutangWhereInput
  }

  export type PiutangTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    piutangId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    processedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PiutangTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PiutangTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    piutangId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    processedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PiutangTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    piutangId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    processedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PiutangTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SimpananScalarRelationFilter = {
    is?: SimpananWhereInput
    isNot?: SimpananWhereInput
  }

  export type SimpananTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    processedBy?: SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
  }

  export type SimpananTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type SimpananTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    processedBy?: SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
  }

  export type SimpananTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    anggotaId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    processedBy?: SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
  }

  export type SimpananTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PiutangCreateNestedManyWithoutAnggotaInput = {
    create?: XOR<PiutangCreateWithoutAnggotaInput, PiutangUncheckedCreateWithoutAnggotaInput> | PiutangCreateWithoutAnggotaInput[] | PiutangUncheckedCreateWithoutAnggotaInput[]
    connectOrCreate?: PiutangCreateOrConnectWithoutAnggotaInput | PiutangCreateOrConnectWithoutAnggotaInput[]
    createMany?: PiutangCreateManyAnggotaInputEnvelope
    connect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
  }

  export type PiutangTransactionCreateNestedManyWithoutProcessorInput = {
    create?: XOR<PiutangTransactionCreateWithoutProcessorInput, PiutangTransactionUncheckedCreateWithoutProcessorInput> | PiutangTransactionCreateWithoutProcessorInput[] | PiutangTransactionUncheckedCreateWithoutProcessorInput[]
    connectOrCreate?: PiutangTransactionCreateOrConnectWithoutProcessorInput | PiutangTransactionCreateOrConnectWithoutProcessorInput[]
    createMany?: PiutangTransactionCreateManyProcessorInputEnvelope
    connect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
  }

  export type SimpananCreateNestedOneWithoutAnggotaInput = {
    create?: XOR<SimpananCreateWithoutAnggotaInput, SimpananUncheckedCreateWithoutAnggotaInput>
    connectOrCreate?: SimpananCreateOrConnectWithoutAnggotaInput
    connect?: SimpananWhereUniqueInput
  }

  export type SimpananCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<SimpananCreateWithoutUpdatedByInput, SimpananUncheckedCreateWithoutUpdatedByInput> | SimpananCreateWithoutUpdatedByInput[] | SimpananUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SimpananCreateOrConnectWithoutUpdatedByInput | SimpananCreateOrConnectWithoutUpdatedByInput[]
    createMany?: SimpananCreateManyUpdatedByInputEnvelope
    connect?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
  }

  export type SimpananTransactionCreateNestedManyWithoutAnggotaInput = {
    create?: XOR<SimpananTransactionCreateWithoutAnggotaInput, SimpananTransactionUncheckedCreateWithoutAnggotaInput> | SimpananTransactionCreateWithoutAnggotaInput[] | SimpananTransactionUncheckedCreateWithoutAnggotaInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutAnggotaInput | SimpananTransactionCreateOrConnectWithoutAnggotaInput[]
    createMany?: SimpananTransactionCreateManyAnggotaInputEnvelope
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
  }

  export type SimpananTransactionCreateNestedManyWithoutProcessorInput = {
    create?: XOR<SimpananTransactionCreateWithoutProcessorInput, SimpananTransactionUncheckedCreateWithoutProcessorInput> | SimpananTransactionCreateWithoutProcessorInput[] | SimpananTransactionUncheckedCreateWithoutProcessorInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutProcessorInput | SimpananTransactionCreateOrConnectWithoutProcessorInput[]
    createMany?: SimpananTransactionCreateManyProcessorInputEnvelope
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
  }

  export type PiutangUncheckedCreateNestedManyWithoutAnggotaInput = {
    create?: XOR<PiutangCreateWithoutAnggotaInput, PiutangUncheckedCreateWithoutAnggotaInput> | PiutangCreateWithoutAnggotaInput[] | PiutangUncheckedCreateWithoutAnggotaInput[]
    connectOrCreate?: PiutangCreateOrConnectWithoutAnggotaInput | PiutangCreateOrConnectWithoutAnggotaInput[]
    createMany?: PiutangCreateManyAnggotaInputEnvelope
    connect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
  }

  export type PiutangTransactionUncheckedCreateNestedManyWithoutProcessorInput = {
    create?: XOR<PiutangTransactionCreateWithoutProcessorInput, PiutangTransactionUncheckedCreateWithoutProcessorInput> | PiutangTransactionCreateWithoutProcessorInput[] | PiutangTransactionUncheckedCreateWithoutProcessorInput[]
    connectOrCreate?: PiutangTransactionCreateOrConnectWithoutProcessorInput | PiutangTransactionCreateOrConnectWithoutProcessorInput[]
    createMany?: PiutangTransactionCreateManyProcessorInputEnvelope
    connect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
  }

  export type SimpananUncheckedCreateNestedOneWithoutAnggotaInput = {
    create?: XOR<SimpananCreateWithoutAnggotaInput, SimpananUncheckedCreateWithoutAnggotaInput>
    connectOrCreate?: SimpananCreateOrConnectWithoutAnggotaInput
    connect?: SimpananWhereUniqueInput
  }

  export type SimpananUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<SimpananCreateWithoutUpdatedByInput, SimpananUncheckedCreateWithoutUpdatedByInput> | SimpananCreateWithoutUpdatedByInput[] | SimpananUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SimpananCreateOrConnectWithoutUpdatedByInput | SimpananCreateOrConnectWithoutUpdatedByInput[]
    createMany?: SimpananCreateManyUpdatedByInputEnvelope
    connect?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
  }

  export type SimpananTransactionUncheckedCreateNestedManyWithoutAnggotaInput = {
    create?: XOR<SimpananTransactionCreateWithoutAnggotaInput, SimpananTransactionUncheckedCreateWithoutAnggotaInput> | SimpananTransactionCreateWithoutAnggotaInput[] | SimpananTransactionUncheckedCreateWithoutAnggotaInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutAnggotaInput | SimpananTransactionCreateOrConnectWithoutAnggotaInput[]
    createMany?: SimpananTransactionCreateManyAnggotaInputEnvelope
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
  }

  export type SimpananTransactionUncheckedCreateNestedManyWithoutProcessorInput = {
    create?: XOR<SimpananTransactionCreateWithoutProcessorInput, SimpananTransactionUncheckedCreateWithoutProcessorInput> | SimpananTransactionCreateWithoutProcessorInput[] | SimpananTransactionUncheckedCreateWithoutProcessorInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutProcessorInput | SimpananTransactionCreateOrConnectWithoutProcessorInput[]
    createMany?: SimpananTransactionCreateManyProcessorInputEnvelope
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PiutangUpdateManyWithoutAnggotaNestedInput = {
    create?: XOR<PiutangCreateWithoutAnggotaInput, PiutangUncheckedCreateWithoutAnggotaInput> | PiutangCreateWithoutAnggotaInput[] | PiutangUncheckedCreateWithoutAnggotaInput[]
    connectOrCreate?: PiutangCreateOrConnectWithoutAnggotaInput | PiutangCreateOrConnectWithoutAnggotaInput[]
    upsert?: PiutangUpsertWithWhereUniqueWithoutAnggotaInput | PiutangUpsertWithWhereUniqueWithoutAnggotaInput[]
    createMany?: PiutangCreateManyAnggotaInputEnvelope
    set?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    disconnect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    delete?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    connect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    update?: PiutangUpdateWithWhereUniqueWithoutAnggotaInput | PiutangUpdateWithWhereUniqueWithoutAnggotaInput[]
    updateMany?: PiutangUpdateManyWithWhereWithoutAnggotaInput | PiutangUpdateManyWithWhereWithoutAnggotaInput[]
    deleteMany?: PiutangScalarWhereInput | PiutangScalarWhereInput[]
  }

  export type PiutangTransactionUpdateManyWithoutProcessorNestedInput = {
    create?: XOR<PiutangTransactionCreateWithoutProcessorInput, PiutangTransactionUncheckedCreateWithoutProcessorInput> | PiutangTransactionCreateWithoutProcessorInput[] | PiutangTransactionUncheckedCreateWithoutProcessorInput[]
    connectOrCreate?: PiutangTransactionCreateOrConnectWithoutProcessorInput | PiutangTransactionCreateOrConnectWithoutProcessorInput[]
    upsert?: PiutangTransactionUpsertWithWhereUniqueWithoutProcessorInput | PiutangTransactionUpsertWithWhereUniqueWithoutProcessorInput[]
    createMany?: PiutangTransactionCreateManyProcessorInputEnvelope
    set?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    disconnect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    delete?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    connect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    update?: PiutangTransactionUpdateWithWhereUniqueWithoutProcessorInput | PiutangTransactionUpdateWithWhereUniqueWithoutProcessorInput[]
    updateMany?: PiutangTransactionUpdateManyWithWhereWithoutProcessorInput | PiutangTransactionUpdateManyWithWhereWithoutProcessorInput[]
    deleteMany?: PiutangTransactionScalarWhereInput | PiutangTransactionScalarWhereInput[]
  }

  export type SimpananUpdateOneWithoutAnggotaNestedInput = {
    create?: XOR<SimpananCreateWithoutAnggotaInput, SimpananUncheckedCreateWithoutAnggotaInput>
    connectOrCreate?: SimpananCreateOrConnectWithoutAnggotaInput
    upsert?: SimpananUpsertWithoutAnggotaInput
    disconnect?: SimpananWhereInput | boolean
    delete?: SimpananWhereInput | boolean
    connect?: SimpananWhereUniqueInput
    update?: XOR<XOR<SimpananUpdateToOneWithWhereWithoutAnggotaInput, SimpananUpdateWithoutAnggotaInput>, SimpananUncheckedUpdateWithoutAnggotaInput>
  }

  export type SimpananUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<SimpananCreateWithoutUpdatedByInput, SimpananUncheckedCreateWithoutUpdatedByInput> | SimpananCreateWithoutUpdatedByInput[] | SimpananUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SimpananCreateOrConnectWithoutUpdatedByInput | SimpananCreateOrConnectWithoutUpdatedByInput[]
    upsert?: SimpananUpsertWithWhereUniqueWithoutUpdatedByInput | SimpananUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: SimpananCreateManyUpdatedByInputEnvelope
    set?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
    disconnect?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
    delete?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
    connect?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
    update?: SimpananUpdateWithWhereUniqueWithoutUpdatedByInput | SimpananUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: SimpananUpdateManyWithWhereWithoutUpdatedByInput | SimpananUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: SimpananScalarWhereInput | SimpananScalarWhereInput[]
  }

  export type SimpananTransactionUpdateManyWithoutAnggotaNestedInput = {
    create?: XOR<SimpananTransactionCreateWithoutAnggotaInput, SimpananTransactionUncheckedCreateWithoutAnggotaInput> | SimpananTransactionCreateWithoutAnggotaInput[] | SimpananTransactionUncheckedCreateWithoutAnggotaInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutAnggotaInput | SimpananTransactionCreateOrConnectWithoutAnggotaInput[]
    upsert?: SimpananTransactionUpsertWithWhereUniqueWithoutAnggotaInput | SimpananTransactionUpsertWithWhereUniqueWithoutAnggotaInput[]
    createMany?: SimpananTransactionCreateManyAnggotaInputEnvelope
    set?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    disconnect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    delete?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    update?: SimpananTransactionUpdateWithWhereUniqueWithoutAnggotaInput | SimpananTransactionUpdateWithWhereUniqueWithoutAnggotaInput[]
    updateMany?: SimpananTransactionUpdateManyWithWhereWithoutAnggotaInput | SimpananTransactionUpdateManyWithWhereWithoutAnggotaInput[]
    deleteMany?: SimpananTransactionScalarWhereInput | SimpananTransactionScalarWhereInput[]
  }

  export type SimpananTransactionUpdateManyWithoutProcessorNestedInput = {
    create?: XOR<SimpananTransactionCreateWithoutProcessorInput, SimpananTransactionUncheckedCreateWithoutProcessorInput> | SimpananTransactionCreateWithoutProcessorInput[] | SimpananTransactionUncheckedCreateWithoutProcessorInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutProcessorInput | SimpananTransactionCreateOrConnectWithoutProcessorInput[]
    upsert?: SimpananTransactionUpsertWithWhereUniqueWithoutProcessorInput | SimpananTransactionUpsertWithWhereUniqueWithoutProcessorInput[]
    createMany?: SimpananTransactionCreateManyProcessorInputEnvelope
    set?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    disconnect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    delete?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    update?: SimpananTransactionUpdateWithWhereUniqueWithoutProcessorInput | SimpananTransactionUpdateWithWhereUniqueWithoutProcessorInput[]
    updateMany?: SimpananTransactionUpdateManyWithWhereWithoutProcessorInput | SimpananTransactionUpdateManyWithWhereWithoutProcessorInput[]
    deleteMany?: SimpananTransactionScalarWhereInput | SimpananTransactionScalarWhereInput[]
  }

  export type PiutangUncheckedUpdateManyWithoutAnggotaNestedInput = {
    create?: XOR<PiutangCreateWithoutAnggotaInput, PiutangUncheckedCreateWithoutAnggotaInput> | PiutangCreateWithoutAnggotaInput[] | PiutangUncheckedCreateWithoutAnggotaInput[]
    connectOrCreate?: PiutangCreateOrConnectWithoutAnggotaInput | PiutangCreateOrConnectWithoutAnggotaInput[]
    upsert?: PiutangUpsertWithWhereUniqueWithoutAnggotaInput | PiutangUpsertWithWhereUniqueWithoutAnggotaInput[]
    createMany?: PiutangCreateManyAnggotaInputEnvelope
    set?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    disconnect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    delete?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    connect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    update?: PiutangUpdateWithWhereUniqueWithoutAnggotaInput | PiutangUpdateWithWhereUniqueWithoutAnggotaInput[]
    updateMany?: PiutangUpdateManyWithWhereWithoutAnggotaInput | PiutangUpdateManyWithWhereWithoutAnggotaInput[]
    deleteMany?: PiutangScalarWhereInput | PiutangScalarWhereInput[]
  }

  export type PiutangTransactionUncheckedUpdateManyWithoutProcessorNestedInput = {
    create?: XOR<PiutangTransactionCreateWithoutProcessorInput, PiutangTransactionUncheckedCreateWithoutProcessorInput> | PiutangTransactionCreateWithoutProcessorInput[] | PiutangTransactionUncheckedCreateWithoutProcessorInput[]
    connectOrCreate?: PiutangTransactionCreateOrConnectWithoutProcessorInput | PiutangTransactionCreateOrConnectWithoutProcessorInput[]
    upsert?: PiutangTransactionUpsertWithWhereUniqueWithoutProcessorInput | PiutangTransactionUpsertWithWhereUniqueWithoutProcessorInput[]
    createMany?: PiutangTransactionCreateManyProcessorInputEnvelope
    set?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    disconnect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    delete?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    connect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    update?: PiutangTransactionUpdateWithWhereUniqueWithoutProcessorInput | PiutangTransactionUpdateWithWhereUniqueWithoutProcessorInput[]
    updateMany?: PiutangTransactionUpdateManyWithWhereWithoutProcessorInput | PiutangTransactionUpdateManyWithWhereWithoutProcessorInput[]
    deleteMany?: PiutangTransactionScalarWhereInput | PiutangTransactionScalarWhereInput[]
  }

  export type SimpananUncheckedUpdateOneWithoutAnggotaNestedInput = {
    create?: XOR<SimpananCreateWithoutAnggotaInput, SimpananUncheckedCreateWithoutAnggotaInput>
    connectOrCreate?: SimpananCreateOrConnectWithoutAnggotaInput
    upsert?: SimpananUpsertWithoutAnggotaInput
    disconnect?: SimpananWhereInput | boolean
    delete?: SimpananWhereInput | boolean
    connect?: SimpananWhereUniqueInput
    update?: XOR<XOR<SimpananUpdateToOneWithWhereWithoutAnggotaInput, SimpananUpdateWithoutAnggotaInput>, SimpananUncheckedUpdateWithoutAnggotaInput>
  }

  export type SimpananUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<SimpananCreateWithoutUpdatedByInput, SimpananUncheckedCreateWithoutUpdatedByInput> | SimpananCreateWithoutUpdatedByInput[] | SimpananUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SimpananCreateOrConnectWithoutUpdatedByInput | SimpananCreateOrConnectWithoutUpdatedByInput[]
    upsert?: SimpananUpsertWithWhereUniqueWithoutUpdatedByInput | SimpananUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: SimpananCreateManyUpdatedByInputEnvelope
    set?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
    disconnect?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
    delete?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
    connect?: SimpananWhereUniqueInput | SimpananWhereUniqueInput[]
    update?: SimpananUpdateWithWhereUniqueWithoutUpdatedByInput | SimpananUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: SimpananUpdateManyWithWhereWithoutUpdatedByInput | SimpananUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: SimpananScalarWhereInput | SimpananScalarWhereInput[]
  }

  export type SimpananTransactionUncheckedUpdateManyWithoutAnggotaNestedInput = {
    create?: XOR<SimpananTransactionCreateWithoutAnggotaInput, SimpananTransactionUncheckedCreateWithoutAnggotaInput> | SimpananTransactionCreateWithoutAnggotaInput[] | SimpananTransactionUncheckedCreateWithoutAnggotaInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutAnggotaInput | SimpananTransactionCreateOrConnectWithoutAnggotaInput[]
    upsert?: SimpananTransactionUpsertWithWhereUniqueWithoutAnggotaInput | SimpananTransactionUpsertWithWhereUniqueWithoutAnggotaInput[]
    createMany?: SimpananTransactionCreateManyAnggotaInputEnvelope
    set?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    disconnect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    delete?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    update?: SimpananTransactionUpdateWithWhereUniqueWithoutAnggotaInput | SimpananTransactionUpdateWithWhereUniqueWithoutAnggotaInput[]
    updateMany?: SimpananTransactionUpdateManyWithWhereWithoutAnggotaInput | SimpananTransactionUpdateManyWithWhereWithoutAnggotaInput[]
    deleteMany?: SimpananTransactionScalarWhereInput | SimpananTransactionScalarWhereInput[]
  }

  export type SimpananTransactionUncheckedUpdateManyWithoutProcessorNestedInput = {
    create?: XOR<SimpananTransactionCreateWithoutProcessorInput, SimpananTransactionUncheckedCreateWithoutProcessorInput> | SimpananTransactionCreateWithoutProcessorInput[] | SimpananTransactionUncheckedCreateWithoutProcessorInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutProcessorInput | SimpananTransactionCreateOrConnectWithoutProcessorInput[]
    upsert?: SimpananTransactionUpsertWithWhereUniqueWithoutProcessorInput | SimpananTransactionUpsertWithWhereUniqueWithoutProcessorInput[]
    createMany?: SimpananTransactionCreateManyProcessorInputEnvelope
    set?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    disconnect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    delete?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    update?: SimpananTransactionUpdateWithWhereUniqueWithoutProcessorInput | SimpananTransactionUpdateWithWhereUniqueWithoutProcessorInput[]
    updateMany?: SimpananTransactionUpdateManyWithWhereWithoutProcessorInput | SimpananTransactionUpdateManyWithWhereWithoutProcessorInput[]
    deleteMany?: SimpananTransactionScalarWhereInput | SimpananTransactionScalarWhereInput[]
  }

  export type AnggotaCreateNestedOneWithoutSimpananInput = {
    create?: XOR<AnggotaCreateWithoutSimpananInput, AnggotaUncheckedCreateWithoutSimpananInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutSimpananInput
    connect?: AnggotaWhereUniqueInput
  }

  export type AnggotaCreateNestedOneWithoutUpdatedSimpananInput = {
    create?: XOR<AnggotaCreateWithoutUpdatedSimpananInput, AnggotaUncheckedCreateWithoutUpdatedSimpananInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutUpdatedSimpananInput
    connect?: AnggotaWhereUniqueInput
  }

  export type SimpananTransactionCreateNestedManyWithoutSimpananInput = {
    create?: XOR<SimpananTransactionCreateWithoutSimpananInput, SimpananTransactionUncheckedCreateWithoutSimpananInput> | SimpananTransactionCreateWithoutSimpananInput[] | SimpananTransactionUncheckedCreateWithoutSimpananInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutSimpananInput | SimpananTransactionCreateOrConnectWithoutSimpananInput[]
    createMany?: SimpananTransactionCreateManySimpananInputEnvelope
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
  }

  export type SimpananTransactionUncheckedCreateNestedManyWithoutSimpananInput = {
    create?: XOR<SimpananTransactionCreateWithoutSimpananInput, SimpananTransactionUncheckedCreateWithoutSimpananInput> | SimpananTransactionCreateWithoutSimpananInput[] | SimpananTransactionUncheckedCreateWithoutSimpananInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutSimpananInput | SimpananTransactionCreateOrConnectWithoutSimpananInput[]
    createMany?: SimpananTransactionCreateManySimpananInputEnvelope
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AnggotaUpdateOneRequiredWithoutSimpananNestedInput = {
    create?: XOR<AnggotaCreateWithoutSimpananInput, AnggotaUncheckedCreateWithoutSimpananInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutSimpananInput
    upsert?: AnggotaUpsertWithoutSimpananInput
    connect?: AnggotaWhereUniqueInput
    update?: XOR<XOR<AnggotaUpdateToOneWithWhereWithoutSimpananInput, AnggotaUpdateWithoutSimpananInput>, AnggotaUncheckedUpdateWithoutSimpananInput>
  }

  export type AnggotaUpdateOneWithoutUpdatedSimpananNestedInput = {
    create?: XOR<AnggotaCreateWithoutUpdatedSimpananInput, AnggotaUncheckedCreateWithoutUpdatedSimpananInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutUpdatedSimpananInput
    upsert?: AnggotaUpsertWithoutUpdatedSimpananInput
    disconnect?: AnggotaWhereInput | boolean
    delete?: AnggotaWhereInput | boolean
    connect?: AnggotaWhereUniqueInput
    update?: XOR<XOR<AnggotaUpdateToOneWithWhereWithoutUpdatedSimpananInput, AnggotaUpdateWithoutUpdatedSimpananInput>, AnggotaUncheckedUpdateWithoutUpdatedSimpananInput>
  }

  export type SimpananTransactionUpdateManyWithoutSimpananNestedInput = {
    create?: XOR<SimpananTransactionCreateWithoutSimpananInput, SimpananTransactionUncheckedCreateWithoutSimpananInput> | SimpananTransactionCreateWithoutSimpananInput[] | SimpananTransactionUncheckedCreateWithoutSimpananInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutSimpananInput | SimpananTransactionCreateOrConnectWithoutSimpananInput[]
    upsert?: SimpananTransactionUpsertWithWhereUniqueWithoutSimpananInput | SimpananTransactionUpsertWithWhereUniqueWithoutSimpananInput[]
    createMany?: SimpananTransactionCreateManySimpananInputEnvelope
    set?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    disconnect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    delete?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    update?: SimpananTransactionUpdateWithWhereUniqueWithoutSimpananInput | SimpananTransactionUpdateWithWhereUniqueWithoutSimpananInput[]
    updateMany?: SimpananTransactionUpdateManyWithWhereWithoutSimpananInput | SimpananTransactionUpdateManyWithWhereWithoutSimpananInput[]
    deleteMany?: SimpananTransactionScalarWhereInput | SimpananTransactionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SimpananTransactionUncheckedUpdateManyWithoutSimpananNestedInput = {
    create?: XOR<SimpananTransactionCreateWithoutSimpananInput, SimpananTransactionUncheckedCreateWithoutSimpananInput> | SimpananTransactionCreateWithoutSimpananInput[] | SimpananTransactionUncheckedCreateWithoutSimpananInput[]
    connectOrCreate?: SimpananTransactionCreateOrConnectWithoutSimpananInput | SimpananTransactionCreateOrConnectWithoutSimpananInput[]
    upsert?: SimpananTransactionUpsertWithWhereUniqueWithoutSimpananInput | SimpananTransactionUpsertWithWhereUniqueWithoutSimpananInput[]
    createMany?: SimpananTransactionCreateManySimpananInputEnvelope
    set?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    disconnect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    delete?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    connect?: SimpananTransactionWhereUniqueInput | SimpananTransactionWhereUniqueInput[]
    update?: SimpananTransactionUpdateWithWhereUniqueWithoutSimpananInput | SimpananTransactionUpdateWithWhereUniqueWithoutSimpananInput[]
    updateMany?: SimpananTransactionUpdateManyWithWhereWithoutSimpananInput | SimpananTransactionUpdateManyWithWhereWithoutSimpananInput[]
    deleteMany?: SimpananTransactionScalarWhereInput | SimpananTransactionScalarWhereInput[]
  }

  export type TokoProdukCreateNestedManyWithoutKategoriInput = {
    create?: XOR<TokoProdukCreateWithoutKategoriInput, TokoProdukUncheckedCreateWithoutKategoriInput> | TokoProdukCreateWithoutKategoriInput[] | TokoProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: TokoProdukCreateOrConnectWithoutKategoriInput | TokoProdukCreateOrConnectWithoutKategoriInput[]
    createMany?: TokoProdukCreateManyKategoriInputEnvelope
    connect?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
  }

  export type TokoProdukUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<TokoProdukCreateWithoutKategoriInput, TokoProdukUncheckedCreateWithoutKategoriInput> | TokoProdukCreateWithoutKategoriInput[] | TokoProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: TokoProdukCreateOrConnectWithoutKategoriInput | TokoProdukCreateOrConnectWithoutKategoriInput[]
    createMany?: TokoProdukCreateManyKategoriInputEnvelope
    connect?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
  }

  export type TokoProdukUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<TokoProdukCreateWithoutKategoriInput, TokoProdukUncheckedCreateWithoutKategoriInput> | TokoProdukCreateWithoutKategoriInput[] | TokoProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: TokoProdukCreateOrConnectWithoutKategoriInput | TokoProdukCreateOrConnectWithoutKategoriInput[]
    upsert?: TokoProdukUpsertWithWhereUniqueWithoutKategoriInput | TokoProdukUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: TokoProdukCreateManyKategoriInputEnvelope
    set?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
    disconnect?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
    delete?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
    connect?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
    update?: TokoProdukUpdateWithWhereUniqueWithoutKategoriInput | TokoProdukUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: TokoProdukUpdateManyWithWhereWithoutKategoriInput | TokoProdukUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: TokoProdukScalarWhereInput | TokoProdukScalarWhereInput[]
  }

  export type TokoProdukUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<TokoProdukCreateWithoutKategoriInput, TokoProdukUncheckedCreateWithoutKategoriInput> | TokoProdukCreateWithoutKategoriInput[] | TokoProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: TokoProdukCreateOrConnectWithoutKategoriInput | TokoProdukCreateOrConnectWithoutKategoriInput[]
    upsert?: TokoProdukUpsertWithWhereUniqueWithoutKategoriInput | TokoProdukUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: TokoProdukCreateManyKategoriInputEnvelope
    set?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
    disconnect?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
    delete?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
    connect?: TokoProdukWhereUniqueInput | TokoProdukWhereUniqueInput[]
    update?: TokoProdukUpdateWithWhereUniqueWithoutKategoriInput | TokoProdukUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: TokoProdukUpdateManyWithWhereWithoutKategoriInput | TokoProdukUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: TokoProdukScalarWhereInput | TokoProdukScalarWhereInput[]
  }

  export type TokoKategoriCreateNestedOneWithoutProdukInput = {
    create?: XOR<TokoKategoriCreateWithoutProdukInput, TokoKategoriUncheckedCreateWithoutProdukInput>
    connectOrCreate?: TokoKategoriCreateOrConnectWithoutProdukInput
    connect?: TokoKategoriWhereUniqueInput
  }

  export type TokoKategoriUpdateOneWithoutProdukNestedInput = {
    create?: XOR<TokoKategoriCreateWithoutProdukInput, TokoKategoriUncheckedCreateWithoutProdukInput>
    connectOrCreate?: TokoKategoriCreateOrConnectWithoutProdukInput
    upsert?: TokoKategoriUpsertWithoutProdukInput
    disconnect?: TokoKategoriWhereInput | boolean
    delete?: TokoKategoriWhereInput | boolean
    connect?: TokoKategoriWhereUniqueInput
    update?: XOR<XOR<TokoKategoriUpdateToOneWithWhereWithoutProdukInput, TokoKategoriUpdateWithoutProdukInput>, TokoKategoriUncheckedUpdateWithoutProdukInput>
  }

  export type AnggotaCreateNestedOneWithoutPiutangInput = {
    create?: XOR<AnggotaCreateWithoutPiutangInput, AnggotaUncheckedCreateWithoutPiutangInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutPiutangInput
    connect?: AnggotaWhereUniqueInput
  }

  export type PiutangTransactionCreateNestedManyWithoutPiutangInput = {
    create?: XOR<PiutangTransactionCreateWithoutPiutangInput, PiutangTransactionUncheckedCreateWithoutPiutangInput> | PiutangTransactionCreateWithoutPiutangInput[] | PiutangTransactionUncheckedCreateWithoutPiutangInput[]
    connectOrCreate?: PiutangTransactionCreateOrConnectWithoutPiutangInput | PiutangTransactionCreateOrConnectWithoutPiutangInput[]
    createMany?: PiutangTransactionCreateManyPiutangInputEnvelope
    connect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
  }

  export type PiutangTransactionUncheckedCreateNestedManyWithoutPiutangInput = {
    create?: XOR<PiutangTransactionCreateWithoutPiutangInput, PiutangTransactionUncheckedCreateWithoutPiutangInput> | PiutangTransactionCreateWithoutPiutangInput[] | PiutangTransactionUncheckedCreateWithoutPiutangInput[]
    connectOrCreate?: PiutangTransactionCreateOrConnectWithoutPiutangInput | PiutangTransactionCreateOrConnectWithoutPiutangInput[]
    createMany?: PiutangTransactionCreateManyPiutangInputEnvelope
    connect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AnggotaUpdateOneRequiredWithoutPiutangNestedInput = {
    create?: XOR<AnggotaCreateWithoutPiutangInput, AnggotaUncheckedCreateWithoutPiutangInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutPiutangInput
    upsert?: AnggotaUpsertWithoutPiutangInput
    connect?: AnggotaWhereUniqueInput
    update?: XOR<XOR<AnggotaUpdateToOneWithWhereWithoutPiutangInput, AnggotaUpdateWithoutPiutangInput>, AnggotaUncheckedUpdateWithoutPiutangInput>
  }

  export type PiutangTransactionUpdateManyWithoutPiutangNestedInput = {
    create?: XOR<PiutangTransactionCreateWithoutPiutangInput, PiutangTransactionUncheckedCreateWithoutPiutangInput> | PiutangTransactionCreateWithoutPiutangInput[] | PiutangTransactionUncheckedCreateWithoutPiutangInput[]
    connectOrCreate?: PiutangTransactionCreateOrConnectWithoutPiutangInput | PiutangTransactionCreateOrConnectWithoutPiutangInput[]
    upsert?: PiutangTransactionUpsertWithWhereUniqueWithoutPiutangInput | PiutangTransactionUpsertWithWhereUniqueWithoutPiutangInput[]
    createMany?: PiutangTransactionCreateManyPiutangInputEnvelope
    set?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    disconnect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    delete?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    connect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    update?: PiutangTransactionUpdateWithWhereUniqueWithoutPiutangInput | PiutangTransactionUpdateWithWhereUniqueWithoutPiutangInput[]
    updateMany?: PiutangTransactionUpdateManyWithWhereWithoutPiutangInput | PiutangTransactionUpdateManyWithWhereWithoutPiutangInput[]
    deleteMany?: PiutangTransactionScalarWhereInput | PiutangTransactionScalarWhereInput[]
  }

  export type PiutangTransactionUncheckedUpdateManyWithoutPiutangNestedInput = {
    create?: XOR<PiutangTransactionCreateWithoutPiutangInput, PiutangTransactionUncheckedCreateWithoutPiutangInput> | PiutangTransactionCreateWithoutPiutangInput[] | PiutangTransactionUncheckedCreateWithoutPiutangInput[]
    connectOrCreate?: PiutangTransactionCreateOrConnectWithoutPiutangInput | PiutangTransactionCreateOrConnectWithoutPiutangInput[]
    upsert?: PiutangTransactionUpsertWithWhereUniqueWithoutPiutangInput | PiutangTransactionUpsertWithWhereUniqueWithoutPiutangInput[]
    createMany?: PiutangTransactionCreateManyPiutangInputEnvelope
    set?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    disconnect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    delete?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    connect?: PiutangTransactionWhereUniqueInput | PiutangTransactionWhereUniqueInput[]
    update?: PiutangTransactionUpdateWithWhereUniqueWithoutPiutangInput | PiutangTransactionUpdateWithWhereUniqueWithoutPiutangInput[]
    updateMany?: PiutangTransactionUpdateManyWithWhereWithoutPiutangInput | PiutangTransactionUpdateManyWithWhereWithoutPiutangInput[]
    deleteMany?: PiutangTransactionScalarWhereInput | PiutangTransactionScalarWhereInput[]
  }

  export type PiutangCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PiutangCreateWithoutTransactionsInput, PiutangUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PiutangCreateOrConnectWithoutTransactionsInput
    connect?: PiutangWhereUniqueInput
  }

  export type AnggotaCreateNestedOneWithoutProcessedTransactionsInput = {
    create?: XOR<AnggotaCreateWithoutProcessedTransactionsInput, AnggotaUncheckedCreateWithoutProcessedTransactionsInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutProcessedTransactionsInput
    connect?: AnggotaWhereUniqueInput
  }

  export type PiutangUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<PiutangCreateWithoutTransactionsInput, PiutangUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PiutangCreateOrConnectWithoutTransactionsInput
    upsert?: PiutangUpsertWithoutTransactionsInput
    connect?: PiutangWhereUniqueInput
    update?: XOR<XOR<PiutangUpdateToOneWithWhereWithoutTransactionsInput, PiutangUpdateWithoutTransactionsInput>, PiutangUncheckedUpdateWithoutTransactionsInput>
  }

  export type AnggotaUpdateOneWithoutProcessedTransactionsNestedInput = {
    create?: XOR<AnggotaCreateWithoutProcessedTransactionsInput, AnggotaUncheckedCreateWithoutProcessedTransactionsInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutProcessedTransactionsInput
    upsert?: AnggotaUpsertWithoutProcessedTransactionsInput
    disconnect?: AnggotaWhereInput | boolean
    delete?: AnggotaWhereInput | boolean
    connect?: AnggotaWhereUniqueInput
    update?: XOR<XOR<AnggotaUpdateToOneWithWhereWithoutProcessedTransactionsInput, AnggotaUpdateWithoutProcessedTransactionsInput>, AnggotaUncheckedUpdateWithoutProcessedTransactionsInput>
  }

  export type AnggotaCreateNestedOneWithoutSimpananTransactionsInput = {
    create?: XOR<AnggotaCreateWithoutSimpananTransactionsInput, AnggotaUncheckedCreateWithoutSimpananTransactionsInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutSimpananTransactionsInput
    connect?: AnggotaWhereUniqueInput
  }

  export type AnggotaCreateNestedOneWithoutProcessedSimpananTransactionsInput = {
    create?: XOR<AnggotaCreateWithoutProcessedSimpananTransactionsInput, AnggotaUncheckedCreateWithoutProcessedSimpananTransactionsInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutProcessedSimpananTransactionsInput
    connect?: AnggotaWhereUniqueInput
  }

  export type SimpananCreateNestedOneWithoutSimpananTransactionsInput = {
    create?: XOR<SimpananCreateWithoutSimpananTransactionsInput, SimpananUncheckedCreateWithoutSimpananTransactionsInput>
    connectOrCreate?: SimpananCreateOrConnectWithoutSimpananTransactionsInput
    connect?: SimpananWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AnggotaUpdateOneRequiredWithoutSimpananTransactionsNestedInput = {
    create?: XOR<AnggotaCreateWithoutSimpananTransactionsInput, AnggotaUncheckedCreateWithoutSimpananTransactionsInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutSimpananTransactionsInput
    upsert?: AnggotaUpsertWithoutSimpananTransactionsInput
    connect?: AnggotaWhereUniqueInput
    update?: XOR<XOR<AnggotaUpdateToOneWithWhereWithoutSimpananTransactionsInput, AnggotaUpdateWithoutSimpananTransactionsInput>, AnggotaUncheckedUpdateWithoutSimpananTransactionsInput>
  }

  export type AnggotaUpdateOneWithoutProcessedSimpananTransactionsNestedInput = {
    create?: XOR<AnggotaCreateWithoutProcessedSimpananTransactionsInput, AnggotaUncheckedCreateWithoutProcessedSimpananTransactionsInput>
    connectOrCreate?: AnggotaCreateOrConnectWithoutProcessedSimpananTransactionsInput
    upsert?: AnggotaUpsertWithoutProcessedSimpananTransactionsInput
    disconnect?: AnggotaWhereInput | boolean
    delete?: AnggotaWhereInput | boolean
    connect?: AnggotaWhereUniqueInput
    update?: XOR<XOR<AnggotaUpdateToOneWithWhereWithoutProcessedSimpananTransactionsInput, AnggotaUpdateWithoutProcessedSimpananTransactionsInput>, AnggotaUncheckedUpdateWithoutProcessedSimpananTransactionsInput>
  }

  export type SimpananUpdateOneRequiredWithoutSimpananTransactionsNestedInput = {
    create?: XOR<SimpananCreateWithoutSimpananTransactionsInput, SimpananUncheckedCreateWithoutSimpananTransactionsInput>
    connectOrCreate?: SimpananCreateOrConnectWithoutSimpananTransactionsInput
    upsert?: SimpananUpsertWithoutSimpananTransactionsInput
    connect?: SimpananWhereUniqueInput
    update?: XOR<XOR<SimpananUpdateToOneWithWhereWithoutSimpananTransactionsInput, SimpananUpdateWithoutSimpananTransactionsInput>, SimpananUncheckedUpdateWithoutSimpananTransactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PiutangCreateWithoutAnggotaInput = {
    id?: string
    jenis: string
    besarPinjaman?: Decimal | DecimalJsLike | number | string
    totalPiutang?: Decimal | DecimalJsLike | number | string
    biayaAngsuran?: Decimal | DecimalJsLike | number | string
    sisaPiutang?: Decimal | DecimalJsLike | number | string
    sisaAngsuran?: number
    totalAngsuran?: number
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: PiutangTransactionCreateNestedManyWithoutPiutangInput
  }

  export type PiutangUncheckedCreateWithoutAnggotaInput = {
    id?: string
    jenis: string
    besarPinjaman?: Decimal | DecimalJsLike | number | string
    totalPiutang?: Decimal | DecimalJsLike | number | string
    biayaAngsuran?: Decimal | DecimalJsLike | number | string
    sisaPiutang?: Decimal | DecimalJsLike | number | string
    sisaAngsuran?: number
    totalAngsuran?: number
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: PiutangTransactionUncheckedCreateNestedManyWithoutPiutangInput
  }

  export type PiutangCreateOrConnectWithoutAnggotaInput = {
    where: PiutangWhereUniqueInput
    create: XOR<PiutangCreateWithoutAnggotaInput, PiutangUncheckedCreateWithoutAnggotaInput>
  }

  export type PiutangCreateManyAnggotaInputEnvelope = {
    data: PiutangCreateManyAnggotaInput | PiutangCreateManyAnggotaInput[]
    skipDuplicates?: boolean
  }

  export type PiutangTransactionCreateWithoutProcessorInput = {
    id?: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    piutang: PiutangCreateNestedOneWithoutTransactionsInput
  }

  export type PiutangTransactionUncheckedCreateWithoutProcessorInput = {
    id?: string
    piutangId: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
  }

  export type PiutangTransactionCreateOrConnectWithoutProcessorInput = {
    where: PiutangTransactionWhereUniqueInput
    create: XOR<PiutangTransactionCreateWithoutProcessorInput, PiutangTransactionUncheckedCreateWithoutProcessorInput>
  }

  export type PiutangTransactionCreateManyProcessorInputEnvelope = {
    data: PiutangTransactionCreateManyProcessorInput | PiutangTransactionCreateManyProcessorInput[]
    skipDuplicates?: boolean
  }

  export type SimpananCreateWithoutAnggotaInput = {
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    updatedBy?: AnggotaCreateNestedOneWithoutUpdatedSimpananInput
    simpananTransactions?: SimpananTransactionCreateNestedManyWithoutSimpananInput
  }

  export type SimpananUncheckedCreateWithoutAnggotaInput = {
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    lastUpdatedBy?: string | null
    simpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutSimpananInput
  }

  export type SimpananCreateOrConnectWithoutAnggotaInput = {
    where: SimpananWhereUniqueInput
    create: XOR<SimpananCreateWithoutAnggotaInput, SimpananUncheckedCreateWithoutAnggotaInput>
  }

  export type SimpananCreateWithoutUpdatedByInput = {
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    anggota: AnggotaCreateNestedOneWithoutSimpananInput
    simpananTransactions?: SimpananTransactionCreateNestedManyWithoutSimpananInput
  }

  export type SimpananUncheckedCreateWithoutUpdatedByInput = {
    anggotaId: string
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    simpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutSimpananInput
  }

  export type SimpananCreateOrConnectWithoutUpdatedByInput = {
    where: SimpananWhereUniqueInput
    create: XOR<SimpananCreateWithoutUpdatedByInput, SimpananUncheckedCreateWithoutUpdatedByInput>
  }

  export type SimpananCreateManyUpdatedByInputEnvelope = {
    data: SimpananCreateManyUpdatedByInput | SimpananCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type SimpananTransactionCreateWithoutAnggotaInput = {
    id?: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    processor?: AnggotaCreateNestedOneWithoutProcessedSimpananTransactionsInput
    simpanan: SimpananCreateNestedOneWithoutSimpananTransactionsInput
  }

  export type SimpananTransactionUncheckedCreateWithoutAnggotaInput = {
    id?: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
  }

  export type SimpananTransactionCreateOrConnectWithoutAnggotaInput = {
    where: SimpananTransactionWhereUniqueInput
    create: XOR<SimpananTransactionCreateWithoutAnggotaInput, SimpananTransactionUncheckedCreateWithoutAnggotaInput>
  }

  export type SimpananTransactionCreateManyAnggotaInputEnvelope = {
    data: SimpananTransactionCreateManyAnggotaInput | SimpananTransactionCreateManyAnggotaInput[]
    skipDuplicates?: boolean
  }

  export type SimpananTransactionCreateWithoutProcessorInput = {
    id?: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    anggota: AnggotaCreateNestedOneWithoutSimpananTransactionsInput
    simpanan: SimpananCreateNestedOneWithoutSimpananTransactionsInput
  }

  export type SimpananTransactionUncheckedCreateWithoutProcessorInput = {
    id?: string
    anggotaId: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
  }

  export type SimpananTransactionCreateOrConnectWithoutProcessorInput = {
    where: SimpananTransactionWhereUniqueInput
    create: XOR<SimpananTransactionCreateWithoutProcessorInput, SimpananTransactionUncheckedCreateWithoutProcessorInput>
  }

  export type SimpananTransactionCreateManyProcessorInputEnvelope = {
    data: SimpananTransactionCreateManyProcessorInput | SimpananTransactionCreateManyProcessorInput[]
    skipDuplicates?: boolean
  }

  export type PiutangUpsertWithWhereUniqueWithoutAnggotaInput = {
    where: PiutangWhereUniqueInput
    update: XOR<PiutangUpdateWithoutAnggotaInput, PiutangUncheckedUpdateWithoutAnggotaInput>
    create: XOR<PiutangCreateWithoutAnggotaInput, PiutangUncheckedCreateWithoutAnggotaInput>
  }

  export type PiutangUpdateWithWhereUniqueWithoutAnggotaInput = {
    where: PiutangWhereUniqueInput
    data: XOR<PiutangUpdateWithoutAnggotaInput, PiutangUncheckedUpdateWithoutAnggotaInput>
  }

  export type PiutangUpdateManyWithWhereWithoutAnggotaInput = {
    where: PiutangScalarWhereInput
    data: XOR<PiutangUpdateManyMutationInput, PiutangUncheckedUpdateManyWithoutAnggotaInput>
  }

  export type PiutangScalarWhereInput = {
    AND?: PiutangScalarWhereInput | PiutangScalarWhereInput[]
    OR?: PiutangScalarWhereInput[]
    NOT?: PiutangScalarWhereInput | PiutangScalarWhereInput[]
    id?: StringFilter<"Piutang"> | string
    anggotaId?: StringFilter<"Piutang"> | string
    jenis?: StringFilter<"Piutang"> | string
    besarPinjaman?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFilter<"Piutang"> | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFilter<"Piutang"> | number
    totalAngsuran?: IntFilter<"Piutang"> | number
    status?: StringFilter<"Piutang"> | string
    completedAt?: DateTimeNullableFilter<"Piutang"> | Date | string | null
    createdAt?: DateTimeFilter<"Piutang"> | Date | string
    updatedAt?: DateTimeFilter<"Piutang"> | Date | string
  }

  export type PiutangTransactionUpsertWithWhereUniqueWithoutProcessorInput = {
    where: PiutangTransactionWhereUniqueInput
    update: XOR<PiutangTransactionUpdateWithoutProcessorInput, PiutangTransactionUncheckedUpdateWithoutProcessorInput>
    create: XOR<PiutangTransactionCreateWithoutProcessorInput, PiutangTransactionUncheckedCreateWithoutProcessorInput>
  }

  export type PiutangTransactionUpdateWithWhereUniqueWithoutProcessorInput = {
    where: PiutangTransactionWhereUniqueInput
    data: XOR<PiutangTransactionUpdateWithoutProcessorInput, PiutangTransactionUncheckedUpdateWithoutProcessorInput>
  }

  export type PiutangTransactionUpdateManyWithWhereWithoutProcessorInput = {
    where: PiutangTransactionScalarWhereInput
    data: XOR<PiutangTransactionUpdateManyMutationInput, PiutangTransactionUncheckedUpdateManyWithoutProcessorInput>
  }

  export type PiutangTransactionScalarWhereInput = {
    AND?: PiutangTransactionScalarWhereInput | PiutangTransactionScalarWhereInput[]
    OR?: PiutangTransactionScalarWhereInput[]
    NOT?: PiutangTransactionScalarWhereInput | PiutangTransactionScalarWhereInput[]
    id?: StringFilter<"PiutangTransaction"> | string
    piutangId?: StringFilter<"PiutangTransaction"> | string
    type?: StringFilter<"PiutangTransaction"> | string
    amount?: DecimalFilter<"PiutangTransaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"PiutangTransaction"> | string | null
    processedBy?: StringNullableFilter<"PiutangTransaction"> | string | null
    createdAt?: DateTimeFilter<"PiutangTransaction"> | Date | string
  }

  export type SimpananUpsertWithoutAnggotaInput = {
    update: XOR<SimpananUpdateWithoutAnggotaInput, SimpananUncheckedUpdateWithoutAnggotaInput>
    create: XOR<SimpananCreateWithoutAnggotaInput, SimpananUncheckedCreateWithoutAnggotaInput>
    where?: SimpananWhereInput
  }

  export type SimpananUpdateToOneWithWhereWithoutAnggotaInput = {
    where?: SimpananWhereInput
    data: XOR<SimpananUpdateWithoutAnggotaInput, SimpananUncheckedUpdateWithoutAnggotaInput>
  }

  export type SimpananUpdateWithoutAnggotaInput = {
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: AnggotaUpdateOneWithoutUpdatedSimpananNestedInput
    simpananTransactions?: SimpananTransactionUpdateManyWithoutSimpananNestedInput
  }

  export type SimpananUncheckedUpdateWithoutAnggotaInput = {
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    simpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutSimpananNestedInput
  }

  export type SimpananUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: SimpananWhereUniqueInput
    update: XOR<SimpananUpdateWithoutUpdatedByInput, SimpananUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<SimpananCreateWithoutUpdatedByInput, SimpananUncheckedCreateWithoutUpdatedByInput>
  }

  export type SimpananUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: SimpananWhereUniqueInput
    data: XOR<SimpananUpdateWithoutUpdatedByInput, SimpananUncheckedUpdateWithoutUpdatedByInput>
  }

  export type SimpananUpdateManyWithWhereWithoutUpdatedByInput = {
    where: SimpananScalarWhereInput
    data: XOR<SimpananUpdateManyMutationInput, SimpananUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type SimpananScalarWhereInput = {
    AND?: SimpananScalarWhereInput | SimpananScalarWhereInput[]
    OR?: SimpananScalarWhereInput[]
    NOT?: SimpananScalarWhereInput | SimpananScalarWhereInput[]
    anggotaId?: StringFilter<"Simpanan"> | string
    simpananPokok?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFilter<"Simpanan"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"Simpanan"> | Date | string
    createdAt?: DateTimeFilter<"Simpanan"> | Date | string
    lastUpdatedBy?: StringNullableFilter<"Simpanan"> | string | null
  }

  export type SimpananTransactionUpsertWithWhereUniqueWithoutAnggotaInput = {
    where: SimpananTransactionWhereUniqueInput
    update: XOR<SimpananTransactionUpdateWithoutAnggotaInput, SimpananTransactionUncheckedUpdateWithoutAnggotaInput>
    create: XOR<SimpananTransactionCreateWithoutAnggotaInput, SimpananTransactionUncheckedCreateWithoutAnggotaInput>
  }

  export type SimpananTransactionUpdateWithWhereUniqueWithoutAnggotaInput = {
    where: SimpananTransactionWhereUniqueInput
    data: XOR<SimpananTransactionUpdateWithoutAnggotaInput, SimpananTransactionUncheckedUpdateWithoutAnggotaInput>
  }

  export type SimpananTransactionUpdateManyWithWhereWithoutAnggotaInput = {
    where: SimpananTransactionScalarWhereInput
    data: XOR<SimpananTransactionUpdateManyMutationInput, SimpananTransactionUncheckedUpdateManyWithoutAnggotaInput>
  }

  export type SimpananTransactionScalarWhereInput = {
    AND?: SimpananTransactionScalarWhereInput | SimpananTransactionScalarWhereInput[]
    OR?: SimpananTransactionScalarWhereInput[]
    NOT?: SimpananTransactionScalarWhereInput | SimpananTransactionScalarWhereInput[]
    id?: StringFilter<"SimpananTransaction"> | string
    anggotaId?: StringFilter<"SimpananTransaction"> | string
    type?: StringFilter<"SimpananTransaction"> | string
    category?: StringFilter<"SimpananTransaction"> | string
    amount?: DecimalFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFilter<"SimpananTransaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"SimpananTransaction"> | string | null
    processedBy?: StringNullableFilter<"SimpananTransaction"> | string | null
    isSystemGenerated?: BoolFilter<"SimpananTransaction"> | boolean
    createdAt?: DateTimeFilter<"SimpananTransaction"> | Date | string
  }

  export type SimpananTransactionUpsertWithWhereUniqueWithoutProcessorInput = {
    where: SimpananTransactionWhereUniqueInput
    update: XOR<SimpananTransactionUpdateWithoutProcessorInput, SimpananTransactionUncheckedUpdateWithoutProcessorInput>
    create: XOR<SimpananTransactionCreateWithoutProcessorInput, SimpananTransactionUncheckedCreateWithoutProcessorInput>
  }

  export type SimpananTransactionUpdateWithWhereUniqueWithoutProcessorInput = {
    where: SimpananTransactionWhereUniqueInput
    data: XOR<SimpananTransactionUpdateWithoutProcessorInput, SimpananTransactionUncheckedUpdateWithoutProcessorInput>
  }

  export type SimpananTransactionUpdateManyWithWhereWithoutProcessorInput = {
    where: SimpananTransactionScalarWhereInput
    data: XOR<SimpananTransactionUpdateManyMutationInput, SimpananTransactionUncheckedUpdateManyWithoutProcessorInput>
  }

  export type AnggotaCreateWithoutSimpananInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionCreateNestedManyWithoutProcessorInput
    updatedSimpanan?: SimpananCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaUncheckedCreateWithoutSimpananInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangUncheckedCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionUncheckedCreateNestedManyWithoutProcessorInput
    updatedSimpanan?: SimpananUncheckedCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaCreateOrConnectWithoutSimpananInput = {
    where: AnggotaWhereUniqueInput
    create: XOR<AnggotaCreateWithoutSimpananInput, AnggotaUncheckedCreateWithoutSimpananInput>
  }

  export type AnggotaCreateWithoutUpdatedSimpananInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananCreateNestedOneWithoutAnggotaInput
    simpananTransactions?: SimpananTransactionCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaUncheckedCreateWithoutUpdatedSimpananInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangUncheckedCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionUncheckedCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananUncheckedCreateNestedOneWithoutAnggotaInput
    simpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaCreateOrConnectWithoutUpdatedSimpananInput = {
    where: AnggotaWhereUniqueInput
    create: XOR<AnggotaCreateWithoutUpdatedSimpananInput, AnggotaUncheckedCreateWithoutUpdatedSimpananInput>
  }

  export type SimpananTransactionCreateWithoutSimpananInput = {
    id?: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    anggota: AnggotaCreateNestedOneWithoutSimpananTransactionsInput
    processor?: AnggotaCreateNestedOneWithoutProcessedSimpananTransactionsInput
  }

  export type SimpananTransactionUncheckedCreateWithoutSimpananInput = {
    id?: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
  }

  export type SimpananTransactionCreateOrConnectWithoutSimpananInput = {
    where: SimpananTransactionWhereUniqueInput
    create: XOR<SimpananTransactionCreateWithoutSimpananInput, SimpananTransactionUncheckedCreateWithoutSimpananInput>
  }

  export type SimpananTransactionCreateManySimpananInputEnvelope = {
    data: SimpananTransactionCreateManySimpananInput | SimpananTransactionCreateManySimpananInput[]
    skipDuplicates?: boolean
  }

  export type AnggotaUpsertWithoutSimpananInput = {
    update: XOR<AnggotaUpdateWithoutSimpananInput, AnggotaUncheckedUpdateWithoutSimpananInput>
    create: XOR<AnggotaCreateWithoutSimpananInput, AnggotaUncheckedCreateWithoutSimpananInput>
    where?: AnggotaWhereInput
  }

  export type AnggotaUpdateToOneWithWhereWithoutSimpananInput = {
    where?: AnggotaWhereInput
    data: XOR<AnggotaUpdateWithoutSimpananInput, AnggotaUncheckedUpdateWithoutSimpananInput>
  }

  export type AnggotaUpdateWithoutSimpananInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUpdateManyWithoutProcessorNestedInput
    updatedSimpanan?: SimpananUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaUncheckedUpdateWithoutSimpananInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUncheckedUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUncheckedUpdateManyWithoutProcessorNestedInput
    updatedSimpanan?: SimpananUncheckedUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaUpsertWithoutUpdatedSimpananInput = {
    update: XOR<AnggotaUpdateWithoutUpdatedSimpananInput, AnggotaUncheckedUpdateWithoutUpdatedSimpananInput>
    create: XOR<AnggotaCreateWithoutUpdatedSimpananInput, AnggotaUncheckedCreateWithoutUpdatedSimpananInput>
    where?: AnggotaWhereInput
  }

  export type AnggotaUpdateToOneWithWhereWithoutUpdatedSimpananInput = {
    where?: AnggotaWhereInput
    data: XOR<AnggotaUpdateWithoutUpdatedSimpananInput, AnggotaUncheckedUpdateWithoutUpdatedSimpananInput>
  }

  export type AnggotaUpdateWithoutUpdatedSimpananInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUpdateOneWithoutAnggotaNestedInput
    simpananTransactions?: SimpananTransactionUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaUncheckedUpdateWithoutUpdatedSimpananInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUncheckedUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUncheckedUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUncheckedUpdateOneWithoutAnggotaNestedInput
    simpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutProcessorNestedInput
  }

  export type SimpananTransactionUpsertWithWhereUniqueWithoutSimpananInput = {
    where: SimpananTransactionWhereUniqueInput
    update: XOR<SimpananTransactionUpdateWithoutSimpananInput, SimpananTransactionUncheckedUpdateWithoutSimpananInput>
    create: XOR<SimpananTransactionCreateWithoutSimpananInput, SimpananTransactionUncheckedCreateWithoutSimpananInput>
  }

  export type SimpananTransactionUpdateWithWhereUniqueWithoutSimpananInput = {
    where: SimpananTransactionWhereUniqueInput
    data: XOR<SimpananTransactionUpdateWithoutSimpananInput, SimpananTransactionUncheckedUpdateWithoutSimpananInput>
  }

  export type SimpananTransactionUpdateManyWithWhereWithoutSimpananInput = {
    where: SimpananTransactionScalarWhereInput
    data: XOR<SimpananTransactionUpdateManyMutationInput, SimpananTransactionUncheckedUpdateManyWithoutSimpananInput>
  }

  export type TokoProdukCreateWithoutKategoriInput = {
    id?: string
    namaProduk: string
    fotoProduk?: string | null
    harga?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deskripsi?: string | null
  }

  export type TokoProdukUncheckedCreateWithoutKategoriInput = {
    id?: string
    namaProduk: string
    fotoProduk?: string | null
    harga?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deskripsi?: string | null
  }

  export type TokoProdukCreateOrConnectWithoutKategoriInput = {
    where: TokoProdukWhereUniqueInput
    create: XOR<TokoProdukCreateWithoutKategoriInput, TokoProdukUncheckedCreateWithoutKategoriInput>
  }

  export type TokoProdukCreateManyKategoriInputEnvelope = {
    data: TokoProdukCreateManyKategoriInput | TokoProdukCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type TokoProdukUpsertWithWhereUniqueWithoutKategoriInput = {
    where: TokoProdukWhereUniqueInput
    update: XOR<TokoProdukUpdateWithoutKategoriInput, TokoProdukUncheckedUpdateWithoutKategoriInput>
    create: XOR<TokoProdukCreateWithoutKategoriInput, TokoProdukUncheckedCreateWithoutKategoriInput>
  }

  export type TokoProdukUpdateWithWhereUniqueWithoutKategoriInput = {
    where: TokoProdukWhereUniqueInput
    data: XOR<TokoProdukUpdateWithoutKategoriInput, TokoProdukUncheckedUpdateWithoutKategoriInput>
  }

  export type TokoProdukUpdateManyWithWhereWithoutKategoriInput = {
    where: TokoProdukScalarWhereInput
    data: XOR<TokoProdukUpdateManyMutationInput, TokoProdukUncheckedUpdateManyWithoutKategoriInput>
  }

  export type TokoProdukScalarWhereInput = {
    AND?: TokoProdukScalarWhereInput | TokoProdukScalarWhereInput[]
    OR?: TokoProdukScalarWhereInput[]
    NOT?: TokoProdukScalarWhereInput | TokoProdukScalarWhereInput[]
    id?: StringFilter<"TokoProduk"> | string
    namaProduk?: StringFilter<"TokoProduk"> | string
    fotoProduk?: StringNullableFilter<"TokoProduk"> | string | null
    harga?: DecimalFilter<"TokoProduk"> | Decimal | DecimalJsLike | number | string
    kategoriId?: StringNullableFilter<"TokoProduk"> | string | null
    createdAt?: DateTimeFilter<"TokoProduk"> | Date | string
    updatedAt?: DateTimeFilter<"TokoProduk"> | Date | string
    deskripsi?: StringNullableFilter<"TokoProduk"> | string | null
  }

  export type TokoKategoriCreateWithoutProdukInput = {
    id?: string
    namaKategori: string
  }

  export type TokoKategoriUncheckedCreateWithoutProdukInput = {
    id?: string
    namaKategori: string
  }

  export type TokoKategoriCreateOrConnectWithoutProdukInput = {
    where: TokoKategoriWhereUniqueInput
    create: XOR<TokoKategoriCreateWithoutProdukInput, TokoKategoriUncheckedCreateWithoutProdukInput>
  }

  export type TokoKategoriUpsertWithoutProdukInput = {
    update: XOR<TokoKategoriUpdateWithoutProdukInput, TokoKategoriUncheckedUpdateWithoutProdukInput>
    create: XOR<TokoKategoriCreateWithoutProdukInput, TokoKategoriUncheckedCreateWithoutProdukInput>
    where?: TokoKategoriWhereInput
  }

  export type TokoKategoriUpdateToOneWithWhereWithoutProdukInput = {
    where?: TokoKategoriWhereInput
    data: XOR<TokoKategoriUpdateWithoutProdukInput, TokoKategoriUncheckedUpdateWithoutProdukInput>
  }

  export type TokoKategoriUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKategori?: StringFieldUpdateOperationsInput | string
  }

  export type TokoKategoriUncheckedUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKategori?: StringFieldUpdateOperationsInput | string
  }

  export type AnggotaCreateWithoutPiutangInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    processedTransactions?: PiutangTransactionCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaUncheckedCreateWithoutPiutangInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    processedTransactions?: PiutangTransactionUncheckedCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananUncheckedCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananUncheckedCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaCreateOrConnectWithoutPiutangInput = {
    where: AnggotaWhereUniqueInput
    create: XOR<AnggotaCreateWithoutPiutangInput, AnggotaUncheckedCreateWithoutPiutangInput>
  }

  export type PiutangTransactionCreateWithoutPiutangInput = {
    id?: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    processor?: AnggotaCreateNestedOneWithoutProcessedTransactionsInput
  }

  export type PiutangTransactionUncheckedCreateWithoutPiutangInput = {
    id?: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    createdAt?: Date | string
  }

  export type PiutangTransactionCreateOrConnectWithoutPiutangInput = {
    where: PiutangTransactionWhereUniqueInput
    create: XOR<PiutangTransactionCreateWithoutPiutangInput, PiutangTransactionUncheckedCreateWithoutPiutangInput>
  }

  export type PiutangTransactionCreateManyPiutangInputEnvelope = {
    data: PiutangTransactionCreateManyPiutangInput | PiutangTransactionCreateManyPiutangInput[]
    skipDuplicates?: boolean
  }

  export type AnggotaUpsertWithoutPiutangInput = {
    update: XOR<AnggotaUpdateWithoutPiutangInput, AnggotaUncheckedUpdateWithoutPiutangInput>
    create: XOR<AnggotaCreateWithoutPiutangInput, AnggotaUncheckedCreateWithoutPiutangInput>
    where?: AnggotaWhereInput
  }

  export type AnggotaUpdateToOneWithWhereWithoutPiutangInput = {
    where?: AnggotaWhereInput
    data: XOR<AnggotaUpdateWithoutPiutangInput, AnggotaUncheckedUpdateWithoutPiutangInput>
  }

  export type AnggotaUpdateWithoutPiutangInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedTransactions?: PiutangTransactionUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaUncheckedUpdateWithoutPiutangInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedTransactions?: PiutangTransactionUncheckedUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUncheckedUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUncheckedUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutProcessorNestedInput
  }

  export type PiutangTransactionUpsertWithWhereUniqueWithoutPiutangInput = {
    where: PiutangTransactionWhereUniqueInput
    update: XOR<PiutangTransactionUpdateWithoutPiutangInput, PiutangTransactionUncheckedUpdateWithoutPiutangInput>
    create: XOR<PiutangTransactionCreateWithoutPiutangInput, PiutangTransactionUncheckedCreateWithoutPiutangInput>
  }

  export type PiutangTransactionUpdateWithWhereUniqueWithoutPiutangInput = {
    where: PiutangTransactionWhereUniqueInput
    data: XOR<PiutangTransactionUpdateWithoutPiutangInput, PiutangTransactionUncheckedUpdateWithoutPiutangInput>
  }

  export type PiutangTransactionUpdateManyWithWhereWithoutPiutangInput = {
    where: PiutangTransactionScalarWhereInput
    data: XOR<PiutangTransactionUpdateManyMutationInput, PiutangTransactionUncheckedUpdateManyWithoutPiutangInput>
  }

  export type PiutangCreateWithoutTransactionsInput = {
    id?: string
    jenis: string
    besarPinjaman?: Decimal | DecimalJsLike | number | string
    totalPiutang?: Decimal | DecimalJsLike | number | string
    biayaAngsuran?: Decimal | DecimalJsLike | number | string
    sisaPiutang?: Decimal | DecimalJsLike | number | string
    sisaAngsuran?: number
    totalAngsuran?: number
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anggota: AnggotaCreateNestedOneWithoutPiutangInput
  }

  export type PiutangUncheckedCreateWithoutTransactionsInput = {
    id?: string
    anggotaId: string
    jenis: string
    besarPinjaman?: Decimal | DecimalJsLike | number | string
    totalPiutang?: Decimal | DecimalJsLike | number | string
    biayaAngsuran?: Decimal | DecimalJsLike | number | string
    sisaPiutang?: Decimal | DecimalJsLike | number | string
    sisaAngsuran?: number
    totalAngsuran?: number
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PiutangCreateOrConnectWithoutTransactionsInput = {
    where: PiutangWhereUniqueInput
    create: XOR<PiutangCreateWithoutTransactionsInput, PiutangUncheckedCreateWithoutTransactionsInput>
  }

  export type AnggotaCreateWithoutProcessedTransactionsInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangCreateNestedManyWithoutAnggotaInput
    simpanan?: SimpananCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaUncheckedCreateWithoutProcessedTransactionsInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangUncheckedCreateNestedManyWithoutAnggotaInput
    simpanan?: SimpananUncheckedCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananUncheckedCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutAnggotaInput
    processedSimpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaCreateOrConnectWithoutProcessedTransactionsInput = {
    where: AnggotaWhereUniqueInput
    create: XOR<AnggotaCreateWithoutProcessedTransactionsInput, AnggotaUncheckedCreateWithoutProcessedTransactionsInput>
  }

  export type PiutangUpsertWithoutTransactionsInput = {
    update: XOR<PiutangUpdateWithoutTransactionsInput, PiutangUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PiutangCreateWithoutTransactionsInput, PiutangUncheckedCreateWithoutTransactionsInput>
    where?: PiutangWhereInput
  }

  export type PiutangUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: PiutangWhereInput
    data: XOR<PiutangUpdateWithoutTransactionsInput, PiutangUncheckedUpdateWithoutTransactionsInput>
  }

  export type PiutangUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    besarPinjaman?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFieldUpdateOperationsInput | number
    totalAngsuran?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggota?: AnggotaUpdateOneRequiredWithoutPiutangNestedInput
  }

  export type PiutangUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggotaId?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    besarPinjaman?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFieldUpdateOperationsInput | number
    totalAngsuran?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggotaUpsertWithoutProcessedTransactionsInput = {
    update: XOR<AnggotaUpdateWithoutProcessedTransactionsInput, AnggotaUncheckedUpdateWithoutProcessedTransactionsInput>
    create: XOR<AnggotaCreateWithoutProcessedTransactionsInput, AnggotaUncheckedCreateWithoutProcessedTransactionsInput>
    where?: AnggotaWhereInput
  }

  export type AnggotaUpdateToOneWithWhereWithoutProcessedTransactionsInput = {
    where?: AnggotaWhereInput
    data: XOR<AnggotaUpdateWithoutProcessedTransactionsInput, AnggotaUncheckedUpdateWithoutProcessedTransactionsInput>
  }

  export type AnggotaUpdateWithoutProcessedTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUpdateManyWithoutAnggotaNestedInput
    simpanan?: SimpananUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaUncheckedUpdateWithoutProcessedTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUncheckedUpdateManyWithoutAnggotaNestedInput
    simpanan?: SimpananUncheckedUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUncheckedUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutAnggotaNestedInput
    processedSimpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaCreateWithoutSimpananTransactionsInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananCreateNestedManyWithoutUpdatedByInput
    processedSimpananTransactions?: SimpananTransactionCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaUncheckedCreateWithoutSimpananTransactionsInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangUncheckedCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionUncheckedCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananUncheckedCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananUncheckedCreateNestedManyWithoutUpdatedByInput
    processedSimpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutProcessorInput
  }

  export type AnggotaCreateOrConnectWithoutSimpananTransactionsInput = {
    where: AnggotaWhereUniqueInput
    create: XOR<AnggotaCreateWithoutSimpananTransactionsInput, AnggotaUncheckedCreateWithoutSimpananTransactionsInput>
  }

  export type AnggotaCreateWithoutProcessedSimpananTransactionsInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionCreateNestedManyWithoutAnggotaInput
  }

  export type AnggotaUncheckedCreateWithoutProcessedSimpananTransactionsInput = {
    id?: string
    nrp: string
    nama: string
    jabatan: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    piutang?: PiutangUncheckedCreateNestedManyWithoutAnggotaInput
    processedTransactions?: PiutangTransactionUncheckedCreateNestedManyWithoutProcessorInput
    simpanan?: SimpananUncheckedCreateNestedOneWithoutAnggotaInput
    updatedSimpanan?: SimpananUncheckedCreateNestedManyWithoutUpdatedByInput
    simpananTransactions?: SimpananTransactionUncheckedCreateNestedManyWithoutAnggotaInput
  }

  export type AnggotaCreateOrConnectWithoutProcessedSimpananTransactionsInput = {
    where: AnggotaWhereUniqueInput
    create: XOR<AnggotaCreateWithoutProcessedSimpananTransactionsInput, AnggotaUncheckedCreateWithoutProcessedSimpananTransactionsInput>
  }

  export type SimpananCreateWithoutSimpananTransactionsInput = {
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    anggota: AnggotaCreateNestedOneWithoutSimpananInput
    updatedBy?: AnggotaCreateNestedOneWithoutUpdatedSimpananInput
  }

  export type SimpananUncheckedCreateWithoutSimpananTransactionsInput = {
    anggotaId: string
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
    lastUpdatedBy?: string | null
  }

  export type SimpananCreateOrConnectWithoutSimpananTransactionsInput = {
    where: SimpananWhereUniqueInput
    create: XOR<SimpananCreateWithoutSimpananTransactionsInput, SimpananUncheckedCreateWithoutSimpananTransactionsInput>
  }

  export type AnggotaUpsertWithoutSimpananTransactionsInput = {
    update: XOR<AnggotaUpdateWithoutSimpananTransactionsInput, AnggotaUncheckedUpdateWithoutSimpananTransactionsInput>
    create: XOR<AnggotaCreateWithoutSimpananTransactionsInput, AnggotaUncheckedCreateWithoutSimpananTransactionsInput>
    where?: AnggotaWhereInput
  }

  export type AnggotaUpdateToOneWithWhereWithoutSimpananTransactionsInput = {
    where?: AnggotaWhereInput
    data: XOR<AnggotaUpdateWithoutSimpananTransactionsInput, AnggotaUncheckedUpdateWithoutSimpananTransactionsInput>
  }

  export type AnggotaUpdateWithoutSimpananTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUpdateManyWithoutUpdatedByNestedInput
    processedSimpananTransactions?: SimpananTransactionUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaUncheckedUpdateWithoutSimpananTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUncheckedUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUncheckedUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUncheckedUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUncheckedUpdateManyWithoutUpdatedByNestedInput
    processedSimpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutProcessorNestedInput
  }

  export type AnggotaUpsertWithoutProcessedSimpananTransactionsInput = {
    update: XOR<AnggotaUpdateWithoutProcessedSimpananTransactionsInput, AnggotaUncheckedUpdateWithoutProcessedSimpananTransactionsInput>
    create: XOR<AnggotaCreateWithoutProcessedSimpananTransactionsInput, AnggotaUncheckedCreateWithoutProcessedSimpananTransactionsInput>
    where?: AnggotaWhereInput
  }

  export type AnggotaUpdateToOneWithWhereWithoutProcessedSimpananTransactionsInput = {
    where?: AnggotaWhereInput
    data: XOR<AnggotaUpdateWithoutProcessedSimpananTransactionsInput, AnggotaUncheckedUpdateWithoutProcessedSimpananTransactionsInput>
  }

  export type AnggotaUpdateWithoutProcessedSimpananTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUpdateManyWithoutAnggotaNestedInput
  }

  export type AnggotaUncheckedUpdateWithoutProcessedSimpananTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUncheckedUpdateManyWithoutAnggotaNestedInput
    processedTransactions?: PiutangTransactionUncheckedUpdateManyWithoutProcessorNestedInput
    simpanan?: SimpananUncheckedUpdateOneWithoutAnggotaNestedInput
    updatedSimpanan?: SimpananUncheckedUpdateManyWithoutUpdatedByNestedInput
    simpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutAnggotaNestedInput
  }

  export type SimpananUpsertWithoutSimpananTransactionsInput = {
    update: XOR<SimpananUpdateWithoutSimpananTransactionsInput, SimpananUncheckedUpdateWithoutSimpananTransactionsInput>
    create: XOR<SimpananCreateWithoutSimpananTransactionsInput, SimpananUncheckedCreateWithoutSimpananTransactionsInput>
    where?: SimpananWhereInput
  }

  export type SimpananUpdateToOneWithWhereWithoutSimpananTransactionsInput = {
    where?: SimpananWhereInput
    data: XOR<SimpananUpdateWithoutSimpananTransactionsInput, SimpananUncheckedUpdateWithoutSimpananTransactionsInput>
  }

  export type SimpananUpdateWithoutSimpananTransactionsInput = {
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggota?: AnggotaUpdateOneRequiredWithoutSimpananNestedInput
    updatedBy?: AnggotaUpdateOneWithoutUpdatedSimpananNestedInput
  }

  export type SimpananUncheckedUpdateWithoutSimpananTransactionsInput = {
    anggotaId?: StringFieldUpdateOperationsInput | string
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PiutangCreateManyAnggotaInput = {
    id?: string
    jenis: string
    besarPinjaman?: Decimal | DecimalJsLike | number | string
    totalPiutang?: Decimal | DecimalJsLike | number | string
    biayaAngsuran?: Decimal | DecimalJsLike | number | string
    sisaPiutang?: Decimal | DecimalJsLike | number | string
    sisaAngsuran?: number
    totalAngsuran?: number
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PiutangTransactionCreateManyProcessorInput = {
    id?: string
    piutangId: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
  }

  export type SimpananCreateManyUpdatedByInput = {
    anggotaId: string
    simpananPokok?: Decimal | DecimalJsLike | number | string
    simpananWajib?: Decimal | DecimalJsLike | number | string
    simpananSukarela?: Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SimpananTransactionCreateManyAnggotaInput = {
    id?: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
  }

  export type SimpananTransactionCreateManyProcessorInput = {
    id?: string
    anggotaId: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
  }

  export type PiutangUpdateWithoutAnggotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    besarPinjaman?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFieldUpdateOperationsInput | number
    totalAngsuran?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: PiutangTransactionUpdateManyWithoutPiutangNestedInput
  }

  export type PiutangUncheckedUpdateWithoutAnggotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    besarPinjaman?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFieldUpdateOperationsInput | number
    totalAngsuran?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: PiutangTransactionUncheckedUpdateManyWithoutPiutangNestedInput
  }

  export type PiutangUncheckedUpdateManyWithoutAnggotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    besarPinjaman?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    biayaAngsuran?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaPiutang?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sisaAngsuran?: IntFieldUpdateOperationsInput | number
    totalAngsuran?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiutangTransactionUpdateWithoutProcessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    piutang?: PiutangUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type PiutangTransactionUncheckedUpdateWithoutProcessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    piutangId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiutangTransactionUncheckedUpdateManyWithoutProcessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    piutangId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananUpdateWithoutUpdatedByInput = {
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggota?: AnggotaUpdateOneRequiredWithoutSimpananNestedInput
    simpananTransactions?: SimpananTransactionUpdateManyWithoutSimpananNestedInput
  }

  export type SimpananUncheckedUpdateWithoutUpdatedByInput = {
    anggotaId?: StringFieldUpdateOperationsInput | string
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simpananTransactions?: SimpananTransactionUncheckedUpdateManyWithoutSimpananNestedInput
  }

  export type SimpananUncheckedUpdateManyWithoutUpdatedByInput = {
    anggotaId?: StringFieldUpdateOperationsInput | string
    simpananPokok?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananWajib?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    simpananSukarela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabunganHariRaya?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananTransactionUpdateWithoutAnggotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processor?: AnggotaUpdateOneWithoutProcessedSimpananTransactionsNestedInput
    simpanan?: SimpananUpdateOneRequiredWithoutSimpananTransactionsNestedInput
  }

  export type SimpananTransactionUncheckedUpdateWithoutAnggotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananTransactionUncheckedUpdateManyWithoutAnggotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananTransactionUpdateWithoutProcessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggota?: AnggotaUpdateOneRequiredWithoutSimpananTransactionsNestedInput
    simpanan?: SimpananUpdateOneRequiredWithoutSimpananTransactionsNestedInput
  }

  export type SimpananTransactionUncheckedUpdateWithoutProcessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggotaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananTransactionUncheckedUpdateManyWithoutProcessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    anggotaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananTransactionCreateManySimpananInput = {
    id?: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
  }

  export type SimpananTransactionUpdateWithoutSimpananInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anggota?: AnggotaUpdateOneRequiredWithoutSimpananTransactionsNestedInput
    processor?: AnggotaUpdateOneWithoutProcessedSimpananTransactionsNestedInput
  }

  export type SimpananTransactionUncheckedUpdateWithoutSimpananInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimpananTransactionUncheckedUpdateManyWithoutSimpananInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokoProdukCreateManyKategoriInput = {
    id?: string
    namaProduk: string
    fotoProduk?: string | null
    harga?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deskripsi?: string | null
  }

  export type TokoProdukUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaProduk?: StringFieldUpdateOperationsInput | string
    fotoProduk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokoProdukUncheckedUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaProduk?: StringFieldUpdateOperationsInput | string
    fotoProduk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokoProdukUncheckedUpdateManyWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaProduk?: StringFieldUpdateOperationsInput | string
    fotoProduk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PiutangTransactionCreateManyPiutangInput = {
    id?: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    processedBy?: string | null
    createdAt?: Date | string
  }

  export type PiutangTransactionUpdateWithoutPiutangInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processor?: AnggotaUpdateOneWithoutProcessedTransactionsNestedInput
  }

  export type PiutangTransactionUncheckedUpdateWithoutPiutangInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiutangTransactionUncheckedUpdateManyWithoutPiutangInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}