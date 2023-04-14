import React, { useState } from "react";
import styled from "styled-components";

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <Wrapper onClick={() => setCount((prevCount) => prevCount + 1)}>
      Wrapper: {count}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background-color: #00f;
`;

export default Button;
