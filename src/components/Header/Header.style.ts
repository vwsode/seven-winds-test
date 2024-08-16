import { Icon } from "src/icons";
import styled, { css } from "styled-components";

export const Root = styled.header`
  background-color: #27272a;
  border-bottom: 1px solid #414144;
`;

export const HeaderTop = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #414144;

  display: flex;
  gap: 28px;
  align-items: center;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 24px;
`;

export const HeaderBottom = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  color: #ffffff;

  padding: 12px 15px;
`;

export const Project = styled.div`
  padding: 8px 7px 8px 20px;

  display: flex;
  gap: 20px;
  border-right: 1px solid #414144;
  justify-content: space-between;
  align-items: center;
  width: 234px;
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectName = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: #a1a1aa;
`;

export const ProjectSubName = styled.span`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: left;
  color: #a1a1aa;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 24px;
`;

export const Tab = styled.div<{ $isActive?: boolean }>`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#A1A1AA")};
  position: relative;

  cursor: pointer;

  ${({ $isActive }) =>
    $isActive &&
    css`
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        bottom: -14px;
        left: 50%;
        transform: translateX(-50%);
      }
    `}
`;

export const HeaderIcon = styled(Icon)`
  width: 24px;
  height: 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
