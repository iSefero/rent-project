import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	adInfo: [
		{
			id: 0,
			image: '',
			discription: '',
			location: '',
			lat: 0,
			lng: 0,
		},
	],
};

const adSlice = createSlice({
	name: 'ad',
	initialState,
	reducers: {
		setAd(state, action) {
			state.adInfo = action.payload;
		},
	},
});

export const { setAd } = adSlice.actions;

export default adSlice.reducer;
