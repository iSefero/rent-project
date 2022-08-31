import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { MarkerF } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveAd } from '../../redux/slices/adInfoSlice';
import blueCircle from '../../assets/svg/blue-circle.svg';

import styles from './MapBlock.module.scss';

const center = {
	lat: 46.47436,
	lng: 30.73464,
};

function MapBlock() {
	const dispatch = useDispatch();

	const { adInfo } = useSelector((state) => state.ad);

	const mapRef = React.useRef(undefined);

	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current = undefined;
	}, []);

	const onActiveAd = (id) => {
		dispatch(setActiveAd(id));
	};

	return (
		<GoogleMap
			mapContainerClassName={styles.map}
			center={center}
			zoom={14}
			onLoad={onLoad}
			onUnmount={onUnmount}>
			{adInfo?.map((obj, index) => {
				return (
					<MarkerF
						onClick={() => onActiveAd(obj.id)}
						key={index}
						position={{ lat: obj.lat, lng: obj.lng }}
						icon={blueCircle}
					/>
				);
			})}
		</GoogleMap>
	);
}

export default MapBlock;
