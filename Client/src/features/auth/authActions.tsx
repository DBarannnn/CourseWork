// authActions.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendURL = 'https://localhost:7043';

export interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk<void, RegisterUserPayload>(
  'auth/register',
  async ({ name, email, password }) => {
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
      throw error;
    }
  }
);
