import { CreategroupAction } from "@/actions/createGroup";
import { CreateGroup } from "@/utils/zod_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "react-dom";
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
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(CreateGroup),
    defaultValues: {
      groupName: "",
      topicName: "",
      entranceKey: "",
    },
  });
  const { pending } = useFormStatus();

  const onSubmit: SubmitHandler<z.infer<typeof CreateGroup>> = (values) => {
    CreategroupAction(values);
    reset();
    toggleModal();
  };

  return (
    <main className=" bg-deeperBlue rounded-lg p-6 md:w-1/3">
      <h1 className="text-center text-white text-lg font-bold ">
        Create Study Group
      </h1>
      <section className="mx-2 md:mx-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col my-2">
            <label className="text-xs text-white mb-2">Group Name</label>
            <input
              type="text"
              {...register("groupName", { required: true })}
              className="p-2 rounded-md focus:outline-none text-black focus:outline-gradientLeftBlue focus:ring-0"
            />
            {errors.groupName && (
              <span className="text-xs text-red-600 py-1">
                {errors.groupName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col my-2">
            <label className="text-xs text-white mb-2">Topic Name</label>
            <input
              type="text"
              {...register("topicName", { required: true })}
              className="outline-none p-2 rounded-md text-black focus:outline-gradientLeftBlue focus:ring-0"
            />
            {errors.topicName && (
              <span className="text-xs text-red-600 py-1">
                {errors.topicName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col my-2">
            <label className="text-xs text-white mb-2 focus:text-gradientLeftBlue">
              Create Entrance Key
            </label>
            <input
              type="text"
              {...register("entranceKey", { required: true })}
              className="outline-none p-2 rounded-md text-black focus:outline-gradientLeftBlue focus:ring-0"
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
              value={pending ? "Creating..." : "Create Group"}
              disabled={isSubmitting}
              className="bg-gradient-to-tr from-gradientLeftBlue to-gradientRightBlue p-2 rounded-md mt-3 text-white text-sm font-bold cursor-pointer"
            />
          </div>
        </form>
      </section>
    </main>
  );
}
