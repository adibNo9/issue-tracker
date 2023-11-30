import React from "react";

import Link from "next/link";

import { Button, Flex } from "@radix-ui/themes";

import IssueFilter from "./IssueFilter";

const IssueActions = () => {
  return (
    <Flex justify="between">
      <IssueFilter />
      <Link href="/issues/new">
        <Button>New Issue</Button>
      </Link>
    </Flex>
  );
};

export default IssueActions;
