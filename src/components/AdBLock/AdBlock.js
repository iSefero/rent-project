import React from 'react';
import { useSelector } from 'react-redux';

import styles from './AdBlock.module.scss';

function AdBlock({ image, discription, location, price, id }) {
	const refAd = React.useRef();
	const activeAd = useSelector((state) => state.ad.activeAd);

	React.useEffect(() => {
		id === activeAd && refAd.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}, [activeAd]);

	return (
		<div
			ref={id === activeAd ? refAd : null}
			className={id === activeAd ? styles.active : styles.ad_block}>
			<div className={styles.image}>
				<img src={image} alt="Тут должна быть картинка" />
				<span className={styles.price}>{price} грн / доба</span>
			</div>
			<span className={styles.discription}>{discription}</span>
			<span className={styles.location}>{location}</span>
		</div>
	);
}

export default AdBlock;
