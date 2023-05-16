import { createSlice } from "@reduxjs/toolkit";

const fontSlice = createSlice({
  name: "themecolor",
  initialState: { text: "Button", fontColor: "#ffffff" },
  reducers: {
    updateText: (state, action) => {
      state.text = action.payload.text;
      state.fontColor = action.payload.fontColor;
      return state;
    },
  },
});

export const { updateText } = fontSlice.actions;
export default fontSlice;
