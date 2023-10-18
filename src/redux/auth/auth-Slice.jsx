import { createSlice } from "@reduxjs/toolkit";
import { authLogIn, authLogOut, authRefreshUser, authRegister } from "./auth-operations";

const initialState = {
    user: { name: null, email: null,password:null },
    token:null,
    isLoggedIn: false,
    isRefreshing:false,
}
const handlePending = state => { state.isLoggedIn = false}
const handleReject = (state, action) => {
    state.isLoggedIn = false;
    state.error=action.payload
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        // [authRegister.pending]: handlePending,
        // [authRegister.rejected]:handleReject,
        [authRegister.fulfilled](state, action) {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        // [authLogIn.pending]: handlePending,
        // [authLogIn.rejected]: handleReject,
        [authLogIn.fulfilled](state, action) {
            state.isLoggedIn = true;
            state.user = action.payload.user;  
            state.token=action.payload.token
        },
        [authLogOut.fulfilled](state) {
            state.user = { name: null, email: null, password: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authRefreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing=false
        },
        [authRefreshUser.pending](state) {
            state.isRefreshing=true
        },
        [authRefreshUser.rejected](state) {
            state.isRefreshing=false
        }
    },
})

export const authReducer=authSlice.reducer