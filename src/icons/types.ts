import { HTMLAttributes } from "react";

export type IconVariant =
  | "trash"
  | "document"
  | "dashboard"
  | "grid"
  | "share"
  | "arrow-down";

export type IconSize = 8 | 16 | 20 | 24 | 48 | 96;

export type IconBaseProps = {
  /**
   * The size of the icon.
   */
  size: IconSize;
} & HTMLAttributes<HTMLSpanElement>;

export type IconProps = {
  /**
   * The variant of the icon.
   */
  type: IconVariant;
  /**
   * The fill color of the icon.
   */
  fill?: string;
  /**
   *
   */
  className?: string;
} & IconBaseProps;
