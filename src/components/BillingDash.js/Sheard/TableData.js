import { Button, Grid, Pagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import {deleteBillingData} from './../../../store/actions/billingAction'
import { useSelector,useDispatch } from 'react-redux';
import BillingModal from '../../BillingModals/BillingModal';
import Loading from '../../Spinner/Loading';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)"
    }
  }
});
export default function TableData({ setLimit, setPage, page, limit }) {
  const { billing } = useSelector(state => state);
  const { metadata, loading } = billing;
  const [content, setContent] = useState({})
  const classes = useStyles();
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const handleOpen = (data) => {
    data.title = 'Update Billing';
    setContent(data)
    setOpen(true)
  };
  const handleDelete = (id) =>{
    dispatch(deleteBillingData(id,page,limit))
  }
  const handleClose = () => setOpen(false);
  return (
    <Grid container spacing={0} sx={{ py: 1, px: 8, mb: 5 }}>
      <Grid item xs={12}>
        {loading ? <Loading /> : <TableContainer component={Paper} style={{ background: '#ddd' }}>
          <Table sx={{
            minWidth: 650
          }} className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{ background: 'rgb(202 195 195)' }}>
                <TableCell style={{ borderRight: '1px solid #444' }}>Billing Id</TableCell>
                <TableCell style={{ borderRight: '1px solid #444' }}>FullName</TableCell>
                <TableCell style={{ borderRight: '1px solid #444' }}>Email</TableCell>
                <TableCell style={{ borderRight: '1px solid #444' }}>Phone</TableCell>
                <TableCell style={{ borderRight: '1px solid #444' }}>Paid Amount</TableCell>
                <TableCell style={{ borderRight: '1px solid #444' }}>Status</TableCell>
                <TableCell style={{ borderRight: '1px solid #444' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {billing?.billing?.length !== 0 && billing?.billing?.map((row, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #444', borderBottom: '1px solid #444' }}>
                    {row?.billing_id}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #444', borderBottom: '1px solid #444' }}>
                    {row?.full_name}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #444', borderBottom: '1px solid #444' }}>
                    {row?.email}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #444', borderBottom: '1px solid #444' }}>
                    {row?.phone}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #444', borderBottom: '1px solid #444' }}>
                    {row?.paid_amount}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #444', borderBottom: '1px solid #444' }}>
                    {row?.action}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ borderRight: '1px solid #444', borderBottom: '1px solid #444' }}>
                    <Button style={{ textTransform: 'capitalize' }} onClick={() => handleOpen(row)}> Edit</Button>
                    <Button style={{ textTransform: 'capitalize' }}onClick={() => handleDelete(row?._id)}> Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>}
        <Pagination count={Math.ceil(metadata?.total / limit || 0)} variant="outlined" shape="rounded" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px 0px' }} onChange={(e, value) => setPage(value)} />
      </Grid>
      {open && <BillingModal content={content} page={page} open={open} handleClose={handleClose} />}
    </Grid>

  );
}