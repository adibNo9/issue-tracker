import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" />
      <Skeleton height="23rem" className="mt-3" />
    </Box>
  );
};

export default IssueFormSkeleton;
