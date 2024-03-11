import React from 'react'
import { Container, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useUserData } from '../core/context/userDataContext'

const UserList = () => {

    const {state} = useUserData()
    console.log(state)
  return (
    <Container style={{
        padding: "10px 250px"
    }}>
        <Paper elevation={8} style={{
            margin: '30px',
            padding: '30px'
        }}>
            <div className='w-full flex justify-center p-4'>
                <Typography variant='h5'>CREATE USER</Typography>
            </div>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="center">First Name</TableCell>
                    <TableCell align="center">Middle Name</TableCell>
                    <TableCell align="center">Last Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.firstName}</TableCell>
                            <TableCell align="center">{row.middleName}</TableCell>
                            <TableCell align="center">{row.lastName}</TableCell>
                        </TableRow>                        
                    ))}
                </TableBody>
                </Table>
        </Paper>        
    </Container>

  )
}

export default UserList