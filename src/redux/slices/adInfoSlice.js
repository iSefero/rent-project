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
	activeAd: null,
};

const adSlice = createSlice({
	name: 'ad',
	initialState,
	reducers: {
		setAd(state, action) {
			state.adInfo = action.payload;
		},
		setActiveAd(state, action) {
			state.activeAd = action.payload;
		},
	},
});

export const { setAd, setActiveAd } = adSlice.actions;

export default adSlice.reducer;
