import { createSlice } from "@reduxjs/toolkit";
import { type2 } from "../../App/DATA/mainSectionButtonComponentData";

const elementSize2Slice = createSlice({
  name: "themecolor",
  initialState: type2,
  reducers: {
    updateSize2: (state, action) => {
      state.splice(action.payload.index, 1, {
        ...state[action.payload.index],
        ...action.payload.newStyles,
      });
      return state;
    },
  },
});

export const { updateSize2 } = elementSize2Slice.actions;
export default elementSize2Slice;
