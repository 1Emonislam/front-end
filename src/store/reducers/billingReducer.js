const initState = {
    metadata: {},
    billing: [],
    error: '',
    message: '',
    loading: false
}
export const GET_BILLING_DATA = 'GET_BILLING_DATA';
export const BILING_DATA_ERROR = 'BILING_DATA_ERROR';
export const LOADING_BILLING = 'LOADING_BILLING';
export const AMOUNT_CAL = 'AMOUNT_CAL';
export const billingReducer = (state = initState, action) => {
    const { payload, type } = action;
    if (type === GET_BILLING_DATA) {
        return {
            ...state,
            metadata: payload.metadata,
            billing: payload.billing,
            loading: false
        }
    }

    if (type === BILING_DATA_ERROR) {
        return {
            ...state,
            loading: false,
            error: payload.error
        }
    }
    if (type === LOADING_BILLING) {
        return {
            ...state,
            loading: payload.loading,
        }
    }
    if (type === AMOUNT_CAL) {
        return {
            ...state,
            metadata: {
                ...state?.metadata,
                totalAmount: payload.totalAmount,
            },
        }
    }
    return state;
}