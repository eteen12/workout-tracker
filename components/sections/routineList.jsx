import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { IoIosList } from "react-icons/io"
import AddRoutine from "./addRoutine"

export default function RoutineList({ routines, addRoutine }) {

  return (
    <div className="flex flex-col">
      <div className="px-4">
        <h1 className="mb-1 text-xl text-slate-200">Routines</h1>
      </div>
      <ul
        role="list"
        className="bg divide-y divide-neutral-800 overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-900/5"
      >
        <AddRoutine addRoutine={addRoutine} />
        {routines.map((routine) => (
          <li
            key={routine.category}
            className="relative flex justify-between gap-x-6 px-4 py-2 sm:px-6"
          >
            <div className="flex min-w-0 gap-x-4">
              <IoIosList className="size-8 flex-none text-blue-600" />

              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-slate-200">
                  <a href={routine.category}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {routine.category}
                  </a>
                </p>
                <p className="mt-1 flex text-xs/5 text-gray-400">
                  {routine.description}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <div className="flex">
                <p className="text-sm text-gray-400">1</p>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}