import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

import Header from '../components/Header/Header';
import SearchBlock from '../components/SearchBlock/SearchBlock';
import MainMenu from '../components/MainMenu/MainMenu';
import MapBlock from '../components/MapBlock/MapBlock';
import AdBlock from '../components/AdBLock/AdBlock';

import styles from '../scss/Home.module.scss';

function Home() {
	const markersPosition = useSelector((state) => state.ad.adInfo);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyCbIEwE4xnJA3op8yk2jwcghV7yNmN_Kes',
	});

	return (
		<div className="wrapper">
			<Header />
			<SearchBlock />
			<div className={styles.main_block}>
				<MainMenu />
				{isLoaded ? <MapBlock /> : <h2>Loading...</h2>}
				<div className={styles.ad_block}>
					{markersPosition.map((obj) => (
						<AdBlock key={obj.id} className={styles.ad_cart} {...obj} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
