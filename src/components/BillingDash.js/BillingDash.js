import React from 'react'
import BillingSearch from './Sheard/BillingSearch'
import Header from './Sheard/Header'
import TableData from './Sheard/TableData'

function BillingDash() {
  return (
    <div>
      <Header />
      <BillingSearch />
      <TableData />
    </div>
  )
}

export default BillingDash