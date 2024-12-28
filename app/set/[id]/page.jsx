import DisplaySets from "@/sets/displaySets";

export default async function Page({ params }) {
  const { id } = await params;
  return (
    <div>
     <DisplaySets id={id} />
    </div>
  );
}
