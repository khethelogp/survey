import { Paper, Radio, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@material-ui/core'
import React from 'react'



const CustomTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{}</TableCell>
                        <TableCell align="center">Strongly Agree (1)</TableCell>
                        <TableCell align="center">Agree (2)</TableCell>
                        <TableCell align="center">Neutral (3)</TableCell>
                        <TableCell align="center">Disagree (4)</TableCell>
                        <TableCell align="center">Strongly Disagree (5)</TableCell>
                    </TableRow>
                </TableHead>
                
                <TableBody>
                    <TableRow>
                        <TableCell align="center">I like to eat out</TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">I like to watch movies</TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">I like to watch TV</TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">I like to listen to the radio</TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                        <TableCell align="center"><Radio /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable
