import { openWorkoutDb } from "./indexedDb";

export const addWorkout = async (workout) => {
  const db = await openWorkoutDb();
  await db.add("workouts", workout);
};

export const getWorkouts = async (routineId) => {
  const db = await openWorkoutDb();
  const tx = db.transaction("workouts", "readonly");
  const store = tx.objectStore("workouts");
  const index = store.index("by_routine");
  return await index.getAll(routineId);
};

export const updateWorkout = async (id, updateWorkout) => {
  const db = await openWorkoutDb();
  await db.put("workouts", { ...updateWorkout, id });
};

export const deleteWorkout = async (id) => {
  const db = await openWorkoutDb();
  // await db.delete("workouts", id);
  const tx = db.transaction(["workouts", "sets"], "readwrite");
  const workoutsStore = tx.objectStore("workouts");
  const setsStore = tx.objectStore("sets");

  try {
    await workoutsStore.delete(id);

    const index = setsStore.index("by_workout");
    const setsToDelete = await index.getAllKeys(id);
    for (const setId of setsToDelete) {
      console.log("DELETING THIS MF:", setId);
      await setsStore.delete(setId);
    }

    const setsAfterDelete = await setsStore.getAll();
    console.log("Sets after deletion:", setsAfterDelete);
  } catch (error) {
    console.log("ERROR DELETING THE SET MATE:", error);
  }
};

// indexedDB.deleteDatabase('WorkoutTrackerDB');
