import { MdLightMode } from 'react-icons/md';

export default function Header({ filters, filter, onFilterChange }) {
	return (
		<nav className="nav">
			<MdLightMode />
			<div className="select">
				{filters.map((value, index) => (
					<span kew={index} className="selectIcon" onClick={() => onFilterChange(value)}>
						{value}
					</span>
				))}
			</div>
		</nav>
	);
}
