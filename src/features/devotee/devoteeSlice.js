import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import devoteeService from "./devoteeService";

const initialState = {
  devotees: [],
  devotee: null,
};

export const createDevotee = createAsyncThunk(
  "/devotees/create",
  async (devotee, thunkAPI) => {
    try {
      return await devoteeService.createDevotee(devotee);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get devotee requests

export const getDevotees = createAsyncThunk(
  "devotees/getAll",
  async (_, thunkAPI) => {
    try {
      return await devoteeService.getDevotees();
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getDevoteesDetails = createAsyncThunk(
  "devotees/getDetails",
  async (id, thunkAPI) => {
    try {
      return await devoteeService.getDevoteesDetails(id);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateDevoteeDetails = createAsyncThunk(
  "devotees/updateDetails",
  async (details, thunkAPI) => {
    try {
      return await devoteeService.updateDevoteeDetails(details);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteDevotee = createAsyncThunk(
  "devotees/deleteDevotee",
  async (id, thunkAPI) => {
    try {
      return await devoteeService.deleteDevotee(id);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const devoteeSlice = createSlice({
  name: "devotees",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDevotee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDevotee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.devotees.push(action.payload.devotees);
        state.message = "Successfully Submitted";
      })
      .addCase(createDevotee.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDevotees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDevotees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.devotees = action.payload.devotees;
      })
      .addCase(getDevotees.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDevoteesDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDevoteesDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.devotee = action.payload.devotee;
      })
      .addCase(getDevoteesDetails.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteDevotee.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteDevotee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.devotee = null;
      })
      .addCase(deleteDevotee.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateDevoteeDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDevoteeDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.devotee = action.payload.devotee;
      })
      .addCase(updateDevoteeDetails.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = devoteeSlice.actions;
export default devoteeSlice.reducer;
