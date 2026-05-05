import { prisma } from '../../lib/prisma'
import { AppError } from '../../middleware/errorHandler'

export async function getMe(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new AppError(404, 'User not found.', 'USER_NOT_FOUND')
  const { passwordHash, ...safe } = user as any
  return safe
}

export async function updateMe(userId: string, data: {
  displayName?: string
  username?:    string
  avatarUrl?:   string
  timezone?:    string
  weeklyGoal?:  string
}) {
  if (data.username) {
    const taken = await prisma.user.findFirst({
      where: { username: data.username, id: { not: userId } },
    })
    if (taken) throw new AppError(409, 'Username already taken.', 'USERNAME_TAKEN')
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data,
  })

  const { passwordHash, ...safe } = user as any
  return safe
}

export async function deleteMe(userId: string) {
  await prisma.user.delete({ where: { id: userId } })
  return { message: 'Account deleted successfully.' }
}