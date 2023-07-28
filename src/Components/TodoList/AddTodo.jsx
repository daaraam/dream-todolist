import React, { useState } from 'react';
import uuid from 'react-uuid';

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
		<footer className="footer">
			<form onSubmit={addButtonHandler}>
				<input
					className="input"
					placeholder="Add Todo"
					value={write}
					onChange={e => setWrite(e.target.value)}
				/>
				<button className="button" type="submit">
					Add
				</button>
			</form>
		</footer>
	);
}
