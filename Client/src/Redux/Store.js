
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Redux/Slice/authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    // other reducers if any
  },
});