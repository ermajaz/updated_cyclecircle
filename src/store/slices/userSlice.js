// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginMode: "password",
  phoneNumber: "",
  sentEmail: false,
  codeEntered: false,
  passwordReset: false,
  isComplete: false,
  otpVerified: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginMode: (state, action) => {
      state.loginMode = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setSentEmail: (state, action) => {
      state.sentEmail = action.payload;
    },
    setCodeEntered: (state, action) => {
      state.codeEntered = action.payload;
    },
    setPasswordReset: (state, action) => {
      state.passwordReset = action.payload;
    },
    setIsComplete: (state, action) => {
      state.isComplete = action.payload;
    },
    setOTPVerified: (state, action) => {
      state.otpVerified = action.payload;
    },
  },
});

export const {
  setLoginMode,
  setPhoneNumber,
  setSentEmail,
  setCodeEntered,
  setPasswordReset,
  setIsComplete,
  setOTPVerified,
} = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
