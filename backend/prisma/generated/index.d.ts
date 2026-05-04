
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model OtpCode
 * 
 */
export type OtpCode = $Result.DefaultSelection<Prisma.$OtpCodePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Subtask
 * 
 */
export type Subtask = $Result.DefaultSelection<Prisma.$SubtaskPayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model HabitCompletion
 * 
 */
export type HabitCompletion = $Result.DefaultSelection<Prisma.$HabitCompletionPayload>
/**
 * Model Routine
 * 
 */
export type Routine = $Result.DefaultSelection<Prisma.$RoutinePayload>
/**
 * Model RoutineItem
 * 
 */
export type RoutineItem = $Result.DefaultSelection<Prisma.$RoutineItemPayload>
/**
 * Model JournalEntry
 * 
 */
export type JournalEntry = $Result.DefaultSelection<Prisma.$JournalEntryPayload>
/**
 * Model FocusSession
 * 
 */
export type FocusSession = $Result.DefaultSelection<Prisma.$FocusSessionPayload>
/**
 * Model MeditationSession
 * 
 */
export type MeditationSession = $Result.DefaultSelection<Prisma.$MeditationSessionPayload>
/**
 * Model WeeklyReport
 * 
 */
export type WeeklyReport = $Result.DefaultSelection<Prisma.$WeeklyReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  Student: 'Student',
  Professional: 'Professional',
  Creator: 'Creator',
  Entrepreneur: 'Entrepreneur'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const FocusTime: {
  Morning: 'Morning',
  Afternoon: 'Afternoon',
  Evening: 'Evening',
  Night: 'Night'
};

export type FocusTime = (typeof FocusTime)[keyof typeof FocusTime]


export const EmotionalState: {
  Anxious: 'Anxious',
  Energetic: 'Energetic',
  Calm: 'Calm',
  Overwhelmed: 'Overwhelmed'
};

export type EmotionalState = (typeof EmotionalState)[keyof typeof EmotionalState]


export const MainGoal: {
  StayingFocused: 'StayingFocused',
  BeatingProcrastination: 'BeatingProcrastination',
  BuildingHabits: 'BuildingHabits',
  ManagingADHD: 'ManagingADHD'
};

export type MainGoal = (typeof MainGoal)[keyof typeof MainGoal]


export const PersonalityVibe: {
  Soft: 'Soft',
  Bold: 'Bold'
};

export type PersonalityVibe = (typeof PersonalityVibe)[keyof typeof PersonalityVibe]


export const Temperament: {
  Sanguine: 'Sanguine',
  Choleric: 'Choleric',
  Melancholic: 'Melancholic',
  Phlegmatic: 'Phlegmatic'
};

export type Temperament = (typeof Temperament)[keyof typeof Temperament]


export const Distraction: {
  SocialMedia: 'SocialMedia',
  RacingThoughts: 'RacingThoughts',
  OtherPeople: 'OtherPeople',
  Perfectionism: 'Perfectionism'
};

export type Distraction = (typeof Distraction)[keyof typeof Distraction]


export const OtpPurpose: {
  EmailVerification: 'EmailVerification',
  PasswordReset: 'PasswordReset'
};

export type OtpPurpose = (typeof OtpPurpose)[keyof typeof OtpPurpose]


export const Drive: {
  OnFire: 'OnFire',
  DueSoon: 'DueSoon',
  LowLift: 'LowLift',
  OpenSpace: 'OpenSpace'
};

export type Drive = (typeof Drive)[keyof typeof Drive]


export const TaskStatus: {
  Todo: 'Todo',
  WorkingOnIt: 'WorkingOnIt',
  PushedBack: 'PushedBack',
  StuckOnThis: 'StuckOnThis',
  Done: 'Done'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TaskPriority: {
  NonNegotiable: 'NonNegotiable',
  GoodToDo: 'GoodToDo',
  IfIGetThere: 'IfIGetThere'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]


export const HabitType: {
  Build: 'Build',
  Quit: 'Quit'
};

export type HabitType = (typeof HabitType)[keyof typeof HabitType]


export const HabitFrequency: {
  Daily: 'Daily',
  Weekdays: 'Weekdays',
  Custom: 'Custom'
};

export type HabitFrequency = (typeof HabitFrequency)[keyof typeof HabitFrequency]


export const HabitStrength: {
  Weak: 'Weak',
  Moderate: 'Moderate',
  High: 'High'
};

export type HabitStrength = (typeof HabitStrength)[keyof typeof HabitStrength]


export const MeditationMode: {
  Focus: 'Focus',
  Calm: 'Calm',
  Sleep: 'Sleep',
  Energy: 'Energy'
};

export type MeditationMode = (typeof MeditationMode)[keyof typeof MeditationMode]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type FocusTime = $Enums.FocusTime

export const FocusTime: typeof $Enums.FocusTime

export type EmotionalState = $Enums.EmotionalState

export const EmotionalState: typeof $Enums.EmotionalState

export type MainGoal = $Enums.MainGoal

export const MainGoal: typeof $Enums.MainGoal

export type PersonalityVibe = $Enums.PersonalityVibe

export const PersonalityVibe: typeof $Enums.PersonalityVibe

export type Temperament = $Enums.Temperament

export const Temperament: typeof $Enums.Temperament

export type Distraction = $Enums.Distraction

export const Distraction: typeof $Enums.Distraction

export type OtpPurpose = $Enums.OtpPurpose

export const OtpPurpose: typeof $Enums.OtpPurpose

export type Drive = $Enums.Drive

export const Drive: typeof $Enums.Drive

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

export type HabitType = $Enums.HabitType

export const HabitType: typeof $Enums.HabitType

export type HabitFrequency = $Enums.HabitFrequency

export const HabitFrequency: typeof $Enums.HabitFrequency

export type HabitStrength = $Enums.HabitStrength

export const HabitStrength: typeof $Enums.HabitStrength

export type MeditationMode = $Enums.MeditationMode

export const MeditationMode: typeof $Enums.MeditationMode

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs>;

  /**
   * `prisma.otpCode`: Exposes CRUD operations for the **OtpCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpCodes
    * const otpCodes = await prisma.otpCode.findMany()
    * ```
    */
  get otpCode(): Prisma.OtpCodeDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.subtask`: Exposes CRUD operations for the **Subtask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtasks
    * const subtasks = await prisma.subtask.findMany()
    * ```
    */
  get subtask(): Prisma.SubtaskDelegate<ExtArgs>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs>;

  /**
   * `prisma.habitCompletion`: Exposes CRUD operations for the **HabitCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitCompletions
    * const habitCompletions = await prisma.habitCompletion.findMany()
    * ```
    */
  get habitCompletion(): Prisma.HabitCompletionDelegate<ExtArgs>;

  /**
   * `prisma.routine`: Exposes CRUD operations for the **Routine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routines
    * const routines = await prisma.routine.findMany()
    * ```
    */
  get routine(): Prisma.RoutineDelegate<ExtArgs>;

  /**
   * `prisma.routineItem`: Exposes CRUD operations for the **RoutineItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineItems
    * const routineItems = await prisma.routineItem.findMany()
    * ```
    */
  get routineItem(): Prisma.RoutineItemDelegate<ExtArgs>;

  /**
   * `prisma.journalEntry`: Exposes CRUD operations for the **JournalEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalEntries
    * const journalEntries = await prisma.journalEntry.findMany()
    * ```
    */
  get journalEntry(): Prisma.JournalEntryDelegate<ExtArgs>;

  /**
   * `prisma.focusSession`: Exposes CRUD operations for the **FocusSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FocusSessions
    * const focusSessions = await prisma.focusSession.findMany()
    * ```
    */
  get focusSession(): Prisma.FocusSessionDelegate<ExtArgs>;

  /**
   * `prisma.meditationSession`: Exposes CRUD operations for the **MeditationSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeditationSessions
    * const meditationSessions = await prisma.meditationSession.findMany()
    * ```
    */
  get meditationSession(): Prisma.MeditationSessionDelegate<ExtArgs>;

  /**
   * `prisma.weeklyReport`: Exposes CRUD operations for the **WeeklyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyReports
    * const weeklyReports = await prisma.weeklyReport.findMany()
    * ```
    */
  get weeklyReport(): Prisma.WeeklyReportDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    RefreshToken: 'RefreshToken',
    OtpCode: 'OtpCode',
    Task: 'Task',
    Subtask: 'Subtask',
    Habit: 'Habit',
    HabitCompletion: 'HabitCompletion',
    Routine: 'Routine',
    RoutineItem: 'RoutineItem',
    JournalEntry: 'JournalEntry',
    FocusSession: 'FocusSession',
    MeditationSession: 'MeditationSession',
    WeeklyReport: 'WeeklyReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "refreshToken" | "otpCode" | "task" | "subtask" | "habit" | "habitCompletion" | "routine" | "routineItem" | "journalEntry" | "focusSession" | "meditationSession" | "weeklyReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      OtpCode: {
        payload: Prisma.$OtpCodePayload<ExtArgs>
        fields: Prisma.OtpCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          findFirst: {
            args: Prisma.OtpCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          findMany: {
            args: Prisma.OtpCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>[]
          }
          create: {
            args: Prisma.OtpCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          createMany: {
            args: Prisma.OtpCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>[]
          }
          delete: {
            args: Prisma.OtpCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          update: {
            args: Prisma.OtpCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          deleteMany: {
            args: Prisma.OtpCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtpCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          aggregate: {
            args: Prisma.OtpCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpCode>
          }
          groupBy: {
            args: Prisma.OtpCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCodeCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCodeCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Subtask: {
        payload: Prisma.$SubtaskPayload<ExtArgs>
        fields: Prisma.SubtaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubtaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubtaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          findFirst: {
            args: Prisma.SubtaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubtaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          findMany: {
            args: Prisma.SubtaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>[]
          }
          create: {
            args: Prisma.SubtaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          createMany: {
            args: Prisma.SubtaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubtaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>[]
          }
          delete: {
            args: Prisma.SubtaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          update: {
            args: Prisma.SubtaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          deleteMany: {
            args: Prisma.SubtaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubtaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubtaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          aggregate: {
            args: Prisma.SubtaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubtask>
          }
          groupBy: {
            args: Prisma.SubtaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubtaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubtaskCountArgs<ExtArgs>
            result: $Utils.Optional<SubtaskCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      HabitCompletion: {
        payload: Prisma.$HabitCompletionPayload<ExtArgs>
        fields: Prisma.HabitCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          findFirst: {
            args: Prisma.HabitCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          findMany: {
            args: Prisma.HabitCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>[]
          }
          create: {
            args: Prisma.HabitCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          createMany: {
            args: Prisma.HabitCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>[]
          }
          delete: {
            args: Prisma.HabitCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          update: {
            args: Prisma.HabitCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          deleteMany: {
            args: Prisma.HabitCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HabitCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          aggregate: {
            args: Prisma.HabitCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitCompletion>
          }
          groupBy: {
            args: Prisma.HabitCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCompletionCountAggregateOutputType> | number
          }
        }
      }
      Routine: {
        payload: Prisma.$RoutinePayload<ExtArgs>
        fields: Prisma.RoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findFirst: {
            args: Prisma.RoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findMany: {
            args: Prisma.RoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          create: {
            args: Prisma.RoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          createMany: {
            args: Prisma.RoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          delete: {
            args: Prisma.RoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          update: {
            args: Prisma.RoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          deleteMany: {
            args: Prisma.RoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          aggregate: {
            args: Prisma.RoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutine>
          }
          groupBy: {
            args: Prisma.RoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineCountAggregateOutputType> | number
          }
        }
      }
      RoutineItem: {
        payload: Prisma.$RoutineItemPayload<ExtArgs>
        fields: Prisma.RoutineItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload>
          }
          findFirst: {
            args: Prisma.RoutineItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload>
          }
          findMany: {
            args: Prisma.RoutineItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload>[]
          }
          create: {
            args: Prisma.RoutineItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload>
          }
          createMany: {
            args: Prisma.RoutineItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload>[]
          }
          delete: {
            args: Prisma.RoutineItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload>
          }
          update: {
            args: Prisma.RoutineItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload>
          }
          deleteMany: {
            args: Prisma.RoutineItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoutineItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineItemPayload>
          }
          aggregate: {
            args: Prisma.RoutineItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutineItem>
          }
          groupBy: {
            args: Prisma.RoutineItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineItemCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineItemCountAggregateOutputType> | number
          }
        }
      }
      JournalEntry: {
        payload: Prisma.$JournalEntryPayload<ExtArgs>
        fields: Prisma.JournalEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findFirst: {
            args: Prisma.JournalEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findMany: {
            args: Prisma.JournalEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          create: {
            args: Prisma.JournalEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          createMany: {
            args: Prisma.JournalEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          delete: {
            args: Prisma.JournalEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          update: {
            args: Prisma.JournalEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          deleteMany: {
            args: Prisma.JournalEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JournalEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          aggregate: {
            args: Prisma.JournalEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalEntry>
          }
          groupBy: {
            args: Prisma.JournalEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalEntryCountArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryCountAggregateOutputType> | number
          }
        }
      }
      FocusSession: {
        payload: Prisma.$FocusSessionPayload<ExtArgs>
        fields: Prisma.FocusSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FocusSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FocusSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          findFirst: {
            args: Prisma.FocusSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FocusSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          findMany: {
            args: Prisma.FocusSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>[]
          }
          create: {
            args: Prisma.FocusSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          createMany: {
            args: Prisma.FocusSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FocusSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>[]
          }
          delete: {
            args: Prisma.FocusSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          update: {
            args: Prisma.FocusSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          deleteMany: {
            args: Prisma.FocusSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FocusSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FocusSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          aggregate: {
            args: Prisma.FocusSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFocusSession>
          }
          groupBy: {
            args: Prisma.FocusSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FocusSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FocusSessionCountArgs<ExtArgs>
            result: $Utils.Optional<FocusSessionCountAggregateOutputType> | number
          }
        }
      }
      MeditationSession: {
        payload: Prisma.$MeditationSessionPayload<ExtArgs>
        fields: Prisma.MeditationSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeditationSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeditationSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload>
          }
          findFirst: {
            args: Prisma.MeditationSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeditationSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload>
          }
          findMany: {
            args: Prisma.MeditationSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload>[]
          }
          create: {
            args: Prisma.MeditationSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload>
          }
          createMany: {
            args: Prisma.MeditationSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeditationSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload>[]
          }
          delete: {
            args: Prisma.MeditationSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload>
          }
          update: {
            args: Prisma.MeditationSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload>
          }
          deleteMany: {
            args: Prisma.MeditationSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeditationSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeditationSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeditationSessionPayload>
          }
          aggregate: {
            args: Prisma.MeditationSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeditationSession>
          }
          groupBy: {
            args: Prisma.MeditationSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeditationSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeditationSessionCountArgs<ExtArgs>
            result: $Utils.Optional<MeditationSessionCountAggregateOutputType> | number
          }
        }
      }
      WeeklyReport: {
        payload: Prisma.$WeeklyReportPayload<ExtArgs>
        fields: Prisma.WeeklyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          findFirst: {
            args: Prisma.WeeklyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          findMany: {
            args: Prisma.WeeklyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>[]
          }
          create: {
            args: Prisma.WeeklyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          createMany: {
            args: Prisma.WeeklyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>[]
          }
          delete: {
            args: Prisma.WeeklyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          update: {
            args: Prisma.WeeklyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeeklyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          aggregate: {
            args: Prisma.WeeklyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyReport>
          }
          groupBy: {
            args: Prisma.WeeklyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyReportCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyReportCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
    otpCodes: number
    tasks: number
    habits: number
    routines: number
    journalEntries: number
    focusSessions: number
    meditationSessions: number
    weeklyReports: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    otpCodes?: boolean | UserCountOutputTypeCountOtpCodesArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    habits?: boolean | UserCountOutputTypeCountHabitsArgs
    routines?: boolean | UserCountOutputTypeCountRoutinesArgs
    journalEntries?: boolean | UserCountOutputTypeCountJournalEntriesArgs
    focusSessions?: boolean | UserCountOutputTypeCountFocusSessionsArgs
    meditationSessions?: boolean | UserCountOutputTypeCountMeditationSessionsArgs
    weeklyReports?: boolean | UserCountOutputTypeCountWeeklyReportsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJournalEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFocusSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeditationSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeditationSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyReportWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    subtasks: number
    focusSessions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtasks?: boolean | TaskCountOutputTypeCountSubtasksArgs
    focusSessions?: boolean | TaskCountOutputTypeCountFocusSessionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountFocusSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusSessionWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    completions: number
    routineItems: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completions?: boolean | HabitCountOutputTypeCountCompletionsArgs
    routineItems?: boolean | HabitCountOutputTypeCountRoutineItemsArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitCompletionWhereInput
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountRoutineItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineItemWhereInput
  }


  /**
   * Count Type RoutineCountOutputType
   */

  export type RoutineCountOutputType = {
    items: number
  }

  export type RoutineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | RoutineCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineCountOutputType
     */
    select?: RoutineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    iqScore: number | null
    eqScore: number | null
    sqScore: number | null
  }

  export type UserSumAggregateOutputType = {
    iqScore: number | null
    eqScore: number | null
    sqScore: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    username: string | null
    avatarUrl: string | null
    timezone: string | null
    role: $Enums.UserRole | null
    isEmailVerified: boolean | null
    isOnboarded: boolean | null
    focusTime: $Enums.FocusTime | null
    emotionalState: $Enums.EmotionalState | null
    mainGoal: $Enums.MainGoal | null
    weeklyGoal: string | null
    personalityVibe: $Enums.PersonalityVibe | null
    temperament: $Enums.Temperament | null
    iqScore: number | null
    eqScore: number | null
    sqScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    username: string | null
    avatarUrl: string | null
    timezone: string | null
    role: $Enums.UserRole | null
    isEmailVerified: boolean | null
    isOnboarded: boolean | null
    focusTime: $Enums.FocusTime | null
    emotionalState: $Enums.EmotionalState | null
    mainGoal: $Enums.MainGoal | null
    weeklyGoal: string | null
    personalityVibe: $Enums.PersonalityVibe | null
    temperament: $Enums.Temperament | null
    iqScore: number | null
    eqScore: number | null
    sqScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    displayName: number
    username: number
    avatarUrl: number
    timezone: number
    role: number
    isEmailVerified: number
    isOnboarded: number
    focusTime: number
    emotionalState: number
    distractions: number
    mainGoal: number
    weeklyGoal: number
    personalityVibe: number
    temperament: number
    iqScore: number
    eqScore: number
    sqScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    iqScore?: true
    eqScore?: true
    sqScore?: true
  }

  export type UserSumAggregateInputType = {
    iqScore?: true
    eqScore?: true
    sqScore?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    username?: true
    avatarUrl?: true
    timezone?: true
    role?: true
    isEmailVerified?: true
    isOnboarded?: true
    focusTime?: true
    emotionalState?: true
    mainGoal?: true
    weeklyGoal?: true
    personalityVibe?: true
    temperament?: true
    iqScore?: true
    eqScore?: true
    sqScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    username?: true
    avatarUrl?: true
    timezone?: true
    role?: true
    isEmailVerified?: true
    isOnboarded?: true
    focusTime?: true
    emotionalState?: true
    mainGoal?: true
    weeklyGoal?: true
    personalityVibe?: true
    temperament?: true
    iqScore?: true
    eqScore?: true
    sqScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    username?: true
    avatarUrl?: true
    timezone?: true
    role?: true
    isEmailVerified?: true
    isOnboarded?: true
    focusTime?: true
    emotionalState?: true
    distractions?: true
    mainGoal?: true
    weeklyGoal?: true
    personalityVibe?: true
    temperament?: true
    iqScore?: true
    eqScore?: true
    sqScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    displayName: string
    username: string | null
    avatarUrl: string | null
    timezone: string
    role: $Enums.UserRole | null
    isEmailVerified: boolean
    isOnboarded: boolean
    focusTime: $Enums.FocusTime | null
    emotionalState: $Enums.EmotionalState | null
    distractions: $Enums.Distraction[]
    mainGoal: $Enums.MainGoal | null
    weeklyGoal: string | null
    personalityVibe: $Enums.PersonalityVibe | null
    temperament: $Enums.Temperament | null
    iqScore: number | null
    eqScore: number | null
    sqScore: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    username?: boolean
    avatarUrl?: boolean
    timezone?: boolean
    role?: boolean
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: boolean
    emotionalState?: boolean
    distractions?: boolean
    mainGoal?: boolean
    weeklyGoal?: boolean
    personalityVibe?: boolean
    temperament?: boolean
    iqScore?: boolean
    eqScore?: boolean
    sqScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    otpCodes?: boolean | User$otpCodesArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    journalEntries?: boolean | User$journalEntriesArgs<ExtArgs>
    focusSessions?: boolean | User$focusSessionsArgs<ExtArgs>
    meditationSessions?: boolean | User$meditationSessionsArgs<ExtArgs>
    weeklyReports?: boolean | User$weeklyReportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    username?: boolean
    avatarUrl?: boolean
    timezone?: boolean
    role?: boolean
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: boolean
    emotionalState?: boolean
    distractions?: boolean
    mainGoal?: boolean
    weeklyGoal?: boolean
    personalityVibe?: boolean
    temperament?: boolean
    iqScore?: boolean
    eqScore?: boolean
    sqScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    username?: boolean
    avatarUrl?: boolean
    timezone?: boolean
    role?: boolean
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: boolean
    emotionalState?: boolean
    distractions?: boolean
    mainGoal?: boolean
    weeklyGoal?: boolean
    personalityVibe?: boolean
    temperament?: boolean
    iqScore?: boolean
    eqScore?: boolean
    sqScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    otpCodes?: boolean | User$otpCodesArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    journalEntries?: boolean | User$journalEntriesArgs<ExtArgs>
    focusSessions?: boolean | User$focusSessionsArgs<ExtArgs>
    meditationSessions?: boolean | User$meditationSessionsArgs<ExtArgs>
    weeklyReports?: boolean | User$weeklyReportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      otpCodes: Prisma.$OtpCodePayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      habits: Prisma.$HabitPayload<ExtArgs>[]
      routines: Prisma.$RoutinePayload<ExtArgs>[]
      journalEntries: Prisma.$JournalEntryPayload<ExtArgs>[]
      focusSessions: Prisma.$FocusSessionPayload<ExtArgs>[]
      meditationSessions: Prisma.$MeditationSessionPayload<ExtArgs>[]
      weeklyReports: Prisma.$WeeklyReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      displayName: string
      username: string | null
      avatarUrl: string | null
      timezone: string
      role: $Enums.UserRole | null
      isEmailVerified: boolean
      isOnboarded: boolean
      focusTime: $Enums.FocusTime | null
      emotionalState: $Enums.EmotionalState | null
      distractions: $Enums.Distraction[]
      mainGoal: $Enums.MainGoal | null
      weeklyGoal: string | null
      personalityVibe: $Enums.PersonalityVibe | null
      temperament: $Enums.Temperament | null
      iqScore: number | null
      eqScore: number | null
      sqScore: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany"> | Null>
    otpCodes<T extends User$otpCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$otpCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    habits<T extends User$habitsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany"> | Null>
    routines<T extends User$routinesArgs<ExtArgs> = {}>(args?: Subset<T, User$routinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany"> | Null>
    journalEntries<T extends User$journalEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$journalEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany"> | Null>
    focusSessions<T extends User$focusSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$focusSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findMany"> | Null>
    meditationSessions<T extends User$meditationSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$meditationSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "findMany"> | Null>
    weeklyReports<T extends User$weeklyReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly isOnboarded: FieldRef<"User", 'Boolean'>
    readonly focusTime: FieldRef<"User", 'FocusTime'>
    readonly emotionalState: FieldRef<"User", 'EmotionalState'>
    readonly distractions: FieldRef<"User", 'Distraction[]'>
    readonly mainGoal: FieldRef<"User", 'MainGoal'>
    readonly weeklyGoal: FieldRef<"User", 'String'>
    readonly personalityVibe: FieldRef<"User", 'PersonalityVibe'>
    readonly temperament: FieldRef<"User", 'Temperament'>
    readonly iqScore: FieldRef<"User", 'Int'>
    readonly eqScore: FieldRef<"User", 'Int'>
    readonly sqScore: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.otpCodes
   */
  export type User$otpCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    where?: OtpCodeWhereInput
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    cursor?: OtpCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.habits
   */
  export type User$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * User.routines
   */
  export type User$routinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    cursor?: RoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * User.journalEntries
   */
  export type User$journalEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    cursor?: JournalEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * User.focusSessions
   */
  export type User$focusSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    where?: FocusSessionWhereInput
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    cursor?: FocusSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * User.meditationSessions
   */
  export type User$meditationSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    where?: MeditationSessionWhereInput
    orderBy?: MeditationSessionOrderByWithRelationInput | MeditationSessionOrderByWithRelationInput[]
    cursor?: MeditationSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeditationSessionScalarFieldEnum | MeditationSessionScalarFieldEnum[]
  }

  /**
   * User.weeklyReports
   */
  export type User$weeklyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    where?: WeeklyReportWhereInput
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    cursor?: WeeklyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model OtpCode
   */

  export type AggregateOtpCode = {
    _count: OtpCodeCountAggregateOutputType | null
    _min: OtpCodeMinAggregateOutputType | null
    _max: OtpCodeMaxAggregateOutputType | null
  }

  export type OtpCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    userId: string | null
    purpose: $Enums.OtpPurpose | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type OtpCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    userId: string | null
    purpose: $Enums.OtpPurpose | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type OtpCodeCountAggregateOutputType = {
    id: number
    code: number
    userId: number
    purpose: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type OtpCodeMinAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    purpose?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type OtpCodeMaxAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    purpose?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type OtpCodeCountAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    purpose?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type OtpCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpCode to aggregate.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpCodes
    **/
    _count?: true | OtpCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpCodeMaxAggregateInputType
  }

  export type GetOtpCodeAggregateType<T extends OtpCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpCode[P]>
      : GetScalarType<T[P], AggregateOtpCode[P]>
  }




  export type OtpCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpCodeWhereInput
    orderBy?: OtpCodeOrderByWithAggregationInput | OtpCodeOrderByWithAggregationInput[]
    by: OtpCodeScalarFieldEnum[] | OtpCodeScalarFieldEnum
    having?: OtpCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCodeCountAggregateInputType | true
    _min?: OtpCodeMinAggregateInputType
    _max?: OtpCodeMaxAggregateInputType
  }

  export type OtpCodeGroupByOutputType = {
    id: string
    code: string
    userId: string
    purpose: $Enums.OtpPurpose
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: OtpCodeCountAggregateOutputType | null
    _min: OtpCodeMinAggregateOutputType | null
    _max: OtpCodeMaxAggregateOutputType | null
  }

  type GetOtpCodeGroupByPayload<T extends OtpCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpCodeGroupByOutputType[P]>
            : GetScalarType<T[P], OtpCodeGroupByOutputType[P]>
        }
      >
    >


  export type OtpCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    purpose?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpCode"]>

  export type OtpCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    purpose?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpCode"]>

  export type OtpCodeSelectScalar = {
    id?: boolean
    code?: boolean
    userId?: boolean
    purpose?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type OtpCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OtpCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      userId: string
      purpose: $Enums.OtpPurpose
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["otpCode"]>
    composites: {}
  }

  type OtpCodeGetPayload<S extends boolean | null | undefined | OtpCodeDefaultArgs> = $Result.GetResult<Prisma.$OtpCodePayload, S>

  type OtpCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OtpCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OtpCodeCountAggregateInputType | true
    }

  export interface OtpCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpCode'], meta: { name: 'OtpCode' } }
    /**
     * Find zero or one OtpCode that matches the filter.
     * @param {OtpCodeFindUniqueArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpCodeFindUniqueArgs>(args: SelectSubset<T, OtpCodeFindUniqueArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OtpCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OtpCodeFindUniqueOrThrowArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OtpCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeFindFirstArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpCodeFindFirstArgs>(args?: SelectSubset<T, OtpCodeFindFirstArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OtpCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeFindFirstOrThrowArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OtpCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpCodes
     * const otpCodes = await prisma.otpCode.findMany()
     * 
     * // Get first 10 OtpCodes
     * const otpCodes = await prisma.otpCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpCodeWithIdOnly = await prisma.otpCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpCodeFindManyArgs>(args?: SelectSubset<T, OtpCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OtpCode.
     * @param {OtpCodeCreateArgs} args - Arguments to create a OtpCode.
     * @example
     * // Create one OtpCode
     * const OtpCode = await prisma.otpCode.create({
     *   data: {
     *     // ... data to create a OtpCode
     *   }
     * })
     * 
     */
    create<T extends OtpCodeCreateArgs>(args: SelectSubset<T, OtpCodeCreateArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OtpCodes.
     * @param {OtpCodeCreateManyArgs} args - Arguments to create many OtpCodes.
     * @example
     * // Create many OtpCodes
     * const otpCode = await prisma.otpCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCodeCreateManyArgs>(args?: SelectSubset<T, OtpCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpCodes and returns the data saved in the database.
     * @param {OtpCodeCreateManyAndReturnArgs} args - Arguments to create many OtpCodes.
     * @example
     * // Create many OtpCodes
     * const otpCode = await prisma.otpCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpCodes and only return the `id`
     * const otpCodeWithIdOnly = await prisma.otpCode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OtpCode.
     * @param {OtpCodeDeleteArgs} args - Arguments to delete one OtpCode.
     * @example
     * // Delete one OtpCode
     * const OtpCode = await prisma.otpCode.delete({
     *   where: {
     *     // ... filter to delete one OtpCode
     *   }
     * })
     * 
     */
    delete<T extends OtpCodeDeleteArgs>(args: SelectSubset<T, OtpCodeDeleteArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OtpCode.
     * @param {OtpCodeUpdateArgs} args - Arguments to update one OtpCode.
     * @example
     * // Update one OtpCode
     * const otpCode = await prisma.otpCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpCodeUpdateArgs>(args: SelectSubset<T, OtpCodeUpdateArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OtpCodes.
     * @param {OtpCodeDeleteManyArgs} args - Arguments to filter OtpCodes to delete.
     * @example
     * // Delete a few OtpCodes
     * const { count } = await prisma.otpCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpCodeDeleteManyArgs>(args?: SelectSubset<T, OtpCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpCodes
     * const otpCode = await prisma.otpCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpCodeUpdateManyArgs>(args: SelectSubset<T, OtpCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtpCode.
     * @param {OtpCodeUpsertArgs} args - Arguments to update or create a OtpCode.
     * @example
     * // Update or create a OtpCode
     * const otpCode = await prisma.otpCode.upsert({
     *   create: {
     *     // ... data to create a OtpCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpCode we want to update
     *   }
     * })
     */
    upsert<T extends OtpCodeUpsertArgs>(args: SelectSubset<T, OtpCodeUpsertArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OtpCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeCountArgs} args - Arguments to filter OtpCodes to count.
     * @example
     * // Count the number of OtpCodes
     * const count = await prisma.otpCode.count({
     *   where: {
     *     // ... the filter for the OtpCodes we want to count
     *   }
     * })
    **/
    count<T extends OtpCodeCountArgs>(
      args?: Subset<T, OtpCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpCodeAggregateArgs>(args: Subset<T, OtpCodeAggregateArgs>): Prisma.PrismaPromise<GetOtpCodeAggregateType<T>>

    /**
     * Group by OtpCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeGroupByArgs} args - Group by arguments.
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
      T extends OtpCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpCodeGroupByArgs['orderBy'] }
        : { orderBy?: OtpCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpCode model
   */
  readonly fields: OtpCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OtpCode model
   */ 
  interface OtpCodeFieldRefs {
    readonly id: FieldRef<"OtpCode", 'String'>
    readonly code: FieldRef<"OtpCode", 'String'>
    readonly userId: FieldRef<"OtpCode", 'String'>
    readonly purpose: FieldRef<"OtpCode", 'OtpPurpose'>
    readonly expiresAt: FieldRef<"OtpCode", 'DateTime'>
    readonly usedAt: FieldRef<"OtpCode", 'DateTime'>
    readonly createdAt: FieldRef<"OtpCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpCode findUnique
   */
  export type OtpCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode findUniqueOrThrow
   */
  export type OtpCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode findFirst
   */
  export type OtpCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpCodes.
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpCodes.
     */
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * OtpCode findFirstOrThrow
   */
  export type OtpCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpCodes.
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpCodes.
     */
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * OtpCode findMany
   */
  export type OtpCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCodes to fetch.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpCodes.
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * OtpCode create
   */
  export type OtpCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a OtpCode.
     */
    data: XOR<OtpCodeCreateInput, OtpCodeUncheckedCreateInput>
  }

  /**
   * OtpCode createMany
   */
  export type OtpCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpCodes.
     */
    data: OtpCodeCreateManyInput | OtpCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpCode createManyAndReturn
   */
  export type OtpCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OtpCodes.
     */
    data: OtpCodeCreateManyInput | OtpCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtpCode update
   */
  export type OtpCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a OtpCode.
     */
    data: XOR<OtpCodeUpdateInput, OtpCodeUncheckedUpdateInput>
    /**
     * Choose, which OtpCode to update.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode updateMany
   */
  export type OtpCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpCodes.
     */
    data: XOR<OtpCodeUpdateManyMutationInput, OtpCodeUncheckedUpdateManyInput>
    /**
     * Filter which OtpCodes to update
     */
    where?: OtpCodeWhereInput
  }

  /**
   * OtpCode upsert
   */
  export type OtpCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the OtpCode to update in case it exists.
     */
    where: OtpCodeWhereUniqueInput
    /**
     * In case the OtpCode found by the `where` argument doesn't exist, create a new OtpCode with this data.
     */
    create: XOR<OtpCodeCreateInput, OtpCodeUncheckedCreateInput>
    /**
     * In case the OtpCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpCodeUpdateInput, OtpCodeUncheckedUpdateInput>
  }

  /**
   * OtpCode delete
   */
  export type OtpCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter which OtpCode to delete.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode deleteMany
   */
  export type OtpCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpCodes to delete
     */
    where?: OtpCodeWhereInput
  }

  /**
   * OtpCode without action
   */
  export type OtpCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    estimatedMinutes: number | null
  }

  export type TaskSumAggregateOutputType = {
    estimatedMinutes: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    naturalInput: string | null
    drive: $Enums.Drive | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    estimatedMinutes: number | null
    dueDate: Date | null
    completedAt: Date | null
    aiSuggested: boolean | null
    aiNudge: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    naturalInput: string | null
    drive: $Enums.Drive | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    estimatedMinutes: number | null
    dueDate: Date | null
    completedAt: Date | null
    aiSuggested: boolean | null
    aiNudge: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    naturalInput: number
    drive: number
    status: number
    priority: number
    estimatedMinutes: number
    dueDate: number
    completedAt: number
    aiSuggested: number
    aiNudge: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    estimatedMinutes?: true
  }

  export type TaskSumAggregateInputType = {
    estimatedMinutes?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    naturalInput?: true
    drive?: true
    status?: true
    priority?: true
    estimatedMinutes?: true
    dueDate?: true
    completedAt?: true
    aiSuggested?: true
    aiNudge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    naturalInput?: true
    drive?: true
    status?: true
    priority?: true
    estimatedMinutes?: true
    dueDate?: true
    completedAt?: true
    aiSuggested?: true
    aiNudge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    naturalInput?: true
    drive?: true
    status?: true
    priority?: true
    estimatedMinutes?: true
    dueDate?: true
    completedAt?: true
    aiSuggested?: true
    aiNudge?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    userId: string
    title: string
    naturalInput: string | null
    drive: $Enums.Drive
    status: $Enums.TaskStatus
    priority: $Enums.TaskPriority
    estimatedMinutes: number | null
    dueDate: Date | null
    completedAt: Date | null
    aiSuggested: boolean
    aiNudge: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    naturalInput?: boolean
    drive?: boolean
    status?: boolean
    priority?: boolean
    estimatedMinutes?: boolean
    dueDate?: boolean
    completedAt?: boolean
    aiSuggested?: boolean
    aiNudge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    focusSessions?: boolean | Task$focusSessionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    naturalInput?: boolean
    drive?: boolean
    status?: boolean
    priority?: boolean
    estimatedMinutes?: boolean
    dueDate?: boolean
    completedAt?: boolean
    aiSuggested?: boolean
    aiNudge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    naturalInput?: boolean
    drive?: boolean
    status?: boolean
    priority?: boolean
    estimatedMinutes?: boolean
    dueDate?: boolean
    completedAt?: boolean
    aiSuggested?: boolean
    aiNudge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    focusSessions?: boolean | Task$focusSessionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      subtasks: Prisma.$SubtaskPayload<ExtArgs>[]
      focusSessions: Prisma.$FocusSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      naturalInput: string | null
      drive: $Enums.Drive
      status: $Enums.TaskStatus
      priority: $Enums.TaskPriority
      estimatedMinutes: number | null
      dueDate: Date | null
      completedAt: Date | null
      aiSuggested: boolean
      aiNudge: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subtasks<T extends Task$subtasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$subtasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "findMany"> | Null>
    focusSessions<T extends Task$focusSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$focusSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly naturalInput: FieldRef<"Task", 'String'>
    readonly drive: FieldRef<"Task", 'Drive'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly estimatedMinutes: FieldRef<"Task", 'Int'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly aiSuggested: FieldRef<"Task", 'Boolean'>
    readonly aiNudge: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.subtasks
   */
  export type Task$subtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    where?: SubtaskWhereInput
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    cursor?: SubtaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * Task.focusSessions
   */
  export type Task$focusSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    where?: FocusSessionWhereInput
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    cursor?: FocusSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Subtask
   */

  export type AggregateSubtask = {
    _count: SubtaskCountAggregateOutputType | null
    _avg: SubtaskAvgAggregateOutputType | null
    _sum: SubtaskSumAggregateOutputType | null
    _min: SubtaskMinAggregateOutputType | null
    _max: SubtaskMaxAggregateOutputType | null
  }

  export type SubtaskAvgAggregateOutputType = {
    estimatedMinutes: number | null
    order: number | null
  }

  export type SubtaskSumAggregateOutputType = {
    estimatedMinutes: number | null
    order: number | null
  }

  export type SubtaskMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    title: string | null
    estimatedMinutes: number | null
    completed: boolean | null
    completedAt: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtaskMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    title: string | null
    estimatedMinutes: number | null
    completed: boolean | null
    completedAt: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtaskCountAggregateOutputType = {
    id: number
    taskId: number
    title: number
    estimatedMinutes: number
    completed: number
    completedAt: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubtaskAvgAggregateInputType = {
    estimatedMinutes?: true
    order?: true
  }

  export type SubtaskSumAggregateInputType = {
    estimatedMinutes?: true
    order?: true
  }

  export type SubtaskMinAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    estimatedMinutes?: true
    completed?: true
    completedAt?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtaskMaxAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    estimatedMinutes?: true
    completed?: true
    completedAt?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtaskCountAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    estimatedMinutes?: true
    completed?: true
    completedAt?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubtaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtask to aggregate.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subtasks
    **/
    _count?: true | SubtaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubtaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubtaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtaskMaxAggregateInputType
  }

  export type GetSubtaskAggregateType<T extends SubtaskAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtask[P]>
      : GetScalarType<T[P], AggregateSubtask[P]>
  }




  export type SubtaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtaskWhereInput
    orderBy?: SubtaskOrderByWithAggregationInput | SubtaskOrderByWithAggregationInput[]
    by: SubtaskScalarFieldEnum[] | SubtaskScalarFieldEnum
    having?: SubtaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtaskCountAggregateInputType | true
    _avg?: SubtaskAvgAggregateInputType
    _sum?: SubtaskSumAggregateInputType
    _min?: SubtaskMinAggregateInputType
    _max?: SubtaskMaxAggregateInputType
  }

  export type SubtaskGroupByOutputType = {
    id: string
    taskId: string
    title: string
    estimatedMinutes: number | null
    completed: boolean
    completedAt: Date | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: SubtaskCountAggregateOutputType | null
    _avg: SubtaskAvgAggregateOutputType | null
    _sum: SubtaskSumAggregateOutputType | null
    _min: SubtaskMinAggregateOutputType | null
    _max: SubtaskMaxAggregateOutputType | null
  }

  type GetSubtaskGroupByPayload<T extends SubtaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtaskGroupByOutputType[P]>
            : GetScalarType<T[P], SubtaskGroupByOutputType[P]>
        }
      >
    >


  export type SubtaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    title?: boolean
    estimatedMinutes?: boolean
    completed?: boolean
    completedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtask"]>

  export type SubtaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    title?: boolean
    estimatedMinutes?: boolean
    completed?: boolean
    completedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtask"]>

  export type SubtaskSelectScalar = {
    id?: boolean
    taskId?: boolean
    title?: boolean
    estimatedMinutes?: boolean
    completed?: boolean
    completedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubtaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type SubtaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $SubtaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subtask"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      title: string
      estimatedMinutes: number | null
      completed: boolean
      completedAt: Date | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subtask"]>
    composites: {}
  }

  type SubtaskGetPayload<S extends boolean | null | undefined | SubtaskDefaultArgs> = $Result.GetResult<Prisma.$SubtaskPayload, S>

  type SubtaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubtaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubtaskCountAggregateInputType | true
    }

  export interface SubtaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subtask'], meta: { name: 'Subtask' } }
    /**
     * Find zero or one Subtask that matches the filter.
     * @param {SubtaskFindUniqueArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubtaskFindUniqueArgs>(args: SelectSubset<T, SubtaskFindUniqueArgs<ExtArgs>>): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subtask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubtaskFindUniqueOrThrowArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubtaskFindUniqueOrThrowArgs>(args: SelectSubset<T, SubtaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subtask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskFindFirstArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubtaskFindFirstArgs>(args?: SelectSubset<T, SubtaskFindFirstArgs<ExtArgs>>): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subtask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskFindFirstOrThrowArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubtaskFindFirstOrThrowArgs>(args?: SelectSubset<T, SubtaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subtasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtasks
     * const subtasks = await prisma.subtask.findMany()
     * 
     * // Get first 10 Subtasks
     * const subtasks = await prisma.subtask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtaskWithIdOnly = await prisma.subtask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubtaskFindManyArgs>(args?: SelectSubset<T, SubtaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subtask.
     * @param {SubtaskCreateArgs} args - Arguments to create a Subtask.
     * @example
     * // Create one Subtask
     * const Subtask = await prisma.subtask.create({
     *   data: {
     *     // ... data to create a Subtask
     *   }
     * })
     * 
     */
    create<T extends SubtaskCreateArgs>(args: SelectSubset<T, SubtaskCreateArgs<ExtArgs>>): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subtasks.
     * @param {SubtaskCreateManyArgs} args - Arguments to create many Subtasks.
     * @example
     * // Create many Subtasks
     * const subtask = await prisma.subtask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubtaskCreateManyArgs>(args?: SelectSubset<T, SubtaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subtasks and returns the data saved in the database.
     * @param {SubtaskCreateManyAndReturnArgs} args - Arguments to create many Subtasks.
     * @example
     * // Create many Subtasks
     * const subtask = await prisma.subtask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subtasks and only return the `id`
     * const subtaskWithIdOnly = await prisma.subtask.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubtaskCreateManyAndReturnArgs>(args?: SelectSubset<T, SubtaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subtask.
     * @param {SubtaskDeleteArgs} args - Arguments to delete one Subtask.
     * @example
     * // Delete one Subtask
     * const Subtask = await prisma.subtask.delete({
     *   where: {
     *     // ... filter to delete one Subtask
     *   }
     * })
     * 
     */
    delete<T extends SubtaskDeleteArgs>(args: SelectSubset<T, SubtaskDeleteArgs<ExtArgs>>): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subtask.
     * @param {SubtaskUpdateArgs} args - Arguments to update one Subtask.
     * @example
     * // Update one Subtask
     * const subtask = await prisma.subtask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubtaskUpdateArgs>(args: SelectSubset<T, SubtaskUpdateArgs<ExtArgs>>): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subtasks.
     * @param {SubtaskDeleteManyArgs} args - Arguments to filter Subtasks to delete.
     * @example
     * // Delete a few Subtasks
     * const { count } = await prisma.subtask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubtaskDeleteManyArgs>(args?: SelectSubset<T, SubtaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtasks
     * const subtask = await prisma.subtask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubtaskUpdateManyArgs>(args: SelectSubset<T, SubtaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subtask.
     * @param {SubtaskUpsertArgs} args - Arguments to update or create a Subtask.
     * @example
     * // Update or create a Subtask
     * const subtask = await prisma.subtask.upsert({
     *   create: {
     *     // ... data to create a Subtask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtask we want to update
     *   }
     * })
     */
    upsert<T extends SubtaskUpsertArgs>(args: SelectSubset<T, SubtaskUpsertArgs<ExtArgs>>): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskCountArgs} args - Arguments to filter Subtasks to count.
     * @example
     * // Count the number of Subtasks
     * const count = await prisma.subtask.count({
     *   where: {
     *     // ... the filter for the Subtasks we want to count
     *   }
     * })
    **/
    count<T extends SubtaskCountArgs>(
      args?: Subset<T, SubtaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubtaskAggregateArgs>(args: Subset<T, SubtaskAggregateArgs>): Prisma.PrismaPromise<GetSubtaskAggregateType<T>>

    /**
     * Group by Subtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskGroupByArgs} args - Group by arguments.
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
      T extends SubtaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubtaskGroupByArgs['orderBy'] }
        : { orderBy?: SubtaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubtaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subtask model
   */
  readonly fields: SubtaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subtask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubtaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Subtask model
   */ 
  interface SubtaskFieldRefs {
    readonly id: FieldRef<"Subtask", 'String'>
    readonly taskId: FieldRef<"Subtask", 'String'>
    readonly title: FieldRef<"Subtask", 'String'>
    readonly estimatedMinutes: FieldRef<"Subtask", 'Int'>
    readonly completed: FieldRef<"Subtask", 'Boolean'>
    readonly completedAt: FieldRef<"Subtask", 'DateTime'>
    readonly order: FieldRef<"Subtask", 'Int'>
    readonly createdAt: FieldRef<"Subtask", 'DateTime'>
    readonly updatedAt: FieldRef<"Subtask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subtask findUnique
   */
  export type SubtaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where: SubtaskWhereUniqueInput
  }

  /**
   * Subtask findUniqueOrThrow
   */
  export type SubtaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where: SubtaskWhereUniqueInput
  }

  /**
   * Subtask findFirst
   */
  export type SubtaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtasks.
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtasks.
     */
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * Subtask findFirstOrThrow
   */
  export type SubtaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtasks.
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtasks.
     */
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * Subtask findMany
   */
  export type SubtaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtasks to fetch.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subtasks.
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * Subtask create
   */
  export type SubtaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Subtask.
     */
    data: XOR<SubtaskCreateInput, SubtaskUncheckedCreateInput>
  }

  /**
   * Subtask createMany
   */
  export type SubtaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subtasks.
     */
    data: SubtaskCreateManyInput | SubtaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subtask createManyAndReturn
   */
  export type SubtaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subtasks.
     */
    data: SubtaskCreateManyInput | SubtaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subtask update
   */
  export type SubtaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Subtask.
     */
    data: XOR<SubtaskUpdateInput, SubtaskUncheckedUpdateInput>
    /**
     * Choose, which Subtask to update.
     */
    where: SubtaskWhereUniqueInput
  }

  /**
   * Subtask updateMany
   */
  export type SubtaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subtasks.
     */
    data: XOR<SubtaskUpdateManyMutationInput, SubtaskUncheckedUpdateManyInput>
    /**
     * Filter which Subtasks to update
     */
    where?: SubtaskWhereInput
  }

  /**
   * Subtask upsert
   */
  export type SubtaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Subtask to update in case it exists.
     */
    where: SubtaskWhereUniqueInput
    /**
     * In case the Subtask found by the `where` argument doesn't exist, create a new Subtask with this data.
     */
    create: XOR<SubtaskCreateInput, SubtaskUncheckedCreateInput>
    /**
     * In case the Subtask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubtaskUpdateInput, SubtaskUncheckedUpdateInput>
  }

  /**
   * Subtask delete
   */
  export type SubtaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter which Subtask to delete.
     */
    where: SubtaskWhereUniqueInput
  }

  /**
   * Subtask deleteMany
   */
  export type SubtaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtasks to delete
     */
    where?: SubtaskWhereInput
  }

  /**
   * Subtask without action
   */
  export type SubtaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    streak: number | null
    bestStreak: number | null
  }

  export type HabitSumAggregateOutputType = {
    streak: number | null
    bestStreak: number | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    emoji: string | null
    type: $Enums.HabitType | null
    frequency: $Enums.HabitFrequency | null
    strength: $Enums.HabitStrength | null
    streak: number | null
    bestStreak: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    emoji: string | null
    type: $Enums.HabitType | null
    frequency: $Enums.HabitFrequency | null
    strength: $Enums.HabitStrength | null
    streak: number | null
    bestStreak: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    emoji: number
    type: number
    frequency: number
    strength: number
    streak: number
    bestStreak: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    streak?: true
    bestStreak?: true
  }

  export type HabitSumAggregateInputType = {
    streak?: true
    bestStreak?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    emoji?: true
    type?: true
    frequency?: true
    strength?: true
    streak?: true
    bestStreak?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    emoji?: true
    type?: true
    frequency?: true
    strength?: true
    streak?: true
    bestStreak?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    emoji?: true
    type?: true
    frequency?: true
    strength?: true
    streak?: true
    bestStreak?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    userId: string
    name: string
    emoji: string
    type: $Enums.HabitType
    frequency: $Enums.HabitFrequency
    strength: $Enums.HabitStrength
    streak: number
    bestStreak: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    emoji?: boolean
    type?: boolean
    frequency?: boolean
    strength?: boolean
    streak?: boolean
    bestStreak?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    completions?: boolean | Habit$completionsArgs<ExtArgs>
    routineItems?: boolean | Habit$routineItemsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    emoji?: boolean
    type?: boolean
    frequency?: boolean
    strength?: boolean
    streak?: boolean
    bestStreak?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    emoji?: boolean
    type?: boolean
    frequency?: boolean
    strength?: boolean
    streak?: boolean
    bestStreak?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    completions?: boolean | Habit$completionsArgs<ExtArgs>
    routineItems?: boolean | Habit$routineItemsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      completions: Prisma.$HabitCompletionPayload<ExtArgs>[]
      routineItems: Prisma.$RoutineItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      emoji: string
      type: $Enums.HabitType
      frequency: $Enums.HabitFrequency
      strength: $Enums.HabitStrength
      streak: number
      bestStreak: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
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
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    completions<T extends Habit$completionsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findMany"> | Null>
    routineItems<T extends Habit$routineItemsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$routineItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Habit model
   */ 
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly userId: FieldRef<"Habit", 'String'>
    readonly name: FieldRef<"Habit", 'String'>
    readonly emoji: FieldRef<"Habit", 'String'>
    readonly type: FieldRef<"Habit", 'HabitType'>
    readonly frequency: FieldRef<"Habit", 'HabitFrequency'>
    readonly strength: FieldRef<"Habit", 'HabitStrength'>
    readonly streak: FieldRef<"Habit", 'Int'>
    readonly bestStreak: FieldRef<"Habit", 'Int'>
    readonly isActive: FieldRef<"Habit", 'Boolean'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit createManyAndReturn
   */
  export type HabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
  }

  /**
   * Habit.completions
   */
  export type Habit$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    where?: HabitCompletionWhereInput
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    cursor?: HabitCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitCompletionScalarFieldEnum | HabitCompletionScalarFieldEnum[]
  }

  /**
   * Habit.routineItems
   */
  export type Habit$routineItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    where?: RoutineItemWhereInput
    orderBy?: RoutineItemOrderByWithRelationInput | RoutineItemOrderByWithRelationInput[]
    cursor?: RoutineItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineItemScalarFieldEnum | RoutineItemScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model HabitCompletion
   */

  export type AggregateHabitCompletion = {
    _count: HabitCompletionCountAggregateOutputType | null
    _min: HabitCompletionMinAggregateOutputType | null
    _max: HabitCompletionMaxAggregateOutputType | null
  }

  export type HabitCompletionMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    completedAt: Date | null
    date: string | null
  }

  export type HabitCompletionMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    completedAt: Date | null
    date: string | null
  }

  export type HabitCompletionCountAggregateOutputType = {
    id: number
    habitId: number
    completedAt: number
    date: number
    _all: number
  }


  export type HabitCompletionMinAggregateInputType = {
    id?: true
    habitId?: true
    completedAt?: true
    date?: true
  }

  export type HabitCompletionMaxAggregateInputType = {
    id?: true
    habitId?: true
    completedAt?: true
    date?: true
  }

  export type HabitCompletionCountAggregateInputType = {
    id?: true
    habitId?: true
    completedAt?: true
    date?: true
    _all?: true
  }

  export type HabitCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitCompletion to aggregate.
     */
    where?: HabitCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitCompletions to fetch.
     */
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitCompletions
    **/
    _count?: true | HabitCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitCompletionMaxAggregateInputType
  }

  export type GetHabitCompletionAggregateType<T extends HabitCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitCompletion[P]>
      : GetScalarType<T[P], AggregateHabitCompletion[P]>
  }




  export type HabitCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitCompletionWhereInput
    orderBy?: HabitCompletionOrderByWithAggregationInput | HabitCompletionOrderByWithAggregationInput[]
    by: HabitCompletionScalarFieldEnum[] | HabitCompletionScalarFieldEnum
    having?: HabitCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCompletionCountAggregateInputType | true
    _min?: HabitCompletionMinAggregateInputType
    _max?: HabitCompletionMaxAggregateInputType
  }

  export type HabitCompletionGroupByOutputType = {
    id: string
    habitId: string
    completedAt: Date
    date: string
    _count: HabitCompletionCountAggregateOutputType | null
    _min: HabitCompletionMinAggregateOutputType | null
    _max: HabitCompletionMaxAggregateOutputType | null
  }

  type GetHabitCompletionGroupByPayload<T extends HabitCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], HabitCompletionGroupByOutputType[P]>
        }
      >
    >


  export type HabitCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    completedAt?: boolean
    date?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitCompletion"]>

  export type HabitCompletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    completedAt?: boolean
    date?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitCompletion"]>

  export type HabitCompletionSelectScalar = {
    id?: boolean
    habitId?: boolean
    completedAt?: boolean
    date?: boolean
  }

  export type HabitCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitCompletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }

  export type $HabitCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitCompletion"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      completedAt: Date
      date: string
    }, ExtArgs["result"]["habitCompletion"]>
    composites: {}
  }

  type HabitCompletionGetPayload<S extends boolean | null | undefined | HabitCompletionDefaultArgs> = $Result.GetResult<Prisma.$HabitCompletionPayload, S>

  type HabitCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HabitCompletionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HabitCompletionCountAggregateInputType | true
    }

  export interface HabitCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitCompletion'], meta: { name: 'HabitCompletion' } }
    /**
     * Find zero or one HabitCompletion that matches the filter.
     * @param {HabitCompletionFindUniqueArgs} args - Arguments to find a HabitCompletion
     * @example
     * // Get one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitCompletionFindUniqueArgs>(args: SelectSubset<T, HabitCompletionFindUniqueArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HabitCompletion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HabitCompletionFindUniqueOrThrowArgs} args - Arguments to find a HabitCompletion
     * @example
     * // Get one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HabitCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionFindFirstArgs} args - Arguments to find a HabitCompletion
     * @example
     * // Get one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitCompletionFindFirstArgs>(args?: SelectSubset<T, HabitCompletionFindFirstArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HabitCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionFindFirstOrThrowArgs} args - Arguments to find a HabitCompletion
     * @example
     * // Get one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HabitCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitCompletions
     * const habitCompletions = await prisma.habitCompletion.findMany()
     * 
     * // Get first 10 HabitCompletions
     * const habitCompletions = await prisma.habitCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitCompletionWithIdOnly = await prisma.habitCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitCompletionFindManyArgs>(args?: SelectSubset<T, HabitCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HabitCompletion.
     * @param {HabitCompletionCreateArgs} args - Arguments to create a HabitCompletion.
     * @example
     * // Create one HabitCompletion
     * const HabitCompletion = await prisma.habitCompletion.create({
     *   data: {
     *     // ... data to create a HabitCompletion
     *   }
     * })
     * 
     */
    create<T extends HabitCompletionCreateArgs>(args: SelectSubset<T, HabitCompletionCreateArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HabitCompletions.
     * @param {HabitCompletionCreateManyArgs} args - Arguments to create many HabitCompletions.
     * @example
     * // Create many HabitCompletions
     * const habitCompletion = await prisma.habitCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCompletionCreateManyArgs>(args?: SelectSubset<T, HabitCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitCompletions and returns the data saved in the database.
     * @param {HabitCompletionCreateManyAndReturnArgs} args - Arguments to create many HabitCompletions.
     * @example
     * // Create many HabitCompletions
     * const habitCompletion = await prisma.habitCompletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitCompletions and only return the `id`
     * const habitCompletionWithIdOnly = await prisma.habitCompletion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCompletionCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HabitCompletion.
     * @param {HabitCompletionDeleteArgs} args - Arguments to delete one HabitCompletion.
     * @example
     * // Delete one HabitCompletion
     * const HabitCompletion = await prisma.habitCompletion.delete({
     *   where: {
     *     // ... filter to delete one HabitCompletion
     *   }
     * })
     * 
     */
    delete<T extends HabitCompletionDeleteArgs>(args: SelectSubset<T, HabitCompletionDeleteArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HabitCompletion.
     * @param {HabitCompletionUpdateArgs} args - Arguments to update one HabitCompletion.
     * @example
     * // Update one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitCompletionUpdateArgs>(args: SelectSubset<T, HabitCompletionUpdateArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HabitCompletions.
     * @param {HabitCompletionDeleteManyArgs} args - Arguments to filter HabitCompletions to delete.
     * @example
     * // Delete a few HabitCompletions
     * const { count } = await prisma.habitCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitCompletionDeleteManyArgs>(args?: SelectSubset<T, HabitCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitCompletions
     * const habitCompletion = await prisma.habitCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitCompletionUpdateManyArgs>(args: SelectSubset<T, HabitCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HabitCompletion.
     * @param {HabitCompletionUpsertArgs} args - Arguments to update or create a HabitCompletion.
     * @example
     * // Update or create a HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.upsert({
     *   create: {
     *     // ... data to create a HabitCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitCompletion we want to update
     *   }
     * })
     */
    upsert<T extends HabitCompletionUpsertArgs>(args: SelectSubset<T, HabitCompletionUpsertArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HabitCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionCountArgs} args - Arguments to filter HabitCompletions to count.
     * @example
     * // Count the number of HabitCompletions
     * const count = await prisma.habitCompletion.count({
     *   where: {
     *     // ... the filter for the HabitCompletions we want to count
     *   }
     * })
    **/
    count<T extends HabitCompletionCountArgs>(
      args?: Subset<T, HabitCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitCompletionAggregateArgs>(args: Subset<T, HabitCompletionAggregateArgs>): Prisma.PrismaPromise<GetHabitCompletionAggregateType<T>>

    /**
     * Group by HabitCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionGroupByArgs} args - Group by arguments.
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
      T extends HabitCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitCompletionGroupByArgs['orderBy'] }
        : { orderBy?: HabitCompletionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitCompletion model
   */
  readonly fields: HabitCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the HabitCompletion model
   */ 
  interface HabitCompletionFieldRefs {
    readonly id: FieldRef<"HabitCompletion", 'String'>
    readonly habitId: FieldRef<"HabitCompletion", 'String'>
    readonly completedAt: FieldRef<"HabitCompletion", 'DateTime'>
    readonly date: FieldRef<"HabitCompletion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HabitCompletion findUnique
   */
  export type HabitCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletion to fetch.
     */
    where: HabitCompletionWhereUniqueInput
  }

  /**
   * HabitCompletion findUniqueOrThrow
   */
  export type HabitCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletion to fetch.
     */
    where: HabitCompletionWhereUniqueInput
  }

  /**
   * HabitCompletion findFirst
   */
  export type HabitCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletion to fetch.
     */
    where?: HabitCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitCompletions to fetch.
     */
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitCompletions.
     */
    cursor?: HabitCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitCompletions.
     */
    distinct?: HabitCompletionScalarFieldEnum | HabitCompletionScalarFieldEnum[]
  }

  /**
   * HabitCompletion findFirstOrThrow
   */
  export type HabitCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletion to fetch.
     */
    where?: HabitCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitCompletions to fetch.
     */
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitCompletions.
     */
    cursor?: HabitCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitCompletions.
     */
    distinct?: HabitCompletionScalarFieldEnum | HabitCompletionScalarFieldEnum[]
  }

  /**
   * HabitCompletion findMany
   */
  export type HabitCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletions to fetch.
     */
    where?: HabitCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitCompletions to fetch.
     */
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitCompletions.
     */
    cursor?: HabitCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitCompletions.
     */
    skip?: number
    distinct?: HabitCompletionScalarFieldEnum | HabitCompletionScalarFieldEnum[]
  }

  /**
   * HabitCompletion create
   */
  export type HabitCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitCompletion.
     */
    data: XOR<HabitCompletionCreateInput, HabitCompletionUncheckedCreateInput>
  }

  /**
   * HabitCompletion createMany
   */
  export type HabitCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitCompletions.
     */
    data: HabitCompletionCreateManyInput | HabitCompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitCompletion createManyAndReturn
   */
  export type HabitCompletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HabitCompletions.
     */
    data: HabitCompletionCreateManyInput | HabitCompletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitCompletion update
   */
  export type HabitCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitCompletion.
     */
    data: XOR<HabitCompletionUpdateInput, HabitCompletionUncheckedUpdateInput>
    /**
     * Choose, which HabitCompletion to update.
     */
    where: HabitCompletionWhereUniqueInput
  }

  /**
   * HabitCompletion updateMany
   */
  export type HabitCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitCompletions.
     */
    data: XOR<HabitCompletionUpdateManyMutationInput, HabitCompletionUncheckedUpdateManyInput>
    /**
     * Filter which HabitCompletions to update
     */
    where?: HabitCompletionWhereInput
  }

  /**
   * HabitCompletion upsert
   */
  export type HabitCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitCompletion to update in case it exists.
     */
    where: HabitCompletionWhereUniqueInput
    /**
     * In case the HabitCompletion found by the `where` argument doesn't exist, create a new HabitCompletion with this data.
     */
    create: XOR<HabitCompletionCreateInput, HabitCompletionUncheckedCreateInput>
    /**
     * In case the HabitCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitCompletionUpdateInput, HabitCompletionUncheckedUpdateInput>
  }

  /**
   * HabitCompletion delete
   */
  export type HabitCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter which HabitCompletion to delete.
     */
    where: HabitCompletionWhereUniqueInput
  }

  /**
   * HabitCompletion deleteMany
   */
  export type HabitCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitCompletions to delete
     */
    where?: HabitCompletionWhereInput
  }

  /**
   * HabitCompletion without action
   */
  export type HabitCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
  }


  /**
   * Model Routine
   */

  export type AggregateRoutine = {
    _count: RoutineCountAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  export type RoutineMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    time: string | null
    type: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    time: string | null
    type: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    time: number
    type: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoutineMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    time?: true
    type?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    time?: true
    type?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    time?: true
    type?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routine to aggregate.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routines
    **/
    _count?: true | RoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineMaxAggregateInputType
  }

  export type GetRoutineAggregateType<T extends RoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutine[P]>
      : GetScalarType<T[P], AggregateRoutine[P]>
  }




  export type RoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithAggregationInput | RoutineOrderByWithAggregationInput[]
    by: RoutineScalarFieldEnum[] | RoutineScalarFieldEnum
    having?: RoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineCountAggregateInputType | true
    _min?: RoutineMinAggregateInputType
    _max?: RoutineMaxAggregateInputType
  }

  export type RoutineGroupByOutputType = {
    id: string
    userId: string
    name: string
    time: string | null
    type: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoutineCountAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  type GetRoutineGroupByPayload<T extends RoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineGroupByOutputType[P]>
        }
      >
    >


  export type RoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    time?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Routine$itemsArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    time?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    time?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Routine$itemsArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Routine"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$RoutineItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      time: string | null
      type: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routine"]>
    composites: {}
  }

  type RoutineGetPayload<S extends boolean | null | undefined | RoutineDefaultArgs> = $Result.GetResult<Prisma.$RoutinePayload, S>

  type RoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoutineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoutineCountAggregateInputType | true
    }

  export interface RoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Routine'], meta: { name: 'Routine' } }
    /**
     * Find zero or one Routine that matches the filter.
     * @param {RoutineFindUniqueArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineFindUniqueArgs>(args: SelectSubset<T, RoutineFindUniqueArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Routine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoutineFindUniqueOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Routine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineFindFirstArgs>(args?: SelectSubset<T, RoutineFindFirstArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Routine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routines
     * const routines = await prisma.routine.findMany()
     * 
     * // Get first 10 Routines
     * const routines = await prisma.routine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineWithIdOnly = await prisma.routine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineFindManyArgs>(args?: SelectSubset<T, RoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Routine.
     * @param {RoutineCreateArgs} args - Arguments to create a Routine.
     * @example
     * // Create one Routine
     * const Routine = await prisma.routine.create({
     *   data: {
     *     // ... data to create a Routine
     *   }
     * })
     * 
     */
    create<T extends RoutineCreateArgs>(args: SelectSubset<T, RoutineCreateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Routines.
     * @param {RoutineCreateManyArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineCreateManyArgs>(args?: SelectSubset<T, RoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routines and returns the data saved in the database.
     * @param {RoutineCreateManyAndReturnArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Routine.
     * @param {RoutineDeleteArgs} args - Arguments to delete one Routine.
     * @example
     * // Delete one Routine
     * const Routine = await prisma.routine.delete({
     *   where: {
     *     // ... filter to delete one Routine
     *   }
     * })
     * 
     */
    delete<T extends RoutineDeleteArgs>(args: SelectSubset<T, RoutineDeleteArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Routine.
     * @param {RoutineUpdateArgs} args - Arguments to update one Routine.
     * @example
     * // Update one Routine
     * const routine = await prisma.routine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineUpdateArgs>(args: SelectSubset<T, RoutineUpdateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Routines.
     * @param {RoutineDeleteManyArgs} args - Arguments to filter Routines to delete.
     * @example
     * // Delete a few Routines
     * const { count } = await prisma.routine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineDeleteManyArgs>(args?: SelectSubset<T, RoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineUpdateManyArgs>(args: SelectSubset<T, RoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Routine.
     * @param {RoutineUpsertArgs} args - Arguments to update or create a Routine.
     * @example
     * // Update or create a Routine
     * const routine = await prisma.routine.upsert({
     *   create: {
     *     // ... data to create a Routine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routine we want to update
     *   }
     * })
     */
    upsert<T extends RoutineUpsertArgs>(args: SelectSubset<T, RoutineUpsertArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineCountArgs} args - Arguments to filter Routines to count.
     * @example
     * // Count the number of Routines
     * const count = await prisma.routine.count({
     *   where: {
     *     // ... the filter for the Routines we want to count
     *   }
     * })
    **/
    count<T extends RoutineCountArgs>(
      args?: Subset<T, RoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineAggregateArgs>(args: Subset<T, RoutineAggregateArgs>): Prisma.PrismaPromise<GetRoutineAggregateType<T>>

    /**
     * Group by Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineGroupByArgs} args - Group by arguments.
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
      T extends RoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineGroupByArgs['orderBy'] }
        : { orderBy?: RoutineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Routine model
   */
  readonly fields: RoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Routine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Routine$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Routine$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Routine model
   */ 
  interface RoutineFieldRefs {
    readonly id: FieldRef<"Routine", 'String'>
    readonly userId: FieldRef<"Routine", 'String'>
    readonly name: FieldRef<"Routine", 'String'>
    readonly time: FieldRef<"Routine", 'String'>
    readonly type: FieldRef<"Routine", 'String'>
    readonly isActive: FieldRef<"Routine", 'Boolean'>
    readonly createdAt: FieldRef<"Routine", 'DateTime'>
    readonly updatedAt: FieldRef<"Routine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Routine findUnique
   */
  export type RoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findUniqueOrThrow
   */
  export type RoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findFirst
   */
  export type RoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findFirstOrThrow
   */
  export type RoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findMany
   */
  export type RoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routines to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine create
   */
  export type RoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a Routine.
     */
    data: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
  }

  /**
   * Routine createMany
   */
  export type RoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Routine createManyAndReturn
   */
  export type RoutineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine update
   */
  export type RoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a Routine.
     */
    data: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
    /**
     * Choose, which Routine to update.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine updateMany
   */
  export type RoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
  }

  /**
   * Routine upsert
   */
  export type RoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the Routine to update in case it exists.
     */
    where: RoutineWhereUniqueInput
    /**
     * In case the Routine found by the `where` argument doesn't exist, create a new Routine with this data.
     */
    create: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
    /**
     * In case the Routine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
  }

  /**
   * Routine delete
   */
  export type RoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter which Routine to delete.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine deleteMany
   */
  export type RoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routines to delete
     */
    where?: RoutineWhereInput
  }

  /**
   * Routine.items
   */
  export type Routine$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    where?: RoutineItemWhereInput
    orderBy?: RoutineItemOrderByWithRelationInput | RoutineItemOrderByWithRelationInput[]
    cursor?: RoutineItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineItemScalarFieldEnum | RoutineItemScalarFieldEnum[]
  }

  /**
   * Routine without action
   */
  export type RoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
  }


  /**
   * Model RoutineItem
   */

  export type AggregateRoutineItem = {
    _count: RoutineItemCountAggregateOutputType | null
    _avg: RoutineItemAvgAggregateOutputType | null
    _sum: RoutineItemSumAggregateOutputType | null
    _min: RoutineItemMinAggregateOutputType | null
    _max: RoutineItemMaxAggregateOutputType | null
  }

  export type RoutineItemAvgAggregateOutputType = {
    order: number | null
  }

  export type RoutineItemSumAggregateOutputType = {
    order: number | null
  }

  export type RoutineItemMinAggregateOutputType = {
    id: string | null
    routineId: string | null
    habitId: string | null
    label: string | null
    order: number | null
  }

  export type RoutineItemMaxAggregateOutputType = {
    id: string | null
    routineId: string | null
    habitId: string | null
    label: string | null
    order: number | null
  }

  export type RoutineItemCountAggregateOutputType = {
    id: number
    routineId: number
    habitId: number
    label: number
    order: number
    _all: number
  }


  export type RoutineItemAvgAggregateInputType = {
    order?: true
  }

  export type RoutineItemSumAggregateInputType = {
    order?: true
  }

  export type RoutineItemMinAggregateInputType = {
    id?: true
    routineId?: true
    habitId?: true
    label?: true
    order?: true
  }

  export type RoutineItemMaxAggregateInputType = {
    id?: true
    routineId?: true
    habitId?: true
    label?: true
    order?: true
  }

  export type RoutineItemCountAggregateInputType = {
    id?: true
    routineId?: true
    habitId?: true
    label?: true
    order?: true
    _all?: true
  }

  export type RoutineItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineItem to aggregate.
     */
    where?: RoutineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineItems to fetch.
     */
    orderBy?: RoutineItemOrderByWithRelationInput | RoutineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineItems
    **/
    _count?: true | RoutineItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineItemMaxAggregateInputType
  }

  export type GetRoutineItemAggregateType<T extends RoutineItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineItem[P]>
      : GetScalarType<T[P], AggregateRoutineItem[P]>
  }




  export type RoutineItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineItemWhereInput
    orderBy?: RoutineItemOrderByWithAggregationInput | RoutineItemOrderByWithAggregationInput[]
    by: RoutineItemScalarFieldEnum[] | RoutineItemScalarFieldEnum
    having?: RoutineItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineItemCountAggregateInputType | true
    _avg?: RoutineItemAvgAggregateInputType
    _sum?: RoutineItemSumAggregateInputType
    _min?: RoutineItemMinAggregateInputType
    _max?: RoutineItemMaxAggregateInputType
  }

  export type RoutineItemGroupByOutputType = {
    id: string
    routineId: string
    habitId: string | null
    label: string
    order: number
    _count: RoutineItemCountAggregateOutputType | null
    _avg: RoutineItemAvgAggregateOutputType | null
    _sum: RoutineItemSumAggregateOutputType | null
    _min: RoutineItemMinAggregateOutputType | null
    _max: RoutineItemMaxAggregateOutputType | null
  }

  type GetRoutineItemGroupByPayload<T extends RoutineItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineItemGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineItemGroupByOutputType[P]>
        }
      >
    >


  export type RoutineItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    habitId?: boolean
    label?: boolean
    order?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    habit?: boolean | RoutineItem$habitArgs<ExtArgs>
  }, ExtArgs["result"]["routineItem"]>

  export type RoutineItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    habitId?: boolean
    label?: boolean
    order?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    habit?: boolean | RoutineItem$habitArgs<ExtArgs>
  }, ExtArgs["result"]["routineItem"]>

  export type RoutineItemSelectScalar = {
    id?: boolean
    routineId?: boolean
    habitId?: boolean
    label?: boolean
    order?: boolean
  }

  export type RoutineItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    habit?: boolean | RoutineItem$habitArgs<ExtArgs>
  }
  export type RoutineItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    habit?: boolean | RoutineItem$habitArgs<ExtArgs>
  }

  export type $RoutineItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineItem"
    objects: {
      routine: Prisma.$RoutinePayload<ExtArgs>
      habit: Prisma.$HabitPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routineId: string
      habitId: string | null
      label: string
      order: number
    }, ExtArgs["result"]["routineItem"]>
    composites: {}
  }

  type RoutineItemGetPayload<S extends boolean | null | undefined | RoutineItemDefaultArgs> = $Result.GetResult<Prisma.$RoutineItemPayload, S>

  type RoutineItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoutineItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoutineItemCountAggregateInputType | true
    }

  export interface RoutineItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineItem'], meta: { name: 'RoutineItem' } }
    /**
     * Find zero or one RoutineItem that matches the filter.
     * @param {RoutineItemFindUniqueArgs} args - Arguments to find a RoutineItem
     * @example
     * // Get one RoutineItem
     * const routineItem = await prisma.routineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineItemFindUniqueArgs>(args: SelectSubset<T, RoutineItemFindUniqueArgs<ExtArgs>>): Prisma__RoutineItemClient<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoutineItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoutineItemFindUniqueOrThrowArgs} args - Arguments to find a RoutineItem
     * @example
     * // Get one RoutineItem
     * const routineItem = await prisma.routineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineItemClient<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoutineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineItemFindFirstArgs} args - Arguments to find a RoutineItem
     * @example
     * // Get one RoutineItem
     * const routineItem = await prisma.routineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineItemFindFirstArgs>(args?: SelectSubset<T, RoutineItemFindFirstArgs<ExtArgs>>): Prisma__RoutineItemClient<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoutineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineItemFindFirstOrThrowArgs} args - Arguments to find a RoutineItem
     * @example
     * // Get one RoutineItem
     * const routineItem = await prisma.routineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineItemClient<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoutineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineItems
     * const routineItems = await prisma.routineItem.findMany()
     * 
     * // Get first 10 RoutineItems
     * const routineItems = await prisma.routineItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineItemWithIdOnly = await prisma.routineItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineItemFindManyArgs>(args?: SelectSubset<T, RoutineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoutineItem.
     * @param {RoutineItemCreateArgs} args - Arguments to create a RoutineItem.
     * @example
     * // Create one RoutineItem
     * const RoutineItem = await prisma.routineItem.create({
     *   data: {
     *     // ... data to create a RoutineItem
     *   }
     * })
     * 
     */
    create<T extends RoutineItemCreateArgs>(args: SelectSubset<T, RoutineItemCreateArgs<ExtArgs>>): Prisma__RoutineItemClient<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoutineItems.
     * @param {RoutineItemCreateManyArgs} args - Arguments to create many RoutineItems.
     * @example
     * // Create many RoutineItems
     * const routineItem = await prisma.routineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineItemCreateManyArgs>(args?: SelectSubset<T, RoutineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoutineItems and returns the data saved in the database.
     * @param {RoutineItemCreateManyAndReturnArgs} args - Arguments to create many RoutineItems.
     * @example
     * // Create many RoutineItems
     * const routineItem = await prisma.routineItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoutineItems and only return the `id`
     * const routineItemWithIdOnly = await prisma.routineItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoutineItem.
     * @param {RoutineItemDeleteArgs} args - Arguments to delete one RoutineItem.
     * @example
     * // Delete one RoutineItem
     * const RoutineItem = await prisma.routineItem.delete({
     *   where: {
     *     // ... filter to delete one RoutineItem
     *   }
     * })
     * 
     */
    delete<T extends RoutineItemDeleteArgs>(args: SelectSubset<T, RoutineItemDeleteArgs<ExtArgs>>): Prisma__RoutineItemClient<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoutineItem.
     * @param {RoutineItemUpdateArgs} args - Arguments to update one RoutineItem.
     * @example
     * // Update one RoutineItem
     * const routineItem = await prisma.routineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineItemUpdateArgs>(args: SelectSubset<T, RoutineItemUpdateArgs<ExtArgs>>): Prisma__RoutineItemClient<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoutineItems.
     * @param {RoutineItemDeleteManyArgs} args - Arguments to filter RoutineItems to delete.
     * @example
     * // Delete a few RoutineItems
     * const { count } = await prisma.routineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineItemDeleteManyArgs>(args?: SelectSubset<T, RoutineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineItems
     * const routineItem = await prisma.routineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineItemUpdateManyArgs>(args: SelectSubset<T, RoutineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoutineItem.
     * @param {RoutineItemUpsertArgs} args - Arguments to update or create a RoutineItem.
     * @example
     * // Update or create a RoutineItem
     * const routineItem = await prisma.routineItem.upsert({
     *   create: {
     *     // ... data to create a RoutineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineItem we want to update
     *   }
     * })
     */
    upsert<T extends RoutineItemUpsertArgs>(args: SelectSubset<T, RoutineItemUpsertArgs<ExtArgs>>): Prisma__RoutineItemClient<$Result.GetResult<Prisma.$RoutineItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoutineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineItemCountArgs} args - Arguments to filter RoutineItems to count.
     * @example
     * // Count the number of RoutineItems
     * const count = await prisma.routineItem.count({
     *   where: {
     *     // ... the filter for the RoutineItems we want to count
     *   }
     * })
    **/
    count<T extends RoutineItemCountArgs>(
      args?: Subset<T, RoutineItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineItemAggregateArgs>(args: Subset<T, RoutineItemAggregateArgs>): Prisma.PrismaPromise<GetRoutineItemAggregateType<T>>

    /**
     * Group by RoutineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineItemGroupByArgs} args - Group by arguments.
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
      T extends RoutineItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineItemGroupByArgs['orderBy'] }
        : { orderBy?: RoutineItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineItem model
   */
  readonly fields: RoutineItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    habit<T extends RoutineItem$habitArgs<ExtArgs> = {}>(args?: Subset<T, RoutineItem$habitArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the RoutineItem model
   */ 
  interface RoutineItemFieldRefs {
    readonly id: FieldRef<"RoutineItem", 'String'>
    readonly routineId: FieldRef<"RoutineItem", 'String'>
    readonly habitId: FieldRef<"RoutineItem", 'String'>
    readonly label: FieldRef<"RoutineItem", 'String'>
    readonly order: FieldRef<"RoutineItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoutineItem findUnique
   */
  export type RoutineItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    /**
     * Filter, which RoutineItem to fetch.
     */
    where: RoutineItemWhereUniqueInput
  }

  /**
   * RoutineItem findUniqueOrThrow
   */
  export type RoutineItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    /**
     * Filter, which RoutineItem to fetch.
     */
    where: RoutineItemWhereUniqueInput
  }

  /**
   * RoutineItem findFirst
   */
  export type RoutineItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    /**
     * Filter, which RoutineItem to fetch.
     */
    where?: RoutineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineItems to fetch.
     */
    orderBy?: RoutineItemOrderByWithRelationInput | RoutineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineItems.
     */
    cursor?: RoutineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineItems.
     */
    distinct?: RoutineItemScalarFieldEnum | RoutineItemScalarFieldEnum[]
  }

  /**
   * RoutineItem findFirstOrThrow
   */
  export type RoutineItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    /**
     * Filter, which RoutineItem to fetch.
     */
    where?: RoutineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineItems to fetch.
     */
    orderBy?: RoutineItemOrderByWithRelationInput | RoutineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineItems.
     */
    cursor?: RoutineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineItems.
     */
    distinct?: RoutineItemScalarFieldEnum | RoutineItemScalarFieldEnum[]
  }

  /**
   * RoutineItem findMany
   */
  export type RoutineItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    /**
     * Filter, which RoutineItems to fetch.
     */
    where?: RoutineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineItems to fetch.
     */
    orderBy?: RoutineItemOrderByWithRelationInput | RoutineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineItems.
     */
    cursor?: RoutineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineItems.
     */
    skip?: number
    distinct?: RoutineItemScalarFieldEnum | RoutineItemScalarFieldEnum[]
  }

  /**
   * RoutineItem create
   */
  export type RoutineItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineItem.
     */
    data: XOR<RoutineItemCreateInput, RoutineItemUncheckedCreateInput>
  }

  /**
   * RoutineItem createMany
   */
  export type RoutineItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineItems.
     */
    data: RoutineItemCreateManyInput | RoutineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutineItem createManyAndReturn
   */
  export type RoutineItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoutineItems.
     */
    data: RoutineItemCreateManyInput | RoutineItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineItem update
   */
  export type RoutineItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineItem.
     */
    data: XOR<RoutineItemUpdateInput, RoutineItemUncheckedUpdateInput>
    /**
     * Choose, which RoutineItem to update.
     */
    where: RoutineItemWhereUniqueInput
  }

  /**
   * RoutineItem updateMany
   */
  export type RoutineItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineItems.
     */
    data: XOR<RoutineItemUpdateManyMutationInput, RoutineItemUncheckedUpdateManyInput>
    /**
     * Filter which RoutineItems to update
     */
    where?: RoutineItemWhereInput
  }

  /**
   * RoutineItem upsert
   */
  export type RoutineItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineItem to update in case it exists.
     */
    where: RoutineItemWhereUniqueInput
    /**
     * In case the RoutineItem found by the `where` argument doesn't exist, create a new RoutineItem with this data.
     */
    create: XOR<RoutineItemCreateInput, RoutineItemUncheckedCreateInput>
    /**
     * In case the RoutineItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineItemUpdateInput, RoutineItemUncheckedUpdateInput>
  }

  /**
   * RoutineItem delete
   */
  export type RoutineItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
    /**
     * Filter which RoutineItem to delete.
     */
    where: RoutineItemWhereUniqueInput
  }

  /**
   * RoutineItem deleteMany
   */
  export type RoutineItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineItems to delete
     */
    where?: RoutineItemWhereInput
  }

  /**
   * RoutineItem.habit
   */
  export type RoutineItem$habitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
  }

  /**
   * RoutineItem without action
   */
  export type RoutineItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineItem
     */
    select?: RoutineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineItemInclude<ExtArgs> | null
  }


  /**
   * Model JournalEntry
   */

  export type AggregateJournalEntry = {
    _count: JournalEntryCountAggregateOutputType | null
    _avg: JournalEntryAvgAggregateOutputType | null
    _sum: JournalEntrySumAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  export type JournalEntryAvgAggregateOutputType = {
    moodScore: number | null
    sleepQuality: number | null
  }

  export type JournalEntrySumAggregateOutputType = {
    moodScore: number | null
    sleepQuality: number | null
  }

  export type JournalEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    text: string | null
    moodScore: number | null
    sleepQuality: number | null
    date: string | null
    aiInsight: string | null
    aiPromptUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    text: string | null
    moodScore: number | null
    sleepQuality: number | null
    date: string | null
    aiInsight: string | null
    aiPromptUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryCountAggregateOutputType = {
    id: number
    userId: number
    text: number
    tags: number
    moodScore: number
    sleepQuality: number
    date: number
    aiInsight: number
    aiPromptUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JournalEntryAvgAggregateInputType = {
    moodScore?: true
    sleepQuality?: true
  }

  export type JournalEntrySumAggregateInputType = {
    moodScore?: true
    sleepQuality?: true
  }

  export type JournalEntryMinAggregateInputType = {
    id?: true
    userId?: true
    text?: true
    moodScore?: true
    sleepQuality?: true
    date?: true
    aiInsight?: true
    aiPromptUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    text?: true
    moodScore?: true
    sleepQuality?: true
    date?: true
    aiInsight?: true
    aiPromptUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryCountAggregateInputType = {
    id?: true
    userId?: true
    text?: true
    tags?: true
    moodScore?: true
    sleepQuality?: true
    date?: true
    aiInsight?: true
    aiPromptUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JournalEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntry to aggregate.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JournalEntries
    **/
    _count?: true | JournalEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JournalEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JournalEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalEntryMaxAggregateInputType
  }

  export type GetJournalEntryAggregateType<T extends JournalEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalEntry[P]>
      : GetScalarType<T[P], AggregateJournalEntry[P]>
  }




  export type JournalEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithAggregationInput | JournalEntryOrderByWithAggregationInput[]
    by: JournalEntryScalarFieldEnum[] | JournalEntryScalarFieldEnum
    having?: JournalEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalEntryCountAggregateInputType | true
    _avg?: JournalEntryAvgAggregateInputType
    _sum?: JournalEntrySumAggregateInputType
    _min?: JournalEntryMinAggregateInputType
    _max?: JournalEntryMaxAggregateInputType
  }

  export type JournalEntryGroupByOutputType = {
    id: string
    userId: string
    text: string | null
    tags: string[]
    moodScore: number
    sleepQuality: number | null
    date: string
    aiInsight: string | null
    aiPromptUsed: boolean
    createdAt: Date
    updatedAt: Date
    _count: JournalEntryCountAggregateOutputType | null
    _avg: JournalEntryAvgAggregateOutputType | null
    _sum: JournalEntrySumAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  type GetJournalEntryGroupByPayload<T extends JournalEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
            : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
        }
      >
    >


  export type JournalEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    text?: boolean
    tags?: boolean
    moodScore?: boolean
    sleepQuality?: boolean
    date?: boolean
    aiInsight?: boolean
    aiPromptUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    text?: boolean
    tags?: boolean
    moodScore?: boolean
    sleepQuality?: boolean
    date?: boolean
    aiInsight?: boolean
    aiPromptUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    text?: boolean
    tags?: boolean
    moodScore?: boolean
    sleepQuality?: boolean
    date?: boolean
    aiInsight?: boolean
    aiPromptUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JournalEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JournalEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JournalEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      text: string | null
      tags: string[]
      moodScore: number
      sleepQuality: number | null
      date: string
      aiInsight: string | null
      aiPromptUsed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["journalEntry"]>
    composites: {}
  }

  type JournalEntryGetPayload<S extends boolean | null | undefined | JournalEntryDefaultArgs> = $Result.GetResult<Prisma.$JournalEntryPayload, S>

  type JournalEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JournalEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JournalEntryCountAggregateInputType | true
    }

  export interface JournalEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalEntry'], meta: { name: 'JournalEntry' } }
    /**
     * Find zero or one JournalEntry that matches the filter.
     * @param {JournalEntryFindUniqueArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalEntryFindUniqueArgs>(args: SelectSubset<T, JournalEntryFindUniqueArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JournalEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JournalEntryFindUniqueOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JournalEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalEntryFindFirstArgs>(args?: SelectSubset<T, JournalEntryFindFirstArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JournalEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JournalEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany()
     * 
     * // Get first 10 JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalEntryFindManyArgs>(args?: SelectSubset<T, JournalEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JournalEntry.
     * @param {JournalEntryCreateArgs} args - Arguments to create a JournalEntry.
     * @example
     * // Create one JournalEntry
     * const JournalEntry = await prisma.journalEntry.create({
     *   data: {
     *     // ... data to create a JournalEntry
     *   }
     * })
     * 
     */
    create<T extends JournalEntryCreateArgs>(args: SelectSubset<T, JournalEntryCreateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JournalEntries.
     * @param {JournalEntryCreateManyArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalEntryCreateManyArgs>(args?: SelectSubset<T, JournalEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JournalEntries and returns the data saved in the database.
     * @param {JournalEntryCreateManyAndReturnArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JournalEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a JournalEntry.
     * @param {JournalEntryDeleteArgs} args - Arguments to delete one JournalEntry.
     * @example
     * // Delete one JournalEntry
     * const JournalEntry = await prisma.journalEntry.delete({
     *   where: {
     *     // ... filter to delete one JournalEntry
     *   }
     * })
     * 
     */
    delete<T extends JournalEntryDeleteArgs>(args: SelectSubset<T, JournalEntryDeleteArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JournalEntry.
     * @param {JournalEntryUpdateArgs} args - Arguments to update one JournalEntry.
     * @example
     * // Update one JournalEntry
     * const journalEntry = await prisma.journalEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalEntryUpdateArgs>(args: SelectSubset<T, JournalEntryUpdateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JournalEntries.
     * @param {JournalEntryDeleteManyArgs} args - Arguments to filter JournalEntries to delete.
     * @example
     * // Delete a few JournalEntries
     * const { count } = await prisma.journalEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalEntryDeleteManyArgs>(args?: SelectSubset<T, JournalEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalEntryUpdateManyArgs>(args: SelectSubset<T, JournalEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JournalEntry.
     * @param {JournalEntryUpsertArgs} args - Arguments to update or create a JournalEntry.
     * @example
     * // Update or create a JournalEntry
     * const journalEntry = await prisma.journalEntry.upsert({
     *   create: {
     *     // ... data to create a JournalEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalEntry we want to update
     *   }
     * })
     */
    upsert<T extends JournalEntryUpsertArgs>(args: SelectSubset<T, JournalEntryUpsertArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryCountArgs} args - Arguments to filter JournalEntries to count.
     * @example
     * // Count the number of JournalEntries
     * const count = await prisma.journalEntry.count({
     *   where: {
     *     // ... the filter for the JournalEntries we want to count
     *   }
     * })
    **/
    count<T extends JournalEntryCountArgs>(
      args?: Subset<T, JournalEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JournalEntryAggregateArgs>(args: Subset<T, JournalEntryAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryAggregateType<T>>

    /**
     * Group by JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryGroupByArgs} args - Group by arguments.
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
      T extends JournalEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalEntryGroupByArgs['orderBy'] }
        : { orderBy?: JournalEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JournalEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalEntry model
   */
  readonly fields: JournalEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the JournalEntry model
   */ 
  interface JournalEntryFieldRefs {
    readonly id: FieldRef<"JournalEntry", 'String'>
    readonly userId: FieldRef<"JournalEntry", 'String'>
    readonly text: FieldRef<"JournalEntry", 'String'>
    readonly tags: FieldRef<"JournalEntry", 'String[]'>
    readonly moodScore: FieldRef<"JournalEntry", 'Int'>
    readonly sleepQuality: FieldRef<"JournalEntry", 'Int'>
    readonly date: FieldRef<"JournalEntry", 'String'>
    readonly aiInsight: FieldRef<"JournalEntry", 'String'>
    readonly aiPromptUsed: FieldRef<"JournalEntry", 'Boolean'>
    readonly createdAt: FieldRef<"JournalEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"JournalEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JournalEntry findUnique
   */
  export type JournalEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findUniqueOrThrow
   */
  export type JournalEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findFirst
   */
  export type JournalEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findFirstOrThrow
   */
  export type JournalEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findMany
   */
  export type JournalEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntries to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry create
   */
  export type JournalEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalEntry.
     */
    data: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
  }

  /**
   * JournalEntry createMany
   */
  export type JournalEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntry createManyAndReturn
   */
  export type JournalEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntry update
   */
  export type JournalEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalEntry.
     */
    data: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
    /**
     * Choose, which JournalEntry to update.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry updateMany
   */
  export type JournalEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
  }

  /**
   * JournalEntry upsert
   */
  export type JournalEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalEntry to update in case it exists.
     */
    where: JournalEntryWhereUniqueInput
    /**
     * In case the JournalEntry found by the `where` argument doesn't exist, create a new JournalEntry with this data.
     */
    create: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
    /**
     * In case the JournalEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
  }

  /**
   * JournalEntry delete
   */
  export type JournalEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter which JournalEntry to delete.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry deleteMany
   */
  export type JournalEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntries to delete
     */
    where?: JournalEntryWhereInput
  }

  /**
   * JournalEntry without action
   */
  export type JournalEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
  }


  /**
   * Model FocusSession
   */

  export type AggregateFocusSession = {
    _count: FocusSessionCountAggregateOutputType | null
    _avg: FocusSessionAvgAggregateOutputType | null
    _sum: FocusSessionSumAggregateOutputType | null
    _min: FocusSessionMinAggregateOutputType | null
    _max: FocusSessionMaxAggregateOutputType | null
  }

  export type FocusSessionAvgAggregateOutputType = {
    durationMinutes: number | null
  }

  export type FocusSessionSumAggregateOutputType = {
    durationMinutes: number | null
  }

  export type FocusSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    taskId: string | null
    durationMinutes: number | null
    completed: boolean | null
    interrupted: boolean | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type FocusSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    taskId: string | null
    durationMinutes: number | null
    completed: boolean | null
    interrupted: boolean | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type FocusSessionCountAggregateOutputType = {
    id: number
    userId: number
    taskId: number
    durationMinutes: number
    completed: number
    interrupted: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type FocusSessionAvgAggregateInputType = {
    durationMinutes?: true
  }

  export type FocusSessionSumAggregateInputType = {
    durationMinutes?: true
  }

  export type FocusSessionMinAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    durationMinutes?: true
    completed?: true
    interrupted?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type FocusSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    durationMinutes?: true
    completed?: true
    interrupted?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type FocusSessionCountAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    durationMinutes?: true
    completed?: true
    interrupted?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type FocusSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusSession to aggregate.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FocusSessions
    **/
    _count?: true | FocusSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FocusSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FocusSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FocusSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FocusSessionMaxAggregateInputType
  }

  export type GetFocusSessionAggregateType<T extends FocusSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateFocusSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFocusSession[P]>
      : GetScalarType<T[P], AggregateFocusSession[P]>
  }




  export type FocusSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusSessionWhereInput
    orderBy?: FocusSessionOrderByWithAggregationInput | FocusSessionOrderByWithAggregationInput[]
    by: FocusSessionScalarFieldEnum[] | FocusSessionScalarFieldEnum
    having?: FocusSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FocusSessionCountAggregateInputType | true
    _avg?: FocusSessionAvgAggregateInputType
    _sum?: FocusSessionSumAggregateInputType
    _min?: FocusSessionMinAggregateInputType
    _max?: FocusSessionMaxAggregateInputType
  }

  export type FocusSessionGroupByOutputType = {
    id: string
    userId: string
    taskId: string | null
    durationMinutes: number
    completed: boolean
    interrupted: boolean
    startedAt: Date
    completedAt: Date | null
    createdAt: Date
    _count: FocusSessionCountAggregateOutputType | null
    _avg: FocusSessionAvgAggregateOutputType | null
    _sum: FocusSessionSumAggregateOutputType | null
    _min: FocusSessionMinAggregateOutputType | null
    _max: FocusSessionMaxAggregateOutputType | null
  }

  type GetFocusSessionGroupByPayload<T extends FocusSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FocusSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FocusSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FocusSessionGroupByOutputType[P]>
            : GetScalarType<T[P], FocusSessionGroupByOutputType[P]>
        }
      >
    >


  export type FocusSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    durationMinutes?: boolean
    completed?: boolean
    interrupted?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | FocusSession$taskArgs<ExtArgs>
  }, ExtArgs["result"]["focusSession"]>

  export type FocusSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    durationMinutes?: boolean
    completed?: boolean
    interrupted?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | FocusSession$taskArgs<ExtArgs>
  }, ExtArgs["result"]["focusSession"]>

  export type FocusSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    taskId?: boolean
    durationMinutes?: boolean
    completed?: boolean
    interrupted?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type FocusSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | FocusSession$taskArgs<ExtArgs>
  }
  export type FocusSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | FocusSession$taskArgs<ExtArgs>
  }

  export type $FocusSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FocusSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      taskId: string | null
      durationMinutes: number
      completed: boolean
      interrupted: boolean
      startedAt: Date
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["focusSession"]>
    composites: {}
  }

  type FocusSessionGetPayload<S extends boolean | null | undefined | FocusSessionDefaultArgs> = $Result.GetResult<Prisma.$FocusSessionPayload, S>

  type FocusSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FocusSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FocusSessionCountAggregateInputType | true
    }

  export interface FocusSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FocusSession'], meta: { name: 'FocusSession' } }
    /**
     * Find zero or one FocusSession that matches the filter.
     * @param {FocusSessionFindUniqueArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FocusSessionFindUniqueArgs>(args: SelectSubset<T, FocusSessionFindUniqueArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FocusSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FocusSessionFindUniqueOrThrowArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FocusSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, FocusSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FocusSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindFirstArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FocusSessionFindFirstArgs>(args?: SelectSubset<T, FocusSessionFindFirstArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FocusSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindFirstOrThrowArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FocusSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, FocusSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FocusSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FocusSessions
     * const focusSessions = await prisma.focusSession.findMany()
     * 
     * // Get first 10 FocusSessions
     * const focusSessions = await prisma.focusSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const focusSessionWithIdOnly = await prisma.focusSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FocusSessionFindManyArgs>(args?: SelectSubset<T, FocusSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FocusSession.
     * @param {FocusSessionCreateArgs} args - Arguments to create a FocusSession.
     * @example
     * // Create one FocusSession
     * const FocusSession = await prisma.focusSession.create({
     *   data: {
     *     // ... data to create a FocusSession
     *   }
     * })
     * 
     */
    create<T extends FocusSessionCreateArgs>(args: SelectSubset<T, FocusSessionCreateArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FocusSessions.
     * @param {FocusSessionCreateManyArgs} args - Arguments to create many FocusSessions.
     * @example
     * // Create many FocusSessions
     * const focusSession = await prisma.focusSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FocusSessionCreateManyArgs>(args?: SelectSubset<T, FocusSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FocusSessions and returns the data saved in the database.
     * @param {FocusSessionCreateManyAndReturnArgs} args - Arguments to create many FocusSessions.
     * @example
     * // Create many FocusSessions
     * const focusSession = await prisma.focusSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FocusSessions and only return the `id`
     * const focusSessionWithIdOnly = await prisma.focusSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FocusSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, FocusSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FocusSession.
     * @param {FocusSessionDeleteArgs} args - Arguments to delete one FocusSession.
     * @example
     * // Delete one FocusSession
     * const FocusSession = await prisma.focusSession.delete({
     *   where: {
     *     // ... filter to delete one FocusSession
     *   }
     * })
     * 
     */
    delete<T extends FocusSessionDeleteArgs>(args: SelectSubset<T, FocusSessionDeleteArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FocusSession.
     * @param {FocusSessionUpdateArgs} args - Arguments to update one FocusSession.
     * @example
     * // Update one FocusSession
     * const focusSession = await prisma.focusSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FocusSessionUpdateArgs>(args: SelectSubset<T, FocusSessionUpdateArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FocusSessions.
     * @param {FocusSessionDeleteManyArgs} args - Arguments to filter FocusSessions to delete.
     * @example
     * // Delete a few FocusSessions
     * const { count } = await prisma.focusSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FocusSessionDeleteManyArgs>(args?: SelectSubset<T, FocusSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocusSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FocusSessions
     * const focusSession = await prisma.focusSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FocusSessionUpdateManyArgs>(args: SelectSubset<T, FocusSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FocusSession.
     * @param {FocusSessionUpsertArgs} args - Arguments to update or create a FocusSession.
     * @example
     * // Update or create a FocusSession
     * const focusSession = await prisma.focusSession.upsert({
     *   create: {
     *     // ... data to create a FocusSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FocusSession we want to update
     *   }
     * })
     */
    upsert<T extends FocusSessionUpsertArgs>(args: SelectSubset<T, FocusSessionUpsertArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FocusSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionCountArgs} args - Arguments to filter FocusSessions to count.
     * @example
     * // Count the number of FocusSessions
     * const count = await prisma.focusSession.count({
     *   where: {
     *     // ... the filter for the FocusSessions we want to count
     *   }
     * })
    **/
    count<T extends FocusSessionCountArgs>(
      args?: Subset<T, FocusSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FocusSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FocusSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FocusSessionAggregateArgs>(args: Subset<T, FocusSessionAggregateArgs>): Prisma.PrismaPromise<GetFocusSessionAggregateType<T>>

    /**
     * Group by FocusSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionGroupByArgs} args - Group by arguments.
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
      T extends FocusSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FocusSessionGroupByArgs['orderBy'] }
        : { orderBy?: FocusSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FocusSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFocusSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FocusSession model
   */
  readonly fields: FocusSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FocusSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FocusSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    task<T extends FocusSession$taskArgs<ExtArgs> = {}>(args?: Subset<T, FocusSession$taskArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the FocusSession model
   */ 
  interface FocusSessionFieldRefs {
    readonly id: FieldRef<"FocusSession", 'String'>
    readonly userId: FieldRef<"FocusSession", 'String'>
    readonly taskId: FieldRef<"FocusSession", 'String'>
    readonly durationMinutes: FieldRef<"FocusSession", 'Int'>
    readonly completed: FieldRef<"FocusSession", 'Boolean'>
    readonly interrupted: FieldRef<"FocusSession", 'Boolean'>
    readonly startedAt: FieldRef<"FocusSession", 'DateTime'>
    readonly completedAt: FieldRef<"FocusSession", 'DateTime'>
    readonly createdAt: FieldRef<"FocusSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FocusSession findUnique
   */
  export type FocusSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession findUniqueOrThrow
   */
  export type FocusSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession findFirst
   */
  export type FocusSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession findFirstOrThrow
   */
  export type FocusSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession findMany
   */
  export type FocusSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSessions to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession create
   */
  export type FocusSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a FocusSession.
     */
    data: XOR<FocusSessionCreateInput, FocusSessionUncheckedCreateInput>
  }

  /**
   * FocusSession createMany
   */
  export type FocusSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FocusSessions.
     */
    data: FocusSessionCreateManyInput | FocusSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FocusSession createManyAndReturn
   */
  export type FocusSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FocusSessions.
     */
    data: FocusSessionCreateManyInput | FocusSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FocusSession update
   */
  export type FocusSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a FocusSession.
     */
    data: XOR<FocusSessionUpdateInput, FocusSessionUncheckedUpdateInput>
    /**
     * Choose, which FocusSession to update.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession updateMany
   */
  export type FocusSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FocusSessions.
     */
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyInput>
    /**
     * Filter which FocusSessions to update
     */
    where?: FocusSessionWhereInput
  }

  /**
   * FocusSession upsert
   */
  export type FocusSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the FocusSession to update in case it exists.
     */
    where: FocusSessionWhereUniqueInput
    /**
     * In case the FocusSession found by the `where` argument doesn't exist, create a new FocusSession with this data.
     */
    create: XOR<FocusSessionCreateInput, FocusSessionUncheckedCreateInput>
    /**
     * In case the FocusSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FocusSessionUpdateInput, FocusSessionUncheckedUpdateInput>
  }

  /**
   * FocusSession delete
   */
  export type FocusSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter which FocusSession to delete.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession deleteMany
   */
  export type FocusSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusSessions to delete
     */
    where?: FocusSessionWhereInput
  }

  /**
   * FocusSession.task
   */
  export type FocusSession$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * FocusSession without action
   */
  export type FocusSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
  }


  /**
   * Model MeditationSession
   */

  export type AggregateMeditationSession = {
    _count: MeditationSessionCountAggregateOutputType | null
    _avg: MeditationSessionAvgAggregateOutputType | null
    _sum: MeditationSessionSumAggregateOutputType | null
    _min: MeditationSessionMinAggregateOutputType | null
    _max: MeditationSessionMaxAggregateOutputType | null
  }

  export type MeditationSessionAvgAggregateOutputType = {
    durationMinutes: number | null
  }

  export type MeditationSessionSumAggregateOutputType = {
    durationMinutes: number | null
  }

  export type MeditationSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mode: $Enums.MeditationMode | null
    durationMinutes: number | null
    completed: boolean | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type MeditationSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mode: $Enums.MeditationMode | null
    durationMinutes: number | null
    completed: boolean | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type MeditationSessionCountAggregateOutputType = {
    id: number
    userId: number
    mode: number
    durationMinutes: number
    completed: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type MeditationSessionAvgAggregateInputType = {
    durationMinutes?: true
  }

  export type MeditationSessionSumAggregateInputType = {
    durationMinutes?: true
  }

  export type MeditationSessionMinAggregateInputType = {
    id?: true
    userId?: true
    mode?: true
    durationMinutes?: true
    completed?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type MeditationSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    mode?: true
    durationMinutes?: true
    completed?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type MeditationSessionCountAggregateInputType = {
    id?: true
    userId?: true
    mode?: true
    durationMinutes?: true
    completed?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MeditationSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeditationSession to aggregate.
     */
    where?: MeditationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeditationSessions to fetch.
     */
    orderBy?: MeditationSessionOrderByWithRelationInput | MeditationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeditationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeditationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeditationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeditationSessions
    **/
    _count?: true | MeditationSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeditationSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeditationSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeditationSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeditationSessionMaxAggregateInputType
  }

  export type GetMeditationSessionAggregateType<T extends MeditationSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateMeditationSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeditationSession[P]>
      : GetScalarType<T[P], AggregateMeditationSession[P]>
  }




  export type MeditationSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeditationSessionWhereInput
    orderBy?: MeditationSessionOrderByWithAggregationInput | MeditationSessionOrderByWithAggregationInput[]
    by: MeditationSessionScalarFieldEnum[] | MeditationSessionScalarFieldEnum
    having?: MeditationSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeditationSessionCountAggregateInputType | true
    _avg?: MeditationSessionAvgAggregateInputType
    _sum?: MeditationSessionSumAggregateInputType
    _min?: MeditationSessionMinAggregateInputType
    _max?: MeditationSessionMaxAggregateInputType
  }

  export type MeditationSessionGroupByOutputType = {
    id: string
    userId: string
    mode: $Enums.MeditationMode
    durationMinutes: number
    completed: boolean
    startedAt: Date
    completedAt: Date | null
    createdAt: Date
    _count: MeditationSessionCountAggregateOutputType | null
    _avg: MeditationSessionAvgAggregateOutputType | null
    _sum: MeditationSessionSumAggregateOutputType | null
    _min: MeditationSessionMinAggregateOutputType | null
    _max: MeditationSessionMaxAggregateOutputType | null
  }

  type GetMeditationSessionGroupByPayload<T extends MeditationSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeditationSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeditationSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeditationSessionGroupByOutputType[P]>
            : GetScalarType<T[P], MeditationSessionGroupByOutputType[P]>
        }
      >
    >


  export type MeditationSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mode?: boolean
    durationMinutes?: boolean
    completed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meditationSession"]>

  export type MeditationSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mode?: boolean
    durationMinutes?: boolean
    completed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meditationSession"]>

  export type MeditationSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    mode?: boolean
    durationMinutes?: boolean
    completed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type MeditationSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeditationSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeditationSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeditationSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mode: $Enums.MeditationMode
      durationMinutes: number
      completed: boolean
      startedAt: Date
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["meditationSession"]>
    composites: {}
  }

  type MeditationSessionGetPayload<S extends boolean | null | undefined | MeditationSessionDefaultArgs> = $Result.GetResult<Prisma.$MeditationSessionPayload, S>

  type MeditationSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeditationSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeditationSessionCountAggregateInputType | true
    }

  export interface MeditationSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeditationSession'], meta: { name: 'MeditationSession' } }
    /**
     * Find zero or one MeditationSession that matches the filter.
     * @param {MeditationSessionFindUniqueArgs} args - Arguments to find a MeditationSession
     * @example
     * // Get one MeditationSession
     * const meditationSession = await prisma.meditationSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeditationSessionFindUniqueArgs>(args: SelectSubset<T, MeditationSessionFindUniqueArgs<ExtArgs>>): Prisma__MeditationSessionClient<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MeditationSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MeditationSessionFindUniqueOrThrowArgs} args - Arguments to find a MeditationSession
     * @example
     * // Get one MeditationSession
     * const meditationSession = await prisma.meditationSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeditationSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, MeditationSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeditationSessionClient<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MeditationSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationSessionFindFirstArgs} args - Arguments to find a MeditationSession
     * @example
     * // Get one MeditationSession
     * const meditationSession = await prisma.meditationSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeditationSessionFindFirstArgs>(args?: SelectSubset<T, MeditationSessionFindFirstArgs<ExtArgs>>): Prisma__MeditationSessionClient<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MeditationSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationSessionFindFirstOrThrowArgs} args - Arguments to find a MeditationSession
     * @example
     * // Get one MeditationSession
     * const meditationSession = await prisma.meditationSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeditationSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, MeditationSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeditationSessionClient<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MeditationSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeditationSessions
     * const meditationSessions = await prisma.meditationSession.findMany()
     * 
     * // Get first 10 MeditationSessions
     * const meditationSessions = await prisma.meditationSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meditationSessionWithIdOnly = await prisma.meditationSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeditationSessionFindManyArgs>(args?: SelectSubset<T, MeditationSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MeditationSession.
     * @param {MeditationSessionCreateArgs} args - Arguments to create a MeditationSession.
     * @example
     * // Create one MeditationSession
     * const MeditationSession = await prisma.meditationSession.create({
     *   data: {
     *     // ... data to create a MeditationSession
     *   }
     * })
     * 
     */
    create<T extends MeditationSessionCreateArgs>(args: SelectSubset<T, MeditationSessionCreateArgs<ExtArgs>>): Prisma__MeditationSessionClient<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MeditationSessions.
     * @param {MeditationSessionCreateManyArgs} args - Arguments to create many MeditationSessions.
     * @example
     * // Create many MeditationSessions
     * const meditationSession = await prisma.meditationSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeditationSessionCreateManyArgs>(args?: SelectSubset<T, MeditationSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeditationSessions and returns the data saved in the database.
     * @param {MeditationSessionCreateManyAndReturnArgs} args - Arguments to create many MeditationSessions.
     * @example
     * // Create many MeditationSessions
     * const meditationSession = await prisma.meditationSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeditationSessions and only return the `id`
     * const meditationSessionWithIdOnly = await prisma.meditationSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeditationSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, MeditationSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MeditationSession.
     * @param {MeditationSessionDeleteArgs} args - Arguments to delete one MeditationSession.
     * @example
     * // Delete one MeditationSession
     * const MeditationSession = await prisma.meditationSession.delete({
     *   where: {
     *     // ... filter to delete one MeditationSession
     *   }
     * })
     * 
     */
    delete<T extends MeditationSessionDeleteArgs>(args: SelectSubset<T, MeditationSessionDeleteArgs<ExtArgs>>): Prisma__MeditationSessionClient<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MeditationSession.
     * @param {MeditationSessionUpdateArgs} args - Arguments to update one MeditationSession.
     * @example
     * // Update one MeditationSession
     * const meditationSession = await prisma.meditationSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeditationSessionUpdateArgs>(args: SelectSubset<T, MeditationSessionUpdateArgs<ExtArgs>>): Prisma__MeditationSessionClient<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MeditationSessions.
     * @param {MeditationSessionDeleteManyArgs} args - Arguments to filter MeditationSessions to delete.
     * @example
     * // Delete a few MeditationSessions
     * const { count } = await prisma.meditationSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeditationSessionDeleteManyArgs>(args?: SelectSubset<T, MeditationSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeditationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeditationSessions
     * const meditationSession = await prisma.meditationSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeditationSessionUpdateManyArgs>(args: SelectSubset<T, MeditationSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MeditationSession.
     * @param {MeditationSessionUpsertArgs} args - Arguments to update or create a MeditationSession.
     * @example
     * // Update or create a MeditationSession
     * const meditationSession = await prisma.meditationSession.upsert({
     *   create: {
     *     // ... data to create a MeditationSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeditationSession we want to update
     *   }
     * })
     */
    upsert<T extends MeditationSessionUpsertArgs>(args: SelectSubset<T, MeditationSessionUpsertArgs<ExtArgs>>): Prisma__MeditationSessionClient<$Result.GetResult<Prisma.$MeditationSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MeditationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationSessionCountArgs} args - Arguments to filter MeditationSessions to count.
     * @example
     * // Count the number of MeditationSessions
     * const count = await prisma.meditationSession.count({
     *   where: {
     *     // ... the filter for the MeditationSessions we want to count
     *   }
     * })
    **/
    count<T extends MeditationSessionCountArgs>(
      args?: Subset<T, MeditationSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeditationSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeditationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeditationSessionAggregateArgs>(args: Subset<T, MeditationSessionAggregateArgs>): Prisma.PrismaPromise<GetMeditationSessionAggregateType<T>>

    /**
     * Group by MeditationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationSessionGroupByArgs} args - Group by arguments.
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
      T extends MeditationSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeditationSessionGroupByArgs['orderBy'] }
        : { orderBy?: MeditationSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeditationSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeditationSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeditationSession model
   */
  readonly fields: MeditationSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeditationSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeditationSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MeditationSession model
   */ 
  interface MeditationSessionFieldRefs {
    readonly id: FieldRef<"MeditationSession", 'String'>
    readonly userId: FieldRef<"MeditationSession", 'String'>
    readonly mode: FieldRef<"MeditationSession", 'MeditationMode'>
    readonly durationMinutes: FieldRef<"MeditationSession", 'Int'>
    readonly completed: FieldRef<"MeditationSession", 'Boolean'>
    readonly startedAt: FieldRef<"MeditationSession", 'DateTime'>
    readonly completedAt: FieldRef<"MeditationSession", 'DateTime'>
    readonly createdAt: FieldRef<"MeditationSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeditationSession findUnique
   */
  export type MeditationSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    /**
     * Filter, which MeditationSession to fetch.
     */
    where: MeditationSessionWhereUniqueInput
  }

  /**
   * MeditationSession findUniqueOrThrow
   */
  export type MeditationSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    /**
     * Filter, which MeditationSession to fetch.
     */
    where: MeditationSessionWhereUniqueInput
  }

  /**
   * MeditationSession findFirst
   */
  export type MeditationSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    /**
     * Filter, which MeditationSession to fetch.
     */
    where?: MeditationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeditationSessions to fetch.
     */
    orderBy?: MeditationSessionOrderByWithRelationInput | MeditationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeditationSessions.
     */
    cursor?: MeditationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeditationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeditationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeditationSessions.
     */
    distinct?: MeditationSessionScalarFieldEnum | MeditationSessionScalarFieldEnum[]
  }

  /**
   * MeditationSession findFirstOrThrow
   */
  export type MeditationSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    /**
     * Filter, which MeditationSession to fetch.
     */
    where?: MeditationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeditationSessions to fetch.
     */
    orderBy?: MeditationSessionOrderByWithRelationInput | MeditationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeditationSessions.
     */
    cursor?: MeditationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeditationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeditationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeditationSessions.
     */
    distinct?: MeditationSessionScalarFieldEnum | MeditationSessionScalarFieldEnum[]
  }

  /**
   * MeditationSession findMany
   */
  export type MeditationSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    /**
     * Filter, which MeditationSessions to fetch.
     */
    where?: MeditationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeditationSessions to fetch.
     */
    orderBy?: MeditationSessionOrderByWithRelationInput | MeditationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeditationSessions.
     */
    cursor?: MeditationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeditationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeditationSessions.
     */
    skip?: number
    distinct?: MeditationSessionScalarFieldEnum | MeditationSessionScalarFieldEnum[]
  }

  /**
   * MeditationSession create
   */
  export type MeditationSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a MeditationSession.
     */
    data: XOR<MeditationSessionCreateInput, MeditationSessionUncheckedCreateInput>
  }

  /**
   * MeditationSession createMany
   */
  export type MeditationSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeditationSessions.
     */
    data: MeditationSessionCreateManyInput | MeditationSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeditationSession createManyAndReturn
   */
  export type MeditationSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MeditationSessions.
     */
    data: MeditationSessionCreateManyInput | MeditationSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeditationSession update
   */
  export type MeditationSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a MeditationSession.
     */
    data: XOR<MeditationSessionUpdateInput, MeditationSessionUncheckedUpdateInput>
    /**
     * Choose, which MeditationSession to update.
     */
    where: MeditationSessionWhereUniqueInput
  }

  /**
   * MeditationSession updateMany
   */
  export type MeditationSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeditationSessions.
     */
    data: XOR<MeditationSessionUpdateManyMutationInput, MeditationSessionUncheckedUpdateManyInput>
    /**
     * Filter which MeditationSessions to update
     */
    where?: MeditationSessionWhereInput
  }

  /**
   * MeditationSession upsert
   */
  export type MeditationSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the MeditationSession to update in case it exists.
     */
    where: MeditationSessionWhereUniqueInput
    /**
     * In case the MeditationSession found by the `where` argument doesn't exist, create a new MeditationSession with this data.
     */
    create: XOR<MeditationSessionCreateInput, MeditationSessionUncheckedCreateInput>
    /**
     * In case the MeditationSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeditationSessionUpdateInput, MeditationSessionUncheckedUpdateInput>
  }

  /**
   * MeditationSession delete
   */
  export type MeditationSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
    /**
     * Filter which MeditationSession to delete.
     */
    where: MeditationSessionWhereUniqueInput
  }

  /**
   * MeditationSession deleteMany
   */
  export type MeditationSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeditationSessions to delete
     */
    where?: MeditationSessionWhereInput
  }

  /**
   * MeditationSession without action
   */
  export type MeditationSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeditationSession
     */
    select?: MeditationSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeditationSessionInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyReport
   */

  export type AggregateWeeklyReport = {
    _count: WeeklyReportCountAggregateOutputType | null
    _avg: WeeklyReportAvgAggregateOutputType | null
    _sum: WeeklyReportSumAggregateOutputType | null
    _min: WeeklyReportMinAggregateOutputType | null
    _max: WeeklyReportMaxAggregateOutputType | null
  }

  export type WeeklyReportAvgAggregateOutputType = {
    totalFocusMin: number | null
    tasksDone: number | null
    avgMood: number | null
  }

  export type WeeklyReportSumAggregateOutputType = {
    totalFocusMin: number | null
    tasksDone: number | null
    avgMood: number | null
  }

  export type WeeklyReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    weekStart: Date | null
    weekEnd: Date | null
    totalFocusMin: number | null
    tasksDone: number | null
    avgMood: number | null
    aiSummary: string | null
    suggestions: string | null
    generatedAt: Date | null
  }

  export type WeeklyReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    weekStart: Date | null
    weekEnd: Date | null
    totalFocusMin: number | null
    tasksDone: number | null
    avgMood: number | null
    aiSummary: string | null
    suggestions: string | null
    generatedAt: Date | null
  }

  export type WeeklyReportCountAggregateOutputType = {
    id: number
    userId: number
    weekStart: number
    weekEnd: number
    totalFocusMin: number
    tasksDone: number
    avgMood: number
    dailyFocusData: number
    moodTrendData: number
    wins: number
    tips: number
    aiSummary: number
    suggestions: number
    generatedAt: number
    _all: number
  }


  export type WeeklyReportAvgAggregateInputType = {
    totalFocusMin?: true
    tasksDone?: true
    avgMood?: true
  }

  export type WeeklyReportSumAggregateInputType = {
    totalFocusMin?: true
    tasksDone?: true
    avgMood?: true
  }

  export type WeeklyReportMinAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    weekEnd?: true
    totalFocusMin?: true
    tasksDone?: true
    avgMood?: true
    aiSummary?: true
    suggestions?: true
    generatedAt?: true
  }

  export type WeeklyReportMaxAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    weekEnd?: true
    totalFocusMin?: true
    tasksDone?: true
    avgMood?: true
    aiSummary?: true
    suggestions?: true
    generatedAt?: true
  }

  export type WeeklyReportCountAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    weekEnd?: true
    totalFocusMin?: true
    tasksDone?: true
    avgMood?: true
    dailyFocusData?: true
    moodTrendData?: true
    wins?: true
    tips?: true
    aiSummary?: true
    suggestions?: true
    generatedAt?: true
    _all?: true
  }

  export type WeeklyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyReport to aggregate.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyReports
    **/
    _count?: true | WeeklyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyReportMaxAggregateInputType
  }

  export type GetWeeklyReportAggregateType<T extends WeeklyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyReport[P]>
      : GetScalarType<T[P], AggregateWeeklyReport[P]>
  }




  export type WeeklyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyReportWhereInput
    orderBy?: WeeklyReportOrderByWithAggregationInput | WeeklyReportOrderByWithAggregationInput[]
    by: WeeklyReportScalarFieldEnum[] | WeeklyReportScalarFieldEnum
    having?: WeeklyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyReportCountAggregateInputType | true
    _avg?: WeeklyReportAvgAggregateInputType
    _sum?: WeeklyReportSumAggregateInputType
    _min?: WeeklyReportMinAggregateInputType
    _max?: WeeklyReportMaxAggregateInputType
  }

  export type WeeklyReportGroupByOutputType = {
    id: string
    userId: string
    weekStart: Date
    weekEnd: Date
    totalFocusMin: number
    tasksDone: number
    avgMood: number
    dailyFocusData: JsonValue
    moodTrendData: JsonValue
    wins: string[]
    tips: string[]
    aiSummary: string | null
    suggestions: string | null
    generatedAt: Date
    _count: WeeklyReportCountAggregateOutputType | null
    _avg: WeeklyReportAvgAggregateOutputType | null
    _sum: WeeklyReportSumAggregateOutputType | null
    _min: WeeklyReportMinAggregateOutputType | null
    _max: WeeklyReportMaxAggregateOutputType | null
  }

  type GetWeeklyReportGroupByPayload<T extends WeeklyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyReportGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyReportGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    totalFocusMin?: boolean
    tasksDone?: boolean
    avgMood?: boolean
    dailyFocusData?: boolean
    moodTrendData?: boolean
    wins?: boolean
    tips?: boolean
    aiSummary?: boolean
    suggestions?: boolean
    generatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyReport"]>

  export type WeeklyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    totalFocusMin?: boolean
    tasksDone?: boolean
    avgMood?: boolean
    dailyFocusData?: boolean
    moodTrendData?: boolean
    wins?: boolean
    tips?: boolean
    aiSummary?: boolean
    suggestions?: boolean
    generatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyReport"]>

  export type WeeklyReportSelectScalar = {
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    totalFocusMin?: boolean
    tasksDone?: boolean
    avgMood?: boolean
    dailyFocusData?: boolean
    moodTrendData?: boolean
    wins?: boolean
    tips?: boolean
    aiSummary?: boolean
    suggestions?: boolean
    generatedAt?: boolean
  }

  export type WeeklyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      weekStart: Date
      weekEnd: Date
      totalFocusMin: number
      tasksDone: number
      avgMood: number
      dailyFocusData: Prisma.JsonValue
      moodTrendData: Prisma.JsonValue
      wins: string[]
      tips: string[]
      aiSummary: string | null
      suggestions: string | null
      generatedAt: Date
    }, ExtArgs["result"]["weeklyReport"]>
    composites: {}
  }

  type WeeklyReportGetPayload<S extends boolean | null | undefined | WeeklyReportDefaultArgs> = $Result.GetResult<Prisma.$WeeklyReportPayload, S>

  type WeeklyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeeklyReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeeklyReportCountAggregateInputType | true
    }

  export interface WeeklyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyReport'], meta: { name: 'WeeklyReport' } }
    /**
     * Find zero or one WeeklyReport that matches the filter.
     * @param {WeeklyReportFindUniqueArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyReportFindUniqueArgs>(args: SelectSubset<T, WeeklyReportFindUniqueArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WeeklyReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeeklyReportFindUniqueOrThrowArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WeeklyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportFindFirstArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyReportFindFirstArgs>(args?: SelectSubset<T, WeeklyReportFindFirstArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WeeklyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportFindFirstOrThrowArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WeeklyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyReports
     * const weeklyReports = await prisma.weeklyReport.findMany()
     * 
     * // Get first 10 WeeklyReports
     * const weeklyReports = await prisma.weeklyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyReportWithIdOnly = await prisma.weeklyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyReportFindManyArgs>(args?: SelectSubset<T, WeeklyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WeeklyReport.
     * @param {WeeklyReportCreateArgs} args - Arguments to create a WeeklyReport.
     * @example
     * // Create one WeeklyReport
     * const WeeklyReport = await prisma.weeklyReport.create({
     *   data: {
     *     // ... data to create a WeeklyReport
     *   }
     * })
     * 
     */
    create<T extends WeeklyReportCreateArgs>(args: SelectSubset<T, WeeklyReportCreateArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WeeklyReports.
     * @param {WeeklyReportCreateManyArgs} args - Arguments to create many WeeklyReports.
     * @example
     * // Create many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyReportCreateManyArgs>(args?: SelectSubset<T, WeeklyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyReports and returns the data saved in the database.
     * @param {WeeklyReportCreateManyAndReturnArgs} args - Arguments to create many WeeklyReports.
     * @example
     * // Create many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyReports and only return the `id`
     * const weeklyReportWithIdOnly = await prisma.weeklyReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WeeklyReport.
     * @param {WeeklyReportDeleteArgs} args - Arguments to delete one WeeklyReport.
     * @example
     * // Delete one WeeklyReport
     * const WeeklyReport = await prisma.weeklyReport.delete({
     *   where: {
     *     // ... filter to delete one WeeklyReport
     *   }
     * })
     * 
     */
    delete<T extends WeeklyReportDeleteArgs>(args: SelectSubset<T, WeeklyReportDeleteArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WeeklyReport.
     * @param {WeeklyReportUpdateArgs} args - Arguments to update one WeeklyReport.
     * @example
     * // Update one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyReportUpdateArgs>(args: SelectSubset<T, WeeklyReportUpdateArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WeeklyReports.
     * @param {WeeklyReportDeleteManyArgs} args - Arguments to filter WeeklyReports to delete.
     * @example
     * // Delete a few WeeklyReports
     * const { count } = await prisma.weeklyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyReportDeleteManyArgs>(args?: SelectSubset<T, WeeklyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyReportUpdateManyArgs>(args: SelectSubset<T, WeeklyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeeklyReport.
     * @param {WeeklyReportUpsertArgs} args - Arguments to update or create a WeeklyReport.
     * @example
     * // Update or create a WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.upsert({
     *   create: {
     *     // ... data to create a WeeklyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyReport we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyReportUpsertArgs>(args: SelectSubset<T, WeeklyReportUpsertArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WeeklyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportCountArgs} args - Arguments to filter WeeklyReports to count.
     * @example
     * // Count the number of WeeklyReports
     * const count = await prisma.weeklyReport.count({
     *   where: {
     *     // ... the filter for the WeeklyReports we want to count
     *   }
     * })
    **/
    count<T extends WeeklyReportCountArgs>(
      args?: Subset<T, WeeklyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyReportAggregateArgs>(args: Subset<T, WeeklyReportAggregateArgs>): Prisma.PrismaPromise<GetWeeklyReportAggregateType<T>>

    /**
     * Group by WeeklyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportGroupByArgs} args - Group by arguments.
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
      T extends WeeklyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyReportGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyReport model
   */
  readonly fields: WeeklyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the WeeklyReport model
   */ 
  interface WeeklyReportFieldRefs {
    readonly id: FieldRef<"WeeklyReport", 'String'>
    readonly userId: FieldRef<"WeeklyReport", 'String'>
    readonly weekStart: FieldRef<"WeeklyReport", 'DateTime'>
    readonly weekEnd: FieldRef<"WeeklyReport", 'DateTime'>
    readonly totalFocusMin: FieldRef<"WeeklyReport", 'Int'>
    readonly tasksDone: FieldRef<"WeeklyReport", 'Int'>
    readonly avgMood: FieldRef<"WeeklyReport", 'Float'>
    readonly dailyFocusData: FieldRef<"WeeklyReport", 'Json'>
    readonly moodTrendData: FieldRef<"WeeklyReport", 'Json'>
    readonly wins: FieldRef<"WeeklyReport", 'String[]'>
    readonly tips: FieldRef<"WeeklyReport", 'String[]'>
    readonly aiSummary: FieldRef<"WeeklyReport", 'String'>
    readonly suggestions: FieldRef<"WeeklyReport", 'String'>
    readonly generatedAt: FieldRef<"WeeklyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyReport findUnique
   */
  export type WeeklyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport findUniqueOrThrow
   */
  export type WeeklyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport findFirst
   */
  export type WeeklyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyReports.
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyReports.
     */
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * WeeklyReport findFirstOrThrow
   */
  export type WeeklyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyReports.
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyReports.
     */
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * WeeklyReport findMany
   */
  export type WeeklyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReports to fetch.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyReports.
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * WeeklyReport create
   */
  export type WeeklyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyReport.
     */
    data: XOR<WeeklyReportCreateInput, WeeklyReportUncheckedCreateInput>
  }

  /**
   * WeeklyReport createMany
   */
  export type WeeklyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyReports.
     */
    data: WeeklyReportCreateManyInput | WeeklyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyReport createManyAndReturn
   */
  export type WeeklyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WeeklyReports.
     */
    data: WeeklyReportCreateManyInput | WeeklyReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyReport update
   */
  export type WeeklyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyReport.
     */
    data: XOR<WeeklyReportUpdateInput, WeeklyReportUncheckedUpdateInput>
    /**
     * Choose, which WeeklyReport to update.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport updateMany
   */
  export type WeeklyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyReports.
     */
    data: XOR<WeeklyReportUpdateManyMutationInput, WeeklyReportUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyReports to update
     */
    where?: WeeklyReportWhereInput
  }

  /**
   * WeeklyReport upsert
   */
  export type WeeklyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyReport to update in case it exists.
     */
    where: WeeklyReportWhereUniqueInput
    /**
     * In case the WeeklyReport found by the `where` argument doesn't exist, create a new WeeklyReport with this data.
     */
    create: XOR<WeeklyReportCreateInput, WeeklyReportUncheckedCreateInput>
    /**
     * In case the WeeklyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyReportUpdateInput, WeeklyReportUncheckedUpdateInput>
  }

  /**
   * WeeklyReport delete
   */
  export type WeeklyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter which WeeklyReport to delete.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport deleteMany
   */
  export type WeeklyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyReports to delete
     */
    where?: WeeklyReportWhereInput
  }

  /**
   * WeeklyReport without action
   */
  export type WeeklyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    displayName: 'displayName',
    username: 'username',
    avatarUrl: 'avatarUrl',
    timezone: 'timezone',
    role: 'role',
    isEmailVerified: 'isEmailVerified',
    isOnboarded: 'isOnboarded',
    focusTime: 'focusTime',
    emotionalState: 'emotionalState',
    distractions: 'distractions',
    mainGoal: 'mainGoal',
    weeklyGoal: 'weeklyGoal',
    personalityVibe: 'personalityVibe',
    temperament: 'temperament',
    iqScore: 'iqScore',
    eqScore: 'eqScore',
    sqScore: 'sqScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const OtpCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    userId: 'userId',
    purpose: 'purpose',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type OtpCodeScalarFieldEnum = (typeof OtpCodeScalarFieldEnum)[keyof typeof OtpCodeScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    naturalInput: 'naturalInput',
    drive: 'drive',
    status: 'status',
    priority: 'priority',
    estimatedMinutes: 'estimatedMinutes',
    dueDate: 'dueDate',
    completedAt: 'completedAt',
    aiSuggested: 'aiSuggested',
    aiNudge: 'aiNudge',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SubtaskScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    title: 'title',
    estimatedMinutes: 'estimatedMinutes',
    completed: 'completed',
    completedAt: 'completedAt',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubtaskScalarFieldEnum = (typeof SubtaskScalarFieldEnum)[keyof typeof SubtaskScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    emoji: 'emoji',
    type: 'type',
    frequency: 'frequency',
    strength: 'strength',
    streak: 'streak',
    bestStreak: 'bestStreak',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const HabitCompletionScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    completedAt: 'completedAt',
    date: 'date'
  };

  export type HabitCompletionScalarFieldEnum = (typeof HabitCompletionScalarFieldEnum)[keyof typeof HabitCompletionScalarFieldEnum]


  export const RoutineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    time: 'time',
    type: 'type',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoutineScalarFieldEnum = (typeof RoutineScalarFieldEnum)[keyof typeof RoutineScalarFieldEnum]


  export const RoutineItemScalarFieldEnum: {
    id: 'id',
    routineId: 'routineId',
    habitId: 'habitId',
    label: 'label',
    order: 'order'
  };

  export type RoutineItemScalarFieldEnum = (typeof RoutineItemScalarFieldEnum)[keyof typeof RoutineItemScalarFieldEnum]


  export const JournalEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    text: 'text',
    tags: 'tags',
    moodScore: 'moodScore',
    sleepQuality: 'sleepQuality',
    date: 'date',
    aiInsight: 'aiInsight',
    aiPromptUsed: 'aiPromptUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JournalEntryScalarFieldEnum = (typeof JournalEntryScalarFieldEnum)[keyof typeof JournalEntryScalarFieldEnum]


  export const FocusSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    taskId: 'taskId',
    durationMinutes: 'durationMinutes',
    completed: 'completed',
    interrupted: 'interrupted',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type FocusSessionScalarFieldEnum = (typeof FocusSessionScalarFieldEnum)[keyof typeof FocusSessionScalarFieldEnum]


  export const MeditationSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mode: 'mode',
    durationMinutes: 'durationMinutes',
    completed: 'completed',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type MeditationSessionScalarFieldEnum = (typeof MeditationSessionScalarFieldEnum)[keyof typeof MeditationSessionScalarFieldEnum]


  export const WeeklyReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weekStart: 'weekStart',
    weekEnd: 'weekEnd',
    totalFocusMin: 'totalFocusMin',
    tasksDone: 'tasksDone',
    avgMood: 'avgMood',
    dailyFocusData: 'dailyFocusData',
    moodTrendData: 'moodTrendData',
    wins: 'wins',
    tips: 'tips',
    aiSummary: 'aiSummary',
    suggestions: 'suggestions',
    generatedAt: 'generatedAt'
  };

  export type WeeklyReportScalarFieldEnum = (typeof WeeklyReportScalarFieldEnum)[keyof typeof WeeklyReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FocusTime'
   */
  export type EnumFocusTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FocusTime'>
    


  /**
   * Reference to a field of type 'FocusTime[]'
   */
  export type ListEnumFocusTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FocusTime[]'>
    


  /**
   * Reference to a field of type 'EmotionalState'
   */
  export type EnumEmotionalStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmotionalState'>
    


  /**
   * Reference to a field of type 'EmotionalState[]'
   */
  export type ListEnumEmotionalStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmotionalState[]'>
    


  /**
   * Reference to a field of type 'Distraction[]'
   */
  export type ListEnumDistractionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Distraction[]'>
    


  /**
   * Reference to a field of type 'Distraction'
   */
  export type EnumDistractionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Distraction'>
    


  /**
   * Reference to a field of type 'MainGoal'
   */
  export type EnumMainGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MainGoal'>
    


  /**
   * Reference to a field of type 'MainGoal[]'
   */
  export type ListEnumMainGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MainGoal[]'>
    


  /**
   * Reference to a field of type 'PersonalityVibe'
   */
  export type EnumPersonalityVibeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonalityVibe'>
    


  /**
   * Reference to a field of type 'PersonalityVibe[]'
   */
  export type ListEnumPersonalityVibeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonalityVibe[]'>
    


  /**
   * Reference to a field of type 'Temperament'
   */
  export type EnumTemperamentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Temperament'>
    


  /**
   * Reference to a field of type 'Temperament[]'
   */
  export type ListEnumTemperamentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Temperament[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OtpPurpose'
   */
  export type EnumOtpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpPurpose'>
    


  /**
   * Reference to a field of type 'OtpPurpose[]'
   */
  export type ListEnumOtpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpPurpose[]'>
    


  /**
   * Reference to a field of type 'Drive'
   */
  export type EnumDriveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Drive'>
    


  /**
   * Reference to a field of type 'Drive[]'
   */
  export type ListEnumDriveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Drive[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority[]'>
    


  /**
   * Reference to a field of type 'HabitType'
   */
  export type EnumHabitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitType'>
    


  /**
   * Reference to a field of type 'HabitType[]'
   */
  export type ListEnumHabitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitType[]'>
    


  /**
   * Reference to a field of type 'HabitFrequency'
   */
  export type EnumHabitFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitFrequency'>
    


  /**
   * Reference to a field of type 'HabitFrequency[]'
   */
  export type ListEnumHabitFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitFrequency[]'>
    


  /**
   * Reference to a field of type 'HabitStrength'
   */
  export type EnumHabitStrengthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitStrength'>
    


  /**
   * Reference to a field of type 'HabitStrength[]'
   */
  export type ListEnumHabitStrengthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitStrength[]'>
    


  /**
   * Reference to a field of type 'MeditationMode'
   */
  export type EnumMeditationModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeditationMode'>
    


  /**
   * Reference to a field of type 'MeditationMode[]'
   */
  export type ListEnumMeditationModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeditationMode[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    displayName?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    timezone?: StringFilter<"User"> | string
    role?: EnumUserRoleNullableFilter<"User"> | $Enums.UserRole | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    isOnboarded?: BoolFilter<"User"> | boolean
    focusTime?: EnumFocusTimeNullableFilter<"User"> | $Enums.FocusTime | null
    emotionalState?: EnumEmotionalStateNullableFilter<"User"> | $Enums.EmotionalState | null
    distractions?: EnumDistractionNullableListFilter<"User">
    mainGoal?: EnumMainGoalNullableFilter<"User"> | $Enums.MainGoal | null
    weeklyGoal?: StringNullableFilter<"User"> | string | null
    personalityVibe?: EnumPersonalityVibeNullableFilter<"User"> | $Enums.PersonalityVibe | null
    temperament?: EnumTemperamentNullableFilter<"User"> | $Enums.Temperament | null
    iqScore?: IntNullableFilter<"User"> | number | null
    eqScore?: IntNullableFilter<"User"> | number | null
    sqScore?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    otpCodes?: OtpCodeListRelationFilter
    tasks?: TaskListRelationFilter
    habits?: HabitListRelationFilter
    routines?: RoutineListRelationFilter
    journalEntries?: JournalEntryListRelationFilter
    focusSessions?: FocusSessionListRelationFilter
    meditationSessions?: MeditationSessionListRelationFilter
    weeklyReports?: WeeklyReportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    displayName?: SortOrder
    username?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    timezone?: SortOrder
    role?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isOnboarded?: SortOrder
    focusTime?: SortOrderInput | SortOrder
    emotionalState?: SortOrderInput | SortOrder
    distractions?: SortOrder
    mainGoal?: SortOrderInput | SortOrder
    weeklyGoal?: SortOrderInput | SortOrder
    personalityVibe?: SortOrderInput | SortOrder
    temperament?: SortOrderInput | SortOrder
    iqScore?: SortOrderInput | SortOrder
    eqScore?: SortOrderInput | SortOrder
    sqScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    otpCodes?: OtpCodeOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    habits?: HabitOrderByRelationAggregateInput
    routines?: RoutineOrderByRelationAggregateInput
    journalEntries?: JournalEntryOrderByRelationAggregateInput
    focusSessions?: FocusSessionOrderByRelationAggregateInput
    meditationSessions?: MeditationSessionOrderByRelationAggregateInput
    weeklyReports?: WeeklyReportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    displayName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    timezone?: StringFilter<"User"> | string
    role?: EnumUserRoleNullableFilter<"User"> | $Enums.UserRole | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    isOnboarded?: BoolFilter<"User"> | boolean
    focusTime?: EnumFocusTimeNullableFilter<"User"> | $Enums.FocusTime | null
    emotionalState?: EnumEmotionalStateNullableFilter<"User"> | $Enums.EmotionalState | null
    distractions?: EnumDistractionNullableListFilter<"User">
    mainGoal?: EnumMainGoalNullableFilter<"User"> | $Enums.MainGoal | null
    weeklyGoal?: StringNullableFilter<"User"> | string | null
    personalityVibe?: EnumPersonalityVibeNullableFilter<"User"> | $Enums.PersonalityVibe | null
    temperament?: EnumTemperamentNullableFilter<"User"> | $Enums.Temperament | null
    iqScore?: IntNullableFilter<"User"> | number | null
    eqScore?: IntNullableFilter<"User"> | number | null
    sqScore?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    otpCodes?: OtpCodeListRelationFilter
    tasks?: TaskListRelationFilter
    habits?: HabitListRelationFilter
    routines?: RoutineListRelationFilter
    journalEntries?: JournalEntryListRelationFilter
    focusSessions?: FocusSessionListRelationFilter
    meditationSessions?: MeditationSessionListRelationFilter
    weeklyReports?: WeeklyReportListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    displayName?: SortOrder
    username?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    timezone?: SortOrder
    role?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isOnboarded?: SortOrder
    focusTime?: SortOrderInput | SortOrder
    emotionalState?: SortOrderInput | SortOrder
    distractions?: SortOrder
    mainGoal?: SortOrderInput | SortOrder
    weeklyGoal?: SortOrderInput | SortOrder
    personalityVibe?: SortOrderInput | SortOrder
    temperament?: SortOrderInput | SortOrder
    iqScore?: SortOrderInput | SortOrder
    eqScore?: SortOrderInput | SortOrder
    sqScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    timezone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleNullableWithAggregatesFilter<"User"> | $Enums.UserRole | null
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isOnboarded?: BoolWithAggregatesFilter<"User"> | boolean
    focusTime?: EnumFocusTimeNullableWithAggregatesFilter<"User"> | $Enums.FocusTime | null
    emotionalState?: EnumEmotionalStateNullableWithAggregatesFilter<"User"> | $Enums.EmotionalState | null
    distractions?: EnumDistractionNullableListFilter<"User">
    mainGoal?: EnumMainGoalNullableWithAggregatesFilter<"User"> | $Enums.MainGoal | null
    weeklyGoal?: StringNullableWithAggregatesFilter<"User"> | string | null
    personalityVibe?: EnumPersonalityVibeNullableWithAggregatesFilter<"User"> | $Enums.PersonalityVibe | null
    temperament?: EnumTemperamentNullableWithAggregatesFilter<"User"> | $Enums.Temperament | null
    iqScore?: IntNullableWithAggregatesFilter<"User"> | number | null
    eqScore?: IntNullableWithAggregatesFilter<"User"> | number | null
    sqScore?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type OtpCodeWhereInput = {
    AND?: OtpCodeWhereInput | OtpCodeWhereInput[]
    OR?: OtpCodeWhereInput[]
    NOT?: OtpCodeWhereInput | OtpCodeWhereInput[]
    id?: StringFilter<"OtpCode"> | string
    code?: StringFilter<"OtpCode"> | string
    userId?: StringFilter<"OtpCode"> | string
    purpose?: EnumOtpPurposeFilter<"OtpCode"> | $Enums.OtpPurpose
    expiresAt?: DateTimeFilter<"OtpCode"> | Date | string
    usedAt?: DateTimeNullableFilter<"OtpCode"> | Date | string | null
    createdAt?: DateTimeFilter<"OtpCode"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OtpCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OtpCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpCodeWhereInput | OtpCodeWhereInput[]
    OR?: OtpCodeWhereInput[]
    NOT?: OtpCodeWhereInput | OtpCodeWhereInput[]
    code?: StringFilter<"OtpCode"> | string
    userId?: StringFilter<"OtpCode"> | string
    purpose?: EnumOtpPurposeFilter<"OtpCode"> | $Enums.OtpPurpose
    expiresAt?: DateTimeFilter<"OtpCode"> | Date | string
    usedAt?: DateTimeNullableFilter<"OtpCode"> | Date | string | null
    createdAt?: DateTimeFilter<"OtpCode"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type OtpCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OtpCodeCountOrderByAggregateInput
    _max?: OtpCodeMaxOrderByAggregateInput
    _min?: OtpCodeMinOrderByAggregateInput
  }

  export type OtpCodeScalarWhereWithAggregatesInput = {
    AND?: OtpCodeScalarWhereWithAggregatesInput | OtpCodeScalarWhereWithAggregatesInput[]
    OR?: OtpCodeScalarWhereWithAggregatesInput[]
    NOT?: OtpCodeScalarWhereWithAggregatesInput | OtpCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtpCode"> | string
    code?: StringWithAggregatesFilter<"OtpCode"> | string
    userId?: StringWithAggregatesFilter<"OtpCode"> | string
    purpose?: EnumOtpPurposeWithAggregatesFilter<"OtpCode"> | $Enums.OtpPurpose
    expiresAt?: DateTimeWithAggregatesFilter<"OtpCode"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"OtpCode"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OtpCode"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    naturalInput?: StringNullableFilter<"Task"> | string | null
    drive?: EnumDriveFilter<"Task"> | $Enums.Drive
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    aiSuggested?: BoolFilter<"Task"> | boolean
    aiNudge?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    subtasks?: SubtaskListRelationFilter
    focusSessions?: FocusSessionListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    naturalInput?: SortOrderInput | SortOrder
    drive?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    aiSuggested?: SortOrder
    aiNudge?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    subtasks?: SubtaskOrderByRelationAggregateInput
    focusSessions?: FocusSessionOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    userId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    naturalInput?: StringNullableFilter<"Task"> | string | null
    drive?: EnumDriveFilter<"Task"> | $Enums.Drive
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    aiSuggested?: BoolFilter<"Task"> | boolean
    aiNudge?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    subtasks?: SubtaskListRelationFilter
    focusSessions?: FocusSessionListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    naturalInput?: SortOrderInput | SortOrder
    drive?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    aiSuggested?: SortOrder
    aiNudge?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    userId?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    naturalInput?: StringNullableWithAggregatesFilter<"Task"> | string | null
    drive?: EnumDriveWithAggregatesFilter<"Task"> | $Enums.Drive
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    estimatedMinutes?: IntNullableWithAggregatesFilter<"Task"> | number | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    aiSuggested?: BoolWithAggregatesFilter<"Task"> | boolean
    aiNudge?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type SubtaskWhereInput = {
    AND?: SubtaskWhereInput | SubtaskWhereInput[]
    OR?: SubtaskWhereInput[]
    NOT?: SubtaskWhereInput | SubtaskWhereInput[]
    id?: StringFilter<"Subtask"> | string
    taskId?: StringFilter<"Subtask"> | string
    title?: StringFilter<"Subtask"> | string
    estimatedMinutes?: IntNullableFilter<"Subtask"> | number | null
    completed?: BoolFilter<"Subtask"> | boolean
    completedAt?: DateTimeNullableFilter<"Subtask"> | Date | string | null
    order?: IntFilter<"Subtask"> | number
    createdAt?: DateTimeFilter<"Subtask"> | Date | string
    updatedAt?: DateTimeFilter<"Subtask"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }

  export type SubtaskOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type SubtaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubtaskWhereInput | SubtaskWhereInput[]
    OR?: SubtaskWhereInput[]
    NOT?: SubtaskWhereInput | SubtaskWhereInput[]
    taskId?: StringFilter<"Subtask"> | string
    title?: StringFilter<"Subtask"> | string
    estimatedMinutes?: IntNullableFilter<"Subtask"> | number | null
    completed?: BoolFilter<"Subtask"> | boolean
    completedAt?: DateTimeNullableFilter<"Subtask"> | Date | string | null
    order?: IntFilter<"Subtask"> | number
    createdAt?: DateTimeFilter<"Subtask"> | Date | string
    updatedAt?: DateTimeFilter<"Subtask"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }, "id">

  export type SubtaskOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubtaskCountOrderByAggregateInput
    _avg?: SubtaskAvgOrderByAggregateInput
    _max?: SubtaskMaxOrderByAggregateInput
    _min?: SubtaskMinOrderByAggregateInput
    _sum?: SubtaskSumOrderByAggregateInput
  }

  export type SubtaskScalarWhereWithAggregatesInput = {
    AND?: SubtaskScalarWhereWithAggregatesInput | SubtaskScalarWhereWithAggregatesInput[]
    OR?: SubtaskScalarWhereWithAggregatesInput[]
    NOT?: SubtaskScalarWhereWithAggregatesInput | SubtaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subtask"> | string
    taskId?: StringWithAggregatesFilter<"Subtask"> | string
    title?: StringWithAggregatesFilter<"Subtask"> | string
    estimatedMinutes?: IntNullableWithAggregatesFilter<"Subtask"> | number | null
    completed?: BoolWithAggregatesFilter<"Subtask"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"Subtask"> | Date | string | null
    order?: IntWithAggregatesFilter<"Subtask"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subtask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subtask"> | Date | string
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    userId?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    emoji?: StringFilter<"Habit"> | string
    type?: EnumHabitTypeFilter<"Habit"> | $Enums.HabitType
    frequency?: EnumHabitFrequencyFilter<"Habit"> | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFilter<"Habit"> | $Enums.HabitStrength
    streak?: IntFilter<"Habit"> | number
    bestStreak?: IntFilter<"Habit"> | number
    isActive?: BoolFilter<"Habit"> | boolean
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    completions?: HabitCompletionListRelationFilter
    routineItems?: RoutineItemListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    type?: SortOrder
    frequency?: SortOrder
    strength?: SortOrder
    streak?: SortOrder
    bestStreak?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    completions?: HabitCompletionOrderByRelationAggregateInput
    routineItems?: RoutineItemOrderByRelationAggregateInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    userId?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    emoji?: StringFilter<"Habit"> | string
    type?: EnumHabitTypeFilter<"Habit"> | $Enums.HabitType
    frequency?: EnumHabitFrequencyFilter<"Habit"> | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFilter<"Habit"> | $Enums.HabitStrength
    streak?: IntFilter<"Habit"> | number
    bestStreak?: IntFilter<"Habit"> | number
    isActive?: BoolFilter<"Habit"> | boolean
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    completions?: HabitCompletionListRelationFilter
    routineItems?: RoutineItemListRelationFilter
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    type?: SortOrder
    frequency?: SortOrder
    strength?: SortOrder
    streak?: SortOrder
    bestStreak?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    userId?: StringWithAggregatesFilter<"Habit"> | string
    name?: StringWithAggregatesFilter<"Habit"> | string
    emoji?: StringWithAggregatesFilter<"Habit"> | string
    type?: EnumHabitTypeWithAggregatesFilter<"Habit"> | $Enums.HabitType
    frequency?: EnumHabitFrequencyWithAggregatesFilter<"Habit"> | $Enums.HabitFrequency
    strength?: EnumHabitStrengthWithAggregatesFilter<"Habit"> | $Enums.HabitStrength
    streak?: IntWithAggregatesFilter<"Habit"> | number
    bestStreak?: IntWithAggregatesFilter<"Habit"> | number
    isActive?: BoolWithAggregatesFilter<"Habit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
  }

  export type HabitCompletionWhereInput = {
    AND?: HabitCompletionWhereInput | HabitCompletionWhereInput[]
    OR?: HabitCompletionWhereInput[]
    NOT?: HabitCompletionWhereInput | HabitCompletionWhereInput[]
    id?: StringFilter<"HabitCompletion"> | string
    habitId?: StringFilter<"HabitCompletion"> | string
    completedAt?: DateTimeFilter<"HabitCompletion"> | Date | string
    date?: StringFilter<"HabitCompletion"> | string
    habit?: XOR<HabitRelationFilter, HabitWhereInput>
  }

  export type HabitCompletionOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    date?: SortOrder
    habit?: HabitOrderByWithRelationInput
  }

  export type HabitCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    habitId_date?: HabitCompletionHabitIdDateCompoundUniqueInput
    AND?: HabitCompletionWhereInput | HabitCompletionWhereInput[]
    OR?: HabitCompletionWhereInput[]
    NOT?: HabitCompletionWhereInput | HabitCompletionWhereInput[]
    habitId?: StringFilter<"HabitCompletion"> | string
    completedAt?: DateTimeFilter<"HabitCompletion"> | Date | string
    date?: StringFilter<"HabitCompletion"> | string
    habit?: XOR<HabitRelationFilter, HabitWhereInput>
  }, "id" | "habitId_date">

  export type HabitCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    date?: SortOrder
    _count?: HabitCompletionCountOrderByAggregateInput
    _max?: HabitCompletionMaxOrderByAggregateInput
    _min?: HabitCompletionMinOrderByAggregateInput
  }

  export type HabitCompletionScalarWhereWithAggregatesInput = {
    AND?: HabitCompletionScalarWhereWithAggregatesInput | HabitCompletionScalarWhereWithAggregatesInput[]
    OR?: HabitCompletionScalarWhereWithAggregatesInput[]
    NOT?: HabitCompletionScalarWhereWithAggregatesInput | HabitCompletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HabitCompletion"> | string
    habitId?: StringWithAggregatesFilter<"HabitCompletion"> | string
    completedAt?: DateTimeWithAggregatesFilter<"HabitCompletion"> | Date | string
    date?: StringWithAggregatesFilter<"HabitCompletion"> | string
  }

  export type RoutineWhereInput = {
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    id?: StringFilter<"Routine"> | string
    userId?: StringFilter<"Routine"> | string
    name?: StringFilter<"Routine"> | string
    time?: StringNullableFilter<"Routine"> | string | null
    type?: StringFilter<"Routine"> | string
    isActive?: BoolFilter<"Routine"> | boolean
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: RoutineItemListRelationFilter
  }

  export type RoutineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    time?: SortOrderInput | SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: RoutineItemOrderByRelationAggregateInput
  }

  export type RoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    userId?: StringFilter<"Routine"> | string
    name?: StringFilter<"Routine"> | string
    time?: StringNullableFilter<"Routine"> | string | null
    type?: StringFilter<"Routine"> | string
    isActive?: BoolFilter<"Routine"> | boolean
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: RoutineItemListRelationFilter
  }, "id">

  export type RoutineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    time?: SortOrderInput | SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoutineCountOrderByAggregateInput
    _max?: RoutineMaxOrderByAggregateInput
    _min?: RoutineMinOrderByAggregateInput
  }

  export type RoutineScalarWhereWithAggregatesInput = {
    AND?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    OR?: RoutineScalarWhereWithAggregatesInput[]
    NOT?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Routine"> | string
    userId?: StringWithAggregatesFilter<"Routine"> | string
    name?: StringWithAggregatesFilter<"Routine"> | string
    time?: StringNullableWithAggregatesFilter<"Routine"> | string | null
    type?: StringWithAggregatesFilter<"Routine"> | string
    isActive?: BoolWithAggregatesFilter<"Routine"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
  }

  export type RoutineItemWhereInput = {
    AND?: RoutineItemWhereInput | RoutineItemWhereInput[]
    OR?: RoutineItemWhereInput[]
    NOT?: RoutineItemWhereInput | RoutineItemWhereInput[]
    id?: StringFilter<"RoutineItem"> | string
    routineId?: StringFilter<"RoutineItem"> | string
    habitId?: StringNullableFilter<"RoutineItem"> | string | null
    label?: StringFilter<"RoutineItem"> | string
    order?: IntFilter<"RoutineItem"> | number
    routine?: XOR<RoutineRelationFilter, RoutineWhereInput>
    habit?: XOR<HabitNullableRelationFilter, HabitWhereInput> | null
  }

  export type RoutineItemOrderByWithRelationInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrderInput | SortOrder
    label?: SortOrder
    order?: SortOrder
    routine?: RoutineOrderByWithRelationInput
    habit?: HabitOrderByWithRelationInput
  }

  export type RoutineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineItemWhereInput | RoutineItemWhereInput[]
    OR?: RoutineItemWhereInput[]
    NOT?: RoutineItemWhereInput | RoutineItemWhereInput[]
    routineId?: StringFilter<"RoutineItem"> | string
    habitId?: StringNullableFilter<"RoutineItem"> | string | null
    label?: StringFilter<"RoutineItem"> | string
    order?: IntFilter<"RoutineItem"> | number
    routine?: XOR<RoutineRelationFilter, RoutineWhereInput>
    habit?: XOR<HabitNullableRelationFilter, HabitWhereInput> | null
  }, "id">

  export type RoutineItemOrderByWithAggregationInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrderInput | SortOrder
    label?: SortOrder
    order?: SortOrder
    _count?: RoutineItemCountOrderByAggregateInput
    _avg?: RoutineItemAvgOrderByAggregateInput
    _max?: RoutineItemMaxOrderByAggregateInput
    _min?: RoutineItemMinOrderByAggregateInput
    _sum?: RoutineItemSumOrderByAggregateInput
  }

  export type RoutineItemScalarWhereWithAggregatesInput = {
    AND?: RoutineItemScalarWhereWithAggregatesInput | RoutineItemScalarWhereWithAggregatesInput[]
    OR?: RoutineItemScalarWhereWithAggregatesInput[]
    NOT?: RoutineItemScalarWhereWithAggregatesInput | RoutineItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoutineItem"> | string
    routineId?: StringWithAggregatesFilter<"RoutineItem"> | string
    habitId?: StringNullableWithAggregatesFilter<"RoutineItem"> | string | null
    label?: StringWithAggregatesFilter<"RoutineItem"> | string
    order?: IntWithAggregatesFilter<"RoutineItem"> | number
  }

  export type JournalEntryWhereInput = {
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    userId?: StringFilter<"JournalEntry"> | string
    text?: StringNullableFilter<"JournalEntry"> | string | null
    tags?: StringNullableListFilter<"JournalEntry">
    moodScore?: IntFilter<"JournalEntry"> | number
    sleepQuality?: IntNullableFilter<"JournalEntry"> | number | null
    date?: StringFilter<"JournalEntry"> | string
    aiInsight?: StringNullableFilter<"JournalEntry"> | string | null
    aiPromptUsed?: BoolFilter<"JournalEntry"> | boolean
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type JournalEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrderInput | SortOrder
    tags?: SortOrder
    moodScore?: SortOrder
    sleepQuality?: SortOrderInput | SortOrder
    date?: SortOrder
    aiInsight?: SortOrderInput | SortOrder
    aiPromptUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type JournalEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: JournalEntryUserIdDateCompoundUniqueInput
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    userId?: StringFilter<"JournalEntry"> | string
    text?: StringNullableFilter<"JournalEntry"> | string | null
    tags?: StringNullableListFilter<"JournalEntry">
    moodScore?: IntFilter<"JournalEntry"> | number
    sleepQuality?: IntNullableFilter<"JournalEntry"> | number | null
    date?: StringFilter<"JournalEntry"> | string
    aiInsight?: StringNullableFilter<"JournalEntry"> | string | null
    aiPromptUsed?: BoolFilter<"JournalEntry"> | boolean
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type JournalEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrderInput | SortOrder
    tags?: SortOrder
    moodScore?: SortOrder
    sleepQuality?: SortOrderInput | SortOrder
    date?: SortOrder
    aiInsight?: SortOrderInput | SortOrder
    aiPromptUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JournalEntryCountOrderByAggregateInput
    _avg?: JournalEntryAvgOrderByAggregateInput
    _max?: JournalEntryMaxOrderByAggregateInput
    _min?: JournalEntryMinOrderByAggregateInput
    _sum?: JournalEntrySumOrderByAggregateInput
  }

  export type JournalEntryScalarWhereWithAggregatesInput = {
    AND?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    OR?: JournalEntryScalarWhereWithAggregatesInput[]
    NOT?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JournalEntry"> | string
    userId?: StringWithAggregatesFilter<"JournalEntry"> | string
    text?: StringNullableWithAggregatesFilter<"JournalEntry"> | string | null
    tags?: StringNullableListFilter<"JournalEntry">
    moodScore?: IntWithAggregatesFilter<"JournalEntry"> | number
    sleepQuality?: IntNullableWithAggregatesFilter<"JournalEntry"> | number | null
    date?: StringWithAggregatesFilter<"JournalEntry"> | string
    aiInsight?: StringNullableWithAggregatesFilter<"JournalEntry"> | string | null
    aiPromptUsed?: BoolWithAggregatesFilter<"JournalEntry"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
  }

  export type FocusSessionWhereInput = {
    AND?: FocusSessionWhereInput | FocusSessionWhereInput[]
    OR?: FocusSessionWhereInput[]
    NOT?: FocusSessionWhereInput | FocusSessionWhereInput[]
    id?: StringFilter<"FocusSession"> | string
    userId?: StringFilter<"FocusSession"> | string
    taskId?: StringNullableFilter<"FocusSession"> | string | null
    durationMinutes?: IntFilter<"FocusSession"> | number
    completed?: BoolFilter<"FocusSession"> | boolean
    interrupted?: BoolFilter<"FocusSession"> | boolean
    startedAt?: DateTimeFilter<"FocusSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    task?: XOR<TaskNullableRelationFilter, TaskWhereInput> | null
  }

  export type FocusSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    interrupted?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type FocusSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FocusSessionWhereInput | FocusSessionWhereInput[]
    OR?: FocusSessionWhereInput[]
    NOT?: FocusSessionWhereInput | FocusSessionWhereInput[]
    userId?: StringFilter<"FocusSession"> | string
    taskId?: StringNullableFilter<"FocusSession"> | string | null
    durationMinutes?: IntFilter<"FocusSession"> | number
    completed?: BoolFilter<"FocusSession"> | boolean
    interrupted?: BoolFilter<"FocusSession"> | boolean
    startedAt?: DateTimeFilter<"FocusSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    task?: XOR<TaskNullableRelationFilter, TaskWhereInput> | null
  }, "id">

  export type FocusSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    interrupted?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FocusSessionCountOrderByAggregateInput
    _avg?: FocusSessionAvgOrderByAggregateInput
    _max?: FocusSessionMaxOrderByAggregateInput
    _min?: FocusSessionMinOrderByAggregateInput
    _sum?: FocusSessionSumOrderByAggregateInput
  }

  export type FocusSessionScalarWhereWithAggregatesInput = {
    AND?: FocusSessionScalarWhereWithAggregatesInput | FocusSessionScalarWhereWithAggregatesInput[]
    OR?: FocusSessionScalarWhereWithAggregatesInput[]
    NOT?: FocusSessionScalarWhereWithAggregatesInput | FocusSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FocusSession"> | string
    userId?: StringWithAggregatesFilter<"FocusSession"> | string
    taskId?: StringNullableWithAggregatesFilter<"FocusSession"> | string | null
    durationMinutes?: IntWithAggregatesFilter<"FocusSession"> | number
    completed?: BoolWithAggregatesFilter<"FocusSession"> | boolean
    interrupted?: BoolWithAggregatesFilter<"FocusSession"> | boolean
    startedAt?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"FocusSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
  }

  export type MeditationSessionWhereInput = {
    AND?: MeditationSessionWhereInput | MeditationSessionWhereInput[]
    OR?: MeditationSessionWhereInput[]
    NOT?: MeditationSessionWhereInput | MeditationSessionWhereInput[]
    id?: StringFilter<"MeditationSession"> | string
    userId?: StringFilter<"MeditationSession"> | string
    mode?: EnumMeditationModeFilter<"MeditationSession"> | $Enums.MeditationMode
    durationMinutes?: IntFilter<"MeditationSession"> | number
    completed?: BoolFilter<"MeditationSession"> | boolean
    startedAt?: DateTimeFilter<"MeditationSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"MeditationSession"> | Date | string | null
    createdAt?: DateTimeFilter<"MeditationSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MeditationSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MeditationSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeditationSessionWhereInput | MeditationSessionWhereInput[]
    OR?: MeditationSessionWhereInput[]
    NOT?: MeditationSessionWhereInput | MeditationSessionWhereInput[]
    userId?: StringFilter<"MeditationSession"> | string
    mode?: EnumMeditationModeFilter<"MeditationSession"> | $Enums.MeditationMode
    durationMinutes?: IntFilter<"MeditationSession"> | number
    completed?: BoolFilter<"MeditationSession"> | boolean
    startedAt?: DateTimeFilter<"MeditationSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"MeditationSession"> | Date | string | null
    createdAt?: DateTimeFilter<"MeditationSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MeditationSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MeditationSessionCountOrderByAggregateInput
    _avg?: MeditationSessionAvgOrderByAggregateInput
    _max?: MeditationSessionMaxOrderByAggregateInput
    _min?: MeditationSessionMinOrderByAggregateInput
    _sum?: MeditationSessionSumOrderByAggregateInput
  }

  export type MeditationSessionScalarWhereWithAggregatesInput = {
    AND?: MeditationSessionScalarWhereWithAggregatesInput | MeditationSessionScalarWhereWithAggregatesInput[]
    OR?: MeditationSessionScalarWhereWithAggregatesInput[]
    NOT?: MeditationSessionScalarWhereWithAggregatesInput | MeditationSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeditationSession"> | string
    userId?: StringWithAggregatesFilter<"MeditationSession"> | string
    mode?: EnumMeditationModeWithAggregatesFilter<"MeditationSession"> | $Enums.MeditationMode
    durationMinutes?: IntWithAggregatesFilter<"MeditationSession"> | number
    completed?: BoolWithAggregatesFilter<"MeditationSession"> | boolean
    startedAt?: DateTimeWithAggregatesFilter<"MeditationSession"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"MeditationSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MeditationSession"> | Date | string
  }

  export type WeeklyReportWhereInput = {
    AND?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    OR?: WeeklyReportWhereInput[]
    NOT?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    id?: StringFilter<"WeeklyReport"> | string
    userId?: StringFilter<"WeeklyReport"> | string
    weekStart?: DateTimeFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyReport"> | Date | string
    totalFocusMin?: IntFilter<"WeeklyReport"> | number
    tasksDone?: IntFilter<"WeeklyReport"> | number
    avgMood?: FloatFilter<"WeeklyReport"> | number
    dailyFocusData?: JsonFilter<"WeeklyReport">
    moodTrendData?: JsonFilter<"WeeklyReport">
    wins?: StringNullableListFilter<"WeeklyReport">
    tips?: StringNullableListFilter<"WeeklyReport">
    aiSummary?: StringNullableFilter<"WeeklyReport"> | string | null
    suggestions?: StringNullableFilter<"WeeklyReport"> | string | null
    generatedAt?: DateTimeFilter<"WeeklyReport"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WeeklyReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalFocusMin?: SortOrder
    tasksDone?: SortOrder
    avgMood?: SortOrder
    dailyFocusData?: SortOrder
    moodTrendData?: SortOrder
    wins?: SortOrder
    tips?: SortOrder
    aiSummary?: SortOrderInput | SortOrder
    suggestions?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeeklyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_weekStart?: WeeklyReportUserIdWeekStartCompoundUniqueInput
    AND?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    OR?: WeeklyReportWhereInput[]
    NOT?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    userId?: StringFilter<"WeeklyReport"> | string
    weekStart?: DateTimeFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyReport"> | Date | string
    totalFocusMin?: IntFilter<"WeeklyReport"> | number
    tasksDone?: IntFilter<"WeeklyReport"> | number
    avgMood?: FloatFilter<"WeeklyReport"> | number
    dailyFocusData?: JsonFilter<"WeeklyReport">
    moodTrendData?: JsonFilter<"WeeklyReport">
    wins?: StringNullableListFilter<"WeeklyReport">
    tips?: StringNullableListFilter<"WeeklyReport">
    aiSummary?: StringNullableFilter<"WeeklyReport"> | string | null
    suggestions?: StringNullableFilter<"WeeklyReport"> | string | null
    generatedAt?: DateTimeFilter<"WeeklyReport"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_weekStart">

  export type WeeklyReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalFocusMin?: SortOrder
    tasksDone?: SortOrder
    avgMood?: SortOrder
    dailyFocusData?: SortOrder
    moodTrendData?: SortOrder
    wins?: SortOrder
    tips?: SortOrder
    aiSummary?: SortOrderInput | SortOrder
    suggestions?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    _count?: WeeklyReportCountOrderByAggregateInput
    _avg?: WeeklyReportAvgOrderByAggregateInput
    _max?: WeeklyReportMaxOrderByAggregateInput
    _min?: WeeklyReportMinOrderByAggregateInput
    _sum?: WeeklyReportSumOrderByAggregateInput
  }

  export type WeeklyReportScalarWhereWithAggregatesInput = {
    AND?: WeeklyReportScalarWhereWithAggregatesInput | WeeklyReportScalarWhereWithAggregatesInput[]
    OR?: WeeklyReportScalarWhereWithAggregatesInput[]
    NOT?: WeeklyReportScalarWhereWithAggregatesInput | WeeklyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeeklyReport"> | string
    userId?: StringWithAggregatesFilter<"WeeklyReport"> | string
    weekStart?: DateTimeWithAggregatesFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeWithAggregatesFilter<"WeeklyReport"> | Date | string
    totalFocusMin?: IntWithAggregatesFilter<"WeeklyReport"> | number
    tasksDone?: IntWithAggregatesFilter<"WeeklyReport"> | number
    avgMood?: FloatWithAggregatesFilter<"WeeklyReport"> | number
    dailyFocusData?: JsonWithAggregatesFilter<"WeeklyReport">
    moodTrendData?: JsonWithAggregatesFilter<"WeeklyReport">
    wins?: StringNullableListFilter<"WeeklyReport">
    tips?: StringNullableListFilter<"WeeklyReport">
    aiSummary?: StringNullableWithAggregatesFilter<"WeeklyReport"> | string | null
    suggestions?: StringNullableWithAggregatesFilter<"WeeklyReport"> | string | null
    generatedAt?: DateTimeWithAggregatesFilter<"WeeklyReport"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeCreateInput = {
    id?: string
    code: string
    purpose?: $Enums.OtpPurpose
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOtpCodesInput
  }

  export type OtpCodeUncheckedCreateInput = {
    id?: string
    code: string
    userId: string
    purpose?: $Enums.OtpPurpose
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OtpCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpCodesNestedInput
  }

  export type OtpCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeCreateManyInput = {
    id?: string
    code: string
    userId: string
    purpose?: $Enums.OtpPurpose
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OtpCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput
    focusSessions?: FocusSessionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    userId: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtaskCreateInput = {
    id?: string
    title: string
    estimatedMinutes?: number | null
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutSubtasksInput
  }

  export type SubtaskUncheckedCreateInput = {
    id?: string
    taskId: string
    title: string
    estimatedMinutes?: number | null
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutSubtasksNestedInput
  }

  export type SubtaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtaskCreateManyInput = {
    id?: string
    taskId: string
    title: string
    estimatedMinutes?: number | null
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateInput = {
    id?: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    completions?: HabitCompletionCreateNestedManyWithoutHabitInput
    routineItems?: RoutineItemCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: HabitCompletionUncheckedCreateNestedManyWithoutHabitInput
    routineItems?: RoutineItemUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    completions?: HabitCompletionUpdateManyWithoutHabitNestedInput
    routineItems?: RoutineItemUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput
    routineItems?: RoutineItemUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: string
    userId: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCompletionCreateInput = {
    id?: string
    completedAt?: Date | string
    date: string
    habit: HabitCreateNestedOneWithoutCompletionsInput
  }

  export type HabitCompletionUncheckedCreateInput = {
    id?: string
    habitId: string
    completedAt?: Date | string
    date: string
  }

  export type HabitCompletionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    habit?: HabitUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type HabitCompletionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type HabitCompletionCreateManyInput = {
    id?: string
    habitId: string
    completedAt?: Date | string
    date: string
  }

  export type HabitCompletionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type HabitCompletionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineCreateInput = {
    id?: string
    name: string
    time?: string | null
    type?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
    items?: RoutineItemCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    time?: string | null
    type?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RoutineItemUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
    items?: RoutineItemUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RoutineItemUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineCreateManyInput = {
    id?: string
    userId: string
    name: string
    time?: string | null
    type?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineItemCreateInput = {
    id?: string
    label: string
    order?: number
    routine: RoutineCreateNestedOneWithoutItemsInput
    habit?: HabitCreateNestedOneWithoutRoutineItemsInput
  }

  export type RoutineItemUncheckedCreateInput = {
    id?: string
    routineId: string
    habitId?: string | null
    label: string
    order?: number
  }

  export type RoutineItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    routine?: RoutineUpdateOneRequiredWithoutItemsNestedInput
    habit?: HabitUpdateOneWithoutRoutineItemsNestedInput
  }

  export type RoutineItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    habitId?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineItemCreateManyInput = {
    id?: string
    routineId: string
    habitId?: string | null
    label: string
    order?: number
  }

  export type RoutineItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    habitId?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type JournalEntryCreateInput = {
    id?: string
    text?: string | null
    tags?: JournalEntryCreatetagsInput | string[]
    moodScore: number
    sleepQuality?: number | null
    date: string
    aiInsight?: string | null
    aiPromptUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJournalEntriesInput
  }

  export type JournalEntryUncheckedCreateInput = {
    id?: string
    userId: string
    text?: string | null
    tags?: JournalEntryCreatetagsInput | string[]
    moodScore: number
    sleepQuality?: number | null
    date: string
    aiInsight?: string | null
    aiPromptUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JournalEntryUpdatetagsInput | string[]
    moodScore?: IntFieldUpdateOperationsInput | number
    sleepQuality?: NullableIntFieldUpdateOperationsInput | number | null
    date?: StringFieldUpdateOperationsInput | string
    aiInsight?: NullableStringFieldUpdateOperationsInput | string | null
    aiPromptUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJournalEntriesNestedInput
  }

  export type JournalEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JournalEntryUpdatetagsInput | string[]
    moodScore?: IntFieldUpdateOperationsInput | number
    sleepQuality?: NullableIntFieldUpdateOperationsInput | number | null
    date?: StringFieldUpdateOperationsInput | string
    aiInsight?: NullableStringFieldUpdateOperationsInput | string | null
    aiPromptUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryCreateManyInput = {
    id?: string
    userId: string
    text?: string | null
    tags?: JournalEntryCreatetagsInput | string[]
    moodScore: number
    sleepQuality?: number | null
    date: string
    aiInsight?: string | null
    aiPromptUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JournalEntryUpdatetagsInput | string[]
    moodScore?: IntFieldUpdateOperationsInput | number
    sleepQuality?: NullableIntFieldUpdateOperationsInput | number | null
    date?: StringFieldUpdateOperationsInput | string
    aiInsight?: NullableStringFieldUpdateOperationsInput | string | null
    aiPromptUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JournalEntryUpdatetagsInput | string[]
    moodScore?: IntFieldUpdateOperationsInput | number
    sleepQuality?: NullableIntFieldUpdateOperationsInput | number | null
    date?: StringFieldUpdateOperationsInput | string
    aiInsight?: NullableStringFieldUpdateOperationsInput | string | null
    aiPromptUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionCreateInput = {
    id?: string
    durationMinutes: number
    completed?: boolean
    interrupted?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFocusSessionsInput
    task?: TaskCreateNestedOneWithoutFocusSessionsInput
  }

  export type FocusSessionUncheckedCreateInput = {
    id?: string
    userId: string
    taskId?: string | null
    durationMinutes: number
    completed?: boolean
    interrupted?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FocusSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFocusSessionsNestedInput
    task?: TaskUpdateOneWithoutFocusSessionsNestedInput
  }

  export type FocusSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionCreateManyInput = {
    id?: string
    userId: string
    taskId?: string | null
    durationMinutes: number
    completed?: boolean
    interrupted?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FocusSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeditationSessionCreateInput = {
    id?: string
    mode: $Enums.MeditationMode
    durationMinutes: number
    completed?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMeditationSessionsInput
  }

  export type MeditationSessionUncheckedCreateInput = {
    id?: string
    userId: string
    mode: $Enums.MeditationMode
    durationMinutes: number
    completed?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MeditationSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumMeditationModeFieldUpdateOperationsInput | $Enums.MeditationMode
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMeditationSessionsNestedInput
  }

  export type MeditationSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mode?: EnumMeditationModeFieldUpdateOperationsInput | $Enums.MeditationMode
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeditationSessionCreateManyInput = {
    id?: string
    userId: string
    mode: $Enums.MeditationMode
    durationMinutes: number
    completed?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MeditationSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumMeditationModeFieldUpdateOperationsInput | $Enums.MeditationMode
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeditationSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mode?: EnumMeditationModeFieldUpdateOperationsInput | $Enums.MeditationMode
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportCreateInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    totalFocusMin?: number
    tasksDone?: number
    avgMood?: number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportCreatewinsInput | string[]
    tips?: WeeklyReportCreatetipsInput | string[]
    aiSummary?: string | null
    suggestions?: string | null
    generatedAt?: Date | string
    user: UserCreateNestedOneWithoutWeeklyReportsInput
  }

  export type WeeklyReportUncheckedCreateInput = {
    id?: string
    userId: string
    weekStart: Date | string
    weekEnd: Date | string
    totalFocusMin?: number
    tasksDone?: number
    avgMood?: number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportCreatewinsInput | string[]
    tips?: WeeklyReportCreatetipsInput | string[]
    aiSummary?: string | null
    suggestions?: string | null
    generatedAt?: Date | string
  }

  export type WeeklyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMin?: IntFieldUpdateOperationsInput | number
    tasksDone?: IntFieldUpdateOperationsInput | number
    avgMood?: FloatFieldUpdateOperationsInput | number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportUpdatewinsInput | string[]
    tips?: WeeklyReportUpdatetipsInput | string[]
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWeeklyReportsNestedInput
  }

  export type WeeklyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMin?: IntFieldUpdateOperationsInput | number
    tasksDone?: IntFieldUpdateOperationsInput | number
    avgMood?: FloatFieldUpdateOperationsInput | number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportUpdatewinsInput | string[]
    tips?: WeeklyReportUpdatetipsInput | string[]
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportCreateManyInput = {
    id?: string
    userId: string
    weekStart: Date | string
    weekEnd: Date | string
    totalFocusMin?: number
    tasksDone?: number
    avgMood?: number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportCreatewinsInput | string[]
    tips?: WeeklyReportCreatetipsInput | string[]
    aiSummary?: string | null
    suggestions?: string | null
    generatedAt?: Date | string
  }

  export type WeeklyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMin?: IntFieldUpdateOperationsInput | number
    tasksDone?: IntFieldUpdateOperationsInput | number
    avgMood?: FloatFieldUpdateOperationsInput | number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportUpdatewinsInput | string[]
    tips?: WeeklyReportUpdatetipsInput | string[]
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMin?: IntFieldUpdateOperationsInput | number
    tasksDone?: IntFieldUpdateOperationsInput | number
    avgMood?: FloatFieldUpdateOperationsInput | number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportUpdatewinsInput | string[]
    tips?: WeeklyReportUpdatetipsInput | string[]
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableFilter<$PrismaModel> | $Enums.UserRole | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumFocusTimeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FocusTime | EnumFocusTimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FocusTime[] | ListEnumFocusTimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FocusTime[] | ListEnumFocusTimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFocusTimeNullableFilter<$PrismaModel> | $Enums.FocusTime | null
  }

  export type EnumEmotionalStateNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmotionalState | EnumEmotionalStateFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmotionalState[] | ListEnumEmotionalStateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmotionalState[] | ListEnumEmotionalStateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmotionalStateNullableFilter<$PrismaModel> | $Enums.EmotionalState | null
  }

  export type EnumDistractionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Distraction[] | ListEnumDistractionFieldRefInput<$PrismaModel> | null
    has?: $Enums.Distraction | EnumDistractionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Distraction[] | ListEnumDistractionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Distraction[] | ListEnumDistractionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumMainGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MainGoal | EnumMainGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMainGoalNullableFilter<$PrismaModel> | $Enums.MainGoal | null
  }

  export type EnumPersonalityVibeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonalityVibe | EnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PersonalityVibe[] | ListEnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PersonalityVibe[] | ListEnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPersonalityVibeNullableFilter<$PrismaModel> | $Enums.PersonalityVibe | null
  }

  export type EnumTemperamentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Temperament | EnumTemperamentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTemperamentNullableFilter<$PrismaModel> | $Enums.Temperament | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type OtpCodeListRelationFilter = {
    every?: OtpCodeWhereInput
    some?: OtpCodeWhereInput
    none?: OtpCodeWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type RoutineListRelationFilter = {
    every?: RoutineWhereInput
    some?: RoutineWhereInput
    none?: RoutineWhereInput
  }

  export type JournalEntryListRelationFilter = {
    every?: JournalEntryWhereInput
    some?: JournalEntryWhereInput
    none?: JournalEntryWhereInput
  }

  export type FocusSessionListRelationFilter = {
    every?: FocusSessionWhereInput
    some?: FocusSessionWhereInput
    none?: FocusSessionWhereInput
  }

  export type MeditationSessionListRelationFilter = {
    every?: MeditationSessionWhereInput
    some?: MeditationSessionWhereInput
    none?: MeditationSessionWhereInput
  }

  export type WeeklyReportListRelationFilter = {
    every?: WeeklyReportWhereInput
    some?: WeeklyReportWhereInput
    none?: WeeklyReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtpCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JournalEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FocusSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeditationSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    timezone?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    isOnboarded?: SortOrder
    focusTime?: SortOrder
    emotionalState?: SortOrder
    distractions?: SortOrder
    mainGoal?: SortOrder
    weeklyGoal?: SortOrder
    personalityVibe?: SortOrder
    temperament?: SortOrder
    iqScore?: SortOrder
    eqScore?: SortOrder
    sqScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    iqScore?: SortOrder
    eqScore?: SortOrder
    sqScore?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    timezone?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    isOnboarded?: SortOrder
    focusTime?: SortOrder
    emotionalState?: SortOrder
    mainGoal?: SortOrder
    weeklyGoal?: SortOrder
    personalityVibe?: SortOrder
    temperament?: SortOrder
    iqScore?: SortOrder
    eqScore?: SortOrder
    sqScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    timezone?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    isOnboarded?: SortOrder
    focusTime?: SortOrder
    emotionalState?: SortOrder
    mainGoal?: SortOrder
    weeklyGoal?: SortOrder
    personalityVibe?: SortOrder
    temperament?: SortOrder
    iqScore?: SortOrder
    eqScore?: SortOrder
    sqScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    iqScore?: SortOrder
    eqScore?: SortOrder
    sqScore?: SortOrder
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

  export type EnumUserRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUserRoleNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumFocusTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FocusTime | EnumFocusTimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FocusTime[] | ListEnumFocusTimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FocusTime[] | ListEnumFocusTimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFocusTimeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FocusTime | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFocusTimeNullableFilter<$PrismaModel>
    _max?: NestedEnumFocusTimeNullableFilter<$PrismaModel>
  }

  export type EnumEmotionalStateNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmotionalState | EnumEmotionalStateFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmotionalState[] | ListEnumEmotionalStateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmotionalState[] | ListEnumEmotionalStateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmotionalStateNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmotionalState | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmotionalStateNullableFilter<$PrismaModel>
    _max?: NestedEnumEmotionalStateNullableFilter<$PrismaModel>
  }

  export type EnumMainGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MainGoal | EnumMainGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMainGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.MainGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMainGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumMainGoalNullableFilter<$PrismaModel>
  }

  export type EnumPersonalityVibeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonalityVibe | EnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PersonalityVibe[] | ListEnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PersonalityVibe[] | ListEnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPersonalityVibeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PersonalityVibe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPersonalityVibeNullableFilter<$PrismaModel>
    _max?: NestedEnumPersonalityVibeNullableFilter<$PrismaModel>
  }

  export type EnumTemperamentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Temperament | EnumTemperamentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTemperamentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Temperament | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTemperamentNullableFilter<$PrismaModel>
    _max?: NestedEnumTemperamentNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOtpPurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | EnumOtpPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpPurposeFilter<$PrismaModel> | $Enums.OtpPurpose
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

  export type OtpCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOtpPurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | EnumOtpPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpPurposeWithAggregatesFilter<$PrismaModel> | $Enums.OtpPurpose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtpPurposeFilter<$PrismaModel>
    _max?: NestedEnumOtpPurposeFilter<$PrismaModel>
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

  export type EnumDriveFilter<$PrismaModel = never> = {
    equals?: $Enums.Drive | EnumDriveFieldRefInput<$PrismaModel>
    in?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    notIn?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    not?: NestedEnumDriveFilter<$PrismaModel> | $Enums.Drive
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type SubtaskListRelationFilter = {
    every?: SubtaskWhereInput
    some?: SubtaskWhereInput
    none?: SubtaskWhereInput
  }

  export type SubtaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    naturalInput?: SortOrder
    drive?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    estimatedMinutes?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    aiSuggested?: SortOrder
    aiNudge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    naturalInput?: SortOrder
    drive?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    estimatedMinutes?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    aiSuggested?: SortOrder
    aiNudge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    naturalInput?: SortOrder
    drive?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    estimatedMinutes?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    aiSuggested?: SortOrder
    aiNudge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
  }

  export type EnumDriveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Drive | EnumDriveFieldRefInput<$PrismaModel>
    in?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    notIn?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    not?: NestedEnumDriveWithAggregatesFilter<$PrismaModel> | $Enums.Drive
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriveFilter<$PrismaModel>
    _max?: NestedEnumDriveFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
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

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type SubtaskCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    estimatedMinutes?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtaskAvgOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    order?: SortOrder
  }

  export type SubtaskMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    estimatedMinutes?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtaskMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    estimatedMinutes?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtaskSumOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    order?: SortOrder
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

  export type EnumHabitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitType | EnumHabitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HabitType[] | ListEnumHabitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitType[] | ListEnumHabitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitTypeFilter<$PrismaModel> | $Enums.HabitType
  }

  export type EnumHabitFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitFrequency | EnumHabitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitFrequencyFilter<$PrismaModel> | $Enums.HabitFrequency
  }

  export type EnumHabitStrengthFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitStrength | EnumHabitStrengthFieldRefInput<$PrismaModel>
    in?: $Enums.HabitStrength[] | ListEnumHabitStrengthFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitStrength[] | ListEnumHabitStrengthFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitStrengthFilter<$PrismaModel> | $Enums.HabitStrength
  }

  export type HabitCompletionListRelationFilter = {
    every?: HabitCompletionWhereInput
    some?: HabitCompletionWhereInput
    none?: HabitCompletionWhereInput
  }

  export type RoutineItemListRelationFilter = {
    every?: RoutineItemWhereInput
    some?: RoutineItemWhereInput
    none?: RoutineItemWhereInput
  }

  export type HabitCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    type?: SortOrder
    frequency?: SortOrder
    strength?: SortOrder
    streak?: SortOrder
    bestStreak?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    streak?: SortOrder
    bestStreak?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    type?: SortOrder
    frequency?: SortOrder
    strength?: SortOrder
    streak?: SortOrder
    bestStreak?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    type?: SortOrder
    frequency?: SortOrder
    strength?: SortOrder
    streak?: SortOrder
    bestStreak?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    streak?: SortOrder
    bestStreak?: SortOrder
  }

  export type EnumHabitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitType | EnumHabitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HabitType[] | ListEnumHabitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitType[] | ListEnumHabitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitTypeWithAggregatesFilter<$PrismaModel> | $Enums.HabitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitTypeFilter<$PrismaModel>
    _max?: NestedEnumHabitTypeFilter<$PrismaModel>
  }

  export type EnumHabitFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitFrequency | EnumHabitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.HabitFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitFrequencyFilter<$PrismaModel>
    _max?: NestedEnumHabitFrequencyFilter<$PrismaModel>
  }

  export type EnumHabitStrengthWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitStrength | EnumHabitStrengthFieldRefInput<$PrismaModel>
    in?: $Enums.HabitStrength[] | ListEnumHabitStrengthFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitStrength[] | ListEnumHabitStrengthFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitStrengthWithAggregatesFilter<$PrismaModel> | $Enums.HabitStrength
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitStrengthFilter<$PrismaModel>
    _max?: NestedEnumHabitStrengthFilter<$PrismaModel>
  }

  export type HabitRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type HabitCompletionHabitIdDateCompoundUniqueInput = {
    habitId: string
    date: string
  }

  export type HabitCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    date?: SortOrder
  }

  export type HabitCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    date?: SortOrder
  }

  export type HabitCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    date?: SortOrder
  }

  export type RoutineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    time?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    time?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    time?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineRelationFilter = {
    is?: RoutineWhereInput
    isNot?: RoutineWhereInput
  }

  export type HabitNullableRelationFilter = {
    is?: HabitWhereInput | null
    isNot?: HabitWhereInput | null
  }

  export type RoutineItemCountOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrder
    label?: SortOrder
    order?: SortOrder
  }

  export type RoutineItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type RoutineItemMaxOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrder
    label?: SortOrder
    order?: SortOrder
  }

  export type RoutineItemMinOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrder
    label?: SortOrder
    order?: SortOrder
  }

  export type RoutineItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type JournalEntryUserIdDateCompoundUniqueInput = {
    userId: string
    date: string
  }

  export type JournalEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    tags?: SortOrder
    moodScore?: SortOrder
    sleepQuality?: SortOrder
    date?: SortOrder
    aiInsight?: SortOrder
    aiPromptUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryAvgOrderByAggregateInput = {
    moodScore?: SortOrder
    sleepQuality?: SortOrder
  }

  export type JournalEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    moodScore?: SortOrder
    sleepQuality?: SortOrder
    date?: SortOrder
    aiInsight?: SortOrder
    aiPromptUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    moodScore?: SortOrder
    sleepQuality?: SortOrder
    date?: SortOrder
    aiInsight?: SortOrder
    aiPromptUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntrySumOrderByAggregateInput = {
    moodScore?: SortOrder
    sleepQuality?: SortOrder
  }

  export type TaskNullableRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type FocusSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    interrupted?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FocusSessionAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type FocusSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    interrupted?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FocusSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    interrupted?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FocusSessionSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type EnumMeditationModeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeditationMode | EnumMeditationModeFieldRefInput<$PrismaModel>
    in?: $Enums.MeditationMode[] | ListEnumMeditationModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeditationMode[] | ListEnumMeditationModeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeditationModeFilter<$PrismaModel> | $Enums.MeditationMode
  }

  export type MeditationSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MeditationSessionAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type MeditationSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MeditationSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    durationMinutes?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MeditationSessionSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type EnumMeditationModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeditationMode | EnumMeditationModeFieldRefInput<$PrismaModel>
    in?: $Enums.MeditationMode[] | ListEnumMeditationModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeditationMode[] | ListEnumMeditationModeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeditationModeWithAggregatesFilter<$PrismaModel> | $Enums.MeditationMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeditationModeFilter<$PrismaModel>
    _max?: NestedEnumMeditationModeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WeeklyReportUserIdWeekStartCompoundUniqueInput = {
    userId: string
    weekStart: Date | string
  }

  export type WeeklyReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalFocusMin?: SortOrder
    tasksDone?: SortOrder
    avgMood?: SortOrder
    dailyFocusData?: SortOrder
    moodTrendData?: SortOrder
    wins?: SortOrder
    tips?: SortOrder
    aiSummary?: SortOrder
    suggestions?: SortOrder
    generatedAt?: SortOrder
  }

  export type WeeklyReportAvgOrderByAggregateInput = {
    totalFocusMin?: SortOrder
    tasksDone?: SortOrder
    avgMood?: SortOrder
  }

  export type WeeklyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalFocusMin?: SortOrder
    tasksDone?: SortOrder
    avgMood?: SortOrder
    aiSummary?: SortOrder
    suggestions?: SortOrder
    generatedAt?: SortOrder
  }

  export type WeeklyReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    totalFocusMin?: SortOrder
    tasksDone?: SortOrder
    avgMood?: SortOrder
    aiSummary?: SortOrder
    suggestions?: SortOrder
    generatedAt?: SortOrder
  }

  export type WeeklyReportSumOrderByAggregateInput = {
    totalFocusMin?: SortOrder
    tasksDone?: SortOrder
    avgMood?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserCreatedistractionsInput = {
    set: $Enums.Distraction[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type OtpCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput> | OtpCodeCreateWithoutUserInput[] | OtpCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCodeCreateOrConnectWithoutUserInput | OtpCodeCreateOrConnectWithoutUserInput[]
    createMany?: OtpCodeCreateManyUserInputEnvelope
    connect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type HabitCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type RoutineCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type JournalEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type FocusSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type MeditationSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<MeditationSessionCreateWithoutUserInput, MeditationSessionUncheckedCreateWithoutUserInput> | MeditationSessionCreateWithoutUserInput[] | MeditationSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeditationSessionCreateOrConnectWithoutUserInput | MeditationSessionCreateOrConnectWithoutUserInput[]
    createMany?: MeditationSessionCreateManyUserInputEnvelope
    connect?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
  }

  export type WeeklyReportCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput> | WeeklyReportCreateWithoutUserInput[] | WeeklyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutUserInput | WeeklyReportCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyReportCreateManyUserInputEnvelope
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type OtpCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput> | OtpCodeCreateWithoutUserInput[] | OtpCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCodeCreateOrConnectWithoutUserInput | OtpCodeCreateOrConnectWithoutUserInput[]
    createMany?: OtpCodeCreateManyUserInputEnvelope
    connect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type RoutineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type JournalEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type FocusSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type MeditationSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MeditationSessionCreateWithoutUserInput, MeditationSessionUncheckedCreateWithoutUserInput> | MeditationSessionCreateWithoutUserInput[] | MeditationSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeditationSessionCreateOrConnectWithoutUserInput | MeditationSessionCreateOrConnectWithoutUserInput[]
    createMany?: MeditationSessionCreateManyUserInputEnvelope
    connect?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
  }

  export type WeeklyReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput> | WeeklyReportCreateWithoutUserInput[] | WeeklyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutUserInput | WeeklyReportCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyReportCreateManyUserInputEnvelope
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumFocusTimeFieldUpdateOperationsInput = {
    set?: $Enums.FocusTime | null
  }

  export type NullableEnumEmotionalStateFieldUpdateOperationsInput = {
    set?: $Enums.EmotionalState | null
  }

  export type UserUpdatedistractionsInput = {
    set?: $Enums.Distraction[]
    push?: $Enums.Distraction | $Enums.Distraction[]
  }

  export type NullableEnumMainGoalFieldUpdateOperationsInput = {
    set?: $Enums.MainGoal | null
  }

  export type NullableEnumPersonalityVibeFieldUpdateOperationsInput = {
    set?: $Enums.PersonalityVibe | null
  }

  export type NullableEnumTemperamentFieldUpdateOperationsInput = {
    set?: $Enums.Temperament | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type OtpCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput> | OtpCodeCreateWithoutUserInput[] | OtpCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCodeCreateOrConnectWithoutUserInput | OtpCodeCreateOrConnectWithoutUserInput[]
    upsert?: OtpCodeUpsertWithWhereUniqueWithoutUserInput | OtpCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpCodeCreateManyUserInputEnvelope
    set?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    disconnect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    delete?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    connect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    update?: OtpCodeUpdateWithWhereUniqueWithoutUserInput | OtpCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpCodeUpdateManyWithWhereWithoutUserInput | OtpCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpCodeScalarWhereInput | OtpCodeScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type HabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type RoutineUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type JournalEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutUserInput | JournalEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutUserInput | JournalEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutUserInput | JournalEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type FocusSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutUserInput | FocusSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutUserInput | FocusSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutUserInput | FocusSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type MeditationSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeditationSessionCreateWithoutUserInput, MeditationSessionUncheckedCreateWithoutUserInput> | MeditationSessionCreateWithoutUserInput[] | MeditationSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeditationSessionCreateOrConnectWithoutUserInput | MeditationSessionCreateOrConnectWithoutUserInput[]
    upsert?: MeditationSessionUpsertWithWhereUniqueWithoutUserInput | MeditationSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeditationSessionCreateManyUserInputEnvelope
    set?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
    disconnect?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
    delete?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
    connect?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
    update?: MeditationSessionUpdateWithWhereUniqueWithoutUserInput | MeditationSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeditationSessionUpdateManyWithWhereWithoutUserInput | MeditationSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeditationSessionScalarWhereInput | MeditationSessionScalarWhereInput[]
  }

  export type WeeklyReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput> | WeeklyReportCreateWithoutUserInput[] | WeeklyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutUserInput | WeeklyReportCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyReportUpsertWithWhereUniqueWithoutUserInput | WeeklyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyReportCreateManyUserInputEnvelope
    set?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    disconnect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    delete?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    update?: WeeklyReportUpdateWithWhereUniqueWithoutUserInput | WeeklyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyReportUpdateManyWithWhereWithoutUserInput | WeeklyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type OtpCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput> | OtpCodeCreateWithoutUserInput[] | OtpCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCodeCreateOrConnectWithoutUserInput | OtpCodeCreateOrConnectWithoutUserInput[]
    upsert?: OtpCodeUpsertWithWhereUniqueWithoutUserInput | OtpCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpCodeCreateManyUserInputEnvelope
    set?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    disconnect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    delete?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    connect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    update?: OtpCodeUpdateWithWhereUniqueWithoutUserInput | OtpCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpCodeUpdateManyWithWhereWithoutUserInput | OtpCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpCodeScalarWhereInput | OtpCodeScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type RoutineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type JournalEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutUserInput | JournalEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutUserInput | JournalEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutUserInput | JournalEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type FocusSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutUserInput | FocusSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutUserInput | FocusSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutUserInput | FocusSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type MeditationSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeditationSessionCreateWithoutUserInput, MeditationSessionUncheckedCreateWithoutUserInput> | MeditationSessionCreateWithoutUserInput[] | MeditationSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeditationSessionCreateOrConnectWithoutUserInput | MeditationSessionCreateOrConnectWithoutUserInput[]
    upsert?: MeditationSessionUpsertWithWhereUniqueWithoutUserInput | MeditationSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeditationSessionCreateManyUserInputEnvelope
    set?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
    disconnect?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
    delete?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
    connect?: MeditationSessionWhereUniqueInput | MeditationSessionWhereUniqueInput[]
    update?: MeditationSessionUpdateWithWhereUniqueWithoutUserInput | MeditationSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeditationSessionUpdateManyWithWhereWithoutUserInput | MeditationSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeditationSessionScalarWhereInput | MeditationSessionScalarWhereInput[]
  }

  export type WeeklyReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput> | WeeklyReportCreateWithoutUserInput[] | WeeklyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutUserInput | WeeklyReportCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyReportUpsertWithWhereUniqueWithoutUserInput | WeeklyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyReportCreateManyUserInputEnvelope
    set?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    disconnect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    delete?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    update?: WeeklyReportUpdateWithWhereUniqueWithoutUserInput | WeeklyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyReportUpdateManyWithWhereWithoutUserInput | WeeklyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutOtpCodesInput = {
    create?: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpCodesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOtpPurposeFieldUpdateOperationsInput = {
    set?: $Enums.OtpPurpose
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutOtpCodesNestedInput = {
    create?: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpCodesInput
    upsert?: UserUpsertWithoutOtpCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpCodesInput, UserUpdateWithoutOtpCodesInput>, UserUncheckedUpdateWithoutOtpCodesInput>
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type SubtaskCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput> | SubtaskCreateWithoutTaskInput[] | SubtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubtaskCreateOrConnectWithoutTaskInput | SubtaskCreateOrConnectWithoutTaskInput[]
    createMany?: SubtaskCreateManyTaskInputEnvelope
    connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
  }

  export type FocusSessionCreateNestedManyWithoutTaskInput = {
    create?: XOR<FocusSessionCreateWithoutTaskInput, FocusSessionUncheckedCreateWithoutTaskInput> | FocusSessionCreateWithoutTaskInput[] | FocusSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutTaskInput | FocusSessionCreateOrConnectWithoutTaskInput[]
    createMany?: FocusSessionCreateManyTaskInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type SubtaskUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput> | SubtaskCreateWithoutTaskInput[] | SubtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubtaskCreateOrConnectWithoutTaskInput | SubtaskCreateOrConnectWithoutTaskInput[]
    createMany?: SubtaskCreateManyTaskInputEnvelope
    connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
  }

  export type FocusSessionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<FocusSessionCreateWithoutTaskInput, FocusSessionUncheckedCreateWithoutTaskInput> | FocusSessionCreateWithoutTaskInput[] | FocusSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutTaskInput | FocusSessionCreateOrConnectWithoutTaskInput[]
    createMany?: FocusSessionCreateManyTaskInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type EnumDriveFieldUpdateOperationsInput = {
    set?: $Enums.Drive
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type SubtaskUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput> | SubtaskCreateWithoutTaskInput[] | SubtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubtaskCreateOrConnectWithoutTaskInput | SubtaskCreateOrConnectWithoutTaskInput[]
    upsert?: SubtaskUpsertWithWhereUniqueWithoutTaskInput | SubtaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubtaskCreateManyTaskInputEnvelope
    set?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    disconnect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    delete?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    update?: SubtaskUpdateWithWhereUniqueWithoutTaskInput | SubtaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubtaskUpdateManyWithWhereWithoutTaskInput | SubtaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[]
  }

  export type FocusSessionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<FocusSessionCreateWithoutTaskInput, FocusSessionUncheckedCreateWithoutTaskInput> | FocusSessionCreateWithoutTaskInput[] | FocusSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutTaskInput | FocusSessionCreateOrConnectWithoutTaskInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutTaskInput | FocusSessionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: FocusSessionCreateManyTaskInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutTaskInput | FocusSessionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutTaskInput | FocusSessionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type SubtaskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput> | SubtaskCreateWithoutTaskInput[] | SubtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubtaskCreateOrConnectWithoutTaskInput | SubtaskCreateOrConnectWithoutTaskInput[]
    upsert?: SubtaskUpsertWithWhereUniqueWithoutTaskInput | SubtaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubtaskCreateManyTaskInputEnvelope
    set?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    disconnect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    delete?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    update?: SubtaskUpdateWithWhereUniqueWithoutTaskInput | SubtaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubtaskUpdateManyWithWhereWithoutTaskInput | SubtaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[]
  }

  export type FocusSessionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<FocusSessionCreateWithoutTaskInput, FocusSessionUncheckedCreateWithoutTaskInput> | FocusSessionCreateWithoutTaskInput[] | FocusSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutTaskInput | FocusSessionCreateOrConnectWithoutTaskInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutTaskInput | FocusSessionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: FocusSessionCreateManyTaskInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutTaskInput | FocusSessionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutTaskInput | FocusSessionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutSubtasksInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    connect?: TaskWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateOneRequiredWithoutSubtasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    upsert?: TaskUpsertWithoutSubtasksInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubtasksInput, TaskUpdateWithoutSubtasksInput>, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type UserCreateNestedOneWithoutHabitsInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitCompletionCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput> | HabitCompletionCreateWithoutHabitInput[] | HabitCompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitCompletionCreateOrConnectWithoutHabitInput | HabitCompletionCreateOrConnectWithoutHabitInput[]
    createMany?: HabitCompletionCreateManyHabitInputEnvelope
    connect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
  }

  export type RoutineItemCreateNestedManyWithoutHabitInput = {
    create?: XOR<RoutineItemCreateWithoutHabitInput, RoutineItemUncheckedCreateWithoutHabitInput> | RoutineItemCreateWithoutHabitInput[] | RoutineItemUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: RoutineItemCreateOrConnectWithoutHabitInput | RoutineItemCreateOrConnectWithoutHabitInput[]
    createMany?: RoutineItemCreateManyHabitInputEnvelope
    connect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
  }

  export type HabitCompletionUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput> | HabitCompletionCreateWithoutHabitInput[] | HabitCompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitCompletionCreateOrConnectWithoutHabitInput | HabitCompletionCreateOrConnectWithoutHabitInput[]
    createMany?: HabitCompletionCreateManyHabitInputEnvelope
    connect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
  }

  export type RoutineItemUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<RoutineItemCreateWithoutHabitInput, RoutineItemUncheckedCreateWithoutHabitInput> | RoutineItemCreateWithoutHabitInput[] | RoutineItemUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: RoutineItemCreateOrConnectWithoutHabitInput | RoutineItemCreateOrConnectWithoutHabitInput[]
    createMany?: RoutineItemCreateManyHabitInputEnvelope
    connect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
  }

  export type EnumHabitTypeFieldUpdateOperationsInput = {
    set?: $Enums.HabitType
  }

  export type EnumHabitFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.HabitFrequency
  }

  export type EnumHabitStrengthFieldUpdateOperationsInput = {
    set?: $Enums.HabitStrength
  }

  export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    upsert?: UserUpsertWithoutHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitsInput, UserUpdateWithoutHabitsInput>, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type HabitCompletionUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput> | HabitCompletionCreateWithoutHabitInput[] | HabitCompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitCompletionCreateOrConnectWithoutHabitInput | HabitCompletionCreateOrConnectWithoutHabitInput[]
    upsert?: HabitCompletionUpsertWithWhereUniqueWithoutHabitInput | HabitCompletionUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitCompletionCreateManyHabitInputEnvelope
    set?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    disconnect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    delete?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    connect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    update?: HabitCompletionUpdateWithWhereUniqueWithoutHabitInput | HabitCompletionUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitCompletionUpdateManyWithWhereWithoutHabitInput | HabitCompletionUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitCompletionScalarWhereInput | HabitCompletionScalarWhereInput[]
  }

  export type RoutineItemUpdateManyWithoutHabitNestedInput = {
    create?: XOR<RoutineItemCreateWithoutHabitInput, RoutineItemUncheckedCreateWithoutHabitInput> | RoutineItemCreateWithoutHabitInput[] | RoutineItemUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: RoutineItemCreateOrConnectWithoutHabitInput | RoutineItemCreateOrConnectWithoutHabitInput[]
    upsert?: RoutineItemUpsertWithWhereUniqueWithoutHabitInput | RoutineItemUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: RoutineItemCreateManyHabitInputEnvelope
    set?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    disconnect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    delete?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    connect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    update?: RoutineItemUpdateWithWhereUniqueWithoutHabitInput | RoutineItemUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: RoutineItemUpdateManyWithWhereWithoutHabitInput | RoutineItemUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: RoutineItemScalarWhereInput | RoutineItemScalarWhereInput[]
  }

  export type HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput> | HabitCompletionCreateWithoutHabitInput[] | HabitCompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitCompletionCreateOrConnectWithoutHabitInput | HabitCompletionCreateOrConnectWithoutHabitInput[]
    upsert?: HabitCompletionUpsertWithWhereUniqueWithoutHabitInput | HabitCompletionUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitCompletionCreateManyHabitInputEnvelope
    set?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    disconnect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    delete?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    connect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    update?: HabitCompletionUpdateWithWhereUniqueWithoutHabitInput | HabitCompletionUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitCompletionUpdateManyWithWhereWithoutHabitInput | HabitCompletionUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitCompletionScalarWhereInput | HabitCompletionScalarWhereInput[]
  }

  export type RoutineItemUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<RoutineItemCreateWithoutHabitInput, RoutineItemUncheckedCreateWithoutHabitInput> | RoutineItemCreateWithoutHabitInput[] | RoutineItemUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: RoutineItemCreateOrConnectWithoutHabitInput | RoutineItemCreateOrConnectWithoutHabitInput[]
    upsert?: RoutineItemUpsertWithWhereUniqueWithoutHabitInput | RoutineItemUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: RoutineItemCreateManyHabitInputEnvelope
    set?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    disconnect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    delete?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    connect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    update?: RoutineItemUpdateWithWhereUniqueWithoutHabitInput | RoutineItemUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: RoutineItemUpdateManyWithWhereWithoutHabitInput | RoutineItemUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: RoutineItemScalarWhereInput | RoutineItemScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutCompletionsInput
    connect?: HabitWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutCompletionsInput
    upsert?: HabitUpsertWithoutCompletionsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutCompletionsInput, HabitUpdateWithoutCompletionsInput>, HabitUncheckedUpdateWithoutCompletionsInput>
  }

  export type UserCreateNestedOneWithoutRoutinesInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    connect?: UserWhereUniqueInput
  }

  export type RoutineItemCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineItemCreateWithoutRoutineInput, RoutineItemUncheckedCreateWithoutRoutineInput> | RoutineItemCreateWithoutRoutineInput[] | RoutineItemUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineItemCreateOrConnectWithoutRoutineInput | RoutineItemCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineItemCreateManyRoutineInputEnvelope
    connect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
  }

  export type RoutineItemUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineItemCreateWithoutRoutineInput, RoutineItemUncheckedCreateWithoutRoutineInput> | RoutineItemCreateWithoutRoutineInput[] | RoutineItemUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineItemCreateOrConnectWithoutRoutineInput | RoutineItemCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineItemCreateManyRoutineInputEnvelope
    connect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoutinesNestedInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    upsert?: UserUpsertWithoutRoutinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutinesInput, UserUpdateWithoutRoutinesInput>, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type RoutineItemUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineItemCreateWithoutRoutineInput, RoutineItemUncheckedCreateWithoutRoutineInput> | RoutineItemCreateWithoutRoutineInput[] | RoutineItemUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineItemCreateOrConnectWithoutRoutineInput | RoutineItemCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineItemUpsertWithWhereUniqueWithoutRoutineInput | RoutineItemUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineItemCreateManyRoutineInputEnvelope
    set?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    disconnect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    delete?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    connect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    update?: RoutineItemUpdateWithWhereUniqueWithoutRoutineInput | RoutineItemUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineItemUpdateManyWithWhereWithoutRoutineInput | RoutineItemUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineItemScalarWhereInput | RoutineItemScalarWhereInput[]
  }

  export type RoutineItemUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineItemCreateWithoutRoutineInput, RoutineItemUncheckedCreateWithoutRoutineInput> | RoutineItemCreateWithoutRoutineInput[] | RoutineItemUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineItemCreateOrConnectWithoutRoutineInput | RoutineItemCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineItemUpsertWithWhereUniqueWithoutRoutineInput | RoutineItemUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineItemCreateManyRoutineInputEnvelope
    set?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    disconnect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    delete?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    connect?: RoutineItemWhereUniqueInput | RoutineItemWhereUniqueInput[]
    update?: RoutineItemUpdateWithWhereUniqueWithoutRoutineInput | RoutineItemUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineItemUpdateManyWithWhereWithoutRoutineInput | RoutineItemUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineItemScalarWhereInput | RoutineItemScalarWhereInput[]
  }

  export type RoutineCreateNestedOneWithoutItemsInput = {
    create?: XOR<RoutineCreateWithoutItemsInput, RoutineUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutItemsInput
    connect?: RoutineWhereUniqueInput
  }

  export type HabitCreateNestedOneWithoutRoutineItemsInput = {
    create?: XOR<HabitCreateWithoutRoutineItemsInput, HabitUncheckedCreateWithoutRoutineItemsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutRoutineItemsInput
    connect?: HabitWhereUniqueInput
  }

  export type RoutineUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<RoutineCreateWithoutItemsInput, RoutineUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutItemsInput
    upsert?: RoutineUpsertWithoutItemsInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutItemsInput, RoutineUpdateWithoutItemsInput>, RoutineUncheckedUpdateWithoutItemsInput>
  }

  export type HabitUpdateOneWithoutRoutineItemsNestedInput = {
    create?: XOR<HabitCreateWithoutRoutineItemsInput, HabitUncheckedCreateWithoutRoutineItemsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutRoutineItemsInput
    upsert?: HabitUpsertWithoutRoutineItemsInput
    disconnect?: HabitWhereInput | boolean
    delete?: HabitWhereInput | boolean
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutRoutineItemsInput, HabitUpdateWithoutRoutineItemsInput>, HabitUncheckedUpdateWithoutRoutineItemsInput>
  }

  export type JournalEntryCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutJournalEntriesInput = {
    create?: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type JournalEntryUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutJournalEntriesNestedInput = {
    create?: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalEntriesInput
    upsert?: UserUpsertWithoutJournalEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJournalEntriesInput, UserUpdateWithoutJournalEntriesInput>, UserUncheckedUpdateWithoutJournalEntriesInput>
  }

  export type UserCreateNestedOneWithoutFocusSessionsInput = {
    create?: XOR<UserCreateWithoutFocusSessionsInput, UserUncheckedCreateWithoutFocusSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFocusSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutFocusSessionsInput = {
    create?: XOR<TaskCreateWithoutFocusSessionsInput, TaskUncheckedCreateWithoutFocusSessionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutFocusSessionsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFocusSessionsNestedInput = {
    create?: XOR<UserCreateWithoutFocusSessionsInput, UserUncheckedCreateWithoutFocusSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFocusSessionsInput
    upsert?: UserUpsertWithoutFocusSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFocusSessionsInput, UserUpdateWithoutFocusSessionsInput>, UserUncheckedUpdateWithoutFocusSessionsInput>
  }

  export type TaskUpdateOneWithoutFocusSessionsNestedInput = {
    create?: XOR<TaskCreateWithoutFocusSessionsInput, TaskUncheckedCreateWithoutFocusSessionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutFocusSessionsInput
    upsert?: TaskUpsertWithoutFocusSessionsInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutFocusSessionsInput, TaskUpdateWithoutFocusSessionsInput>, TaskUncheckedUpdateWithoutFocusSessionsInput>
  }

  export type UserCreateNestedOneWithoutMeditationSessionsInput = {
    create?: XOR<UserCreateWithoutMeditationSessionsInput, UserUncheckedCreateWithoutMeditationSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeditationSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMeditationModeFieldUpdateOperationsInput = {
    set?: $Enums.MeditationMode
  }

  export type UserUpdateOneRequiredWithoutMeditationSessionsNestedInput = {
    create?: XOR<UserCreateWithoutMeditationSessionsInput, UserUncheckedCreateWithoutMeditationSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeditationSessionsInput
    upsert?: UserUpsertWithoutMeditationSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeditationSessionsInput, UserUpdateWithoutMeditationSessionsInput>, UserUncheckedUpdateWithoutMeditationSessionsInput>
  }

  export type WeeklyReportCreatewinsInput = {
    set: string[]
  }

  export type WeeklyReportCreatetipsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutWeeklyReportsInput = {
    create?: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyReportsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeeklyReportUpdatewinsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WeeklyReportUpdatetipsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutWeeklyReportsNestedInput = {
    create?: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyReportsInput
    upsert?: UserUpsertWithoutWeeklyReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklyReportsInput, UserUpdateWithoutWeeklyReportsInput>, UserUncheckedUpdateWithoutWeeklyReportsInput>
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

  export type NestedEnumUserRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableFilter<$PrismaModel> | $Enums.UserRole | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumFocusTimeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FocusTime | EnumFocusTimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FocusTime[] | ListEnumFocusTimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FocusTime[] | ListEnumFocusTimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFocusTimeNullableFilter<$PrismaModel> | $Enums.FocusTime | null
  }

  export type NestedEnumEmotionalStateNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmotionalState | EnumEmotionalStateFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmotionalState[] | ListEnumEmotionalStateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmotionalState[] | ListEnumEmotionalStateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmotionalStateNullableFilter<$PrismaModel> | $Enums.EmotionalState | null
  }

  export type NestedEnumMainGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MainGoal | EnumMainGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMainGoalNullableFilter<$PrismaModel> | $Enums.MainGoal | null
  }

  export type NestedEnumPersonalityVibeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonalityVibe | EnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PersonalityVibe[] | ListEnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PersonalityVibe[] | ListEnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPersonalityVibeNullableFilter<$PrismaModel> | $Enums.PersonalityVibe | null
  }

  export type NestedEnumTemperamentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Temperament | EnumTemperamentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTemperamentNullableFilter<$PrismaModel> | $Enums.Temperament | null
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

  export type NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUserRoleNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFocusTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FocusTime | EnumFocusTimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FocusTime[] | ListEnumFocusTimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FocusTime[] | ListEnumFocusTimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFocusTimeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FocusTime | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFocusTimeNullableFilter<$PrismaModel>
    _max?: NestedEnumFocusTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmotionalStateNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmotionalState | EnumEmotionalStateFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmotionalState[] | ListEnumEmotionalStateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmotionalState[] | ListEnumEmotionalStateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmotionalStateNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmotionalState | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmotionalStateNullableFilter<$PrismaModel>
    _max?: NestedEnumEmotionalStateNullableFilter<$PrismaModel>
  }

  export type NestedEnumMainGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MainGoal | EnumMainGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMainGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.MainGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMainGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumMainGoalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPersonalityVibeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonalityVibe | EnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PersonalityVibe[] | ListEnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PersonalityVibe[] | ListEnumPersonalityVibeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPersonalityVibeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PersonalityVibe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPersonalityVibeNullableFilter<$PrismaModel>
    _max?: NestedEnumPersonalityVibeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTemperamentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Temperament | EnumTemperamentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTemperamentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Temperament | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTemperamentNullableFilter<$PrismaModel>
    _max?: NestedEnumTemperamentNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumOtpPurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | EnumOtpPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpPurposeFilter<$PrismaModel> | $Enums.OtpPurpose
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

  export type NestedEnumOtpPurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | EnumOtpPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpPurposeWithAggregatesFilter<$PrismaModel> | $Enums.OtpPurpose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtpPurposeFilter<$PrismaModel>
    _max?: NestedEnumOtpPurposeFilter<$PrismaModel>
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

  export type NestedEnumDriveFilter<$PrismaModel = never> = {
    equals?: $Enums.Drive | EnumDriveFieldRefInput<$PrismaModel>
    in?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    notIn?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    not?: NestedEnumDriveFilter<$PrismaModel> | $Enums.Drive
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedEnumDriveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Drive | EnumDriveFieldRefInput<$PrismaModel>
    in?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    notIn?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    not?: NestedEnumDriveWithAggregatesFilter<$PrismaModel> | $Enums.Drive
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriveFilter<$PrismaModel>
    _max?: NestedEnumDriveFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
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

  export type NestedEnumHabitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitType | EnumHabitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HabitType[] | ListEnumHabitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitType[] | ListEnumHabitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitTypeFilter<$PrismaModel> | $Enums.HabitType
  }

  export type NestedEnumHabitFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitFrequency | EnumHabitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitFrequencyFilter<$PrismaModel> | $Enums.HabitFrequency
  }

  export type NestedEnumHabitStrengthFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitStrength | EnumHabitStrengthFieldRefInput<$PrismaModel>
    in?: $Enums.HabitStrength[] | ListEnumHabitStrengthFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitStrength[] | ListEnumHabitStrengthFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitStrengthFilter<$PrismaModel> | $Enums.HabitStrength
  }

  export type NestedEnumHabitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitType | EnumHabitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HabitType[] | ListEnumHabitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitType[] | ListEnumHabitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitTypeWithAggregatesFilter<$PrismaModel> | $Enums.HabitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitTypeFilter<$PrismaModel>
    _max?: NestedEnumHabitTypeFilter<$PrismaModel>
  }

  export type NestedEnumHabitFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitFrequency | EnumHabitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.HabitFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitFrequencyFilter<$PrismaModel>
    _max?: NestedEnumHabitFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumHabitStrengthWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitStrength | EnumHabitStrengthFieldRefInput<$PrismaModel>
    in?: $Enums.HabitStrength[] | ListEnumHabitStrengthFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitStrength[] | ListEnumHabitStrengthFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitStrengthWithAggregatesFilter<$PrismaModel> | $Enums.HabitStrength
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitStrengthFilter<$PrismaModel>
    _max?: NestedEnumHabitStrengthFilter<$PrismaModel>
  }

  export type NestedEnumMeditationModeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeditationMode | EnumMeditationModeFieldRefInput<$PrismaModel>
    in?: $Enums.MeditationMode[] | ListEnumMeditationModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeditationMode[] | ListEnumMeditationModeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeditationModeFilter<$PrismaModel> | $Enums.MeditationMode
  }

  export type NestedEnumMeditationModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeditationMode | EnumMeditationModeFieldRefInput<$PrismaModel>
    in?: $Enums.MeditationMode[] | ListEnumMeditationModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeditationMode[] | ListEnumMeditationModeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeditationModeWithAggregatesFilter<$PrismaModel> | $Enums.MeditationMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeditationModeFilter<$PrismaModel>
    _max?: NestedEnumMeditationModeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OtpCodeCreateWithoutUserInput = {
    id?: string
    code: string
    purpose?: $Enums.OtpPurpose
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OtpCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    purpose?: $Enums.OtpPurpose
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OtpCodeCreateOrConnectWithoutUserInput = {
    where: OtpCodeWhereUniqueInput
    create: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput>
  }

  export type OtpCodeCreateManyUserInputEnvelope = {
    data: OtpCodeCreateManyUserInput | OtpCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput
    focusSessions?: FocusSessionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitCreateWithoutUserInput = {
    id?: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: HabitCompletionCreateNestedManyWithoutHabitInput
    routineItems?: RoutineItemCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: HabitCompletionUncheckedCreateNestedManyWithoutHabitInput
    routineItems?: RoutineItemUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutUserInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitCreateManyUserInputEnvelope = {
    data: HabitCreateManyUserInput | HabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoutineCreateWithoutUserInput = {
    id?: string
    name: string
    time?: string | null
    type?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RoutineItemCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    time?: string | null
    type?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RoutineItemUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutUserInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineCreateManyUserInputEnvelope = {
    data: RoutineCreateManyUserInput | RoutineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JournalEntryCreateWithoutUserInput = {
    id?: string
    text?: string | null
    tags?: JournalEntryCreatetagsInput | string[]
    moodScore: number
    sleepQuality?: number | null
    date: string
    aiInsight?: string | null
    aiPromptUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUncheckedCreateWithoutUserInput = {
    id?: string
    text?: string | null
    tags?: JournalEntryCreatetagsInput | string[]
    moodScore: number
    sleepQuality?: number | null
    date: string
    aiInsight?: string | null
    aiPromptUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryCreateOrConnectWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput>
  }

  export type JournalEntryCreateManyUserInputEnvelope = {
    data: JournalEntryCreateManyUserInput | JournalEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FocusSessionCreateWithoutUserInput = {
    id?: string
    durationMinutes: number
    completed?: boolean
    interrupted?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    task?: TaskCreateNestedOneWithoutFocusSessionsInput
  }

  export type FocusSessionUncheckedCreateWithoutUserInput = {
    id?: string
    taskId?: string | null
    durationMinutes: number
    completed?: boolean
    interrupted?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FocusSessionCreateOrConnectWithoutUserInput = {
    where: FocusSessionWhereUniqueInput
    create: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput>
  }

  export type FocusSessionCreateManyUserInputEnvelope = {
    data: FocusSessionCreateManyUserInput | FocusSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MeditationSessionCreateWithoutUserInput = {
    id?: string
    mode: $Enums.MeditationMode
    durationMinutes: number
    completed?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MeditationSessionUncheckedCreateWithoutUserInput = {
    id?: string
    mode: $Enums.MeditationMode
    durationMinutes: number
    completed?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MeditationSessionCreateOrConnectWithoutUserInput = {
    where: MeditationSessionWhereUniqueInput
    create: XOR<MeditationSessionCreateWithoutUserInput, MeditationSessionUncheckedCreateWithoutUserInput>
  }

  export type MeditationSessionCreateManyUserInputEnvelope = {
    data: MeditationSessionCreateManyUserInput | MeditationSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyReportCreateWithoutUserInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    totalFocusMin?: number
    tasksDone?: number
    avgMood?: number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportCreatewinsInput | string[]
    tips?: WeeklyReportCreatetipsInput | string[]
    aiSummary?: string | null
    suggestions?: string | null
    generatedAt?: Date | string
  }

  export type WeeklyReportUncheckedCreateWithoutUserInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    totalFocusMin?: number
    tasksDone?: number
    avgMood?: number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportCreatewinsInput | string[]
    tips?: WeeklyReportCreatetipsInput | string[]
    aiSummary?: string | null
    suggestions?: string | null
    generatedAt?: Date | string
  }

  export type WeeklyReportCreateOrConnectWithoutUserInput = {
    where: WeeklyReportWhereUniqueInput
    create: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput>
  }

  export type WeeklyReportCreateManyUserInputEnvelope = {
    data: WeeklyReportCreateManyUserInput | WeeklyReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type OtpCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: OtpCodeWhereUniqueInput
    update: XOR<OtpCodeUpdateWithoutUserInput, OtpCodeUncheckedUpdateWithoutUserInput>
    create: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput>
  }

  export type OtpCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: OtpCodeWhereUniqueInput
    data: XOR<OtpCodeUpdateWithoutUserInput, OtpCodeUncheckedUpdateWithoutUserInput>
  }

  export type OtpCodeUpdateManyWithWhereWithoutUserInput = {
    where: OtpCodeScalarWhereInput
    data: XOR<OtpCodeUpdateManyMutationInput, OtpCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type OtpCodeScalarWhereInput = {
    AND?: OtpCodeScalarWhereInput | OtpCodeScalarWhereInput[]
    OR?: OtpCodeScalarWhereInput[]
    NOT?: OtpCodeScalarWhereInput | OtpCodeScalarWhereInput[]
    id?: StringFilter<"OtpCode"> | string
    code?: StringFilter<"OtpCode"> | string
    userId?: StringFilter<"OtpCode"> | string
    purpose?: EnumOtpPurposeFilter<"OtpCode"> | $Enums.OtpPurpose
    expiresAt?: DateTimeFilter<"OtpCode"> | Date | string
    usedAt?: DateTimeNullableFilter<"OtpCode"> | Date | string | null
    createdAt?: DateTimeFilter<"OtpCode"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    naturalInput?: StringNullableFilter<"Task"> | string | null
    drive?: EnumDriveFilter<"Task"> | $Enums.Drive
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    aiSuggested?: BoolFilter<"Task"> | boolean
    aiNudge?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type HabitUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
  }

  export type HabitUpdateManyWithWhereWithoutUserInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: StringFilter<"Habit"> | string
    userId?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    emoji?: StringFilter<"Habit"> | string
    type?: EnumHabitTypeFilter<"Habit"> | $Enums.HabitType
    frequency?: EnumHabitFrequencyFilter<"Habit"> | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFilter<"Habit"> | $Enums.HabitStrength
    streak?: IntFilter<"Habit"> | number
    bestStreak?: IntFilter<"Habit"> | number
    isActive?: BoolFilter<"Habit"> | boolean
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
  }

  export type RoutineUpsertWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    update: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineUpdateWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    data: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
  }

  export type RoutineUpdateManyWithWhereWithoutUserInput = {
    where: RoutineScalarWhereInput
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyWithoutUserInput>
  }

  export type RoutineScalarWhereInput = {
    AND?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    OR?: RoutineScalarWhereInput[]
    NOT?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    id?: StringFilter<"Routine"> | string
    userId?: StringFilter<"Routine"> | string
    name?: StringFilter<"Routine"> | string
    time?: StringNullableFilter<"Routine"> | string | null
    type?: StringFilter<"Routine"> | string
    isActive?: BoolFilter<"Routine"> | boolean
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
  }

  export type JournalEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    update: XOR<JournalEntryUpdateWithoutUserInput, JournalEntryUncheckedUpdateWithoutUserInput>
    create: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput>
  }

  export type JournalEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    data: XOR<JournalEntryUpdateWithoutUserInput, JournalEntryUncheckedUpdateWithoutUserInput>
  }

  export type JournalEntryUpdateManyWithWhereWithoutUserInput = {
    where: JournalEntryScalarWhereInput
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type JournalEntryScalarWhereInput = {
    AND?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    OR?: JournalEntryScalarWhereInput[]
    NOT?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    userId?: StringFilter<"JournalEntry"> | string
    text?: StringNullableFilter<"JournalEntry"> | string | null
    tags?: StringNullableListFilter<"JournalEntry">
    moodScore?: IntFilter<"JournalEntry"> | number
    sleepQuality?: IntNullableFilter<"JournalEntry"> | number | null
    date?: StringFilter<"JournalEntry"> | string
    aiInsight?: StringNullableFilter<"JournalEntry"> | string | null
    aiPromptUsed?: BoolFilter<"JournalEntry"> | boolean
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
  }

  export type FocusSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: FocusSessionWhereUniqueInput
    update: XOR<FocusSessionUpdateWithoutUserInput, FocusSessionUncheckedUpdateWithoutUserInput>
    create: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput>
  }

  export type FocusSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: FocusSessionWhereUniqueInput
    data: XOR<FocusSessionUpdateWithoutUserInput, FocusSessionUncheckedUpdateWithoutUserInput>
  }

  export type FocusSessionUpdateManyWithWhereWithoutUserInput = {
    where: FocusSessionScalarWhereInput
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type FocusSessionScalarWhereInput = {
    AND?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
    OR?: FocusSessionScalarWhereInput[]
    NOT?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
    id?: StringFilter<"FocusSession"> | string
    userId?: StringFilter<"FocusSession"> | string
    taskId?: StringNullableFilter<"FocusSession"> | string | null
    durationMinutes?: IntFilter<"FocusSession"> | number
    completed?: BoolFilter<"FocusSession"> | boolean
    interrupted?: BoolFilter<"FocusSession"> | boolean
    startedAt?: DateTimeFilter<"FocusSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
  }

  export type MeditationSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: MeditationSessionWhereUniqueInput
    update: XOR<MeditationSessionUpdateWithoutUserInput, MeditationSessionUncheckedUpdateWithoutUserInput>
    create: XOR<MeditationSessionCreateWithoutUserInput, MeditationSessionUncheckedCreateWithoutUserInput>
  }

  export type MeditationSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: MeditationSessionWhereUniqueInput
    data: XOR<MeditationSessionUpdateWithoutUserInput, MeditationSessionUncheckedUpdateWithoutUserInput>
  }

  export type MeditationSessionUpdateManyWithWhereWithoutUserInput = {
    where: MeditationSessionScalarWhereInput
    data: XOR<MeditationSessionUpdateManyMutationInput, MeditationSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type MeditationSessionScalarWhereInput = {
    AND?: MeditationSessionScalarWhereInput | MeditationSessionScalarWhereInput[]
    OR?: MeditationSessionScalarWhereInput[]
    NOT?: MeditationSessionScalarWhereInput | MeditationSessionScalarWhereInput[]
    id?: StringFilter<"MeditationSession"> | string
    userId?: StringFilter<"MeditationSession"> | string
    mode?: EnumMeditationModeFilter<"MeditationSession"> | $Enums.MeditationMode
    durationMinutes?: IntFilter<"MeditationSession"> | number
    completed?: BoolFilter<"MeditationSession"> | boolean
    startedAt?: DateTimeFilter<"MeditationSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"MeditationSession"> | Date | string | null
    createdAt?: DateTimeFilter<"MeditationSession"> | Date | string
  }

  export type WeeklyReportUpsertWithWhereUniqueWithoutUserInput = {
    where: WeeklyReportWhereUniqueInput
    update: XOR<WeeklyReportUpdateWithoutUserInput, WeeklyReportUncheckedUpdateWithoutUserInput>
    create: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput>
  }

  export type WeeklyReportUpdateWithWhereUniqueWithoutUserInput = {
    where: WeeklyReportWhereUniqueInput
    data: XOR<WeeklyReportUpdateWithoutUserInput, WeeklyReportUncheckedUpdateWithoutUserInput>
  }

  export type WeeklyReportUpdateManyWithWhereWithoutUserInput = {
    where: WeeklyReportScalarWhereInput
    data: XOR<WeeklyReportUpdateManyMutationInput, WeeklyReportUncheckedUpdateManyWithoutUserInput>
  }

  export type WeeklyReportScalarWhereInput = {
    AND?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
    OR?: WeeklyReportScalarWhereInput[]
    NOT?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
    id?: StringFilter<"WeeklyReport"> | string
    userId?: StringFilter<"WeeklyReport"> | string
    weekStart?: DateTimeFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyReport"> | Date | string
    totalFocusMin?: IntFilter<"WeeklyReport"> | number
    tasksDone?: IntFilter<"WeeklyReport"> | number
    avgMood?: FloatFilter<"WeeklyReport"> | number
    dailyFocusData?: JsonFilter<"WeeklyReport">
    moodTrendData?: JsonFilter<"WeeklyReport">
    wins?: StringNullableListFilter<"WeeklyReport">
    tips?: StringNullableListFilter<"WeeklyReport">
    aiSummary?: StringNullableFilter<"WeeklyReport"> | string | null
    suggestions?: StringNullableFilter<"WeeklyReport"> | string | null
    generatedAt?: DateTimeFilter<"WeeklyReport"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOtpCodesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpCodesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
  }

  export type UserUpsertWithoutOtpCodesInput = {
    update: XOR<UserUpdateWithoutOtpCodesInput, UserUncheckedUpdateWithoutOtpCodesInput>
    create: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpCodesInput, UserUncheckedUpdateWithoutOtpCodesInput>
  }

  export type UserUpdateWithoutOtpCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type SubtaskCreateWithoutTaskInput = {
    id?: string
    title: string
    estimatedMinutes?: number | null
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtaskUncheckedCreateWithoutTaskInput = {
    id?: string
    title: string
    estimatedMinutes?: number | null
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtaskCreateOrConnectWithoutTaskInput = {
    where: SubtaskWhereUniqueInput
    create: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput>
  }

  export type SubtaskCreateManyTaskInputEnvelope = {
    data: SubtaskCreateManyTaskInput | SubtaskCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type FocusSessionCreateWithoutTaskInput = {
    id?: string
    durationMinutes: number
    completed?: boolean
    interrupted?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFocusSessionsInput
  }

  export type FocusSessionUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    durationMinutes: number
    completed?: boolean
    interrupted?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FocusSessionCreateOrConnectWithoutTaskInput = {
    where: FocusSessionWhereUniqueInput
    create: XOR<FocusSessionCreateWithoutTaskInput, FocusSessionUncheckedCreateWithoutTaskInput>
  }

  export type FocusSessionCreateManyTaskInputEnvelope = {
    data: FocusSessionCreateManyTaskInput | FocusSessionCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubtaskUpsertWithWhereUniqueWithoutTaskInput = {
    where: SubtaskWhereUniqueInput
    update: XOR<SubtaskUpdateWithoutTaskInput, SubtaskUncheckedUpdateWithoutTaskInput>
    create: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput>
  }

  export type SubtaskUpdateWithWhereUniqueWithoutTaskInput = {
    where: SubtaskWhereUniqueInput
    data: XOR<SubtaskUpdateWithoutTaskInput, SubtaskUncheckedUpdateWithoutTaskInput>
  }

  export type SubtaskUpdateManyWithWhereWithoutTaskInput = {
    where: SubtaskScalarWhereInput
    data: XOR<SubtaskUpdateManyMutationInput, SubtaskUncheckedUpdateManyWithoutTaskInput>
  }

  export type SubtaskScalarWhereInput = {
    AND?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[]
    OR?: SubtaskScalarWhereInput[]
    NOT?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[]
    id?: StringFilter<"Subtask"> | string
    taskId?: StringFilter<"Subtask"> | string
    title?: StringFilter<"Subtask"> | string
    estimatedMinutes?: IntNullableFilter<"Subtask"> | number | null
    completed?: BoolFilter<"Subtask"> | boolean
    completedAt?: DateTimeNullableFilter<"Subtask"> | Date | string | null
    order?: IntFilter<"Subtask"> | number
    createdAt?: DateTimeFilter<"Subtask"> | Date | string
    updatedAt?: DateTimeFilter<"Subtask"> | Date | string
  }

  export type FocusSessionUpsertWithWhereUniqueWithoutTaskInput = {
    where: FocusSessionWhereUniqueInput
    update: XOR<FocusSessionUpdateWithoutTaskInput, FocusSessionUncheckedUpdateWithoutTaskInput>
    create: XOR<FocusSessionCreateWithoutTaskInput, FocusSessionUncheckedCreateWithoutTaskInput>
  }

  export type FocusSessionUpdateWithWhereUniqueWithoutTaskInput = {
    where: FocusSessionWhereUniqueInput
    data: XOR<FocusSessionUpdateWithoutTaskInput, FocusSessionUncheckedUpdateWithoutTaskInput>
  }

  export type FocusSessionUpdateManyWithWhereWithoutTaskInput = {
    where: FocusSessionScalarWhereInput
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutSubtasksInput = {
    id?: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    focusSessions?: FocusSessionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubtasksInput = {
    id?: string
    userId: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubtasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
  }

  export type TaskUpsertWithoutSubtasksInput = {
    update: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubtasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type TaskUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserCreateWithoutHabitsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
  }

  export type HabitCompletionCreateWithoutHabitInput = {
    id?: string
    completedAt?: Date | string
    date: string
  }

  export type HabitCompletionUncheckedCreateWithoutHabitInput = {
    id?: string
    completedAt?: Date | string
    date: string
  }

  export type HabitCompletionCreateOrConnectWithoutHabitInput = {
    where: HabitCompletionWhereUniqueInput
    create: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput>
  }

  export type HabitCompletionCreateManyHabitInputEnvelope = {
    data: HabitCompletionCreateManyHabitInput | HabitCompletionCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type RoutineItemCreateWithoutHabitInput = {
    id?: string
    label: string
    order?: number
    routine: RoutineCreateNestedOneWithoutItemsInput
  }

  export type RoutineItemUncheckedCreateWithoutHabitInput = {
    id?: string
    routineId: string
    label: string
    order?: number
  }

  export type RoutineItemCreateOrConnectWithoutHabitInput = {
    where: RoutineItemWhereUniqueInput
    create: XOR<RoutineItemCreateWithoutHabitInput, RoutineItemUncheckedCreateWithoutHabitInput>
  }

  export type RoutineItemCreateManyHabitInputEnvelope = {
    data: RoutineItemCreateManyHabitInput | RoutineItemCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHabitsInput = {
    update: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type UserUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitCompletionUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitCompletionWhereUniqueInput
    update: XOR<HabitCompletionUpdateWithoutHabitInput, HabitCompletionUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput>
  }

  export type HabitCompletionUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitCompletionWhereUniqueInput
    data: XOR<HabitCompletionUpdateWithoutHabitInput, HabitCompletionUncheckedUpdateWithoutHabitInput>
  }

  export type HabitCompletionUpdateManyWithWhereWithoutHabitInput = {
    where: HabitCompletionScalarWhereInput
    data: XOR<HabitCompletionUpdateManyMutationInput, HabitCompletionUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitCompletionScalarWhereInput = {
    AND?: HabitCompletionScalarWhereInput | HabitCompletionScalarWhereInput[]
    OR?: HabitCompletionScalarWhereInput[]
    NOT?: HabitCompletionScalarWhereInput | HabitCompletionScalarWhereInput[]
    id?: StringFilter<"HabitCompletion"> | string
    habitId?: StringFilter<"HabitCompletion"> | string
    completedAt?: DateTimeFilter<"HabitCompletion"> | Date | string
    date?: StringFilter<"HabitCompletion"> | string
  }

  export type RoutineItemUpsertWithWhereUniqueWithoutHabitInput = {
    where: RoutineItemWhereUniqueInput
    update: XOR<RoutineItemUpdateWithoutHabitInput, RoutineItemUncheckedUpdateWithoutHabitInput>
    create: XOR<RoutineItemCreateWithoutHabitInput, RoutineItemUncheckedCreateWithoutHabitInput>
  }

  export type RoutineItemUpdateWithWhereUniqueWithoutHabitInput = {
    where: RoutineItemWhereUniqueInput
    data: XOR<RoutineItemUpdateWithoutHabitInput, RoutineItemUncheckedUpdateWithoutHabitInput>
  }

  export type RoutineItemUpdateManyWithWhereWithoutHabitInput = {
    where: RoutineItemScalarWhereInput
    data: XOR<RoutineItemUpdateManyMutationInput, RoutineItemUncheckedUpdateManyWithoutHabitInput>
  }

  export type RoutineItemScalarWhereInput = {
    AND?: RoutineItemScalarWhereInput | RoutineItemScalarWhereInput[]
    OR?: RoutineItemScalarWhereInput[]
    NOT?: RoutineItemScalarWhereInput | RoutineItemScalarWhereInput[]
    id?: StringFilter<"RoutineItem"> | string
    routineId?: StringFilter<"RoutineItem"> | string
    habitId?: StringNullableFilter<"RoutineItem"> | string | null
    label?: StringFilter<"RoutineItem"> | string
    order?: IntFilter<"RoutineItem"> | number
  }

  export type HabitCreateWithoutCompletionsInput = {
    id?: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    routineItems?: RoutineItemCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutCompletionsInput = {
    id?: string
    userId: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    routineItems?: RoutineItemUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutCompletionsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
  }

  export type HabitUpsertWithoutCompletionsInput = {
    update: XOR<HabitUpdateWithoutCompletionsInput, HabitUncheckedUpdateWithoutCompletionsInput>
    create: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutCompletionsInput, HabitUncheckedUpdateWithoutCompletionsInput>
  }

  export type HabitUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    routineItems?: RoutineItemUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineItems?: RoutineItemUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type UserCreateWithoutRoutinesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutinesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
  }

  export type RoutineItemCreateWithoutRoutineInput = {
    id?: string
    label: string
    order?: number
    habit?: HabitCreateNestedOneWithoutRoutineItemsInput
  }

  export type RoutineItemUncheckedCreateWithoutRoutineInput = {
    id?: string
    habitId?: string | null
    label: string
    order?: number
  }

  export type RoutineItemCreateOrConnectWithoutRoutineInput = {
    where: RoutineItemWhereUniqueInput
    create: XOR<RoutineItemCreateWithoutRoutineInput, RoutineItemUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineItemCreateManyRoutineInputEnvelope = {
    data: RoutineItemCreateManyRoutineInput | RoutineItemCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoutinesInput = {
    update: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type UserUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoutineItemUpsertWithWhereUniqueWithoutRoutineInput = {
    where: RoutineItemWhereUniqueInput
    update: XOR<RoutineItemUpdateWithoutRoutineInput, RoutineItemUncheckedUpdateWithoutRoutineInput>
    create: XOR<RoutineItemCreateWithoutRoutineInput, RoutineItemUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineItemUpdateWithWhereUniqueWithoutRoutineInput = {
    where: RoutineItemWhereUniqueInput
    data: XOR<RoutineItemUpdateWithoutRoutineInput, RoutineItemUncheckedUpdateWithoutRoutineInput>
  }

  export type RoutineItemUpdateManyWithWhereWithoutRoutineInput = {
    where: RoutineItemScalarWhereInput
    data: XOR<RoutineItemUpdateManyMutationInput, RoutineItemUncheckedUpdateManyWithoutRoutineInput>
  }

  export type RoutineCreateWithoutItemsInput = {
    id?: string
    name: string
    time?: string | null
    type?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
  }

  export type RoutineUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    name: string
    time?: string | null
    type?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineCreateOrConnectWithoutItemsInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutItemsInput, RoutineUncheckedCreateWithoutItemsInput>
  }

  export type HabitCreateWithoutRoutineItemsInput = {
    id?: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    completions?: HabitCompletionCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutRoutineItemsInput = {
    id?: string
    userId: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: HabitCompletionUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutRoutineItemsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutRoutineItemsInput, HabitUncheckedCreateWithoutRoutineItemsInput>
  }

  export type RoutineUpsertWithoutItemsInput = {
    update: XOR<RoutineUpdateWithoutItemsInput, RoutineUncheckedUpdateWithoutItemsInput>
    create: XOR<RoutineCreateWithoutItemsInput, RoutineUncheckedCreateWithoutItemsInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutItemsInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutItemsInput, RoutineUncheckedUpdateWithoutItemsInput>
  }

  export type RoutineUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
  }

  export type RoutineUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUpsertWithoutRoutineItemsInput = {
    update: XOR<HabitUpdateWithoutRoutineItemsInput, HabitUncheckedUpdateWithoutRoutineItemsInput>
    create: XOR<HabitCreateWithoutRoutineItemsInput, HabitUncheckedCreateWithoutRoutineItemsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutRoutineItemsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutRoutineItemsInput, HabitUncheckedUpdateWithoutRoutineItemsInput>
  }

  export type HabitUpdateWithoutRoutineItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    completions?: HabitCompletionUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutRoutineItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type UserCreateWithoutJournalEntriesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJournalEntriesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJournalEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
  }

  export type UserUpsertWithoutJournalEntriesInput = {
    update: XOR<UserUpdateWithoutJournalEntriesInput, UserUncheckedUpdateWithoutJournalEntriesInput>
    create: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJournalEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJournalEntriesInput, UserUncheckedUpdateWithoutJournalEntriesInput>
  }

  export type UserUpdateWithoutJournalEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJournalEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFocusSessionsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFocusSessionsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFocusSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFocusSessionsInput, UserUncheckedCreateWithoutFocusSessionsInput>
  }

  export type TaskCreateWithoutFocusSessionsInput = {
    id?: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutFocusSessionsInput = {
    id?: string
    userId: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutFocusSessionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutFocusSessionsInput, TaskUncheckedCreateWithoutFocusSessionsInput>
  }

  export type UserUpsertWithoutFocusSessionsInput = {
    update: XOR<UserUpdateWithoutFocusSessionsInput, UserUncheckedUpdateWithoutFocusSessionsInput>
    create: XOR<UserCreateWithoutFocusSessionsInput, UserUncheckedCreateWithoutFocusSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFocusSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFocusSessionsInput, UserUncheckedUpdateWithoutFocusSessionsInput>
  }

  export type UserUpdateWithoutFocusSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFocusSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutFocusSessionsInput = {
    update: XOR<TaskUpdateWithoutFocusSessionsInput, TaskUncheckedUpdateWithoutFocusSessionsInput>
    create: XOR<TaskCreateWithoutFocusSessionsInput, TaskUncheckedCreateWithoutFocusSessionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutFocusSessionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutFocusSessionsInput, TaskUncheckedUpdateWithoutFocusSessionsInput>
  }

  export type TaskUpdateWithoutFocusSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutFocusSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserCreateWithoutMeditationSessionsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeditationSessionsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeditationSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeditationSessionsInput, UserUncheckedCreateWithoutMeditationSessionsInput>
  }

  export type UserUpsertWithoutMeditationSessionsInput = {
    update: XOR<UserUpdateWithoutMeditationSessionsInput, UserUncheckedUpdateWithoutMeditationSessionsInput>
    create: XOR<UserCreateWithoutMeditationSessionsInput, UserUncheckedCreateWithoutMeditationSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeditationSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeditationSessionsInput, UserUncheckedUpdateWithoutMeditationSessionsInput>
  }

  export type UserUpdateWithoutMeditationSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeditationSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWeeklyReportsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeeklyReportsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    displayName: string
    username?: string | null
    avatarUrl?: string | null
    timezone?: string
    role?: $Enums.UserRole | null
    isEmailVerified?: boolean
    isOnboarded?: boolean
    focusTime?: $Enums.FocusTime | null
    emotionalState?: $Enums.EmotionalState | null
    distractions?: UserCreatedistractionsInput | $Enums.Distraction[]
    mainGoal?: $Enums.MainGoal | null
    weeklyGoal?: string | null
    personalityVibe?: $Enums.PersonalityVibe | null
    temperament?: $Enums.Temperament | null
    iqScore?: number | null
    eqScore?: number | null
    sqScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    meditationSessions?: MeditationSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeeklyReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
  }

  export type UserUpsertWithoutWeeklyReportsInput = {
    update: XOR<UserUpdateWithoutWeeklyReportsInput, UserUncheckedUpdateWithoutWeeklyReportsInput>
    create: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklyReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklyReportsInput, UserUncheckedUpdateWithoutWeeklyReportsInput>
  }

  export type UserUpdateWithoutWeeklyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    focusTime?: NullableEnumFocusTimeFieldUpdateOperationsInput | $Enums.FocusTime | null
    emotionalState?: NullableEnumEmotionalStateFieldUpdateOperationsInput | $Enums.EmotionalState | null
    distractions?: UserUpdatedistractionsInput | $Enums.Distraction[]
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    weeklyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    personalityVibe?: NullableEnumPersonalityVibeFieldUpdateOperationsInput | $Enums.PersonalityVibe | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    iqScore?: NullableIntFieldUpdateOperationsInput | number | null
    eqScore?: NullableIntFieldUpdateOperationsInput | number | null
    sqScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    meditationSessions?: MeditationSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpCodeCreateManyUserInput = {
    id?: string
    code: string
    purpose?: $Enums.OtpPurpose
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TaskCreateManyUserInput = {
    id?: string
    title: string
    naturalInput?: string | null
    drive?: $Enums.Drive
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    estimatedMinutes?: number | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    aiSuggested?: boolean
    aiNudge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateManyUserInput = {
    id?: string
    name: string
    emoji?: string
    type?: $Enums.HabitType
    frequency?: $Enums.HabitFrequency
    strength?: $Enums.HabitStrength
    streak?: number
    bestStreak?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineCreateManyUserInput = {
    id?: string
    name: string
    time?: string | null
    type?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryCreateManyUserInput = {
    id?: string
    text?: string | null
    tags?: JournalEntryCreatetagsInput | string[]
    moodScore: number
    sleepQuality?: number | null
    date: string
    aiInsight?: string | null
    aiPromptUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusSessionCreateManyUserInput = {
    id?: string
    taskId?: string | null
    durationMinutes: number
    completed?: boolean
    interrupted?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MeditationSessionCreateManyUserInput = {
    id?: string
    mode: $Enums.MeditationMode
    durationMinutes: number
    completed?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WeeklyReportCreateManyUserInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    totalFocusMin?: number
    tasksDone?: number
    avgMood?: number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportCreatewinsInput | string[]
    tips?: WeeklyReportCreatetipsInput | string[]
    aiSummary?: string | null
    suggestions?: string | null
    generatedAt?: Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    naturalInput?: NullableStringFieldUpdateOperationsInput | string | null
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSuggested?: BoolFieldUpdateOperationsInput | boolean
    aiNudge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: HabitCompletionUpdateManyWithoutHabitNestedInput
    routineItems?: RoutineItemUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput
    routineItems?: RoutineItemUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    type?: EnumHabitTypeFieldUpdateOperationsInput | $Enums.HabitType
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    strength?: EnumHabitStrengthFieldUpdateOperationsInput | $Enums.HabitStrength
    streak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RoutineItemUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RoutineItemUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JournalEntryUpdatetagsInput | string[]
    moodScore?: IntFieldUpdateOperationsInput | number
    sleepQuality?: NullableIntFieldUpdateOperationsInput | number | null
    date?: StringFieldUpdateOperationsInput | string
    aiInsight?: NullableStringFieldUpdateOperationsInput | string | null
    aiPromptUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JournalEntryUpdatetagsInput | string[]
    moodScore?: IntFieldUpdateOperationsInput | number
    sleepQuality?: NullableIntFieldUpdateOperationsInput | number | null
    date?: StringFieldUpdateOperationsInput | string
    aiInsight?: NullableStringFieldUpdateOperationsInput | string | null
    aiPromptUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JournalEntryUpdatetagsInput | string[]
    moodScore?: IntFieldUpdateOperationsInput | number
    sleepQuality?: NullableIntFieldUpdateOperationsInput | number | null
    date?: StringFieldUpdateOperationsInput | string
    aiInsight?: NullableStringFieldUpdateOperationsInput | string | null
    aiPromptUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneWithoutFocusSessionsNestedInput
  }

  export type FocusSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeditationSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumMeditationModeFieldUpdateOperationsInput | $Enums.MeditationMode
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeditationSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumMeditationModeFieldUpdateOperationsInput | $Enums.MeditationMode
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeditationSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumMeditationModeFieldUpdateOperationsInput | $Enums.MeditationMode
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMin?: IntFieldUpdateOperationsInput | number
    tasksDone?: IntFieldUpdateOperationsInput | number
    avgMood?: FloatFieldUpdateOperationsInput | number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportUpdatewinsInput | string[]
    tips?: WeeklyReportUpdatetipsInput | string[]
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMin?: IntFieldUpdateOperationsInput | number
    tasksDone?: IntFieldUpdateOperationsInput | number
    avgMood?: FloatFieldUpdateOperationsInput | number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportUpdatewinsInput | string[]
    tips?: WeeklyReportUpdatetipsInput | string[]
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMin?: IntFieldUpdateOperationsInput | number
    tasksDone?: IntFieldUpdateOperationsInput | number
    avgMood?: FloatFieldUpdateOperationsInput | number
    dailyFocusData?: JsonNullValueInput | InputJsonValue
    moodTrendData?: JsonNullValueInput | InputJsonValue
    wins?: WeeklyReportUpdatewinsInput | string[]
    tips?: WeeklyReportUpdatetipsInput | string[]
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtaskCreateManyTaskInput = {
    id?: string
    title: string
    estimatedMinutes?: number | null
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusSessionCreateManyTaskInput = {
    id?: string
    userId: string
    durationMinutes: number
    completed?: boolean
    interrupted?: boolean
    startedAt: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SubtaskUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtaskUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtaskUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFocusSessionsNestedInput
  }

  export type FocusSessionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    interrupted?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCompletionCreateManyHabitInput = {
    id?: string
    completedAt?: Date | string
    date: string
  }

  export type RoutineItemCreateManyHabitInput = {
    id?: string
    routineId: string
    label: string
    order?: number
  }

  export type HabitCompletionUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type HabitCompletionUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type HabitCompletionUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineItemUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    routine?: RoutineUpdateOneRequiredWithoutItemsNestedInput
  }

  export type RoutineItemUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineItemUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineItemCreateManyRoutineInput = {
    id?: string
    habitId?: string | null
    label: string
    order?: number
  }

  export type RoutineItemUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    habit?: HabitUpdateOneWithoutRoutineItemsNestedInput
  }

  export type RoutineItemUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineItemUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HabitCountOutputTypeDefaultArgs instead
     */
    export type HabitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HabitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoutineCountOutputTypeDefaultArgs instead
     */
    export type RoutineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoutineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefreshTokenDefaultArgs instead
     */
    export type RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefreshTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtpCodeDefaultArgs instead
     */
    export type OtpCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtpCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubtaskDefaultArgs instead
     */
    export type SubtaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubtaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HabitDefaultArgs instead
     */
    export type HabitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HabitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HabitCompletionDefaultArgs instead
     */
    export type HabitCompletionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HabitCompletionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoutineDefaultArgs instead
     */
    export type RoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoutineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoutineItemDefaultArgs instead
     */
    export type RoutineItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoutineItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JournalEntryDefaultArgs instead
     */
    export type JournalEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JournalEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FocusSessionDefaultArgs instead
     */
    export type FocusSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FocusSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeditationSessionDefaultArgs instead
     */
    export type MeditationSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeditationSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeeklyReportDefaultArgs instead
     */
    export type WeeklyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeeklyReportDefaultArgs<ExtArgs>

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