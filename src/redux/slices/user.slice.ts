import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isUser: false,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (
      state: typeof initialState,
      action: PayloadAction<typeof initialState>,
    ) => {
      state.isUser = action.payload.isUser;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
