import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getUsers, User } from '../data';
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export default function DataTable() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {

      // fetch("http://localhost:5000/")
      // getTop()

      getUsers().then((users) => {
          console.log('# users--0', users);
          console.log(typeof users)

          setUsers(users);
          console.log('# users', users);

          users.forEach(element => {
            console.log('# users...');
            console.log(typeof element)
            // let strElement: string = element
            // JSON.parse(strElement)

            console.log(element)
            // console.log(JSON.parse(element))
            console.log(element.firstName)
            console.log(element.lastName)
            console.log(element.age)
          });

      });
    }, []);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid sx={{ width: '90%', height: 450, margin: 'auto' }}
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
