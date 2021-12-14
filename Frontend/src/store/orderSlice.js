import { createSlice } from '@reduxjs/toolkit'

export const orderSlice =  createSlice({
    name: 'orderSlice',
    initialState: { value: {
        user: '',
        phone: '',
        id: '',
    }},
    reducers: {
        setName(state, action) {
            state.value.user = action.payload;
        },
        setPhone(state, action) {
            state.value.phone = action.payload;
        },
        setId(state, action) {
            state.value.id = action.payload;
        }
    }
});

export const { setName, setPhone, setId } = orderSlice.actions;
export default orderSlice.reducer;