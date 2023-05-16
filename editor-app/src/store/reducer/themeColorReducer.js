import { createSlice } from "@reduxjs/toolkit";
import { themeColors } from "../../App/DATA/colorData";

const colorSlice = createSlice({
  name: "themecolor",
  initialState: themeColors,
  reducers: {
    updateThemeColor: (state, action) => {
      state.splice(action.payload.index, 1, action.payload.newitem);
      return state;
    },
  },
});

export const { updateThemeColor } = colorSlice.actions;
export default colorSlice;
