import { FC } from "react";

import { IconBaseProps, IconSize } from "../types";

const iconSizes: Partial<Record<IconSize, JSX.Element>> = {
  24: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_4487)">
        <path
          d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_4487">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};

export const ArrowDown: FC<IconBaseProps> = ({ size }) => {
  return iconSizes[size];
};
