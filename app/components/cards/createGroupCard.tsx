import { ToggleModalHook } from "@/utils/types/types";

export default function CreateGroupCard({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  return (
    <main className="w-1/3 bg-deeperBlue rounded-lg p-6">
      <h1 className="text-center text-white text-lg font-bold ">
        Create Study Group
      </h1>
      <section className="mx-4">
        <div className="flex flex-col my-2">
          <label htmlFor="groupName" className="text-xs text-white mb-2">
            Group Name
          </label>
          <input
            type="text"
            name="groupName"
            className=" p-2 rounded-md focus:outline-none focus:outline-gradientLeftBlue focus:ring-0"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="topicName" className="text-xs text-white mb-2">
            Topic Name
          </label>
          <input
            type="text"
            name="topicName"
            className="outline-none p-2 rounded-md focus:outline-gradientLeftBlue focus:ring-0"
          />
        </div>
        <div className="flex flex-col my-2">
          <label
            htmlFor="entranceKey"
            className="text-xs text-white mb-2 focus:text-gradientLeftBlue"
          >
            Create Entrance Key
          </label>
          <input
            type="text"
            name="entranceKey"
            className="outline-none p-2 rounded-md focus:outline-gradientLeftBlue focus:ring-0"
          />
        </div>
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={toggleModal}
            className="p-2 rounded-md mt-3 text-white text-sm font-bold hover:bg-deepBlue  "
          >
            Cancel
          </button>
          <input
            type="button"
            value="Create Group"
            className="bg-gradient-to-tr from-gradientLeftBlue to-gradientRightBlue p-2 rounded-md mt-3 text-white text-sm font-bold cursor-pointer"
          />
        </div>
      </section>
    </main>
  );
}
