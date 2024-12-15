import prisma from "../../../../lib/prisma"

export async function GET(req, { params }) {
  const { id } = await params

  try {
    const routine = await prisma.routine.findUnique({
      where: { id: Number(id) },
      select: {
        category: true,
        workouts: {
          select: {
            id: true,
            name: true,
            sets: {
              select: {
                id: true,
                weight: true,
                reps: true,
              },
            },
          },
        },
      },
    })

    if (!routine) {
      return new Response(JSON.stringify({ error: "Routine not found" }), {
        status: 404,
      })
    }

    return new Response(JSON.stringify(routine), { status: 200 })
  } catch (error) {
    console.log("Error in the backend:", error)
    return new Response(
      JSON.stringify({
        error: "Error fetching routine",
        details: error.message,
      }),
      { status: 500 },
    )
  }
}
