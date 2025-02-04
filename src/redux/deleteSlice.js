import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY_URL = "https://razer-api.onrender.com/devices/";

const initialState = {
  status: null,
  devices: [],
};

export const deleteDeviceById = createAsyncThunk(
  "devices/removeDevice",
  async (_id, thunkAPI) => {
    await axios.delete(`${API_KEY_URL}${_id}`);
    thunkAPI.dispatch(deleteDevice(_id));
  }
);

const deleteSlice = createSlice({
  name: "delete/devices",
  initialState,
  reducers: {
    deleteDevice: (state, action) => {
      state.devices = state.devices.filter(
        (device) => device._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteDeviceById.pending, (state, action) => {
        state.status = "begin";
        console.log(action);
      })
      .addCase(deleteDeviceById.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action);
        state.devices = action.payload;
        alert("Device deleted");
        window.location.reload();
      })
      .addCase(deleteDeviceById.rejected, (state, action) => {
        state.status = "error";
        alert("API ERROR - ma'lumotlar bazasi bilan qandaydur nosozlik bor!");
      });
  },
});

export const { deleteDevice } = deleteSlice.actions;
export default deleteSlice.reducer;
