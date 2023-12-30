import StudyGroupCard from "../components/cards/studyGroupCard";
import CreateGroup from "../components/createGroup";

export default function StudyGourps() {
  return (
    <main className="h-full shadow-inner p-2 shadow-deepestBlue">
      <CreateGroup />
      {/* <div className=" w-[90%] mt-6 mx-auto grid grid-cols-3 gap-">
        <StudyGroupCard />
        <StudyGroupCard />
        <StudyGroupCard />
      </div> */}
    </main>
  );
}
