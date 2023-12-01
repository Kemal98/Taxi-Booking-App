"use client"; 

import { createSlice } from '@reduxjs/toolkit';

const destinationCordinates = createSlice({
   name:'destination',
   initialState:{},
   reducers:{
    setDestinationCordinates:(state, action) => {
        state.value = action.payload
    }
   }
})

export const { setDestinationCordinates} = destinationCordinates.actions
export default destinationCordinates.reducer