'use client';

import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";

export default function JoinGroupCard({ toggleModal }: { toggleModal: () => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };
  const { pending } = useFormStatus();

  return (
    <main className="bg-deeperBlue rounded-lg p-6 md:w-1/3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col my-2">
          <label className="text-xs text-white mb-2 focus:text-gradientLeftBlue">
            Entrance Key
          </label>
          <input
            type="text"
            {...register("entranceKey", { required: true })}
            className="outline-none p-2 rounded-md text-black focus:outline-gradientLeftBlue focus:ring-0"
          />
          {errors.entranceKey && (
            <span className="text-xs text-red-600 py-1">
              This field is required
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
            value={pending ? "Joining..." : "Join Group"}
            disabled={isSubmitting}
            className="bg-gradient-to-tr from-gradientLeftBlue to-gradientRightBlue p-2 rounded-md mt-3 text-white text-sm font-bold cursor-pointer"
          />
        </div>
      </form>
    </main>
  );
}