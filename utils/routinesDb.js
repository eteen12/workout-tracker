import { openWorkoutDb } from "./indexedDb";


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
  await db.delete("routines", id);
};
