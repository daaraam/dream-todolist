import { BsFillCloudSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { useDarkMode } from '../Context/DarkModeContext';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
	const { toggleDarkMode, darkMode } = useDarkMode();
	return (
		<header className={styles.header}>
			<span className="button" onClick={() => toggleDarkMode()}>
				{darkMode ? (
					<BsFillMoonStarsFill className={styles.lightModeButton} />
				) : (
					<BsFillCloudSunFill className={styles.darkModeButton} />
				)}
			</span>
			<div className={styles.select}>
				{filters.map((value, index) => (
					<span
						key={index}
						className={`${styles.selectIcon} ${filter === value && styles.selected}`}
						onClick={() => onFilterChange(value)}
					>
						{value}
					</span>
				))}
			</div>
		</header>
	);
}
