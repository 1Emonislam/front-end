import React from 'react'
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
function Header() {
    const { billing } = useSelector(state => state);
    const { metadata } = billing;
    return (
        <div>
            <Grid container spacing={0} sx={{ justifyContent: 'space-between', px: 8, py: 2, background: '#ddd' }}>
                <Grid item xs={2}>
                    <div>
                        Logo
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div style={{ textAlign: 'right' }}>  Paid Total: ${metadata?.totalAmount}</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header