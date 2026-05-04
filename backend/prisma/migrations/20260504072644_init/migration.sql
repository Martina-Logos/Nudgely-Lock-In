-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Student', 'Professional', 'Creator', 'Entrepreneur');

-- CreateEnum
CREATE TYPE "Temperament" AS ENUM ('Sanguine', 'Choleric', 'Melancholic', 'Phlegmatic');

-- CreateEnum
CREATE TYPE "PersonalityVibe" AS ENUM ('Soft', 'Bold');

-- CreateEnum
CREATE TYPE "FocusTime" AS ENUM ('Morning', 'Afternoon', 'Evening', 'Night');

-- CreateEnum
CREATE TYPE "EmotionalState" AS ENUM ('Anxious', 'Energetic', 'Calm', 'Overwhelmed');

-- CreateEnum
CREATE TYPE "Distraction" AS ENUM ('SocialMedia', 'RacingThoughts', 'OtherPeople', 'Perfectionism');

-- CreateEnum
CREATE TYPE "MainGoal" AS ENUM ('StayingFocused', 'BeatingProcrastination', 'BuildingHabits', 'ManagingADHD');

-- CreateEnum
CREATE TYPE "Drive" AS ENUM ('OnFire', 'DueSoon', 'LowLift', 'OpenSpace');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('Todo', 'WorkingOnIt', 'PushedBack', 'StuckOnThis', 'Done');

-- CreateEnum
CREATE TYPE "TaskPriority" AS ENUM ('NonNegotiable', 'GoodToDo', 'IfIGetThere');

-- CreateEnum
CREATE TYPE "HabitType" AS ENUM ('Build', 'Quit');

-- CreateEnum
CREATE TYPE "HabitStrength" AS ENUM ('Weak', 'Moderate', 'High');

-- CreateEnum
CREATE TYPE "HabitFrequency" AS ENUM ('Daily', 'Weekdays', 'Custom');

-- CreateEnum
CREATE TYPE "MeditationMode" AS ENUM ('Focus', 'Calm', 'Sleep', 'Energy');

-- CreateEnum
CREATE TYPE "OtpPurpose" AS ENUM ('EmailVerification', 'PasswordReset');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "displayName" TEXT NOT NULL,
    "username" TEXT,
    "avatarUrl" TEXT,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "role" "UserRole",
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "isOnboarded" BOOLEAN NOT NULL DEFAULT false,
    "focusTime" "FocusTime",
    "emotionalState" "EmotionalState",
    "distractions" "Distraction"[],
    "mainGoal" "MainGoal",
    "weeklyGoal" TEXT,
    "personalityVibe" "PersonalityVibe",
    "temperament" "Temperament",
    "iqScore" INTEGER,
    "eqScore" INTEGER,
    "sqScore" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otp_codes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "purpose" "OtpPurpose" NOT NULL DEFAULT 'EmailVerification',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "otp_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "naturalInput" TEXT,
    "drive" "Drive" NOT NULL DEFAULT 'OnFire',
    "status" "TaskStatus" NOT NULL DEFAULT 'Todo',
    "priority" "TaskPriority" NOT NULL DEFAULT 'GoodToDo',
    "estimatedMinutes" INTEGER,
    "dueDate" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "aiSuggested" BOOLEAN NOT NULL DEFAULT false,
    "aiNudge" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subtasks" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "estimatedMinutes" INTEGER,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subtasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habits" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emoji" TEXT NOT NULL DEFAULT '✅',
    "type" "HabitType" NOT NULL DEFAULT 'Build',
    "frequency" "HabitFrequency" NOT NULL DEFAULT 'Daily',
    "strength" "HabitStrength" NOT NULL DEFAULT 'Weak',
    "streak" INTEGER NOT NULL DEFAULT 0,
    "bestStreak" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "habits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit_completions" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TEXT NOT NULL,

    CONSTRAINT "habit_completions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routines" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT,
    "type" TEXT NOT NULL DEFAULT 'Morning',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "routines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routine_items" (
    "id" TEXT NOT NULL,
    "routineId" TEXT NOT NULL,
    "habitId" TEXT,
    "label" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "routine_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "journal_entries" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "text" TEXT,
    "tags" TEXT[],
    "moodScore" INTEGER NOT NULL,
    "sleepQuality" INTEGER,
    "date" TEXT NOT NULL,
    "aiInsight" TEXT,
    "aiPromptUsed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "journal_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "focus_sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "taskId" TEXT,
    "durationMinutes" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT true,
    "interrupted" BOOLEAN NOT NULL DEFAULT false,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "focus_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meditation_sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mode" "MeditationMode" NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT true,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "meditation_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekly_reports" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "weekStart" TIMESTAMP(3) NOT NULL,
    "weekEnd" TIMESTAMP(3) NOT NULL,
    "totalFocusMin" INTEGER NOT NULL DEFAULT 0,
    "tasksDone" INTEGER NOT NULL DEFAULT 0,
    "avgMood" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dailyFocusData" JSONB NOT NULL DEFAULT '[]',
    "moodTrendData" JSONB NOT NULL DEFAULT '[]',
    "wins" TEXT[],
    "tips" TEXT[],
    "aiSummary" TEXT,
    "suggestions" TEXT,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "weekly_reports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_token_key" ON "refresh_tokens"("token");

-- CreateIndex
CREATE INDEX "refresh_tokens_userId_idx" ON "refresh_tokens"("userId");

-- CreateIndex
CREATE INDEX "otp_codes_userId_idx" ON "otp_codes"("userId");

-- CreateIndex
CREATE INDEX "tasks_userId_idx" ON "tasks"("userId");

-- CreateIndex
CREATE INDEX "tasks_userId_drive_idx" ON "tasks"("userId", "drive");

-- CreateIndex
CREATE INDEX "tasks_userId_status_idx" ON "tasks"("userId", "status");

-- CreateIndex
CREATE INDEX "subtasks_taskId_idx" ON "subtasks"("taskId");

-- CreateIndex
CREATE INDEX "habits_userId_idx" ON "habits"("userId");

-- CreateIndex
CREATE INDEX "habit_completions_habitId_idx" ON "habit_completions"("habitId");

-- CreateIndex
CREATE UNIQUE INDEX "habit_completions_habitId_date_key" ON "habit_completions"("habitId", "date");

-- CreateIndex
CREATE INDEX "routines_userId_idx" ON "routines"("userId");

-- CreateIndex
CREATE INDEX "routine_items_routineId_idx" ON "routine_items"("routineId");

-- CreateIndex
CREATE INDEX "journal_entries_userId_idx" ON "journal_entries"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "journal_entries_userId_date_key" ON "journal_entries"("userId", "date");

-- CreateIndex
CREATE INDEX "focus_sessions_userId_idx" ON "focus_sessions"("userId");

-- CreateIndex
CREATE INDEX "focus_sessions_userId_startedAt_idx" ON "focus_sessions"("userId", "startedAt");

-- CreateIndex
CREATE INDEX "meditation_sessions_userId_idx" ON "meditation_sessions"("userId");

-- CreateIndex
CREATE INDEX "weekly_reports_userId_idx" ON "weekly_reports"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "weekly_reports_userId_weekStart_key" ON "weekly_reports"("userId", "weekStart");

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "otp_codes" ADD CONSTRAINT "otp_codes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtasks" ADD CONSTRAINT "subtasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habits" ADD CONSTRAINT "habits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_completions" ADD CONSTRAINT "habit_completions_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routines" ADD CONSTRAINT "routines_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine_items" ADD CONSTRAINT "routine_items_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "routines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine_items" ADD CONSTRAINT "routine_items_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "focus_sessions" ADD CONSTRAINT "focus_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "focus_sessions" ADD CONSTRAINT "focus_sessions_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meditation_sessions" ADD CONSTRAINT "meditation_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_reports" ADD CONSTRAINT "weekly_reports_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
