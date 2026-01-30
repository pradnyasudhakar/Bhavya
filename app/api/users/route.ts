import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createUserSchema } from '@/lib/validations/user'
import { hashPassword } from '@/lib/utils/password'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/utils/api-response'

// GET: All users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        posts: {
          select: {
            id: true,
            title: true,
            published: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return successResponse(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return errorResponse('Error fetching users', 500)
  }
}

// POST: Create user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validation = createUserSchema.safeParse(body)
    if (!validation.success) {
      return validationErrorResponse(validation.error.format())
    }

    const { email, name, password } = validation.data
    
    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })
    
    if (existingUser) {
      return errorResponse('Email already exists', 409)
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
        updatedAt: true,
      }
    })
    
    return successResponse(user, 201)
  } catch (error: any) {
    console.error('Error creating user:', error)
    return errorResponse('Error creating user', 500)
  }
}