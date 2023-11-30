"use client";

import { Select } from "@radix-ui/themes";

const AssigneeIssue = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content position="popper" sideOffset={5}>
        <Select.Group>
          <Select.Label>Suggested</Select.Label>
          <Select.Item value="1">Adib Mokhtari</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeIssue;
