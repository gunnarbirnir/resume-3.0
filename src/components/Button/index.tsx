import React, { useState } from "react";

import styles from "./styles.module.css";

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((prevCount) => prevCount + 1)}
      className={styles.button}
    >
      Button: {count}
    </button>
  );
};

export default Button;
