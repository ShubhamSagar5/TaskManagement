import {createSlice} from '@reduxjs/toolkit'


const authSlice = createSlice({
    name:'auth',
    initialState:{
        loggedIn:false,
        loading:false
    },
    reducers:{
        login:(state)=>{
            state.loggedIn = true
        },
        logout:(state)=>{
            state.loggedIn = false
        },
        setLoading:(state,action)=>{
            state.loading = action.payload
        }
    }
})

export const {login,logout,setLoading} = authSlice.actions
export default authSlice.reducer