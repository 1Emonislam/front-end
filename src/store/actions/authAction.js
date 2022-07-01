import { toast } from "react-toastify"
import { baseURL } from "../../utils/base"
import { AUTH_SUCCESS } from "../reducers/authReducer"
export const userLogin = (data) => {
    return (dispatch) => {
        dispatch({
            type: AUTH_SUCCESS,
            user: null,
            loading: true,
        })
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        fetch(`${baseURL}/api/login`, config)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: AUTH_SUCCESS,
                    user: data.loggedUser,
                    loading: false,
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
                    window.localStorage.setItem('currentUser', JSON.stringify(data?.loggedUser))
                    toast(data?.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                window.location.replace('/billing-dash')
            })
    }
}
export const userRegister = (data, page) => {
    return (dispatch) => {
        dispatch({
            type: AUTH_SUCCESS,
            loading: true,
        })
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        fetch(`${baseURL}/api/registration`, config)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: AUTH_SUCCESS,
                    loading: false,
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
                    toast(data?.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    window.location.replace('/login')
                }
            })
    }
}