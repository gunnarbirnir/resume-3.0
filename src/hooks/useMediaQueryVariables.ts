import { useMemo } from "react";

import { SPACING } from "../constants";
import useMediaQuery from "./useMediaQuery";

const useMediaQueryVariables = () => {
  const { isLargeVertical } = useMediaQuery();

  const dimensions = useMemo(() => {
    return {
      verticalPadding: isLargeVertical ? SPACING._8 : SPACING._7,
    };
  }, [isLargeVertical]);

  return dimensions;
};

export default useMediaQueryVariables;
