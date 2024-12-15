import Workouts from "../../../components/workouts"

export default async function Page({ params }) {
  const { id } = await params

  return <Workouts id={id} />
}
