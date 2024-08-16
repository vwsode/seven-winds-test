import { css, styled } from 'styled-components';
import { Icon } from '../../icons';

export const RowIcon = styled(Icon)`
  cursor: pointer;
  position: relative;

  &:hover::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
    background-color: #a1a1aa30;
    border-radius: 4px;
  }

  &:active::before {
    background-color: #a1a1aa10;
  }

  ${({ type }) =>
    type === 'trash' &&
    css`
      opacity: 0;
    `}
`;

export const IconGroup = styled.div<{ level: number }>`
  margin-left: ${(props) => `${21 * props.level}px`};
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  padding: 6px;

  &:hover {
    background-color: #414144;

    ${RowIcon} {
      opacity: 1;
    }
  }

  &::before {
    ${(props) => props.level && `content: "";`}

    position: absolute;
    top: 50%;
    left: -6px;
    transform: translateY(-50%);
    background-color: #c6c6c6;
    height: 1px;
    width: 12px;
  }
`;

export const VerticalLine = styled.div<{ childs: number; level: number }>`
  height: ${(props) => 61 * props.childs - 9}px;

  position: absolute;
  width: 1px;
  background-color: #c6c6c6;
  left: ${(props) => 21 * props.level + 26}px;
  top: calc(100% - 20px);
`;
