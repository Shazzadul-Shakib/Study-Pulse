import Hero from "@/app/components/individual-study-group/hero";
import studyGroup from "@/lib/models/create-group-schema";
import connectMongoDB from "@/lib/mongoDB/mongo-client";

export default async function IndividualStudyGroup({ params }) {
  const { id }:{id:string} = params;
  
  await connectMongoDB();
  const result = await studyGroup.findById({ _id: id });
  const { groupName } = result;
  
  return (
    <main>
      <Hero group={result} />
      
    </main>
  );
}