import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createPostSchema } from '@/lib/validations/post'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/utils/api-response'

// GET: All posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const page = Number(searchParams.get('page') || 1)
    const limit = Number(searchParams.get('limit') || 10)

    const skip = (page - 1) * limit

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          published: true,
          createdAt: true,
          author: {
            select: {
              name: true,
              email: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      }),

      prisma.post.count()
    ])

    return successResponse({
      posts,
      pagination: {
        total,
        totalPages: Math.ceil(total / limit),
        page,
        limit
      }
    })

  } catch (error) {
    console.error(error)
    return errorResponse('Error fetching posts', 500)
  }
}


// POST: Create post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validation = createPostSchema.safeParse(body)
    if (!validation.success) {
      return validationErrorResponse(validation.error.format())
    }

    const { title, content, published, authorId } = validation.data
    
    // Check if author exists
    const author = await prisma.user.findUnique({
      where: { id: authorId }
    })
    
    if (!author) {
      return errorResponse('Author not found', 404)
    }

    const post = await prisma.post.create({
      data: {
        title,
        content: content || null,
        published,
        authorId
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })
    
    return successResponse(post, 201)
  } catch (error) {
    console.error('Error creating post:', error)
    return errorResponse('Error creating post', 500)
  }
}