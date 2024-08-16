import {styled} from "styled-components";

export const TableRow = styled.tr`
    position: relative;

    &:not(:last-child) {
        border-bottom: 1px solid #414144;
    }

    &:hover {
        background-color: #41414420;
        cursor: pointer;
    }
`;

export const TableCell = styled.td`
    padding: 0 12px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.2px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #ffffff;
`;

export const SaveButton = styled.button`
    outline: none;
    border: none;
    background: #937439;
    padding: 6px;
    border-radius: 4px;
    color: white;
    cursor: pointer;

    &:hover {
        background: #93743999;
    }

    &:active {
        background: #93743989;
    }
`

export const CancelButton = styled.button`
    outline: none;
    border: none;
    background: #e03b49;
    padding: 6px;
    border-radius: 4px;
    color: white;
    cursor: pointer;

    &:hover {
        background: #e03b4999;
    }

    &:active {
        background: #e03b4989;
    }
`

export const EditingActions = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    bottom: -27px;
    z-index: 2;
    left: 85%;
    position: absolute;
`