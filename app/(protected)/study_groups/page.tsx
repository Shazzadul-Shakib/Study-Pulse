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
        <div className=" w-[90%] mt-6 mx-auto grid grid-cols-3 gap-">
          {studyGroups.map((studyGroup) => {
            return (
              <StudyGroupCard
                key={studyGroup._id}
                groupName={studyGroup.groupName}
                topicName={studyGroup.topicName}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
