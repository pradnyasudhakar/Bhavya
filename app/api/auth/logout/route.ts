import { NextRequest } from 'next/server'
import { successResponse } from '@/lib/utils/api-response'

export async function POST(request: NextRequest) {
  // Client-side will remove token
  return successResponse({
    message: 'Logout successful'
  })
}