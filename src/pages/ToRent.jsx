import React from 'react';
import styles from '../scss/ToRent.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ToRent() {
	const [rentState, setRentState] = React.useState({
		image: '',
		discription: '',
		location: '',
		price: '',
		lat: '',
		lng: '',
	});
	console.log(rentState);
	const onAddRent = () => {
		const updatedState = {
			...rentState,
			lat: Number(rentState.lat),
			lng: Number(rentState.lng),
		};

		axios.post('https://630f7dc23792563418911561.mockapi.io/rent', updatedState);
	};

	const handleChange = (e, inputName) => {
		setRentState({
			...rentState,
			[inputName]: e.target.value,
		});
	};

	return (
		<div className={styles.wrapper}>
			<div>
				<h1>Створіть ваше оголошення</h1>
			</div>
			<Link to="/" className={styles.link}>
				<h2>Повернутися на головну сторінку</h2>
			</Link>
			<form className={styles.form_ad} action="">
				<span className={styles.span}>Будь ласка, вставте URL адресу на ваше зображення</span>
				<input onChange={(e) => handleChange(e, 'image')} value={rentState.image} type="text" />
				<span className={styles.span}>Опис оголошення</span>
				<input
					onChange={(e) => handleChange(e, 'discription')}
					value={rentState.discription}
					type="text"
					maxLength={35}
				/>
				<span className={styles.span}>Місто та район міста</span>
				<input
					onChange={(e) => handleChange(e, 'location')}
					value={rentState.location}
					type="text"
					maxLength={30}
				/>
				<span className={styles.span}>Ціна (грн / доба)</span>
				<input onChange={(e) => handleChange(e, 'price')} value={rentState.price} type="number" />
				<span className={styles.span}>(Ваше місцезнаходження) Ваша широта по карті (lat)</span>
				<input onChange={(e) => handleChange(e, 'lat')} value={rentState.lat} type="number" />
				<span className={styles.span}>(Ваше місцезнаходження) Ваша довгота по карті (lng)</span>
				<input onChange={(e) => handleChange(e, 'lng')} value={rentState.lng} type="number" />
				<span className={styles.span}>
					Ваші координати можно подивитися на карті за
					<a href="https://www.google.com/maps/"> посиланням</a>, перша цифра це широта(lat), друга
					- довгота(lng)
				</span>

				<span>Извините, не успел создать нормальное меню с добавлением координат маркера. </span>

				<div onClick={onAddRent} className={styles.submit_button}>
					<span>Створити оголошення</span>
				</div>
			</form>
		</div>
	);
}

export default ToRent;
