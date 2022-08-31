import './App.css';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import { setAd } from './redux/slices/adInfoSlice';

import { useDispatch } from 'react-redux';

import Home from './pages/Home';
import ToRent from './pages/ToRent';

function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		axios.get('https://630f7dc23792563418911561.mockapi.io/rent').then((resp) => {
			dispatch(setAd(resp.data));
		});
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/toRent" element={<ToRent />} />
			</Routes>
		</div>
	);
}

export default App;
