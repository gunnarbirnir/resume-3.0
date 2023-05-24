import { createContext } from "react";

const AppContext = createContext<{ windowWidth: number; windowHeight: number }>(
  {
    windowWidth: 0,
    windowHeight: 0,
  }
);

export default AppContext;
