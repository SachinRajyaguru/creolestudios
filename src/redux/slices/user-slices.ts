import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    loggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.loggedIn = true;
    },
    logout: state => {
      state.username = '';
      state.email = '';
      state.loggedIn = false;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
