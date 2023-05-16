import { createSlice } from "@reduxjs/toolkit";
import { body } from "../../App/DATA/colorData";

const backgroundColorSlice = createSlice({
  name: "body",
  initialState: 0,
  reducers: {
    updateSelectedBackroundColor: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateSelectedBackroundColor } = backgroundColorSlice.actions;
export default backgroundColorSlice;
