import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateRequest } from '@/lib/middleware/auth'
import { successResponse, errorResponse } from '@/lib/utils/api-response'

export async function GET(request: NextRequest) {
  try {
    // Authenticate user
    const payload = authenticateRequest(request)
    
    if (!payload) {
      return errorResponse('Unauthorized - Please login', 401)
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
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
      }
    })
    
    if (!user) {
      return errorResponse('User not found', 404)
    }
    
    return successResponse(user)
    
  } catch (error) {
    console.error('Get current user error:', error)
    return errorResponse('Failed to get user', 500)
  }
}