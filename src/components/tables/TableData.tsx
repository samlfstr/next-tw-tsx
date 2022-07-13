/*
| Here I have two things : data and columns.
| Data is an array of objects fetched from the server.
| Columns is an array of objects that describe the columns of the table.
*/

import axios from 'axios';
import { useEffect, useMemo } from 'react';
import React from 'react';
import { Column } from 'react-table';

import TableContainer from './TableContainer';

export default function TableData() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    // Get data from the server
    const fetchData = async () => {
      // Response from the server
      const response = await axios
        .get('https://randomuser.me/api/?results=100')
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
      // If the response is successful
      if (response) {
        const result = response.data.results;
        setData(result);
      }
    };
    fetchData();
  }, []);

  const headers = [
    {
      Header: 'Title',
      accessor: 'name.title',
    },
    {
      Header: 'First Name',
      accessor: 'name.first',
    },
    {
      Header: 'Last Name',
      accessor: 'name.last',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'City',
      accessor: 'location.city',
    },
  ];
  // eslint-disable-next-line
  const columns = useMemo(() => headers, []) as Column[];

  return <TableContainer columns={columns} data={data} />;
}
