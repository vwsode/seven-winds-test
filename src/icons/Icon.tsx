import React, { FC, forwardRef } from "react";

import { iconComponentsMap } from "./constants";
import { IconWrapper } from "./Icon.style";
import { IconProps } from "./types";

export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ type, size, fill, className, ...props }, ref) => {
    const Component = iconComponentsMap[type];

    return (
      <IconWrapper
        ref={ref}
        type={type}
        size={size}
        fill={fill}
        className={className}
        {...props}
      >
        <Component size={size} />
      </IconWrapper>
    );
  }
);

Icon.displayName = "Icon";
