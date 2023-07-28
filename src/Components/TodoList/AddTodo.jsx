import React, { useState } from 'react';
import uuid from 'react-uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ setTodos, todos }) {
	const [write, setWrite] = useState('');

	const addButtonHandler = event => {
		event.preventDefault();
		const newTodo = {
			id: uuid(),
			text: write,
			status: 'Active',
		};
		if (write.trim() === '') {
			return;
		}
		setTodos([...todos, newTodo]);
		setWrite('');
	};

	return (
		<footer className={styles.footer}>
			<form onSubmit={addButtonHandler}>
				<input
					className={styles.addTodoInput}
					placeholder="Add Todo"
					value={write}
					onChange={e => setWrite(e.target.value)}
				/>
				<button className={styles.addButton} type="submit">
					Add
				</button>
			</form>
		</footer>
	);
}
