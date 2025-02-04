import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "../deviceSlice";
import deleteDevicesReducer from "../deleteSlice";
import createDeviceReducer from "../postSlice";

export const store = configureStore({
  reducer: {
    deviceSlice: deviceReducer,
    deleteDevice: deleteDevicesReducer,
    setPost: createDeviceReducer,
  },
});
