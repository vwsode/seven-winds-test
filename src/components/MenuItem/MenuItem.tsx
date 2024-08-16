import React from "react";


import { MenuIcon, Root, Text } from "./MenuItem.style";
import { MenuItemProps } from "./MenuItem.types";

export function MenuItem({
  name,
  icon,
  isActive = false,
}: MenuItemProps): JSX.Element {
  return (
    <Root $isActive={isActive}>
      {icon ? icon : <MenuIcon type="dashboard" size={16} />}
      <Text>{name}</Text>
    </Root>
  );
}
