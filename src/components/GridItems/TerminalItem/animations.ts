export const GREEN_HUE = 155;
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

export const EMPTY_ANIMATION: (number | null)[][][] = [createEmptyFrame()];

export const TERMINAL_ANIMATION: (number | null)[][][] = [
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

// Helper function to draw simple text characters
const drawText = (
  frame: (number | null)[][],
  text: string,
  x: number,
  y: number,
  hue: number
): void => {
  let currentX = x;

  for (const char of text) {
    if (char === " ") {
      currentX += 3; // Space width
      continue;
    }

    // Define 4x5 character patterns for smaller letters
    const patterns: { [key: string]: boolean[][] } = {
      G: [
        [false, true, true, true],
        [true, false, false, false],
        [true, false, true, true],
        [true, false, false, true],
        [false, true, true, false],
      ],
      A: [
        [false, true, true, false],
        [true, false, false, true],
        [true, true, true, true],
        [true, false, false, true],
        [true, false, false, true],
      ],
      M: [
        [true, false, false, true],
        [true, true, true, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
      ],
      E: [
        [true, true, true, true],
        [true, false, false, false],
        [true, true, true, false],
        [true, false, false, false],
        [true, true, true, true],
      ],
      O: [
        [false, true, true, false],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [false, true, true, false],
      ],
      V: [
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [false, true, true, false],
      ],
      R: [
        [true, true, true, false],
        [true, false, false, true],
        [true, true, true, false],
        [true, false, true, false],
        [true, false, false, true],
      ],
      S: [
        [false, true, true, true],
        [true, false, false, false],
        [false, true, true, false],
        [false, false, false, true],
        [true, true, true, false],
      ],
      C: [
        [false, true, true, true],
        [true, false, false, false],
        [true, false, false, false],
        [true, false, false, false],
        [false, true, true, true],
      ],
      0: [
        [false, true, true, false],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [false, true, true, false],
      ],
      1: [
        [false, false, true, false],
        [false, true, true, false],
        [false, false, true, false],
        [false, false, true, false],
        [false, true, true, true],
      ],
      2: [
        [false, true, true, false],
        [true, false, false, true],
        [false, false, true, false],
        [false, true, false, false],
        [true, true, true, true],
      ],
      3: [
        [true, true, true, false],
        [false, false, false, true],
        [false, true, true, false],
        [false, false, false, true],
        [true, true, true, false],
      ],
      4: [
        [true, false, false, true],
        [true, false, false, true],
        [true, true, true, true],
        [false, false, false, true],
        [false, false, false, true],
      ],
      5: [
        [true, true, true, true],
        [true, false, false, false],
        [true, true, true, false],
        [false, false, false, true],
        [true, true, true, false],
      ],
      6: [
        [false, true, true, false],
        [true, false, false, false],
        [true, true, true, false],
        [true, false, false, true],
        [false, true, true, false],
      ],
      7: [
        [true, true, true, true],
        [false, false, false, true],
        [false, false, true, false],
        [false, true, false, false],
        [false, true, false, false],
      ],
      8: [
        [false, true, true, false],
        [true, false, false, true],
        [false, true, true, false],
        [true, false, false, true],
        [false, true, true, false],
      ],
      9: [
        [false, true, true, false],
        [true, false, false, true],
        [false, true, true, true],
        [false, false, false, true],
        [false, true, true, false],
      ],
      ":": [[false], [true], [false], [true], [false]],
    };

    const pattern = patterns[char];
    if (pattern) {
      for (let py = 0; py < 5; py++) {
        for (let px = 0; px < 4; px++) {
          if (pattern[py][px] && y + py < 7 && currentX + px < 32) {
            frame[y + py][currentX + px] = hue;
          }
        }
      }
    }

    currentX += 5; // Character width + spacing (4 + 1)
  }
};

export const gameOverAnimation = (score: number): (number | null)[][][] => [
  /* // Frame 1: "GAME" text centered
  (() => {
    const frame = createEmptyFrame();
    // "GAME" = 4 characters
    // Each character is 4 pixels wide + 1 spacing = 5 pixels per char
    // Total width: 4*5 - 1 = 19 pixels (no spacing after last char)
    // Center in 32 pixels: (32-19)/2 = 6.5, so start at x=6
    const startX = 6;
    const startY = 1; // Center vertically (5 pixel height in 7 pixel frame)

    drawText(frame, "GAME", startX, startY, GREEN_HUE);
    return frame;
  })(), */

  /* // Frame 2: "OVER" text centered
  (() => {
    const frame = createEmptyFrame();
    // "OVER" = 4 characters
    // Each character is 4 pixels wide + 1 spacing = 5 pixels per char
    // Total width: 4*5 - 1 = 19 pixels (no spacing after last char)
    // Center in 32 pixels: (32-19)/2 = 6.5, so start at x=6
    const startX = 6;
    const startY = 1; // Center vertically (5 pixel height in 7 pixel frame)

    drawText(frame, "OVER", startX, startY, GREEN_HUE);
    return frame;
  })(), */

  // Frame 3: Empty frame
  // createEmptyFrame(),

  // Frame 4: "SCORE:" text centered
  (() => {
    const frame = createEmptyFrame();
    // "Score:" = 6 characters
    // Each character is 4 pixels wide + 1 spacing = 5 pixels per char
    // Total width: 6*5 - 1 = 29 pixels (no spacing after last char)
    // Center in 32 pixels: (32-29)/2 = 1.5, so start at x=1
    const startX = 3;
    const startY = 1; // Center vertically (5 pixel height in 7 pixel frame)

    drawText(frame, "SCORE:", startX, startY, GREEN_HUE);
    return frame;
  })(),

  // Frame 5: "SCORE:" text centered (repeat)
  (() => {
    const frame = createEmptyFrame();
    // "Score:" = 6 characters
    // Each character is 4 pixels wide + 1 spacing = 5 pixels per char
    // Total width: 6*5 - 1 = 29 pixels (no spacing after last char)
    // Center in 32 pixels: (32-29)/2 = 1.5, so start at x=1
    const startX = 3;
    const startY = 1; // Center vertically (5 pixel height in 7 pixel frame)

    drawText(frame, "SCORE:", startX, startY, GREEN_HUE);
    return frame;
  })(),

  // Frame 6: "99" text centered
  (() => {
    const frame = createEmptyFrame();
    // "99" = 2 characters
    // Each character is 4 pixels wide + 1 spacing = 5 pixels per char
    // Total width: 2*5 - 1 = 9 pixels (no spacing after last char)
    // Center in 32 pixels: (32-9)/2 = 11.5, so start at x=11
    const startX = 11;
    const startY = 1; // Center vertically (5 pixel height in 7 pixel frame)

    drawText(frame, `$${score}`, startX, startY, GREEN_HUE);
    return frame;
  })(),

  // Frame 7: "99" text centered (repeat)
  (() => {
    const frame = createEmptyFrame();
    // "99" = 2 characters
    // Each character is 4 pixels wide + 1 spacing = 5 pixels per char
    // Total width: 2*5 - 1 = 9 pixels (no spacing after last char)
    // Center in 32 pixels: (32-9)/2 = 11.5, so start at x=11
    const startX = 11;
    const startY = 1; // Center vertically (5 pixel height in 7 pixel frame)

    drawText(frame, `$${score}`, startX, startY, GREEN_HUE);
    return frame;
  })(),

  // Frame 8: Empty frame
  createEmptyFrame(),
];
