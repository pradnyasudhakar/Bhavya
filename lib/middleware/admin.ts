import { NextRequest } from 'next/server'
import { verifyToken } from '@/lib/utils/jwt'
import { prisma } from '@/lib/prisma'

export async function requireAdmin(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { authorized: false, user: null }
  }
  
  const token = authHeader.substring(7)
  const payload = verifyToken(token)
  
  if (!payload) {
    return { authorized: false, user: null }
  }
  
  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      isActive: true,
    }
  })
  
  if (!user || !user.isActive) {
    return { authorized: false, user: null }
  }
  
  if (user.role !== 'ADMIN' && user.role !== 'MODERATOR') {
    return { authorized: false, user }
  }
  
  return { authorized: true, user }
}