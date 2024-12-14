import prisma from "../../../lib/prisma"

export const POST = async (request) => {
  try {
    const { category, description } = await request.json()

    const routine = await prisma.routine.create({
      data: {
        category,
        description,
      },
    })
    return new Response(JSON.stringify(routine), { status: 200 })
  } catch (error) {
    return new Response("Error creating the routine", { status: 500 })
  }
}
