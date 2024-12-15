import prisma from "../../../lib/prisma"

export async function POST(req) {
  try {
    const { reps, weight, workoutId } = await req.json()

    if (!reps || !weight || !workoutId) {
      console.log("From the backend: you need to add reps and weight")
    }

    const set = await prisma.set.create({
      data: {
        weight: Number(weight),
        reps: Number(reps),
        workoutId: Number(workoutId),
      },
    })

    console.log("Created set:", set)

    return new Response(JSON.stringify(set), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response("Error creating the new set", { status: 500 })
  }
}
