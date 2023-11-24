import Link from "next/link";

import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Link href={`/issues/${issueId}/edit`}>
      <Button color="red" className="w-full">
        <TrashIcon />
        Delete Issue
      </Button>
    </Link>
  );
};

export default DeleteIssueButton;
