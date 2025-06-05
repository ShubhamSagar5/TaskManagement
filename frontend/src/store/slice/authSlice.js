import {createSlice} from '@reduxjs/toolkit'


const authSlice = createSlice({
    name:'auth',
    initialState:{
        loggedIn:false,
        loading:false,
        tasksLength:0
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
        },
        setTasksLength:(state,action)=>{
            state.tasksLength = action.payload
        }
    }
})

export const {login,logout,setLoading,setTasksLength} = authSlice.actions
export default authSlice.reducer