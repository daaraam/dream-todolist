import { MdLightMode } from 'react-icons/md';

export default function SelectNavBar() {
	return (
		<nav className="nav">
			<MdLightMode />
			<div className="select">
				<span>All</span>
				<span>Active</span>
				<span>Completed</span>
			</div>
		</nav>
	);
}
