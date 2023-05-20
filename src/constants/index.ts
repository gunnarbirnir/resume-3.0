const msToSec = (ms: number) => ms / 1000;

export const CONTENT_GRID_ANIMATION_DURATION_MS = 400;
export const CONTENT_GRID_ANIMATION_DURATION_SEC = msToSec(
  CONTENT_GRID_ANIMATION_DURATION_MS
);
export const FADE_IN_DURATION_MS = 200;
export const FADE_IN_DURATION_SEC = msToSec(FADE_IN_DURATION_MS);

// Keep in sync with media-queries.css
export const MEDIA_QUERY = {
  // 845 is the lowest possible, add 100
  LARGE_DESKTOP_HEIGHT: 945,
  // A small buffer from tablet breakpoint
  LARGE_DESKTOP_WIDTH: 1250,
  // Grid max width plus padding
  TABLET: 1200,
  MOBILE: 700,
};
