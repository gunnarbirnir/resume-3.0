import type { FC } from "react";

import ContentLayout from "../ContentLayout";
import styles from "./styles.module.css";

const PageNotFound: FC = () => {
  return (
    <div className={styles.pageNotFound}>
      <ContentLayout>
        <h1>Page not Found</h1>
        <p>
          Click <a href="/">here</a> to go back to the main page.
        </p>
      </ContentLayout>
    </div>
  );
};

export default PageNotFound;
