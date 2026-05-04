
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\PC\\Desktop\\ALEXA\\Workspace\\Nudgely Lock-In\\backend\\prisma\\generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\PC\\Desktop\\ALEXA\\Workspace\\Nudgely Lock-In\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// ─────────────────────────────────────────────────────────────────────────────\n// Nudgely · prisma/schema.prisma\n// ─────────────────────────────────────────────────────────────────────────────\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated\"\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n\n// ─────────────────────────────────────────────────────────────────────────────\n// ENUMS\n// ─────────────────────────────────────────────────────────────────────────────\n\nenum UserRole {\n  Student\n  Professional\n  Creator\n  Entrepreneur\n}\n\nenum Temperament {\n  Sanguine\n  Choleric\n  Melancholic\n  Phlegmatic\n}\n\nenum PersonalityVibe {\n  Soft\n  Bold\n}\n\nenum FocusTime {\n  Morning\n  Afternoon\n  Evening\n  Night\n}\n\nenum EmotionalState {\n  Anxious\n  Energetic\n  Calm\n  Overwhelmed\n}\n\nenum Distraction {\n  SocialMedia\n  RacingThoughts\n  OtherPeople\n  Perfectionism\n}\n\nenum MainGoal {\n  StayingFocused\n  BeatingProcrastination\n  BuildingHabits\n  ManagingADHD\n}\n\nenum Drive {\n  OnFire // Drive 1 — Urgent\n  DueSoon // Drive 2 — Deadline\n  LowLift // Drive 3 — Admin\n  OpenSpace // Drive 4 — Creative\n}\n\nenum TaskStatus {\n  Todo\n  WorkingOnIt\n  PushedBack\n  StuckOnThis\n  Done\n}\n\nenum TaskPriority {\n  NonNegotiable\n  GoodToDo\n  IfIGetThere\n}\n\nenum HabitType {\n  Build\n  Quit\n}\n\nenum HabitStrength {\n  Weak\n  Moderate\n  High\n}\n\nenum HabitFrequency {\n  Daily\n  Weekdays\n  Custom\n}\n\nenum MeditationMode {\n  Focus\n  Calm\n  Sleep\n  Energy\n}\n\nenum OtpPurpose {\n  EmailVerification\n  PasswordReset\n}\n\n// ─────────────────────────────────────────────────────────────────────────────\n// USER\n// ─────────────────────────────────────────────────────────────────────────────\n\nmodel User {\n  id              String    @id @default(uuid())\n  email           String    @unique\n  passwordHash    String?\n  displayName     String\n  username        String?   @unique\n  avatarUrl       String?\n  timezone        String    @default(\"UTC\")\n  role            UserRole?\n  isEmailVerified Boolean   @default(false)\n  isOnboarded     Boolean   @default(false)\n\n  // Onboarding preferences\n  focusTime       FocusTime?\n  emotionalState  EmotionalState?\n  distractions    Distraction[]\n  mainGoal        MainGoal?\n  weeklyGoal      String?\n  personalityVibe PersonalityVibe?\n\n  // Cognitive profile\n  temperament Temperament?\n  iqScore     Int?\n  eqScore     Int?\n  sqScore     Int?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  refreshTokens      RefreshToken[]\n  otpCodes           OtpCode[]\n  tasks              Task[]\n  habits             Habit[]\n  routines           Routine[]\n  journalEntries     JournalEntry[]\n  focusSessions      FocusSession[]\n  meditationSessions MeditationSession[]\n  weeklyReports      WeeklyReport[]\n\n  @@map(\"users\")\n}\n\n// ─────────────────────────────────────────────────────────────────────────────\n// AUTH — TOKENS & OTP\n// ─────────────────────────────────────────────────────────────────────────────\n\nmodel RefreshToken {\n  id        String   @id @default(uuid())\n  token     String   @unique\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  expiresAt DateTime\n  createdAt DateTime @default(now())\n\n  @@index([userId])\n  @@map(\"refresh_tokens\")\n}\n\nmodel OtpCode {\n  id        String     @id @default(uuid())\n  code      String\n  userId    String\n  user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)\n  purpose   OtpPurpose @default(EmailVerification)\n  expiresAt DateTime\n  usedAt    DateTime?\n  createdAt DateTime   @default(now())\n\n  @@index([userId])\n  @@map(\"otp_codes\")\n}\n\n// ─────────────────────────────────────────────────────────────────────────────\n// TASKS\n// ─────────────────────────────────────────────────────────────────────────────\n\nmodel Task {\n  id     String @id @default(uuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  title            String\n  naturalInput     String?\n  drive            Drive        @default(OnFire)\n  status           TaskStatus   @default(Todo)\n  priority         TaskPriority @default(GoodToDo)\n  estimatedMinutes Int?\n  dueDate          DateTime?\n  completedAt      DateTime?\n  aiSuggested      Boolean      @default(false)\n  aiNudge          String?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  subtasks      Subtask[]\n  focusSessions FocusSession[]\n\n  @@index([userId])\n  @@index([userId, drive])\n  @@index([userId, status])\n  @@map(\"tasks\")\n}\n\nmodel Subtask {\n  id     String @id @default(uuid())\n  taskId String\n  task   Task   @relation(fields: [taskId], references: [id], onDelete: Cascade)\n\n  title            String\n  estimatedMinutes Int?\n  completed        Boolean   @default(false)\n  completedAt      DateTime?\n  order            Int       @default(0)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([taskId])\n  @@map(\"subtasks\")\n}\n\n// ─────────────────────────────────────────────────────────────────────────────\n// HABITS & ROUTINES\n// ─────────────────────────────────────────────────────────────────────────────\n\nmodel Habit {\n  id     String @id @default(uuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  name       String\n  emoji      String         @default(\"✅\")\n  type       HabitType      @default(Build)\n  frequency  HabitFrequency @default(Daily)\n  strength   HabitStrength  @default(Weak)\n  streak     Int            @default(0)\n  bestStreak Int            @default(0)\n  isActive   Boolean        @default(true)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  completions  HabitCompletion[]\n  routineItems RoutineItem[]\n\n  @@index([userId])\n  @@map(\"habits\")\n}\n\nmodel HabitCompletion {\n  id          String   @id @default(uuid())\n  habitId     String\n  habit       Habit    @relation(fields: [habitId], references: [id], onDelete: Cascade)\n  completedAt DateTime @default(now())\n  date        String // YYYY-MM-DD — prevents duplicate completions per day\n\n  @@unique([habitId, date])\n  @@index([habitId])\n  @@map(\"habit_completions\")\n}\n\nmodel Routine {\n  id     String @id @default(uuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  name     String\n  time     String? // \"07:00\"\n  type     String  @default(\"Morning\")\n  isActive Boolean @default(true)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  items RoutineItem[]\n\n  @@index([userId])\n  @@map(\"routines\")\n}\n\nmodel RoutineItem {\n  id        String  @id @default(uuid())\n  routineId String\n  routine   Routine @relation(fields: [routineId], references: [id], onDelete: Cascade)\n  habitId   String?\n  habit     Habit?  @relation(fields: [habitId], references: [id], onDelete: SetNull)\n  label     String\n  order     Int     @default(0)\n\n  @@index([routineId])\n  @@map(\"routine_items\")\n}\n\n// ─────────────────────────────────────────────────────────────────────────────\n// JOURNAL\n// ─────────────────────────────────────────────────────────────────────────────\n\nmodel JournalEntry {\n  id     String @id @default(uuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  text         String?\n  tags         String[]\n  moodScore    Int // 1–5\n  sleepQuality Int? // 1–10\n  date         String // YYYY-MM-DD\n\n  aiInsight    String?\n  aiPromptUsed Boolean @default(false)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([userId, date])\n  @@index([userId])\n  @@map(\"journal_entries\")\n}\n\n// ─────────────────────────────────────────────────────────────────────────────\n// SESSIONS\n// ─────────────────────────────────────────────────────────────────────────────\n\nmodel FocusSession {\n  id     String  @id @default(uuid())\n  userId String\n  user   User    @relation(fields: [userId], references: [id], onDelete: Cascade)\n  taskId String?\n  task   Task?   @relation(fields: [taskId], references: [id], onDelete: SetNull)\n\n  durationMinutes Int\n  completed       Boolean   @default(true)\n  interrupted     Boolean   @default(false)\n  startedAt       DateTime\n  completedAt     DateTime?\n\n  createdAt DateTime @default(now())\n\n  @@index([userId])\n  @@index([userId, startedAt])\n  @@map(\"focus_sessions\")\n}\n\nmodel MeditationSession {\n  id     String @id @default(uuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  mode            MeditationMode\n  durationMinutes Int\n  completed       Boolean        @default(true)\n  startedAt       DateTime\n  completedAt     DateTime?\n\n  createdAt DateTime @default(now())\n\n  @@index([userId])\n  @@map(\"meditation_sessions\")\n}\n\n// ─────────────────────────────────────────────────────────────────────────────\n// WEEKLY REPORT\n// ─────────────────────────────────────────────────────────────────────────────\n\nmodel WeeklyReport {\n  id     String @id @default(uuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  weekStart DateTime\n  weekEnd   DateTime\n\n  totalFocusMin Int   @default(0)\n  tasksDone     Int   @default(0)\n  avgMood       Float @default(0)\n\n  dailyFocusData Json     @default(\"[]\")\n  moodTrendData  Json     @default(\"[]\")\n  wins           String[]\n  tips           String[]\n  aiSummary      String?\n  suggestions    String?\n\n  generatedAt DateTime @default(now())\n\n  @@unique([userId, weekStart])\n  @@index([userId])\n  @@map(\"weekly_reports\")\n}\n",
  "inlineSchemaHash": "a94551da538b5f5c971c3db2d9baecaa89ab1ca8697f3161d6005d170be01c36",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displayName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatarUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timezone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"UTC\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserRole\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isOnboarded\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"focusTime\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FocusTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emotionalState\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmotionalState\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distractions\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Distraction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mainGoal\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MainGoal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weeklyGoal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"personalityVibe\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PersonalityVibe\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temperament\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Temperament\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iqScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eqScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sqScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"refreshTokens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RefreshToken\",\"relationName\":\"RefreshTokenToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otpCodes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OtpCode\",\"relationName\":\"OtpCodeToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"relationName\":\"TaskToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habits\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Habit\",\"relationName\":\"HabitToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"routines\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Routine\",\"relationName\":\"RoutineToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"journalEntries\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JournalEntry\",\"relationName\":\"JournalEntryToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"focusSessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FocusSession\",\"relationName\":\"FocusSessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meditationSessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MeditationSession\",\"relationName\":\"MeditationSessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weeklyReports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WeeklyReport\",\"relationName\":\"UserToWeeklyReport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RefreshToken\":{\"dbName\":\"refresh_tokens\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"RefreshTokenToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OtpCode\":{\"dbName\":\"otp_codes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"OtpCodeToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purpose\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"OtpPurpose\",\"default\":\"EmailVerification\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Task\":{\"dbName\":\"tasks\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TaskToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"naturalInput\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drive\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Drive\",\"default\":\"OnFire\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TaskStatus\",\"default\":\"Todo\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TaskPriority\",\"default\":\"GoodToDo\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimatedMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aiSuggested\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aiNudge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"subtasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Subtask\",\"relationName\":\"SubtaskToTask\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"focusSessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FocusSession\",\"relationName\":\"FocusSessionToTask\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Subtask\":{\"dbName\":\"subtasks\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taskId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"relationName\":\"SubtaskToTask\",\"relationFromFields\":[\"taskId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimatedMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Habit\":{\"dbName\":\"habits\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"HabitToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emoji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"✅\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"HabitType\",\"default\":\"Build\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequency\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"HabitFrequency\",\"default\":\"Daily\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strength\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"HabitStrength\",\"default\":\"Weak\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"streak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bestStreak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"completions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HabitCompletion\",\"relationName\":\"HabitToHabitCompletion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"routineItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoutineItem\",\"relationName\":\"HabitToRoutineItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HabitCompletion\":{\"dbName\":\"habit_completions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habitId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Habit\",\"relationName\":\"HabitToHabitCompletion\",\"relationFromFields\":[\"habitId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"habitId\",\"date\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"habitId\",\"date\"]}],\"isGenerated\":false},\"Routine\":{\"dbName\":\"routines\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"RoutineToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Morning\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoutineItem\",\"relationName\":\"RoutineToRoutineItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoutineItem\":{\"dbName\":\"routine_items\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"routineId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"routine\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Routine\",\"relationName\":\"RoutineToRoutineItem\",\"relationFromFields\":[\"routineId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habitId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Habit\",\"relationName\":\"HabitToRoutineItem\",\"relationFromFields\":[\"habitId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JournalEntry\":{\"dbName\":\"journal_entries\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"JournalEntryToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moodScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sleepQuality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aiInsight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aiPromptUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"date\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"date\"]}],\"isGenerated\":false},\"FocusSession\":{\"dbName\":\"focus_sessions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FocusSessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taskId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"relationName\":\"FocusSessionToTask\",\"relationFromFields\":[\"taskId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durationMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interrupted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MeditationSession\":{\"dbName\":\"meditation_sessions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"MeditationSessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MeditationMode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durationMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WeeklyReport\":{\"dbName\":\"weekly_reports\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToWeeklyReport\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weekStart\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weekEnd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalFocusMin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tasksDone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avgMood\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyFocusData\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Json\",\"default\":\"[]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moodTrendData\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Json\",\"default\":\"[]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wins\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tips\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aiSummary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"suggestions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"generatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"weekStart\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"weekStart\"]}],\"isGenerated\":false}},\"enums\":{\"UserRole\":{\"values\":[{\"name\":\"Student\",\"dbName\":null},{\"name\":\"Professional\",\"dbName\":null},{\"name\":\"Creator\",\"dbName\":null},{\"name\":\"Entrepreneur\",\"dbName\":null}],\"dbName\":null},\"Temperament\":{\"values\":[{\"name\":\"Sanguine\",\"dbName\":null},{\"name\":\"Choleric\",\"dbName\":null},{\"name\":\"Melancholic\",\"dbName\":null},{\"name\":\"Phlegmatic\",\"dbName\":null}],\"dbName\":null},\"PersonalityVibe\":{\"values\":[{\"name\":\"Soft\",\"dbName\":null},{\"name\":\"Bold\",\"dbName\":null}],\"dbName\":null},\"FocusTime\":{\"values\":[{\"name\":\"Morning\",\"dbName\":null},{\"name\":\"Afternoon\",\"dbName\":null},{\"name\":\"Evening\",\"dbName\":null},{\"name\":\"Night\",\"dbName\":null}],\"dbName\":null},\"EmotionalState\":{\"values\":[{\"name\":\"Anxious\",\"dbName\":null},{\"name\":\"Energetic\",\"dbName\":null},{\"name\":\"Calm\",\"dbName\":null},{\"name\":\"Overwhelmed\",\"dbName\":null}],\"dbName\":null},\"Distraction\":{\"values\":[{\"name\":\"SocialMedia\",\"dbName\":null},{\"name\":\"RacingThoughts\",\"dbName\":null},{\"name\":\"OtherPeople\",\"dbName\":null},{\"name\":\"Perfectionism\",\"dbName\":null}],\"dbName\":null},\"MainGoal\":{\"values\":[{\"name\":\"StayingFocused\",\"dbName\":null},{\"name\":\"BeatingProcrastination\",\"dbName\":null},{\"name\":\"BuildingHabits\",\"dbName\":null},{\"name\":\"ManagingADHD\",\"dbName\":null}],\"dbName\":null},\"Drive\":{\"values\":[{\"name\":\"OnFire\",\"dbName\":null},{\"name\":\"DueSoon\",\"dbName\":null},{\"name\":\"LowLift\",\"dbName\":null},{\"name\":\"OpenSpace\",\"dbName\":null}],\"dbName\":null},\"TaskStatus\":{\"values\":[{\"name\":\"Todo\",\"dbName\":null},{\"name\":\"WorkingOnIt\",\"dbName\":null},{\"name\":\"PushedBack\",\"dbName\":null},{\"name\":\"StuckOnThis\",\"dbName\":null},{\"name\":\"Done\",\"dbName\":null}],\"dbName\":null},\"TaskPriority\":{\"values\":[{\"name\":\"NonNegotiable\",\"dbName\":null},{\"name\":\"GoodToDo\",\"dbName\":null},{\"name\":\"IfIGetThere\",\"dbName\":null}],\"dbName\":null},\"HabitType\":{\"values\":[{\"name\":\"Build\",\"dbName\":null},{\"name\":\"Quit\",\"dbName\":null}],\"dbName\":null},\"HabitStrength\":{\"values\":[{\"name\":\"Weak\",\"dbName\":null},{\"name\":\"Moderate\",\"dbName\":null},{\"name\":\"High\",\"dbName\":null}],\"dbName\":null},\"HabitFrequency\":{\"values\":[{\"name\":\"Daily\",\"dbName\":null},{\"name\":\"Weekdays\",\"dbName\":null},{\"name\":\"Custom\",\"dbName\":null}],\"dbName\":null},\"MeditationMode\":{\"values\":[{\"name\":\"Focus\",\"dbName\":null},{\"name\":\"Calm\",\"dbName\":null},{\"name\":\"Sleep\",\"dbName\":null},{\"name\":\"Energy\",\"dbName\":null}],\"dbName\":null},\"OtpPurpose\":{\"values\":[{\"name\":\"EmailVerification\",\"dbName\":null},{\"name\":\"PasswordReset\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

