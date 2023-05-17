import type { FC, PropsWithChildren } from "react";

import styles from "./styles.module.css";

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.contentLayout}>{children}</div>;
};

export default ContentLayout;
