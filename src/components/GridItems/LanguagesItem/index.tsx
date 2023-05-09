import type { FC } from "react";
import { Fragment } from "react";

import languages from "../../../assets/json/languages.json";
import { Card } from "../../elements";
import styles from "./styles.module.css";

const LanguagesItem: FC = () => {
  return (
    <Card>
      <div className={styles.languageItem}>
        {languages.map((language, index) => (
          <Fragment key={language.code}>
            <div className={styles.langContainer}>
              <p className={styles.langCode}>{language.code}</p>
              <div>
                <p className={styles.langTitle}>{language.title}</p>
                <p className={styles.langLevel}>{language.level}</p>
              </div>
            </div>

            {index !== languages.length - 1 && (
              <div className={styles.langDivider} />
            )}
          </Fragment>
        ))}
      </div>
    </Card>
  );
};

export default LanguagesItem;
