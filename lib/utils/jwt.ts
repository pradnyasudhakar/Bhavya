import jwt, { Secret } from 'jsonwebtoken'

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'fallback-secret-key'
const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN || '7d') as any

export interface JwtPayload {
  userId: number
  email: string
}

export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  })
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload
  } catch (error) {
    console.error('JWT verification failed:', error)
    return null
  }
}

export function decodeToken(token: string): JwtPayload | null {
  try {
    return jwt.decode(token) as JwtPayload
  } catch (error) {
    return null
  }
}
