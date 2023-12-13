// authActions.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendURL = 'https://localhost:7043';

export interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserPayload{
    email: string
    password: string
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



export const userLogin = createAsyncThunk<void, LoginUserPayload>(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          `${backendURL}/api/Auth/login`,
          { email, password },
          config
        )
        // store user's token in local storage
        localStorage.setItem('token', data.token)
        return data
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
