import connectMongoDB from "@/lib/mongoDB/mongo-client";
import StudyGroupCard from "../components/cards/studyGroupCard";
import CreateGroup from "../components/createGroup";
import studyGroup from "@/lib/models/create-group-schema";
import UpperBar from "../components/upperBar";

export default async function Home() {
  await connectMongoDB();
  const studyGroups = await studyGroup.find();

  return (
    <main className="h-full shadow-inner p-2 shadow-deepestBlue">
      <CreateGroup props={studyGroups.length} />
      <section
        className={`${studyGroups.length ? "flex" : "hidden"} flex flex-col`}
      >
        <UpperBar />
        <div className="  mt-6 mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 md:w-[90%] md:gap-0">
          {studyGroups.map((studyGroup) => {
            return <StudyGroupCard key={studyGroup._id} group={studyGroup} />;
          })}
        </div>
      </section>
    </main>
  );
}
