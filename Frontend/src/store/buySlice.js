import { createSlice } from '@reduxjs/toolkit'

export const buySlice =  createSlice({
    name: 'carSlice',
    initialState: { value: {
        show: false,
        id: ''
    }},
    reducers: {
        visible(state, action) {
            state.value = action.payload;
        }
    }
});

export const { visible } = buySlice.actions;
export default buySlice.reducer;