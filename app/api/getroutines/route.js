import prisma from "../../../lib/prisma"

export async function GET() {
  try {
    const routines = await prisma.routine.findMany({
      select: {
        category: true,
        description: true,
        id: true,
        workouts: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    const routinesWithCount = routines.map((routine) => ({
      ...routine,
      workoutCount: routine.workouts.length,
    }))

    return new Response(JSON.stringify(routinesWithCount), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("Error fetching routines", { status: 500 })
  }
}
