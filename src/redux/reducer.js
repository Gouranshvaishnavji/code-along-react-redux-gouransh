import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk('fetchUser', async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response.data)
      return response.data; 
    } catch (error) {
      console.error('Error fetching users', error);
      throw error;
    }
  });

const initState = {
    list : []
}

const listSlice = createSlice({
    name:'list',
    initialState:initState,
    reducers:{
        add : (state,action)=>{
            state.list = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.fulfilled, (state,action)=>{
            state.list=action.payload
            console.log(state.list)
        })
    }
})

export const listAction = listSlice.actions;
export const listReducer = listSlice.reducer;
export const listSelector = (state) => state.listReducer.list
