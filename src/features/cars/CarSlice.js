import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carsData: [],
    loading: 'idle'
}

const CarSlice = createSlice({
    name: "car",
    initialState,
    reducers: {},
    extraReducers: (builder) => { }

})

export default CarSlice.reducer