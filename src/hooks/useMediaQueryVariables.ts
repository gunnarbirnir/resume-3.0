import { useMemo } from "react";

import { SPACING } from "../constants";
import useMediaQuery from "./useMediaQuery";

const useMediaQueryVariables = () => {
  const { isMobileOrSmaller } = useMediaQuery();

  const dimensions = useMemo(() => {
    return {
      verticalPadding: isMobileOrSmaller ? SPACING._5 : SPACING._7,
    };
  }, [isMobileOrSmaller]);

  return dimensions;
};

export default useMediaQueryVariables;
