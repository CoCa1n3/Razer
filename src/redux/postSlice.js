import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY_URL = "https://razer-api.onrender.com/devices/";

const initialState = {
  status: null,
  devices: [],
};

export const createDevice = createAsyncThunk(
  "devices/postDevice",
  async (data) => {
    await axios.post(`${API_KEY_URL}`, data);
  }
);

const createDeviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.devices = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDevice.pending, (state, action) => {
        state.status = "begin";
        console.log(action);
      })
      .addCase(createDevice.fulfilled, (state, action) => {
        state.status = "success";
        alert("Device Created!");
        window.location.reload();
        state.devices = action.payload;
      })
      .addCase(createDevice.rejected, (state, action) => {
        state.status = "error";
        alert("API ERROR - ma'lumotlar bazasi bilan qandaydur nosozlik bor!");
      });
  },
});

export const { setPost, setStatus } = createDeviceSlice.actions;
export default createDeviceSlice.reducer;
