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
