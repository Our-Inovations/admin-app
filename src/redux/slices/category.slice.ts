import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateCategoryInput } from 'API';

const initialState: { category: CreateCategoryInput[] } = {
  category: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (
      state: typeof initialState,
      action: PayloadAction<CreateCategoryInput[]>,
    ) => {
      state.category = [...action.payload];
    },
  },
});

export const { setCategories } = categorySlice.actions;

export const { reducer: categoryReducer } = categorySlice;
