import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../../lib/utils/password'

const prisma = new PrismaClient()

async function main() {
  const userId = 1 // Change this
  const newPassword = 'pradnya123'
  
  const hashedPassword = await hashPassword(newPassword)
  
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword }
  })
  
  console.log('Password updated successfully!')
}

main()