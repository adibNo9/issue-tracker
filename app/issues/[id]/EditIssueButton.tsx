import Link from "next/link";

import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Link href={`/issues/edit/${issueId}`}>
      <Button color="indigo" className="w-full">
        <Pencil2Icon />
        Edit Issue
      </Button>
    </Link>
  );
};

export default EditIssueButton;
