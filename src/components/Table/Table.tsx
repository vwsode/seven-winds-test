import React, { useState } from 'react';

import { Row } from '../Row';

import { useCreateRowMutation, useDeleteRowMutation, useUpdateRowMutation } from '../../api/outlayRowsApi';
import { RowNode, RowType, TableProps } from './Table.types';
import { TableCell, TableHead } from './Table.style';
import { eID } from '../../constants';

export const Table: React.FC<TableProps> = ({ columns, ...props }) => {
  const [rows, setRows] = useState<RowType[]>(props.rows);
  const [deleteRow] = useDeleteRowMutation();
  const [updateRow] = useUpdateRowMutation();
  const [createRow] = useCreateRowMutation();

  const handleDeleteRow = async (rID: number) => {
    await deleteRow({ eID, rID }).unwrap();
    setRows((prevRows) => {
      const removeRow = (rows: typeof prevRows, idToRemove: number): typeof prevRows => {
        return rows
          .map((row) => ({
            ...row,
            child: removeRow(row.child ?? [], idToRemove),
          }))
          .filter((row) => row.id !== idToRemove);
      };
      const updatedRows = removeRow(prevRows, rID);
      console.log('Updated rows:', updatedRows);
      return updatedRows;
    });
  };

  const handleCreateRow = async (parentId: number) => {
    try {
      const newRow = await createRow({ eID, parentId }).unwrap();
      setRows((prevRows) => {
        const addRow = (rows: typeof prevRows, parentId: number, newRow: RowType): typeof prevRows => {
          return rows.map((row) => {
            if (row.id === parentId) {
              return {
                ...row,
                child: [...row.child, newRow],
              };
            }
            return {
              ...row,
              child: addRow(row.child ?? [], parentId, newRow),
            };
          });
        };
        return addRow(prevRows, parentId, newRow);
      });
    } catch (error) {
      console.error('Failed to create row:', error);
    }
  };

  const handleUpdateRow = async (rID: number, updatedRow: Partial<RowNode>) => {
    updateRow({
      eID,
      rID,
      updatedRow,
    });
  };

  return (
    <table>
      <TableHead>
        <tr>
          {columns.map((column) => (
            <TableCell key={column.title} {...column}>
              {column.title}
            </TableCell>
          ))}
        </tr>
      </TableHead>
      <tbody>
      {rows.map((row) => (
        <Row key={row.id} {...row} onCreateRow={handleCreateRow} onDeleteRow={handleDeleteRow}
             onUpdateRow={handleUpdateRow} />
      ))}
      </tbody>
    </table>
  );
};
