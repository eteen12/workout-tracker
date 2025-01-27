import { openWorkoutDb } from "./indexedDb";
import { deleteWorkout } from "./workoutsDb";

export const addRoutine = async (routine) => {
  const db = await openWorkoutDb();
  await db.add("routines", routine);
};

export const getRoutines = async () => {
  const db = await openWorkoutDb();
  return await db.getAll("routines");
};

export const updateRoutine = async (id, updateRoutine) => {
  const db = await openWorkoutDb();
  await db.put("routines", { ...updateRoutine, id });
};

export const deleteRoutine = async (id) => {
  const db = await openWorkoutDb();
  // await db.delete("routines", id);
  const tx = db.transaction(["routines", "workouts", "sets"], "readwrite");
  const routinesStore = tx.objectStore("routines");
  const workoutsStore = tx.objectStore("workouts");
  const setsStore = tx.objectStore("sets");

  try {
    await routinesStore.delete(id);
    console.log(`THIS FUCKING ROUTINE IS DELETED: ${id}`);
    const index = workoutsStore.index("by_routine");
    const workoutsToDelete = await index.getAllKeys(id);

    for (const workoutId of workoutsToDelete) {
      console.log("Guess whos deleting the fucking workout", workoutId);
      await deleteWorkout(workoutId);
    }
  } catch (error) {
    console.log("Routines calls the fucking error", error);
  }
};
