import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  message: "",
  accessToken: null,
  refreshToken: null,
};

const handleError = (error) => {
  if (error.response) {
    return error.response.data.message;
  }
  return "Something went wrong.";
};

export const createSession = createAsyncThunk(
  "user/createSession",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: user.email,
        password: user.password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  },
);

export const recentSession = createAsyncThunk(
  "user/recentSession",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5000/myAccount");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  },
);

export const deleteSession = createAsyncThunk(
  "user/deleteSession",
  async (_, thunkAPI) => {
    try {
      await axios.delete("http://localhost:5000/logout");
      return null; // No payload needed
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  },
);

export const refreshAccessToken = createAsyncThunk(
  "user/refreshAccessToken",
  async (refreshToken, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/refreshToken", {
        refreshToken: refreshToken,
      });
      return response.data.accessToken;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(createSession.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(recentSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(recentSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(recentSession.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteSession.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
      })
      .addCase(deleteSession.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { reset, setUser, setAccessToken, setRefreshToken } =
  userSlice.actions;

// Action creator for logout
export const logout = () => (dispatch) => {
  dispatch(deleteSession());
  dispatch(reset());
};

// Action creator for refreshing access token
export const refreshToken = () => async (dispatch, getState) => {
  const refreshToken = getState().user.refreshToken;
  try {
    const response = await dispatch(refreshAccessToken(refreshToken));
    // Handle successful token refresh, e.g., updating local storage
  } catch (error) {
    // Handle error during token refresh
    console.error("Error refreshing access token:", error);
    // You may want to dispatch logout action or handle this error differently
  }
};

export default userSlice.reducer;
