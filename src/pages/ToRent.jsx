import React from 'react';
import styles from '../scss/ToRent.module.scss';
import { Link } from 'react-router-dom';

function ToRent() {
	return (
		<div className={styles.wrapper}>
			<div>
				<h1>Створіть ваше оголошення</h1>
			</div>
			<Link to="/" className={styles.link}>
				<h2>Повернутися на головну сторінку</h2>
			</Link>
			<form className={styles.form_ad} action="">
				<span className={styles.span}>Опис</span>
				<input type="text" maxLength={35} />
				<span className={styles.span}>Місто та район міста</span>
				<input type="text" maxLength={30} />
				<span className={styles.span}>Ціна</span>
				<input type="number" />

				<button className={styles.submit_button} type="submit">
					Створити оголошення
				</button>
			</form>
		</div>
	);
}

export default ToRent;
