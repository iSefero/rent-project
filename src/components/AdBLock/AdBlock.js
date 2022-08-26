import React from 'react';

import styles from './AdBlock.module.scss';

function AdBlock({ image, discription, location, price }) {
	return (
		<div className={styles.ad_block}>
			<img src={image} alt="Тут должна быть картинка" />
			<span className={styles.price}>{price} грн / доба</span>
			<span className={styles.discription}>{discription}</span>
			<span className={styles.location}>{location}</span>
		</div>
	);
}

export default AdBlock;
