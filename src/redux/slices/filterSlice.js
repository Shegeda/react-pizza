import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategotyId, setSort, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;
