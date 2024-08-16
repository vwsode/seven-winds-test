import { RowNode, RowType } from '../Table/Table.types';

export type TableRowProps = {
  /**
   *
   * @param row
   */
  level?: number;
  /**
   *
   * @param row
   */
  onCreateRow: (rID: number, row?: RowType) => void;
  /**
   *
   * @param row
   */
  onDeleteRow: (rID: number) => void;
  /**
   *
   * @param row
   */
  onUpdateRow: (rID: number, updatedRow: Partial<RowNode>) => void;
  /**
   *
   */
  isNew?: boolean;
} & RowType;
