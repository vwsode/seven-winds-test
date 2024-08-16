import styled from "styled-components";
import { Icon } from "../../icons";

import { StyledRootProps } from "./MenuItem.types";

export const Root = styled.div<StyledRootProps>`
  padding: 8px 20px;
  cursor: pointer;
  display: flex;
  gap: 14px;
  align-items: center;

  background-color: ${({ $isActive }) => ($isActive ? "#A1A1AA" : "#27272A")};
`;

export const MenuIcon = styled(Icon)`
  width: 22px;
  height: 22px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: #ffffff;
`;
