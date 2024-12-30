import Link from "next/link";

export function ButtonLink({ link, text }) {
  return (
    <Link
      href={link}
      className={`inline-flex items-center justify-center gap-x-2 rounded-full bg-blue-600 px-6 py-2`}
    >
      {text}
    </Link>
  );
}

export function ButtonAction({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-x-2 rounded-full bg-blue-600 px-6 py-2`}
    >
      {text}
    </button>
  );
}
