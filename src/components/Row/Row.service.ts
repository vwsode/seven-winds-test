import { RowType } from '../Table/Table.types';

export function countNestedChildren(rows: RowType[]): number {
  let count = 0;

  function countChildren(row: RowType) {
    if (row.child && row.child.length > 0) {
      count += row.child.length;
      row.child.forEach(countChildren);
    }
  }

  rows.slice(0, -1).forEach(countChildren);

  count += rows.length;

  return count;
}
