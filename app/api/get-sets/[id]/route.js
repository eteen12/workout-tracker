import prisma from "../../../../lib/prisma"

export async function GET(req, { params }) {
  const { id } = params

  try {
    console.log(id)

    const sets = await prisma.set.findMany({
      where: {
        workoutId: Number(id),
      },
      select: {
        id: true,
        weight: true,
        reps: true,
        date: true,
      },
    })

    console.log("Fetched sets:", sets)

    return new Response(JSON.stringify(sets), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("Error fetching sets", { status: 500 })
  }
}
