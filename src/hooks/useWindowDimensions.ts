import { useContext } from "react";

import { AppContext } from "../context";

const useWindowDimensions = () => {
  const { windowWidth: width, windowHeight: height } = useContext(AppContext);

  return { width, height };
};

export default useWindowDimensions;
