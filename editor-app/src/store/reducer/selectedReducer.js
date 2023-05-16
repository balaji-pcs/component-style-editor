import { createSlice } from "@reduxjs/toolkit";
import { body } from "../../App/DATA/colorData";

const selectedSlice = createSlice({
  name: "body",
  initialState: { index: null, key: null },
  reducers: {
    updateselected: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateselected } = selectedSlice.actions;
export default selectedSlice;
