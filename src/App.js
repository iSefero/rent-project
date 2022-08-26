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
		axios.get('http://localhost:3000/db.json').then((resp) => {
			dispatch(setAd(resp.data.ad));
		});
	}, [setAd]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/torent" element={<ToRent />} />
			</Routes>
		</div>
	);
}

export default App;
