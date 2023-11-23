import React from "react";

import Link from "next/link";

import { Button } from "@radix-ui/themes";

const IssueActions = () => {
  return (
    <div className="mb-5">
      <Link href="/issues/new">
        <Button>New Issue</Button>
      </Link>
    </div>
  );
};

export default IssueActions;
