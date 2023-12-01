"use client"; 

import { createSlice } from '@reduxjs/toolkit';

const sourceCordinates = createSlice({
   name:'source',
   initialState:{},
   reducers:{
    setSourceCordinates:(state, action) => {
        state.value = action.payload
    }
   }
})

export const { setSourceCordinates} = sourceCordinates.actions
export default sourceCordinates.reducer