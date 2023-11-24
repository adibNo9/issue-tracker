"use client";
import "easymde/dist/easymde.min.css";

import { useState } from "react";

import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { ErrorMessage, Skeleton, Spinner } from "@/app/components";
import { issueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => <Skeleton height="23rem" className="mt-3" />,
});

type IssueFormInterface = z.infer<typeof issueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueFormInterface>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const submitHandler = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (issue) await axios.patch(`/api/issues/${issue.id}`, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-5" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="max-w-xl space-y-3" onSubmit={submitHandler}>
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title}
            placeholder="Title"
            {...register("title")}
          />
        </TextField.Root>

        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description " {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button>
          {issue ? "Update Issue" : "Submit New Issue"}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
