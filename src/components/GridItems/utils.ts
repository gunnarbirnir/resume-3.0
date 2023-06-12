const MAX_FADE_IN_DELAY = 0.3;

export const getRandomFadeInDelay = () => {
  return Math.random() * MAX_FADE_IN_DELAY;
};
