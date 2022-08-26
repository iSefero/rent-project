import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/svg/logo.svg';

function Header() {
	const arrow = (
		<svg
			className={styles.arrow_down}
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16">
			<path
				fillRule="evenodd"
				d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
			/>
		</svg>
	);
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo_block}>
				<img src={logo} alt="" />
			</div>
			<div className={styles.header}>
				<div className={styles.header_title}>
					<div className={styles.header_span_title}>
						<span>
							Портал оренди та прокату <br />
							товарів та послуг
						</span>
					</div>
				</div>
				<div className={styles.header_rent}>
					<div className={styles.button}>
						<Link to="torent">
							<span className={styles.dicription_button}>
								Здати в оренду
								<svg
									className={styles.button_plus}
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 16 16">
									<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
								</svg>
							</span>
						</Link>
					</div>
				</div>

				<div className={styles.login}>
					<svg
						className={styles.svg_login}
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 16 16">
						<path
							fillRule="evenodd"
							d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
						/>
						<path
							fillRule="evenodd"
							d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
						/>
					</svg>
					<span>Увійти</span>
					<div className={styles.separator}>|</div>
				</div>
				<div className={styles.money_info}>
					<div className={styles.lang}>
						<span>UA</span>
					</div>
					{arrow}
					<div className={styles.currency}>
						<span>ГРН</span>
					</div>
					{arrow}
				</div>
			</div>
		</div>
	);
}

export default Header;
