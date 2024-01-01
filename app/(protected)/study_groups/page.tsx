import connectMongoDB from "@/lib/mongoDB/mongo-client";
import studyGroup from "@/lib/models/create-group-schema";
import CreateGroup from "@/app/components/createGroup";
import StudyGroupCard from "@/app/components/cards/studyGroupCard";
import UpperBar from "@/app/components/upperBar";

export default async function StudyGourps() {
  await connectMongoDB();
  const studyGroups = await studyGroup.find();

  return (
    <main className="h-full shadow-inner p-2 shadow-deepestBlue">
      <CreateGroup props={studyGroups.length} />
      <section
        className={`${studyGroups.length ? "flex" : "hidden"} flex flex-col`}
      >
        <UpperBar />
        <div className=" mt-6 mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3  md:w-[90%] md:gap-0">
          {studyGroups.map((studyGroup) => {
            return <StudyGroupCard key={studyGroup._id} group={studyGroup} />;
          })}
        </div>
      </section>
    </main>
  );
}
