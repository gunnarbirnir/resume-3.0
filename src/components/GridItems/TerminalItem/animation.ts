const GREEN_HUE = 155;
// const BLUE_HUE = 190;

// Helper function to create a frame with all pixels off
const createEmptyFrame = (): (number | null)[][] =>
  Array.from({ length: 7 }, () => Array.from({ length: 32 }, () => null));

// Helper function to draw a three-pixel arrow cursor
const drawArrowCursor = (
  frame: (number | null)[][],
  x: number,
  y: number,
  hue: number
): void => {
  // Arrow pattern:
  // X0
  // 0X
  // X0
  if (y < 7 && x < 32) frame[y][x] = hue; // Top left X
  if (y + 1 < 7 && x + 1 < 32) frame[y + 1][x + 1] = hue; // Middle right X
  if (y + 2 < 7 && x < 32) frame[y + 2][x] = hue; // Bottom left X
};

// Helper function to draw binary data (1s and 0s)
const drawBinaryData = (
  frame: (number | null)[][],
  data: string,
  x: number,
  y: number,
  hue: number
): void => {
  let currentX = x;

  for (const char of data) {
    if (char === "1") {
      // Draw a "1" as three pixels stacked vertically
      if (y < 7 && currentX < 32) frame[y][currentX] = hue;
      if (y + 1 < 7 && currentX < 32) frame[y + 1][currentX] = hue;
      if (y + 2 < 7 && currentX < 32) frame[y + 2][currentX] = hue;
      currentX += 2; // Move 2 pixels right
    } else if (char === "0") {
      // Draw a "0" as hollow rectangle:
      // XXX
      // X0X
      // XXX
      // Top row
      if (y < 7 && currentX < 32) frame[y][currentX] = hue;
      if (y < 7 && currentX + 1 < 32) frame[y][currentX + 1] = hue;
      if (y < 7 && currentX + 2 < 32) frame[y][currentX + 2] = hue;
      // Middle row (sides only)
      if (y + 1 < 7 && currentX < 32) frame[y + 1][currentX] = hue;
      if (y + 1 < 7 && currentX + 2 < 32) frame[y + 1][currentX + 2] = hue;
      // Bottom row
      if (y + 2 < 7 && currentX < 32) frame[y + 2][currentX] = hue;
      if (y + 2 < 7 && currentX + 1 < 32) frame[y + 2][currentX + 1] = hue;
      if (y + 2 < 7 && currentX + 2 < 32) frame[y + 2][currentX + 2] = hue;
      currentX += 4; // Move 4 pixels right (3 for character + 1 spacing)
    } else if (char === " ") {
      currentX += 2; // Space between data groups
    }
  }
};

export const EMPTY_ANIMATION: (number | null)[][][] = [
  // Frame 1: Empty terminal
  createEmptyFrame(),

  // Frame 2: Arrow cursor appears (top left corner)
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    return frame;
  })(),

  // Frame 3: Cursor blinks off
  createEmptyFrame(),

  // Frame 4: Cursor back on
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    return frame;
  })(),

  // Frame 5: First binary data starts appearing
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "101", 3, 0, GREEN_HUE);
    return frame;
  })(),

  // Frame 6: More binary data
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "101 001", 3, 0, GREEN_HUE);
    return frame;
  })(),

  // Frame 7: Complete first line of data
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "101 001 110", 3, 0, GREEN_HUE);
    return frame;
  })(),

  // Frame 8: Second line starts (with space between lines)
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "101 001 110", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "010", 3, 4, GREEN_HUE); // 4 pixels down for spacing
    return frame;
  })(),

  // Frame 9: Second row continues
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "101 001 110", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "010 111", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 10: Second row complete
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "101 001 110", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "010 111 001", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 11: Text scrolls up, new line appears
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "010 111 001", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "110", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 12: Third row continues
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "010 111 001", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "110 100", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 13: Third row complete
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "010 111 001", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "110 100 011", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 14: Text scrolls up again
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "110 100 011", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "001", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 15: Fourth row continues
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "110 100 011", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "001 010", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 16: Fourth row complete
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "110 100 011", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "001 010 111", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 17: Text scrolls up one more time
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "001 010 111", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "101", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 18: New line continues
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "001 010 111", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "101 110", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 19: New line complete
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    drawBinaryData(frame, "001 010 111", 3, 0, GREEN_HUE);
    drawBinaryData(frame, "101 110 010", 3, 4, GREEN_HUE);
    return frame;
  })(),

  // Frame 20: Loop back to beginning state
  (() => {
    const frame = createEmptyFrame();
    drawArrowCursor(frame, 0, 0, GREEN_HUE);
    return frame;
  })(),
];
