"use client";
import "easymde/dist/easymde.min.css";

import { useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

import { Button, Callout, TextField } from "@radix-ui/themes";

interface IssueForm {
  title: string;
  description: string;
}

const IssueForm = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<IssueForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-5" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occurred.");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description " {...field} />
          )}
        ></Controller>

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default IssueForm;
