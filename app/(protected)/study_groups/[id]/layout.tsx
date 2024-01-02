import Hero from "@/app/components/individual-study-group/hero";
import GroupUpperBar from "@/app/components/individual-study-group/upperBar";
import studyGroup from "@/lib/models/create-group-schema";
import connectMongoDB from "@/lib/mongoDB/mongo-client";

export default async function IndividualStudyGroupLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    id: string;
  };
}) {
  const { id } = params;
  console.log(id);
  await connectMongoDB();
  const result = await studyGroup.findById({ _id: id });
  return (
    <main>
      <GroupUpperBar />
      <div className="w-[90%] mx-auto">
        <Hero group={result} />
        <div>{children}</div>
      </div>
    </main>
  );
}
