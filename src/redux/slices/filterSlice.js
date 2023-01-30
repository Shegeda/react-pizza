import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярністю",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    setCategotyId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategotyId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
