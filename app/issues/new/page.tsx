"use client";
import "easymde/dist/easymde.min.css";

import SimpleMDE from "react-simplemde-editor";

import { Button, TextField } from "@radix-ui/themes";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
