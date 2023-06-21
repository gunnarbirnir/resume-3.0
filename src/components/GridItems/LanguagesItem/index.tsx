import { FC, Fragment } from "react";
import styled from "styled-components";

import languages from "../../../assets/json/languages.json";
import Card from "../../Card";
import FadeIn from "../../FadeIn";

const LanguagesItem: FC = () => {
  return (
    <FadeIn>
      <Card>
        <StyledLanguagesItem>
          {languages.map((language, index) => (
            <Fragment key={language.code}>
              <LanguageContainer>
                <LanguageCode>{language.code}</LanguageCode>
                <div>
                  <LanguageTitle>{language.title}</LanguageTitle>
                  <LanguageLevel>{language.level}</LanguageLevel>
                </div>
              </LanguageContainer>

              {index !== languages.length - 1 && <LanguageDivider />}
            </Fragment>
          ))}
        </StyledLanguagesItem>
      </Card>
    </FadeIn>
  );
};

const StyledLanguagesItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`;

const LanguageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3);
`;

const LanguageCode = styled.p`
  font-size: 22px;
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  user-select: none;
`;

const LanguageTitle = styled.p`
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
`;

const LanguageLevel = styled.p`
  color: var(--color-gray-2);
  font-size: var(--font-size-small);
  text-transform: uppercase;
`;

const LanguageDivider = styled.div`
  height: 100%;
  width: 1px;
  background-color: var(--color-gray-4);
`;

export default LanguagesItem;
