import { createSlice } from "@reduxjs/toolkit";
import { type1 } from "../../App/DATA/mainSectionButtonComponentData";

const elementSizeSlice = createSlice({
  name: "themecolor",
  initialState: type1,
  reducers: {
    updateSize: (state, action) => {
      state.splice(action.payload.index, 1, {
        ...state[action.payload.index],
        ...action.payload.newStyles,
      });
      return state;
    },
  },
});

export const { updateSize } = elementSizeSlice.actions;
export default elementSizeSlice;
