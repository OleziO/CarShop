import { createSlice } from '@reduxjs/toolkit'

export const userSlice =  createSlice({
    name: 'userSlice',
    initialState: { value: {
        login: '',
        pass: '',
        signed: false,
    }},
    reducers: {
        setLogin(state, action) {
            state.value.login = action.payload;
        },
        setPassword(state, action) {
            state.value.pass = action.payload;
        },
        setUser(state, action) {
            state.value = action.payload;
        },
        login(state, action) {
            state.value.signed = action.payload;
        },
    }
});

export const { setLogin, setPassword, setUser, login } = userSlice.actions;
export default userSlice.reducer;