import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createUserSchema } from '@/lib/validations/user'
import { hashPassword } from '@/lib/utils/password'
import { generateToken } from '@/lib/utils/jwt'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/utils/api-response'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validation = createUserSchema.safeParse(body)
    if (!validation.success) {
      return validationErrorResponse(validation.error.format())
    }

    const { email, name, password } = validation.data
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })
    
    if (existingUser) {
      return errorResponse('User with this email already exists', 409)
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name: name || null,
        password: hashedPassword
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      }
    })
    
    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
    })
    
    return successResponse({
      user,
      token,
      message: 'User registered successfully'
    }, 201)
    
  } catch (error) {
    console.error('Registration error:', error)
    return errorResponse('Registration failed', 500)
  }
}