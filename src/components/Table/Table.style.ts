import styled from "styled-components";

import { ColumnType } from "./Table.types";

export const TableHead = styled.thead`
  border-bottom: 1px solid #414144;
`;

export const TableCell = styled.th<ColumnType>`
    color: #a1a1aa;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.2px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    padding: 12px;
    white-space: nowrap;

    width: ${(props) => (props.width ? `${props.width}px` : "auto")};
`;
