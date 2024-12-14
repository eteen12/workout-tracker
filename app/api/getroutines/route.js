import prisma from "../../../lib/prisma"

export async function GET() {
  try {
    const routines = await prisma.routine.findMany({
      select: {
        category: true,
        description: true,
      },
    })
    return new Response(JSON.stringify(routines), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("Error fetching routines", { status: 500 })
  }
}