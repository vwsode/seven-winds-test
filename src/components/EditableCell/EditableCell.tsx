import React from 'react';
import { TextField } from '../TextField';

import { TableCell } from '../Row/Row.style';
import { TableContent } from './EditableCell.style';
import { EditableCellProps } from './EditableCell.types';

export function EditableCell({ value, $field, isEditing, onChange, onKeyDown }: EditableCellProps): JSX.Element {
  return (
    <TableCell>
      <TableContent>
        {isEditing ? (
          <TextField value={value} onChange={onChange($field)} onKeyDown={onKeyDown} />
        ) : (
          value
        )}
      </TableContent>
    </TableCell>
  );
}