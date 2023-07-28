import { MdLightMode } from 'react-icons/md';
import styles from './Header.module.css';
export default function Header({ filters, filter, onFilterChange }) {
	return (
		<nav className={styles.nav}>
			<MdLightMode className={styles.darkModeToggle} />
			<div className={styles.select}>
				{filters.map((value, index) => (
					<span kew={index} className={styles.selectIcon} onClick={() => onFilterChange(value)}>
						{value}
					</span>
				))}
			</div>
		</nav>
	);
}
