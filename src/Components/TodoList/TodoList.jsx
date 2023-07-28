import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ filter }) => {
	const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

	const delBtnClickHandler = id => {
		const filteredTodo = todos.filter(item => item.id !== id);
		setTodos(filteredTodo);
	};

	const statusUpdateHandler = (id, newStatus) => {
		setTodos(todos.map(item => (item.id === id ? { ...item, status: newStatus } : item)));
	};

	useEffect(() => {
		localStorage.setItem('TODOS', JSON.stringify(todos));
	}, [todos]);

	const filtered = getFilteredItems(todos, filter);
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

const readTodosFromLocalStorage = () => {
	const todos = localStorage.getItem('TODOS');
	return todos
		? JSON.parse(todos)
		: [
				{
					id: uuid(),
					text: 'TODOLIST를 작성해보세요!',
					status: 'Active',
				},
		  ];
};
