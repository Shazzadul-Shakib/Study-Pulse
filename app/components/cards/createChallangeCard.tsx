'use client';
import { CreateChallange } from "@/utils/zod_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

export default function CreateChallangeCard({
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
    resolver: zodResolver(CreateChallange),
    defaultValues: {
  challangeName: "",
  completionTime: 0,
  questionQuantity: 0,
},
  });
  const { pending } = useFormStatus();

  const onSubmit: SubmitHandler<z.infer<typeof CreateChallange>> = (values) => {
    const parsedValues = {
      ...values,
      completionTime: parseInt(values.completionTime, 10),
      questionQuantity: parseInt(values.questionQuantity, 10),
    };

    console.log(parsedValues);
    // CreategroupAction(values);
    // reset();
    // toggleModal();
  };

  return (
    <main className=" bg-deeperBlue rounded-lg p-6 md:w-1/3">
      <h1 className="text-center text-white text-lg font-bold ">
        Create Challange
      </h1>
      <section className="mx-2 md:mx-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col my-2">
            <label className="text-xs text-white mb-2">Challange Name</label>
            <input
              type="text"
              {...register("challangeName", { required: true })}
              className="p-2 rounded-md focus:outline-none text-black focus:outline-gradientLeftBlue focus:ring-0"
            />
            {errors.challangeName && (
              <span>{errors.challangeName.message}</span>
            )}
          </div>
          <div className="flex flex-col my-2">
            <label className="text-xs text-white mb-2">Time To Complete</label>
            <input
              type="number"
              {...register("completionTime", { required: true })}
              className="outline-none p-2 rounded-md text-black focus:outline-gradientLeftBlue focus:ring-0"
            />
            {errors.completionTime && (
              <span>{errors.completionTime.message}</span>
            )}
          </div>
          <div className="flex flex-col my-2">
            <label className="text-xs text-white mb-2 focus:text-gradientLeftBlue">
              Question Quantity
            </label>
            <input
              type="number"
              {...register("questionQuantity", { required: true })}
              className="outline-none p-2 rounded-md text-black focus:outline-gradientLeftBlue focus:ring-0"
            />
            {errors.questionQuantity && (
              <span>{errors.questionQuantity.message}</span>
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
              value={pending ? "Creating..." : "Create Challange"}
              disabled={isSubmitting}
              className="bg-gradient-to-tr from-gradientLeftBlue to-gradientRightBlue p-2 rounded-md mt-3 text-white text-sm font-bold cursor-pointer"
            />
          </div>
        </form>
      </section>
    </main>
  );
}
