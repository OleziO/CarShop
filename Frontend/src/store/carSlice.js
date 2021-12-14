import { createSlice } from '@reduxjs/toolkit'

export const carSlice =  createSlice({
    name: 'carSlice',
    initialState: { value: ''},
    reducers: {
        setLink(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setLink } = carSlice.actions;
export default carSlice.reducer;