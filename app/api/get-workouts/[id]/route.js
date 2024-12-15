import prisma from "../../../../lib/prisma"

export async function GET(req, { params }) {
  const { id } = params // Assumes you're passing the ID in the URL

  try {
    const routine = await prisma.routine.findUnique({
      where: { id: Number(id) }, // Find a routine by ID
      select: {
        category: true,
        description: true,
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
// export async function GET(req, { params }) {
//     try {
//       const dummyData = {
//         workouts: [
//           {
//             id: 1,
//             name: "Workout 1",
//             sets: [{ id: 1, weight: 20, reps: 10 }],
//           },
//         ],
//       }
//       return new Response(JSON.stringify(dummyData), { status: 200 })
//     } catch (error) {
//       console.error("Error in API handler:", error)
//       return new Response(
//         JSON.stringify({
//           error: "Internal server error",
//           details: error.message,
//         }),
//         {
//           status: 500,
//           headers: { "Content-Type": "application/json" },
//         },
//       )
//     }
//   }
