import React from 'react';

import styles from './MainMenu.module.scss';

function MainMenu() {
	const star = (
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="orange" viewBox="0 0 16 16">
			<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
		</svg>
	);
	return (
		<div className={styles.main_menu}>
			<div className={styles.view_list}>
				<div className={styles.button_vew_list}>
					<span>Переглянути список</span>
					<svg
						className={styles.map_svg}
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 16 16">
						<path
							fillRule="evenodd"
							d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
						/>
					</svg>
				</div>
			</div>
			<div className={styles.all_categories}>
				<svg
					className={styles.left_arrow_svg}
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16">
					<path
						fillRule="evenodd"
						d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
					/>
				</svg>
				<span>Всі категорії</span>
				<svg
					className={styles.left_arrow_svg2}
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16">
					<path
						fillRule="evenodd"
						d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
					/>
				</svg>
			</div>
			<div className={styles.menu_categories}>
				<ul>
					<li>Нерухомість</li>
				</ul>
			</div>
			<div className={styles.all_list}>
				<span>ПІДКАТЕГОРІЇ</span>
				<svg
					className={styles.down_arrow_svg}
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16">
					<path
						fillRule="evenodd"
						d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
					/>
				</svg>
				<ul>
					<li>Квартири</li>
					<li>Будинки</li>
					<li>Апартаменти</li>
					<li>Кімнати</li>
					<li>Комерційна нерухомість</li>
				</ul>
			</div>
			<div className={styles.more}>
				<span>Ще</span>
				<svg
					className={styles.down_arrow_svg}
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 -4 16 16">
					<path
						fillRule="evenodd"
						d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
					/>
				</svg>
			</div>
			<div className={styles.discpition_filter}>
				<span>ЦІНА ОРЕНДИ (ГРН)</span>
			</div>
			<div className={styles.rent_price_filter}>
				<div className={styles.rent_price}></div>
				<form className={styles.input_rent_filter} action="">
					<input name="min" placeholder="Min" type="number" />
					<div className={styles.separator}>|</div>
					<input name="max" placeholder="Max" type="number" />
				</form>
			</div>
			<div className={styles.point_of_issue}>
				<span>ПУНКТ ВИДАЧІ </span>
				<div className={styles.checkbox}>
					<input type="checkbox" name="checkbox" value="yes" />
					<span>Відділеня GUP</span>
				</div>
			</div>
			<div className={styles.discription_rating}>Оцініть цю категорію</div>
			<div className={styles.rating}>
				<svg className={styles.rating_star}>{star}</svg>
				<svg className={styles.rating_star}>{star}</svg>
				<svg className={styles.rating_star}>{star}</svg>
				<svg className={styles.rating_star}>{star}</svg>
				<svg className={styles.rating_star}>{star}</svg>
			</div>
			<div className={styles.votes}>Всього голосів: 37</div>
		</div>
	);
}

export default MainMenu;
