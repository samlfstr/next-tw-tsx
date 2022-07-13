import React from 'react';
import { Column, useSortBy, useTable } from 'react-table';

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
      },
      useSortBy
    );
  // eslint-disable-next-line no-console
  console.log(getTableProps());
  // eslint-disable-next-line no-console
  console.log(getTableBodyProps());

  // eslint-disable-next-line
  function generateSortingIndicator({ column }: { column: any }) {
    return column.isSorted ? (column.isSortedDesc ? ' ↑ ' : ' ↓ ') : '';
  }
  return (
    <table className='uppercase' {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key
          <tr className='bg-gray-400' {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // <th className="border-2 border-black p-2" {...column.getHeaderProps()}>{column.render("Header")}</th>
              // eslint-disable-next-line react/jsx-key
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {generateSortingIndicator({ column: { column: column } })}
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
                // eslint-disable-next-line react/jsx-key
                return (
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
