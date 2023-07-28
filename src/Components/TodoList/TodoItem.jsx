import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const TodoItem = ({ item, onDelete, statusUpdate }) => {
	const { id, text, status } = item;

	const statusChangeHandler = e => {
		const newStatus = e.target.checked ? 'Completed' : 'Active';
		statusUpdate(id, newStatus);
	};

	return (
		<span className="articleTopSpan">
			<span className="articleSpan">
				<input
					type="checkbox"
					id={`checkbox-${id}`}
					checked={status === 'Completed'}
					onChange={statusChangeHandler}
				/>

				<label htmlFor={`checkbox-${id}`}></label>
				{text}
			</span>

			<button className="deleteBtn" onClick={() => onDelete(id)}>
				<AiFillDelete size={20} color="rgb(255, 255, 255)" />
			</button>
		</span>
	);
};

export default TodoItem;
