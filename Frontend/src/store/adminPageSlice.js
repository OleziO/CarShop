import { createSlice } from '@reduxjs/toolkit'

export const adminPageSlice =  createSlice({
    name: 'pageSlice',
    initialState: { value: ''},
    reducers: {
        setAdminPage(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setAdminPage } = adminPageSlice.actions;
export default adminPageSlice.reducer;