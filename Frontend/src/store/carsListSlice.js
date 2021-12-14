import { createSlice } from '@reduxjs/toolkit'

export const carListSlice =  createSlice({
    name: 'carListSlice',
    initialState: { value: []},
    reducers: {
        setCar(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setCar } = carListSlice.actions;
export default carListSlice.reducer;