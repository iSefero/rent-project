import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

import styles from './MapBlock.module.scss';

const center = {
	lat: 46.47436,
	lng: 30.73464,
};

function MapBlock() {
	const markersPosition = useSelector((state) => state.ad.adInfo);

	const mapRef = React.useRef(undefined);

	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current = undefined;
	}, []);

	return (
		<GoogleMap
			mapContainerClassName={styles.map}
			center={center}
			zoom={14}
			onLoad={onLoad}
			onUnmount={onUnmount}>
			{markersPosition.map((obj, index) => (
				<Marker
					key={index}
					position={{ lat: obj.lat, lng: obj.lng }}
					icon={{ url: 'blue-circle.svg' }}
				/>
			))}
		</GoogleMap>
	);
}

export default MapBlock;
