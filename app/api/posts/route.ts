import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET: Sabhi posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return NextResponse.json({
      success: true,
      data: posts
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Error fetching posts' 
      }, 
      { status: 500 }
    )
  }
}

// POST: Naya post create
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (!body.title || !body.authorId) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Title and authorId are required' 
        }, 
        { status: 400 }
      )
    }

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content || null,
        published: body.published || false,
        authorId: parseInt(body.authorId)
      },
      include: {
        author: true
      }
    })
    
    return NextResponse.json({
      success: true,
      data: post
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Error creating post' 
      }, 
      { status: 500 }
    )
  }
}