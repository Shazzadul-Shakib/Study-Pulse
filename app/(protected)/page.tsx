import connectMongoDB from "@/lib/mongoDB/mongo-client";
import StudyGroupCard from "../components/cards/studyGroupCard";
import CreateGroup from "../components/createGroup";
import studyGroup from "@/lib/models/create-group-schema";

export default async function StudyGourps() {
  await connectMongoDB();
  const studyGroups = await studyGroup.find();
  
  return (
    <main className="h-full shadow-inner p-2 shadow-deepestBlue">
      <CreateGroup props={studyGroups.length} />
      
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
    </main>
  );
}
