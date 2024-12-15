import Sets from "../../../components/sets/sets"

export default async function Page({ params }) {
  const { id } = await params

  return (
    <div>
      <Sets id={id} />
    </div>
  )
}
