import { FC } from "react";

import { IconBaseProps, IconSize } from "../types";

const iconSizes: Partial<Record<IconSize, JSX.Element>> = {
  16: (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z"
        fill="#A1A1AA"
      />
    </svg>
  ),
};

export const Share: FC<IconBaseProps> = ({ size }) => {
  return iconSizes[size];
};
