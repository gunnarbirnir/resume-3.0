import type { FC } from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";

import { useLoading } from "../../../hooks";
import Card from "../../Card";
import Icon from "../../Icon";
import FadeIn from "../../FadeIn";
import styles from "./styles.module.css";

const EMAIL = "gunnarbirnir@gmail.com";
const CLICK_TIMEOUT = 3000;

const EmailItem: FC = () => {
  const isLoading = useLoading();
  const [cardClicked, setCardClicked] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCardClicked(true);
  };

  useEffect(() => {
    let clickTimeout: number | null = null;

    if (cardClicked) {
      clickTimeout = setTimeout(() => {
        setCardClicked(false);
      }, CLICK_TIMEOUT);
    }

    return () => {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
    };
  }, [cardClicked]);

  return (
    <FadeIn>
      <Card onClick={!isLoading ? copyEmail : undefined}>
        <div className={styles.emailItem}>
          <Icon.Mail />
          <div>
            <p className={styles.emailText}>{EMAIL}</p>
            <p
              className={clsx(styles.clickText, {
                [styles.disabledClickText]: isLoading,
              })}
            >
              {cardClicked ? "Copied!" : "Click to Copy"}
            </p>
          </div>
        </div>
      </Card>
    </FadeIn>
  );
};

export default EmailItem;
