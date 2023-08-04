// /lib/prisma.ts
import { PrismaClient } from '@prisma/client'

// this help in restrict the connet the prisma instance on every reload so 
// help in create the prisma instance only once and reuse it all over the project
let prisma: PrismaClient

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}
export default prisma