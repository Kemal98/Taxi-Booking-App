"use client"; 

import { createSlice } from '@reduxjs/toolkit';

const userLocation = createSlice({
   name:'location',
   initialState:{},
   reducers:{
    setLocation:(state, action) => {
        state.value = action.payload
    }
   }
})

export const { setLocation } = userLocation.actions
export default userLocation.reducer