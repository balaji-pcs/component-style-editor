import { createSlice } from "@reduxjs/toolkit";
import { components } from "../../App/DATA/colorData";

const componentsSlice = createSlice({
  name: "component",
  initialState: components,
  reducers: {
    updateComponent: (state, action) => {
      state.splice(action.payload.index, 1, action.payload.newitem);
      return state;
    },
  },
});

export const { updateComponent } = componentsSlice.actions;
export default componentsSlice;
