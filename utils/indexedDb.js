import { openDB } from "idb";

export const openWorkoutDb = async () => {
  return openDB("WorkoutTrackerDB", 2, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("routines")) {
        db.createObjectStore("routines", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
      if (!db.objectStoreNames.contains("workouts")) {
        db.createObjectStore("workouts", {
          keyPath: "id",
          autoIncrement: true,
        }).createIndex("by_routine", "routineId");
      }
      if (!db.objectStoreNames.contains("sets")) {
        db.createObjectStore("sets", {
          keyPath: "id",
          autoIncrement: true,
        }).createIndex("by_workout", "workoutId");
      }
    },
  });
};

export const exportDataToJSON = async () => {
  const db = await openWorkoutDb();
  const tx = db.transaction(["routines", "workouts", "sets"], "readonly");
  const routinesStore = tx.objectStore("routines");
  const workoutsStore = tx.objectStore("workouts");
  const setsStore = tx.objectStore("sets");

  const routines = await routinesStore.getAll();
  const workouts = await workoutsStore.getAll();
  const sets = await setsStore.getAll();

  const data = { routines, workouts, sets };

  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "yourWorkoutData.json";
  link.click();
};

export const importDataFromJSON = async (file) => {
  const reader = new FileReader();
  reader.onload = async (event) => {
    const data = JSON.parse(event.target.result);

    const db = await openWorkoutDb();
    const tx = db.transaction(["routines", "workouts", "sets"], "readwrite");
    const routinesStore = tx.objectStore("routines");
    const workoutsStore = tx.objectStore("workouts");
    const setsStore = tx.objectStore("sets");

    try {
      console.log("Importing routines:", data.routines);
      console.log("Importing workouts:", data.workouts);
      console.log("Importing sets:", data.sets);

      await Promise.all([
        ...data.routines.map((routine) => routinesStore.put(routine)),
        ...data.workouts.map((workout) => workoutsStore.put(workout)),
        ...data.sets.map((set) => setsStore.put(set)),
      ]);

      await tx.done;

      console.log("Data imported successfully!");
    } catch (error) {
      console.error("Error during import:", error);
    }
  };
  reader.readAsText(file);
};
