import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { loginSchema } from '@/lib/validations/user'
import { verifyPassword } from '@/lib/utils/password'
import { generateToken } from '@/lib/utils/jwt'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/utils/api-response'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validation = loginSchema.safeParse(body)
    if (!validation.success) {
      return validationErrorResponse(validation.error.format())
    }

    const { email, password } = validation.data
    
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    })
    
    if (!user) {
      return errorResponse('Invalid email or password', 401)
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password)
    
    if (!isPasswordValid) {
      return errorResponse('Invalid email or password', 401)
    }

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
    })
    
    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user
    
    return successResponse({
      user: userWithoutPassword,
      token,
      message: 'Login successful'
    })
    
  } catch (error) {
    console.error('Login error:', error)
    return errorResponse('Login failed', 500)
  }
}