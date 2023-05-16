import { combineReducers } from "@reduxjs/toolkit";
import colorSlice from "./themeColorReducer";
import bodySlice from "./bodyReducer";
import componentsSlice from "./componentsReducer";
import fontSlice from "./fontReducer";
import elementSizeSlice from "./elementSizeReducer";
import elementSize2Slice from "./elementSize2Reducer";
import selectedSlice from "./selectedReducer";
import backgroundColorSlice from "./backgroundColorReducer";
import fontColorSlice from "./fontColorReducer";

const rootReducer = combineReducers({
  // left panel reducers
  themeColor: colorSlice.reducer,
  bodyColor: bodySlice.reducer,
  compnentsColor: componentsSlice.reducer,

  //right panel reducers
  text: fontSlice.reducer,
  size: elementSizeSlice.reducer,
  size2: elementSize2Slice.reducer,
  selectedBackgroundColor:backgroundColorSlice.reducer,
  selectedFontColor:fontColorSlice.reducer,

  // for selected element
  selected: selectedSlice.reducer,
});

export default rootReducer;
