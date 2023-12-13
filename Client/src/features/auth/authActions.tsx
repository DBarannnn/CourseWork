import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'https://localhost:7043';

interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    { name, email, password }: RegisterUserPayload,
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await axios.post(
        `${backendURL}/api/Auth/register`,
        { name, email, password },
        config
      );
    } catch (error) {
      // Return custom error message from the backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
