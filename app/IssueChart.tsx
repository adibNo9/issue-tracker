"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { Card } from '@radix-ui/themes';

interface Props {
  statusValues: {
    open: number;
    closed: number;
    inProgress: number;
  };
}

const IssueChart = ({ statusValues: { open, closed, inProgress } }: Props) => {
  const data = [
    { label: "Open", value: open },
    { label: "Closed", value: closed },
    { label: "In Progress", value: inProgress },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={40}
            style={{ fill: "var(--accent-9)" }}
            label={{ position: "top" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
