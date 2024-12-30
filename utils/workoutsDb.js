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
  await db.delete("workouts", id);

};
