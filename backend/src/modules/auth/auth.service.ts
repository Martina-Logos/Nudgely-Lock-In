import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { v4 as uuidv4 } from "uuid";

export const signupUser = async (data: {
  email: string;
  password: string;
  displayName?: string;
}) => {
  const { email, password, displayName } = data;

  // 1. Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // 2. Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // 3. Create user
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      displayName,
    },
  });

  // 4. Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

  // 5. Save OTP
  await prisma.oTPCode.create({
    data: {
      email,
      code: otp,
      type: "VERIFY_EMAIL",
      expiresAt,
    },
  });

  // 6. Send email (you’ll implement mailer later)
  console.log(`OTP for ${email}: ${otp}`);

  return {
    message: "Signup successful. Verify your email.",
  };
};