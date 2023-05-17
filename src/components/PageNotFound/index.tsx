import type { FC } from "react";

import DefaultLayout from "../DefaultLayout";
import styles from "./styles.module.css";

const PageNotFound: FC = () => {
  return (
    <div className={styles.pageNotFound}>
      <DefaultLayout>
        <h1>Page not Found</h1>
        <p>
          Click <a href="/">here</a> to go back to the main page.
        </p>
      </DefaultLayout>
    </div>
  );
};

export default PageNotFound;
