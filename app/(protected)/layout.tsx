import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function protectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid h-[100dvh] grid-rows-[auto_1fr]">
      <Navbar />
      <section className="flex flex-col h-full md:flex-row md:overflow-hidden">
        <div className="hidden basis-1/6 md:block">
          <Sidebar />
        </div>
        <div className=" flex-grow md:overflow-y-auto bg-deepestBlue">{children}</div>
      </section>
    </main>
  );
}
