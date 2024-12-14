import prisma from "../../../lib/prisma"

export async function DELETE(request) {
  try {
    const { id } = await request.json()

    const deletedRoutine = await prisma.routine.delete({
      where: {
        id: parseInt(id),
      },
    })
    return new Response(JSON.stringify(deletedRoutine), { status: 200 })
  } catch (error) {
    return new Response("Error deleting the routine", { status: 500 })
  }
}
