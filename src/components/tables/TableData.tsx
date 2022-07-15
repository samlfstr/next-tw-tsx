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

        const fetched = result.map((item) => {
          return {
            title: item.name.title,
            first: item.name.first,
            last: item.name.last,
            email: item.email,
            city: item.location.city,
            date: item.dob.date.split('T')[0],
          };
        });
        setData(fetched);
      }
    };
    fetchData();
  }, []);

  const headers = [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'First Name',
      accessor: 'first',
    },
    {
      Header: 'Last Name',
      accessor: 'last',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
  ];
  // eslint-disable-next-line
  const columns = useMemo(() => headers, []) as Column[];

  return <TableContainer columns={columns} data={data} />;
}
