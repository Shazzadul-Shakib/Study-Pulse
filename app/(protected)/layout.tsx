import Chatbar from "../components/chatbar";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function protectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid h-[100dvh] grid-rows-[auto_1fr] gap-0.5">
      <Navbar />
      <section className="flex flex-col h-full md:flex-row md:overflow-hidden">
        <div className="basis-.5/6 mr-2">
          <Sidebar />
        </div>
        <div className="basis-4/6 flex-grow md:overflow-y-auto">{children}</div>
        <div className="basis-1/6 ">
          <Chatbar />
        </div>
      </section>
    </main>
  );
}
