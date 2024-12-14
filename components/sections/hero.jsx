"use client"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { IoIosList } from "react-icons/io"
import { IoAdd } from "react-icons/io5"

const people = [
  {
    name: "Leslie Alexander",
    email: "",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <h1 className="mb-1 text-xl text-slate-200">Routines</h1>
      </div>
      <ul
        role="list"
        className="bg divide-y divide-neutral-800 overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-900/5"
      >
        {/*ADD NEW ROUTINE BUTTON*/}
        <li className="relative flex gap-x-4 px-4 py-2 hover:bg-gray-50 sm:px-6">
          <button>
            <IoAdd className="text-3xl text-blue-600" />
          </button>
          <h2 className="text-blue-600">Add New Routine</h2>
        </li>
        {people.map((person) => (
          <li
            key={person.name}
            className="relative flex justify-between gap-x-6 px-4 py-2 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex min-w-0 gap-x-4">
              <IoIosList className="size-8 flex-none text-blue-600" />

              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-slate-200">
                  <a href={person.href}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {person.name}
                  </a>
                </p>
                <p className="mt-1 flex text-xs/5 text-gray-400">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative truncate hover:underline"
                  >
                    {person.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm/6 text-slate-200">{person.role}</p>
                {person.lastSeen ? (
                  <p className="mt-1 text-xs/5 text-gray-400">
                    Last seen{" "}
                    <time dateTime={person.lastSeenDateTime}>
                      {person.lastSeen}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="size-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs/5 text-gray-400">Online</p>
                  </div>
                )}
              </div>
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
