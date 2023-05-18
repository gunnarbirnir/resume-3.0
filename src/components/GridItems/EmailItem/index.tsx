import type { FC } from "react";
import clsx from "clsx";

import { useIsLoading, useHandleCopy } from "../../../hooks";
import Card from "../../Card";
import Icon from "../../Icon";
import FadeIn from "../../FadeIn";
import styles from "./styles.module.css";

const EMAIL = "gunnarbirnir@gmail.com";

const EmailItem: FC = () => {
  const isLoading = useIsLoading();
  const [copyActive, handleCopy] = useHandleCopy();

  return (
    <FadeIn>
      <Card onClick={!isLoading ? () => handleCopy(EMAIL) : undefined}>
        <div className={styles.emailItem}>
          <Icon.Mail />
          <div>
            <p className={styles.emailText}>{EMAIL}</p>
            <p
              className={clsx(styles.clickText, {
                [styles.disabledClickText]: isLoading,
              })}
            >
              {copyActive ? "Copied!" : "Click to Copy"}
            </p>
          </div>
        </div>
      </Card>
    </FadeIn>
  );
};

export default EmailItem;
