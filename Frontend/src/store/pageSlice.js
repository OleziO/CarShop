import { createSlice } from '@reduxjs/toolkit'

export const pageSlice =  createSlice({
    name: 'pageSlice',
    initialState: { value: ''},
    reducers: {
        setPage(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;