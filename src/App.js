import React, { useState } from 'react';

import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList/TodoList';

const filters = ['All', 'Active', 'Completed'];
export default function App() {
	const [filter, setFilter] = useState(filters[0]);

	return (
		<div className="backgroundContainer">
			<div className="todoContainer">
				<Header filters={filters} filter={filter} onFilterChange={setFilter} />
				<TodoList filter={filter} />
			</div>
		</div>
	);
}
