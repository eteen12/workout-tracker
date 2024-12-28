import { openWorkoutDb } from "./indexedDb";

export const addWorkout = async (workout) => {
  const db = await openWorkoutDb();
  await db.add("workouts", workout);
};

export const getWorkouts = async () => {
  const db = await openWorkoutDb();
  return await db.getAll("workouts");
};

export const updateWorkout = async (id, updateWorkout) => {
  const db = await openWorkoutDb();
  await db.put("workouts", { ...updateWorkout, id });
};

export const deleteWorkout = async (id) => {
  const db = await openWorkoutDb();
  await db.delete("workouts", id);
};

