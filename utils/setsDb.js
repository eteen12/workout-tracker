import { openWorkoutDb } from "./indexedDb";

export const addSet = async (set) => {
  const db = await openWorkoutDb();
  const newSet = {
    ...set,
    date: set.date || new Date().toISOString(),
  };
  await db.add("sets", newSet);
  console.log("Set added:", newSet);
};

export const getSets = async (workoutId) => {
  const db = await openWorkoutDb();
  const tx = db.transaction("sets", "readonly");
  const store = tx.objectStore("sets");
  const index = store.index("by_workout");
  const sets = await index.getAll(workoutId);
  console.log("sets", sets);

  return sets.map((set) => ({
    ...set,
    date: new Date(set.date),
  }));
};

export const getWorkoutName = async (workoutId) => {
  console.log("Fetching workout name...");
  const db = await openWorkoutDb();
  const tx = db.transaction("workouts", "readonly");
  const store = tx.objectStore("workouts");
  const workout = await store.get(workoutId);
  if (workout) {
    return workout.name;
  } else {
    console.log(`No workout found with ID: ${workoutId}`);
    return null;
  }
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

// export const deleteAllSets = async (id) => {
//   const db = await openWorkoutDb();
//   const tx = db.transaction("sets", "readwrite");
//   const store = tx.objectStore("sets");
//   const index = store.index("by_workout");
//   const sets = await index.getAll(id);

//   console.log("sets", sets);

//   if (sets.length === 0) {
//     console.log("No sets found for this workout ID.");
//     return;
//   }

//   const deleteTx = db.transaction("sets", "readwrite");
//   const deleteStore = deleteTx.objectStore("sets");

//   for (const set of sets) {
//     console.log("Deleting set with ID:", set.id);
//     await deleteStore.delete(set.id);
//     console.log(`Deleted set with ID: ${set.id}`);
//   }

//   await deleteTx.done;
//   await tx.done;
// };
