import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function protectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="basis-1/6 ">
          <Sidebar />
        </div>
        <div className="basis-5/6 flex-grow md:overflow-y-auto">
          {children}
        </div>
      </section>
    </main>
  );
}
