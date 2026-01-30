import { NextRequest } from 'next/server'
import { verifyToken, JwtPayload } from '@/lib/utils/jwt'

export interface AuthRequest extends NextRequest {
  user?: JwtPayload
}

export function getTokenFromRequest(request: NextRequest): string | null {
  // Check Authorization header
  const authHeader = request.headers.get('authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }
  
  // Check cookies
  const cookies = request.cookies.get('token')
  if (cookies) {
    return cookies.value
  }
  
  return null
}

export function authenticateRequest(request: NextRequest): JwtPayload | null {
  const token = getTokenFromRequest(request)
  
  if (!token) {
    return null
  }
  
  return verifyToken(token)
}