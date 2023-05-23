import { FC } from "react";
import styled from "styled-components";

import profileImg from "../../../assets/img/profile.webp";
import FadeIn from "../../FadeIn";
import PerspectiveHover from "../../PerspectiveHover";
import { GridItemProps } from "../types";

const TOP_CUT_OFF = 20;
const BOTTOM_CUT_OFF = 40;

const ImageItem: FC<GridItemProps> = ({ rows }) => {
  return (
    <FadeIn direction="down" duration="slow">
      <ImageContainer>
        <ProfileImage
          alt="Profile"
          src={profileImg}
          style={
            rows === 3
              ? {
                  height: `calc(100% + ${TOP_CUT_OFF + BOTTOM_CUT_OFF}px)`,
                  bottom: `calc(${BOTTOM_CUT_OFF}px * -1)`,
                }
              : undefined
          }
        />
      </ImageContainer>
    </FadeIn>
  );
};

const ImageContainer = styled(PerspectiveHover)`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  position: absolute;
  bottom: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  user-select: none;
  background-color: var(--color-gray-5);
`;

export default ImageItem;
