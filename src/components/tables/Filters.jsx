import React from 'react';
import { Input } from 'reactstrap';

export const Filter = ({ column }) => {
  return (
    <div className='mt-3 text-xs'>
      {column.canFilter && column.render('Filter')}
    </div>
  );
};

export const DefaultColumnFilter = ({
  column: {
    filterValue,
    setFilter,
    preFilteredRows: { length },
  },
}) => {
  return (
    <Input
      className='bg-gray w-full rounded-xl text-xs'
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`search (${length}) ...`}
    />
  );
};
