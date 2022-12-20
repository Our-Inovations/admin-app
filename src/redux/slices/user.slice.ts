import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (
      state: typeof initialState,
      action: PayloadAction<typeof initialState>,
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
