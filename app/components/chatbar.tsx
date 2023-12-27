import { MdMessage } from "react-icons/md";
import IndividualChat from "./individualChat";

export default function Chatbar() {
  return (
    <main className="bg-deepBlue px-3 py-4 h-full flex flex-col justify-between rounded-l-md ">
      <section>
        <div className="text-sm text-white flex items-center gap-2">
          <span className="text-gradientRightBlue"><MdMessage/></span>
          <h1>General</h1>
        </div>
      </section>
      <hr className="my-2" />
      <section className="overflow-auto no-scrollbar">
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
      </section>
    </main>
  );
}
