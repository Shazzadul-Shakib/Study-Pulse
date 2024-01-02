export default function Challanges({ params }) {
  const { id } = params;
  return (
    <main>
      <h1 className="text-white">challangesfor {id}</h1>
    </main>
  );
}