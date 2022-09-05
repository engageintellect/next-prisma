
import prisma from '../../lib/prisma.ts';


export default async function handler(req, res) {
  const posts = await prisma.users.findMany();

  res.status(200).json({ posts });
}