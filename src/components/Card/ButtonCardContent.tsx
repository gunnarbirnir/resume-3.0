import { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { FADE_IN_DURATION } from "../../constants";
import Icon from "../Icon";
import {
  StyledButtonCardContent,
  ButtonTitleLine,
  ButtonCardIconContainer,
} from "./styles";

interface Props {
  buttonTitle: string;
  isLoading: boolean;
}

const CIRCLE_ANIMATION_DURATION = 0.3;
const ARROW_ANIMATION_DURATION = 0.5;

const ButtonCardContent: FC<Props> = ({ buttonTitle, isLoading }) => {
  const renderButtonIcon = () => {
    return (
      <ButtonCardIconContainer>
        <motion.div
          animate={{ height: 30, width: 30 }}
          transition={{
            type: "spring",
            delay: FADE_IN_DURATION,
            duration: CIRCLE_ANIMATION_DURATION,
          }}
          className={clsx("buttonCardIcon", {
            buttonCardIconLoaded: !isLoading,
          })}
        >
          <motion.div
            initial={{ transform: "translateX(-50px)" }}
            animate={{ transform: "translateX(0px)" }}
            transition={{
              type: "spring",
              delay: CIRCLE_ANIMATION_DURATION + FADE_IN_DURATION / 2,
              duration: ARROW_ANIMATION_DURATION,
            }}
          >
            <Icon.Arrow />
          </motion.div>
        </motion.div>
      </ButtonCardIconContainer>
    );
  };

  return (
    <StyledButtonCardContent>
      <div>
        <h2>{buttonTitle}</h2>
        <ButtonTitleLine />
      </div>
      {renderButtonIcon()}
    </StyledButtonCardContent>
  );
};

export default ButtonCardContent;
