import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization=`Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization=''
    }
}



export const authRegister = createAsyncThunk('auth/register', async (credentials,thunkAPI) => {
    try {
        const  {data} = await axios.post('users/signup', credentials)
        token.set(data.token)
        return data
    }
    catch (e) {
        
    }
})

export const authLogIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('users/login', credentials) 
        token.set(data.token)
        return data
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message)
     }
})

export const authLogOut = createAsyncThunk('auth/logout', async (credentials, thunkAPI) => {
    try {
       await axios.post('users/logout')
      token.unset()
    }
    catch (e) {
        // return thunkAPI.rejectWithValue(e.message)
    }
})

export const authRefreshUser = createAsyncThunk('auth/refresh', async (_,thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token;
    if (!persistedToken) {
        return thunkAPI.rejectWithValue('')
    }
    token.set(persistedToken);
    try {
        const {data} = await axios.get('users/current');
   
        return data
    } catch (e) {
        
    }
    
})