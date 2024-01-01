import GroupUpperBar from "@/app/components/individual-study-group/upperBar";


export default function IndividualStudyGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <GroupUpperBar />
      <div className="w-[90%] mx-auto">{children}</div>
    </main>
  );
}
