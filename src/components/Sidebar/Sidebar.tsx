import React from "react";

import { MenuItem } from "../MenuItem/MenuItem";

import { Root } from "./Sidebar.style";
import { SidebarProps } from "./Sidebar.types";

export function Sidebar({ links }: SidebarProps): JSX.Element {
  return (
    <Root>
      {links.map((link) => (
        <MenuItem key={link.name} {...link} />
      ))}
    </Root>
  );
}

Sidebar.displayName = "Sidebar";
