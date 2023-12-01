

"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import userLocation from './UserLocation/userLocation';
import soruceCordinates from "./soruceCordinates/soruceCordinates";
import destinationCordinates from "./destinationCordinates/destinationCordinates";


const rootReducer = combineReducers({
    location: userLocation,
    soruceCordinates:soruceCordinates,
    destinationCordinates:destinationCordinates,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,
 });
