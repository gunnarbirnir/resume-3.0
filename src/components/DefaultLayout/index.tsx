import styled from "styled-components";

const DefaultLayout = styled.div`
  p {
    margin-bottom: var(--spacing-3);
  }
  p:last-child {
    margin-bottom: 0px;
  }

  h1 {
    margin-bottom: var(--spacing-3);
  }
  h2 {
    margin-bottom: var(--spacing-2);
  }
  h3 {
    margin-bottom: var(--spacing-2);
  }

  a {
    color: var(--color-primary);
  }
`;

export default DefaultLayout;
