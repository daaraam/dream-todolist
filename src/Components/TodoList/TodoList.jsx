import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useDarkMode } from '../../Context/DarkModeContext';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ filter }) => {
	const [todos, setTodos] = useState([
		{
			id: uuid(),
			text: '공부하기',
			status: 'Completed',
		},
		{
			id: uuid(),
			text: '투두리스트 완성하기',
			status: 'Active',
		},
	]);

	const delBtnClickHandler = id => {
		const filteredTodo = todos.filter(item => item.id !== id);
		setTodos(filteredTodo);
	};

	const statusUpdateHandler = (id, newStatus) => {
		setTodos(todos.map(item => (item.id === id ? { ...item, status: newStatus } : item)));
	};

	const filtered = getFilteredItems(todos, filter);
	const { darkMode } = useDarkMode();
	return (
		<div className={styles.todoContainer}>
			<article className="article">
				<ul>
					<li className={styles.list}>
						{filtered.map(item => (
							<TodoItem
								key={item.id}
								item={item}
								onDelete={delBtnClickHandler}
								statusUpdate={statusUpdateHandler}
							/>
						))}
					</li>
				</ul>
			</article>
			<AddTodo setTodos={setTodos} todos={todos} />
		</div>
	);
};

export default TodoList;

const getFilteredItems = (todos, filter) => {
	if (filter === 'All') {
		return todos;
	}
	return todos.filter(item => item.status === filter);
};
