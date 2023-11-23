import React from "react";

import Link from "next/link";

import { Button } from "@radix-ui/themes";

const issues = () => {
  return (
    <div>
      <Link href="/issues/new">
        <Button className="cursor-pointer">New Issue</Button>
      </Link>
    </div>
  );
};

export default issues;
