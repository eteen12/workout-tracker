import prisma from "../../../lib/prisma"

export async function POST(request) {
  try {
    const { name, routineId } = await request.json()

    if (!name || !routineId) {
      console.alert("From the backend: you didnt add a name or a workout")
    }
    console.log(name, routineId)

    const workout = await prisma.workout.create({
      data: {
        name: name,
        routineId: Number(routineId),
      },
    })

    return new Response(JSON.stringify(workout), { status: 201 })
  } catch (error) {
    console.error("error creating workout", error)
    return new Response("Error creating the workout", { status: 500 })
  }
}
