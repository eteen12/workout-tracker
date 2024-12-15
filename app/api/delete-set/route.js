import prisma from "../../../lib/prisma"

export async function DELETE(request) {
  try {
    const { set } = await request.json()

    const deletedSet = await prisma.set.delete({
      where: {
        id: parseInt(set),
      },
    })
    return new Response(JSON.stringify(deletedSet), { status: 200 })
  } catch (error) {
    return new Response("Error deleting the set", { status: 500 })
  }
}
