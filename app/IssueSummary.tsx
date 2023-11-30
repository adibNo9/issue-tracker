import Link from 'next/link';

import { Status } from '@prisma/client';
import {
  Card,
  Flex,
  Text,
} from '@radix-ui/themes';

interface Props {
  open: number;
  closed: number;
  inProgress: number;
}

const IssueSummary = ({ open, closed, inProgress }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open issues", value: open, status: "OPEN" },
    { label: "Closed issues", value: closed, status: "CLOSED" },
    { label: "In-Progress issues", value: inProgress, status: "IN_PROGRESS" },
  ];

  return (
    <Flex gap="2">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-bold"
              href={`/issues/list/?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text size="5" weight="bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
