import React from "react";

import { Icon } from "../../icons";

import {
  HeaderTop,
  IconGroup,
  Root,
  Tab,
  Tabs,
  HeaderIcon,
  HeaderBottom,
  Title,
  Project,
  ProjectName,
  ProjectSubName,
  ProjectText,
} from "./Header.style";

export default function Header(): JSX.Element {
  return (
    <Root>
      <HeaderTop>
        <IconGroup>
          <HeaderIcon size={16} type="grid" />
          <HeaderIcon size={16} type="share" />
        </IconGroup>
        <Tabs>
          <Tab $isActive>Просмотр</Tab>
          <Tab>Управление</Tab>
        </Tabs>
      </HeaderTop>
      <HeaderBottom>
        <Project>
          <ProjectText>
            <ProjectName>Название проекта</ProjectName>
            <ProjectSubName>Аббревиатура</ProjectSubName>
          </ProjectText>
          <Icon size={24} type="arrow-down" />
        </Project>
        <Title>Строительно-монтажные работы</Title>
      </HeaderBottom>
    </Root>
  );
}

Header.displayName = "Header";
