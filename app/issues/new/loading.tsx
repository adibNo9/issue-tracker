import "react-loading-skeleton/dist/skeleton.css";

import Skeleton from "react-loading-skeleton";

import { Box } from "@radix-ui/themes";

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" className="mb-2" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
