import prisma from "../../../lib/prisma"

export async function DELETE(request) {
  try {
    const { workoutId } = await request.json()

    const deletedWorkout = await prisma.workout.delete({
      where: {
        id: parseInt(workoutId),
      },
    })
    return new Response(JSON.stringify(deletedWorkout), { status: 200 })
  } catch (error) {
    return new Response("Error deleting the Wo", { status: 500 })
  }
}
