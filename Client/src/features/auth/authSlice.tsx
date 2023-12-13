import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";

interface AuthState {
  loading: boolean;
  userInfo: Record<string, unknown>;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  userInfo: {},
  userToken: null,
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
      });
  },
});

const rootReducer = combineReducers({
    auth: authSlice.reducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export default authSlice.reducer;
