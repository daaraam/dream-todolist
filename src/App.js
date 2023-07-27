import React from 'react';

import './App.css';
import SelectNavBar from './Components/SelectNavBar';
import TodoList from './Components/TodoList';

export default function App() {
	return (
		<div className="backgroundContainer">
			<div className="todoContainer">
				<SelectNavBar />
				<TodoList />
			</div>
		</div>
	);
}
