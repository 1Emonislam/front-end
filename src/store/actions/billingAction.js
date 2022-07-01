import { toast } from "react-toastify"
import { baseURL } from "../../utils/base"
import store from './../store'
import { GET_BILLING_DATA, LOADING_BILLING } from "../reducers/billingReducer"
export const getBillingData = (search, page, limit) => {
    //console.log(search)
    return (dispatch) => {
        dispatch({
            type: LOADING_BILLING,
            payload: {
                loading: true,
            }
        })
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${store.getState()?.auth?.user?.jwtToken}`
            },
        }
        fetch(`${baseURL}/api/billing-list?search=${search || ''}&page=${page}&limit=${limit}`, config)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: LOADING_BILLING,
                    payload: {
                        loading: false,
                    }
                })
                if (data?.error) {
                    for (const err of Object.values(data.error)) {
                        toast(err, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                }
                if (data?.message) {
                    dispatch({
                        type: GET_BILLING_DATA,
                        payload: {
                            metadata: data?.billing?.metadata?.length ? data?.billing?.metadata[0] : {},
                            billing: data?.billing?.data,
                        }
                    })
                    // eslint-disable-next-line no-useless-concat
                    toast(`${data?.message} ${page && 'switch page' + ' ' + page}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
    }
}