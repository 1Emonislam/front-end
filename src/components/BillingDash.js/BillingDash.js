import { useContext, useEffect } from 'react'
import BillingSearch from './Sheard/BillingSearch'
import Header from './Sheard/Header'
import TableData from './Sheard/TableData'
import { useDispatch } from 'react-redux'
import { getBillingData } from '../../store/actions/billingAction'
import { GlobalContexts } from '../../App'
function BillingDash() {
  const dispatch = useDispatch()
  const {
    page,
    setPage,
    limit,
    setLimit,
    search,
    setSearch
  } = useContext(GlobalContexts)
  useEffect(() => {
    dispatch(getBillingData('', page, limit))
  }, [dispatch, limit, page])
  useEffect(() => {
   if(search){
    dispatch(getBillingData(search,page, limit,'search'))
   }
  }, [dispatch,search])
  return (
    <div>
      <Header />
      <BillingSearch setSearch={setSearch} />
      <TableData limit={limit}setLimit={setLimit} page={page} setPage={setPage}  onChange={(e, value) => setPage(value)}/>
    </div>
  )
}

export default BillingDash