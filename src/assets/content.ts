import { ImageSize, ResizeTypes } from "../models";

interface Content {
  [key: string]: { title: string; size: ImageSize };
}

export const content: Content = {
  [ResizeTypes.HORIZONTAL]: {
    title: "Horizontal",
    size: { width: 755, height: 450 },
  },
  [ResizeTypes.VERTICAL]: {
    title: "Vertical",
    size: { width: 365, height: 450 },
  },
  [ResizeTypes.HORIZONTAL_SMALL]: {
    title: "Horizontal Small",
    size: { width: 365, height: 212 },
  },
  [ResizeTypes.GALLERY]: {
    title: "Gallery",
    size: { width: 380, height: 380 },
  },
};
