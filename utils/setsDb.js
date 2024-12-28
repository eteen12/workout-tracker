import { openWorkoutDb } from "./indexedDb";

export const createSet = async (set) => {
  const db = await openWorkoutDb();
  await db.add("sets", set);
};

export const getSets = async () => {
  const db = await openWorkoutDb();
  return await db.getAll("sets");
};

export const updateSet = async (id, updateSet) => {
  const db = await openWorkoutDb();
  await db.put("sets", { ...updateSet, id });
};

export const deleteSet = async (id) => {
  const db = await openWorkoutDb();
  await db.delete("sets", id);
};
