import prisma from "../../../../lib/prisma"

export async function POST(req, { params }) {
  const { id } = params

  try {
    const { reps, weight } = await req.json()
    console.log(id)

    if (!reps || !weight) {
      console.alert("From the backend: you need to add reps and weight")
    }

    const set = await prisma.set.create({
      data: {
        weight: weight,
        reps: reps,
        workoutId: Number(id),
      },
    })

    console.log("Created set:", set)

    return new Response(JSON.stringify(set), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response("Error creating the new set", { status: 500 })
  }
}
