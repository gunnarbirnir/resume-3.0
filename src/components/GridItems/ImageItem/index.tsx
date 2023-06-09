import { FC } from "react";
import styled from "styled-components";

import profileImg from "../../../assets/img/profile.webp";
import { useMediaQuery } from "../../../hooks";
import { MEDIA_QUERY } from "../../../constants";
import FadeIn from "../../FadeIn";
import PerspectiveHover from "../../PerspectiveHover";
import { GridItemLayoutProps } from "../types";

const TOP_CUT_OFF = 20;
const BOTTOM_CUT_OFF = 40;

const ImageItem: FC<GridItemLayoutProps> = ({ rows }) => {
  const { isGridTabletOnly, isMobileOrSmaller } = useMediaQuery();
  const cropImage = rows === 3 && !isGridTabletOnly;

  return (
    <FadeIn
      direction={isMobileOrSmaller ? "up" : "down"}
      duration={isMobileOrSmaller ? "fast" : "slow"}
    >
      <ImageContainer>
        <ProfileImage
          alt="Profile"
          src={profileImg}
          style={
            cropImage
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

  @media (max-width: ${MEDIA_QUERY.MOBILE}px) {
    min-height: 400px;
  }
  @media (max-width: ${MEDIA_QUERY.GRID_MOBILE}px) {
    min-height: 350px;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  bottom: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  user-select: none;
  -webkit-user-select: none;
  background-color: var(--color-gray-5);
`;

export default ImageItem;
