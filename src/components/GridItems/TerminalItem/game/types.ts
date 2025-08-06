import { MutableRefObject, Dispatch, SetStateAction } from "react";

export type Direction = "left" | "right" | "up" | "down";
export type Coords = { x: number; y: number };
export type GameScreen = (number | null)[][];
export type RefVal<T> = MutableRefObject<T>;
export type StateSetter<T> = Dispatch<SetStateAction<T>>;
