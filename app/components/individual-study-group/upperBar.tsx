import Link from "next/link";

export default function GroupUpperBar() {
  return (
    <main className=" flex items-center gap-5 text-white p-2 bg-deepBlue bg-opacity-40 mb-2">
      <Link
        href={`challanges`}
        className=" text-xs px-2 cursor-pointer"
      >
        Challanges
      </Link>
      <div className=" text-xs px-2 cursor-pointer">Leaderboard</div>
      <div className=" text-xs px-2 cursor-pointer">Settings</div>
    </main>
  );
}