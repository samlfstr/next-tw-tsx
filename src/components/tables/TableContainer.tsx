import React from 'react';
import {
  Column,
  HeaderGroup,
  useFilters,
  useSortBy,
  useTable,
} from 'react-table';

import { DefaultColumnFilter, Filter } from './filters';

export default function TableContainer(
  { columns, data } = {
    columns: Array<Column>(),
    data: [],
  }
) {
  // Use deconstructing to get the data and columns from useTable
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn: { Filter: DefaultColumnFilter },
      },
      useFilters,
      useSortBy
    );
  // eslint-disable-next-line no-console
  console.log(getTableProps());
  // eslint-disable-next-line no-console
  console.log(getTableBodyProps());

  // eslint-disable-next-line
  function generateSortingIndicator(column: HeaderGroup<any>) {
    return column.isSorted ? (column.isSortedDesc ? '↑' : '↓') : '';
  }

  return (
    <table className='text-xs uppercase' {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line
          <tr className='bg-gray-400' {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // eslint-disable-next-line
              <th {...column.getHeaderProps()}>
                <div {...column.getSortByToggleProps()}>
                  {column.render('Header')}
                  {generateSortingIndicator(column)}
                </div>
                <Filter column={column} />
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            // eslint-disable-next-line react/jsx-key
            <tr className='bg-gray-200' {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <td
                    className='border-2 border-black p-2'
                    {...cell.getCellProps()}
                  >
                    {' '}
                    {cell.render('Cell')}{' '}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
