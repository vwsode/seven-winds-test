import React from 'react';

type EditableField = 'rowName' | 'salary' | 'equipmentCosts' | 'estimatedProfit' | 'mainCosts';

export type EditableCellProps = {
  value: string | number;
  $field: EditableField;
  isEditing: boolean;
  onChange: (field: EditableField) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
