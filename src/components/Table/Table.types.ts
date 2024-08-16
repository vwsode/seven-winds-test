export type RowNode = {
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
};

export type RowType = {
  child?: RowNode[];
} & RowNode;

export type ColumnType = {
  title: string;
  width?: number;
};

export type TableProps = {
  rows: RowType[];
  columns: ColumnType[];
};
