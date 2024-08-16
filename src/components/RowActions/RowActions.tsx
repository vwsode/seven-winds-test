import { TableCell } from '../Row/Row.style';

import { RowActionsProps } from './RowActions.types';
import { IconGroup, RowIcon, VerticalLine } from './RowActions.style';

export function RowActions({ childs, level, onCreateRow, onDelete }: RowActionsProps): JSX.Element {
  return (
    <TableCell>
      <VerticalLine childs={childs} level={level} />
      <IconGroup level={level}>
        <RowIcon onClick={onCreateRow} type="document" size={16} />
        <RowIcon onClick={onDelete} type="trash" size={16} />
      </IconGroup>
    </TableCell>
  );
}
