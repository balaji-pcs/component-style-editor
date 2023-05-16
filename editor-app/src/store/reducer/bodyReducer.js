import { createSlice } from "@reduxjs/toolkit";
import { body } from "../../App/DATA/colorData";

const bodySlice = createSlice({
  name: "body",
  initialState: body,
  reducers: {
    updateBody: (state, action) => {
      state.splice(action.payload.index, 1, action.payload.newitem);
      return state;
    },
  },
});

export const { updateBody } = bodySlice.actions;
export default bodySlice;
