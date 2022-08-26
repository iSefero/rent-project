import { configureStore } from '@reduxjs/toolkit';
import ad from './slices/adInfoSlice';

export const store = configureStore({
	reducer: {
		ad,
	},
});
