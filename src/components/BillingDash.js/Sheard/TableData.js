import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)"
    }
  }
});
export default function TableData({ setLimit, setPage, page }) {
  const { billing } = useSelector(state => state);
  const classes = useStyles();
  return (
    <Grid container spacing={0} sx={{ py: 1, px: 8, mb: 5 }}>
      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ background: '#ddd' }}>
          <Table sx={{
            minWidth: 650
          }} className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{ background: 'rgb(202 195 195)' }}>
                <TableCell style={{ borderRight: '1px solid #333' }}>Billing Id</TableCell>
                <TableCell style={{ borderRight: '1px solid #333' }}>FullName</TableCell>
                <TableCell style={{ borderRight: '1px solid #333' }}>Email</TableCell>
                <TableCell style={{ borderRight: '1px solid #333' }}>Phone</TableCell>
                <TableCell style={{ borderRight: '1px solid #333' }}>Paid Amount</TableCell>
                <TableCell style={{ borderRight: '1px solid #333' }}>Status</TableCell>
                <TableCell style={{ borderRight: '1px solid #333' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {billing?.billing?.length !== 0 && billing?.billing?.map((row, index) => (
                <TableRow
                  key={index}
                >  {console.log(row)}
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #333', borderBottom: '1px solid #333' }}>
                    {row?.billing_id}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #333', borderBottom: '1px solid #333' }}>
                    {row?.full_name}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #333', borderBottom: '1px solid #333' }}>
                    {row?.email}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #333', borderBottom: '1px solid #333' }}>
                    {row?.phone}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #333', borderBottom: '1px solid #333' }}>
                    {row?.paid_amount}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #333', borderBottom: '1px solid #333' }}>
                    {row?.action}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #333', borderBottom: '1px solid #333' }}>
                    <Button style={{ textTransform: 'capitalize' }}> Edit</Button>
                    <Button style={{ textTransform: 'capitalize' }}> Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>

  );
}