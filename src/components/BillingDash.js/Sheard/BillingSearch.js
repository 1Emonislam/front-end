import React from 'react'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useState } from 'react';
import BillingModal from '../../BillingModals/BillingModal';

function BillingSearch({setSearch}) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let content = {
        title: 'Add a new bill'
    }
    return (
        <div style={{ marginTop: '30px' }}>
            <Grid container spacing={0} sx={{ justifyContent: 'space-between', py: 1, px: 8, background: '#ddd' }}>
                <Grid item xs={1}>
                    <div>
                        Billing
                    </div>
                </Grid>
                <Grid item xs={2.5}>
                    <div>
                        <input style={{ padding: '5px 10px', borderRadius: '5px', width: '100%', border: '1px solid #ddd' }} type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </Grid>
                <Grid item xs={8.5}>
                    <div style={{ textAlign: 'right' }}>  <Button style={{ background: 'black', color: 'white', textTransform: 'capitalize', padding: '4px 30px' }} onClick={() => handleOpen()}> Add New Bill</Button></div>
                </Grid>
            </Grid>
            {open && <BillingModal content={content} open={open} handleClose={handleClose} />}
        </div>
    )
}

export default BillingSearch