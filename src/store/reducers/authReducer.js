const initState = {
    user: window.localStorage.getItem('currentUser') ? JSON.parse(window.localStorage.getItem('currentUser')) : {},
    error: '',
    message: '',
    loading: false
}
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const authReducer = (state = initState, action) => {
    const { payload, type } = action;
    if (type === AUTH_SUCCESS) {
        return {
            ...state,
            loading: false
        }
    }
    if (type === AUTH_ERROR) {
        return {
            ...state,
            loading: false,
            error: payload.error
        }
    }
    return state;
}