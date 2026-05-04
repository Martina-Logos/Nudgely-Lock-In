
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.RefreshTokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  userId: 'userId',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.OtpCodeScalarFieldEnum = {
  id: 'id',
  code: 'code',
  userId: 'userId',
  purpose: 'purpose',
  expiresAt: 'expiresAt',
  usedAt: 'usedAt',
  createdAt: 'createdAt'
};

exports.Prisma.TaskScalarFieldEnum = {
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

exports.Prisma.SubtaskScalarFieldEnum = {
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

exports.Prisma.HabitScalarFieldEnum = {
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

exports.Prisma.HabitCompletionScalarFieldEnum = {
  id: 'id',
  habitId: 'habitId',
  completedAt: 'completedAt',
  date: 'date'
};

exports.Prisma.RoutineScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  time: 'time',
  type: 'type',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoutineItemScalarFieldEnum = {
  id: 'id',
  routineId: 'routineId',
  habitId: 'habitId',
  label: 'label',
  order: 'order'
};

exports.Prisma.JournalEntryScalarFieldEnum = {
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

exports.Prisma.FocusSessionScalarFieldEnum = {
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

exports.Prisma.MeditationSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  mode: 'mode',
  durationMinutes: 'durationMinutes',
  completed: 'completed',
  startedAt: 'startedAt',
  completedAt: 'completedAt',
  createdAt: 'createdAt'
};

exports.Prisma.WeeklyReportScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  Student: 'Student',
  Professional: 'Professional',
  Creator: 'Creator',
  Entrepreneur: 'Entrepreneur'
};

exports.FocusTime = exports.$Enums.FocusTime = {
  Morning: 'Morning',
  Afternoon: 'Afternoon',
  Evening: 'Evening',
  Night: 'Night'
};

exports.EmotionalState = exports.$Enums.EmotionalState = {
  Anxious: 'Anxious',
  Energetic: 'Energetic',
  Calm: 'Calm',
  Overwhelmed: 'Overwhelmed'
};

exports.MainGoal = exports.$Enums.MainGoal = {
  StayingFocused: 'StayingFocused',
  BeatingProcrastination: 'BeatingProcrastination',
  BuildingHabits: 'BuildingHabits',
  ManagingADHD: 'ManagingADHD'
};

exports.PersonalityVibe = exports.$Enums.PersonalityVibe = {
  Soft: 'Soft',
  Bold: 'Bold'
};

exports.Temperament = exports.$Enums.Temperament = {
  Sanguine: 'Sanguine',
  Choleric: 'Choleric',
  Melancholic: 'Melancholic',
  Phlegmatic: 'Phlegmatic'
};

exports.Distraction = exports.$Enums.Distraction = {
  SocialMedia: 'SocialMedia',
  RacingThoughts: 'RacingThoughts',
  OtherPeople: 'OtherPeople',
  Perfectionism: 'Perfectionism'
};

exports.OtpPurpose = exports.$Enums.OtpPurpose = {
  EmailVerification: 'EmailVerification',
  PasswordReset: 'PasswordReset'
};

exports.Drive = exports.$Enums.Drive = {
  OnFire: 'OnFire',
  DueSoon: 'DueSoon',
  LowLift: 'LowLift',
  OpenSpace: 'OpenSpace'
};

exports.TaskStatus = exports.$Enums.TaskStatus = {
  Todo: 'Todo',
  WorkingOnIt: 'WorkingOnIt',
  PushedBack: 'PushedBack',
  StuckOnThis: 'StuckOnThis',
  Done: 'Done'
};

exports.TaskPriority = exports.$Enums.TaskPriority = {
  NonNegotiable: 'NonNegotiable',
  GoodToDo: 'GoodToDo',
  IfIGetThere: 'IfIGetThere'
};

exports.HabitType = exports.$Enums.HabitType = {
  Build: 'Build',
  Quit: 'Quit'
};

exports.HabitFrequency = exports.$Enums.HabitFrequency = {
  Daily: 'Daily',
  Weekdays: 'Weekdays',
  Custom: 'Custom'
};

exports.HabitStrength = exports.$Enums.HabitStrength = {
  Weak: 'Weak',
  Moderate: 'Moderate',
  High: 'High'
};

exports.MeditationMode = exports.$Enums.MeditationMode = {
  Focus: 'Focus',
  Calm: 'Calm',
  Sleep: 'Sleep',
  Energy: 'Energy'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
