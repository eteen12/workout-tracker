import DisplayWorkouts from "@/workouts/displayWorkouts";

export default async function Page({ params }) {
  const { id } = await params;
  return (
    <div>
      <DisplayWorkouts routineId={id} />
    </div>
  );
}
