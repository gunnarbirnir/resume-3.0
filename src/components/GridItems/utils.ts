export const getAnimationPropFunc =
  (isStatic: boolean) =>
  <T>(prop: T) => {
    return isStatic ? undefined : prop;
  };
