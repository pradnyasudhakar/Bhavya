import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { updateUserSchema } from '@/lib/validations/user'
import { hashPassword } from '@/lib/utils/password'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/utils/api-response'

// GET: Single user
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
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
            content: true,
            published: true,
            createdAt: true,
          }
        }
      }
    })
    
    if (!user) {
      return errorResponse('User not found', 404)
    }
    
    return successResponse(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return errorResponse('Error fetching user', 500)
  }
}

// PUT: Update user
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    
    // Validate input
    const validation = updateUserSchema.safeParse(body)
    if (!validation.success) {
      return validationErrorResponse(validation.error.format())
    }

    const { email, name, password } = validation.data
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: parseInt(params.id) }
    })
    
    if (!existingUser) {
      return errorResponse('User not found', 404)
    }

    // Check email uniqueness if updating email
    if (email && email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email }
      })
      
      if (emailExists) {
        return errorResponse('Email already exists', 409)
      }
    }

    // Prepare update data
    const updateData: any = {}
    if (email) updateData.email = email
    if (name !== undefined) updateData.name = name
    if (password) updateData.password = await hashPassword(password)

    // Update user
    const user = await prisma.user.update({
      where: { id: parseInt(params.id) },
      data: updateData,
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      }
    })
    
    return successResponse(user)
  } catch (error: any) {
    console.error('Error updating user:', error)
    return errorResponse('Error updating user', 500)
  }
}

// DELETE: Delete user
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.user.delete({
      where: { id: parseInt(params.id) }
    })
    
    return successResponse({ message: 'User deleted successfully' })
  } catch (error: any) {
    console.error('Error deleting user:', error)
    
    if (error.code === 'P2025') {
      return errorResponse('User not found', 404)
    }
    
    return errorResponse('Error deleting user', 500)
  }
}