import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";

interface AuthState {
  loading: boolean;
  userInfo: Record<string, unknown>;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

const userToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const initialState: AuthState = {
  loading: false,
  userInfo: {},
  userToken,
  error: null,
  success: false,
};



export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true; // registration successful
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // user login
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload.userToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

const rootReducer = combineReducers({
    auth: authSlice.reducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export default authSlice.reducer;
