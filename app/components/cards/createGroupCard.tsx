import { CreateGroup } from "@/utils/zod_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

export default function CreateGroupCard({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(CreateGroup),
    defaultValues: {
      groupName: "",
      topicName: "",
      entranceKey: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof CreateGroup>> = (values) => {
    console.log(values);
  };

  return (
    <main className="w-1/3 bg-deeperBlue rounded-lg p-6">
      <h1 className="text-center text-white text-lg font-bold ">
        Create Study Group
      </h1>
      <section className="mx-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col my-2">
            <label htmlFor="groupName" className="text-xs text-white mb-2">
              Group Name
            </label>
            <input
              type="text"
              name="groupName"
              {...register("groupName", { required: true })}
              className="p-2 rounded-md focus:outline-none focus:outline-gradientLeftBlue focus:ring-0"
            />
            {errors.groupName && (
              <span className="text-xs text-red-600 py-1">
                {errors.groupName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="topicName" className="text-xs text-white mb-2">
              Topic Name
            </label>
            <input
              type="text"
              name="topicName"
              {...register("topicName", { required: true })}
              className="outline-none p-2 rounded-md focus:outline-gradientLeftBlue focus:ring-0"
            />
            {errors.topicName && (
              <span className="text-xs text-red-600 py-1">
                {errors.topicName.message}
              </span>
            )}
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
              {...register("entranceKey", { required: true })}
              className="outline-none p-2 rounded-md focus:outline-gradientLeftBlue focus:ring-0"
            />
            {errors.entranceKey && (
              <span className="text-xs text-red-600 py-1">
                {errors.entranceKey.message}
              </span>
            )}
          </div>
          <div className="flex justify-end items-center gap-2">
            <button
              onClick={toggleModal}
              className="p-2 rounded-md mt-3 text-white text-sm font-bold hover:bg-deepBlue  "
            >
              Cancel
            </button>
            <input
              type="submit"
              value="Create Group"
              disabled={isSubmitting}
              className="bg-gradient-to-tr from-gradientLeftBlue to-gradientRightBlue p-2 rounded-md mt-3 text-white text-sm font-bold cursor-pointer"
            />
          </div>
        </form>
      </section>
    </main>
  );
}
