import { createSlice } from "@reduxjs/toolkit";

const fontColorSlice = createSlice({
  name: "body",
  initialState: 0,
  reducers: {
    updateSelectedFontColor: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateSelectedFontColor } = fontColorSlice.actions;
export default fontColorSlice;
