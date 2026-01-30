import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Testing database connection...')
  
  try {
    await prisma.$connect()
    console.log('✅ Database connected successfully!')
    
    // Count records
    const userCount = await prisma.user.count()
    const postCount = await prisma.post.count()
    
    console.log(`📊 Users: ${userCount}, Posts: ${postCount}`)
  } catch (error) {
    console.error('❌ Database connection failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()