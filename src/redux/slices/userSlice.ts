import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  loading: false,
  user: {
    name: "",
    email: "",
  },
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    getRegisterRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    getRegisterSuccess: (state, action: PayloadAction<UserType>) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    getRegisterFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    getLoginRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    getLoginSuccess: (state, action: PayloadAction<UserType>) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    getLoginFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    getUserRequest: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action: PayloadAction<UserType>) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    getUserFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getLogoutRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = true;
    },
    getLogoutSuccess: (state, action: PayloadAction<UserType>) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = false;
    },
    getLogoutFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const {
  getLoginRequest,
  getLoginSuccess,
  getLoginFail,
  getRegisterFail,
  getRegisterRequest,
  getRegisterSuccess,
  getLogoutFail,
  getLogoutRequest,
  getLogoutSuccess,
  getUserFail,
  getUserRequest, 
  getUserSuccess
} = userSlice.actions;
export default userSlice.reducer;
