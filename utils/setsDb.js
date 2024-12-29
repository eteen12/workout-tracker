import { openWorkoutDb } from "./indexedDb";

export const addSet = async (set) => {
  const db = await openWorkoutDb();
  const newSet = {
    ...set,
    date: set.date || new Date().toISOString(),
  };
  await db.add("sets", newSet);
};

export const getSets = async (workoutId) => {
  const db = await openWorkoutDb();
  const tx = db.transaction("sets", "readonly");
  const store = tx.objectStore("sets");
  const index = store.index("by_workout");
  const sets = await index.getAll(workoutId);

  return sets.map((set) => ({
    ...set,
    date: new Date(set.date),
  }));
};

export const updateSet = async (id, updateSet) => {
  const db = await openWorkoutDb();
  const existingSet = await db.get("sets", id);

  const updatedSet = {
    ...existingSet,
    ...updateSet,
    date: updateSet.date || existingSet.date,
  };

  await db.put("sets", updatedSet);
};

export const deleteSet = async (id) => {
  const db = await openWorkoutDb();
  await db.delete("sets", id);
};
