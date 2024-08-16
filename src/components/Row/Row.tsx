import React, { useState, useRef, useCallback, FocusEvent } from 'react';

import { EditableCell } from '../EditableCell';
import { RowActions } from '../RowActions';
import type { TableRowProps } from './Row.types';
import { CancelButton, EditingActions, SaveButton, TableRow } from './Row.style';
import { countNestedChildren } from './Row.service';

export function Row({
  rowName,
  salary,
  equipmentCosts,
  estimatedProfit,
  mainCosts,
  child,
  id,
  onDeleteRow,
  onCreateRow,
  onUpdateRow,
  isNew = false,
  level = 0,
}: TableRowProps): JSX.Element {
  const [isEditing, setIsEditing] = useState(isNew);
  const [values, setValues] = useState({
    rowName,
    salary,
    equipmentCosts,
    estimatedProfit,
    mainCosts,
  });

  const rowRef = useRef<HTMLTableRowElement>(null);
  const hasChild = Boolean(child?.length);
  const nestedChildrenCount = countNestedChildren(child || []);

  const handleEdit = useCallback(() => setIsEditing((prev) => !prev), []);
  const handleBlur = useCallback((e: FocusEvent<HTMLTableRowElement>) => {
    if (rowRef.current && !rowRef.current.contains(e.relatedTarget as Node)) {
      handleCancel();
    }
  }, []);

  const handleSave = () => {
    onUpdateRow(id, {
      rowName: values.rowName,
      salary: values.salary,
      equipmentCosts: values.equipmentCosts,
      estimatedProfit: values.estimatedProfit,
      mainCosts: values.mainCosts,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setValues({
      rowName,
      salary,
      equipmentCosts,
      estimatedProfit,
      mainCosts,
    });
  };

  const handleDelete = () => {
    onDeleteRow(id);
  };

  const handleCreateRow = () => {
    onCreateRow(id);
  };

  const handleChange = (field: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value,
    }));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <>
      <TableRow ref={rowRef} onDoubleClick={handleEdit} onBlur={handleBlur} tabIndex={-1}>
        <RowActions childs={nestedChildrenCount} level={level} onCreateRow={handleCreateRow} onDelete={handleDelete} />
        <EditableCell
          value={values.rowName}
          $field="rowName"
          isEditing={isEditing}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <EditableCell
          value={values.salary}
          $field="salary"
          isEditing={isEditing}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <EditableCell
          value={values.equipmentCosts}
          $field="equipmentCosts"
          isEditing={isEditing}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <EditableCell
          value={values.estimatedProfit}
          $field="estimatedProfit"
          isEditing={isEditing}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <EditableCell
          value={values.mainCosts}
          $field="mainCosts"
          isEditing={isEditing}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {isEditing && (
          <EditingActions>
            <SaveButton onClick={handleSave}>Сохранить</SaveButton>
            <CancelButton onClick={handleCancel}>Отменить</CancelButton>
          </EditingActions>
        )}
      </TableRow>
      {hasChild &&
        child?.map((childRow) => (
          <Row
            key={childRow.id}
            onCreateRow={onCreateRow}
            onDeleteRow={onDeleteRow}
            onUpdateRow={onUpdateRow}
            {...childRow}
            level={level + 1}
          />
        ))}
    </>
  );
}
