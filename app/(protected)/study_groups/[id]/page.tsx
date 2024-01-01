import Hero from "@/app/components/individual-study-group/hero";
import studyGroup from "@/lib/models/create-group-schema";
import connectMongoDB from "@/lib/mongoDB/mongo-client";

export default async function IndividualStudyGroup({ params }: { para: string }) {
  const { id } = params;

  await connectMongoDB();
  const result = await studyGroup.findById({ _id: id });

  return (
    <main>
      <Hero group={result} />
    </main>
  );
}