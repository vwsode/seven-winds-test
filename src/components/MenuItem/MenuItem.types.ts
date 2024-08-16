import React from "react";

export type MenuItemProps = {
  /**
   * Indicates whether the menu item is active.
   * If `true`, the item is displayed as selected.
   * Defaults to `false`.
   */
  isActive?: boolean;
  /**
   * The name of the menu item.
   * Displayed as text within the menu item.
   * Should be a string.
   */
  name: string;
  /**
   * The icon associated with the menu item.
   * An optional field that allows you to specify an icon to display alongside the menu item name.
   * Can accept any React component.
   */
  icon?: React.ReactNode;
};

export type StyledRootProps = {
  $isActive: boolean;
};
