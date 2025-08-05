import { EMPTY_ANIMATION, GREEN_HUE } from "../animations";
import { Coords } from "./types";

export const getRandomCoords = ({
  fromX = 0,
  fromY = 0,
  toX = EMPTY_ANIMATION[0][0].length,
  toY = EMPTY_ANIMATION[0].length,
}: {
  fromX?: number;
  fromY?: number;
  toX?: number;
  toY?: number;
} = {}): Coords => {
  return {
    x: Math.floor(Math.random() * (toX - fromX)) + fromX,
    y: Math.floor(Math.random() * (toY - fromY)) + fromY,
  };
};

export const updateScreen = (
  currentCoords: Coords[],
  currentApplePos: Coords
) => {
  // Copy array
  const newScreen = JSON.parse(JSON.stringify(EMPTY_ANIMATION[0]));

  currentCoords.forEach((coord) => {
    newScreen[coord.y][coord.x] = GREEN_HUE;
  });
  newScreen[currentApplePos.y][currentApplePos.x] = GREEN_HUE;

  return newScreen;
};
