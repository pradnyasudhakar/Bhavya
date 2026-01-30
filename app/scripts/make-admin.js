const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const email = 'pradnya@example.com' // Your email
  
  console.log('🔄 Updating user to ADMIN...')
  
  const user = await prisma.user.update({
    where: { email },
    data: { 
      role: 'ADMIN',
      isActive: true 
    }
  })
  
  console.log('✅ User updated successfully!')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('📧 Email:', user.email)
  console.log('👤 Role:', user.role)
  console.log('✓ Active:', user.isActive)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
}

main()
  .catch((e) => {
    console.error('❌ Error:', e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })