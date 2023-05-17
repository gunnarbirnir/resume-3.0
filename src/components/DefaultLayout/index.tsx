import type { FC, PropsWithChildren } from "react";

import styles from "./styles.module.css";

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.defaultLayout}>{children}</div>;
};

export default DefaultLayout;
