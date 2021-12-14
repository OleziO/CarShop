import { createSlice } from '@reduxjs/toolkit'

export const newCarsSlice = createSlice({
    name: 'newCarsSlice',
    initialState: { value: {
        pic: '',
        title: '',
        year: '',
        engineType: '',
        engineМolume: '',
        transmission: '',
        occasion: '',
        color: '',
        city: '',
        price: '',
        runKM: '',
        bodyType: '',
        slotCount: '',
        state: ''
    }},
    reducers: {
        setNewCar(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setNewCar } = newCarsSlice.actions;
export default newCarsSlice.reducer;