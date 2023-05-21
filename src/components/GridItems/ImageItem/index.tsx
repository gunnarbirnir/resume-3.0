import { FC } from "react";
import styled from "styled-components";

import profileImg from "../../../assets/img/profile.webp";
import FadeIn from "../../FadeIn";
import PerspectiveHover from "../../PerspectiveHover";

const ImageItem: FC = () => {
  return (
    <FadeIn direction="down" duration="slow">
      <PerspectiveHover className="h-100">
        <ProfileImage alt="Profile" src={profileImg} />
      </PerspectiveHover>
    </FadeIn>
  );
};

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  user-select: none;
  background-color: var(--color-gray-5);
`;

export default ImageItem;
