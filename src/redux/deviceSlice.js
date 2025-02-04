import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
  devices: [],
};

const getDevicesUrl = "https://razer-api.onrender.com/devices";

export const fetchDevices = createAsyncThunk("devices/fetch", async () => {
  const res = await axios.get(getDevicesUrl);
  return res.data;
});

const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setDevice: (state, action) => {
      state.devices = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevices.pending, (state, action) => {
        state.status = "begin";
        console.log(action);
      })
      .addCase(fetchDevices.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action);
        state.devices = action.payload;
      })
      .addCase(fetchDevices.rejected, (state, action) => {
        state.status = "error";
        alert("API ERROR - ma'lumotlar bazasi bilan qandaydur nosozlik bor!");
      });
  },
});

export const { setDevice, setStatus } = deviceSlice.actions;
export default deviceSlice.reducer;
