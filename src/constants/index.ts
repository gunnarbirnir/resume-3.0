const msToSec = (ms: number) => ms / 1000;

export const CONTENT_GRID_ANIMATION_DURATION_MS = 400;
export const CONTENT_GRID_ANIMATION_DURATION_SEC = msToSec(
  CONTENT_GRID_ANIMATION_DURATION_MS
);
export const FADE_IN_DURATION_MS = 200;
export const FADE_IN_DURATION_SEC = msToSec(FADE_IN_DURATION_MS);

// Keep in sync with media-queries.css
export const MEDIA_QUERY = {
  LARGE_DESKTOP_HEIGHT: 950,
  // Tablet plus one
  DESKTOP_WIDTH: 1101,
  // Grid max width plus padding
  GRID: 1328,
  TABLET: 1100,
  MOBILE: 700,
};
