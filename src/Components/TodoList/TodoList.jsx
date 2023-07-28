import React, { useState } from 'react';
import uuid from 'react-uuid';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

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

	return (
		<>
			<article className="article">
				<ul>
					<li className="li">
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
		</>
	);
};

export default TodoList;

const getFilteredItems = (todos, filter) => {
	if (filter === 'All') {
		return todos;
	}
	return todos.filter(item => item.status === filter);
};
