import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import uuid from 'react-uuid';

export default function TodoList() {
	const [write, setWrite] = useState('');
	const [todos, setTodos] = useState([
		{
			id: uuid(),
			text: '공부하기',
			status: 'active',
		},
		{
			id: uuid(),
			text: '투두리스트 완성하기',
			status: 'active',
		},
	]);

	const writeOnchangeHandler = e => {
		setWrite(e.target.value);
	};

	const addButtonHandler = event => {
		event.preventDefault();
		const newTodo = {
			id: uuid(),
			text: write,
			status: 'active',
		};
		if (write.trim() === '') {
			return;
		}
		setTodos([...todos, newTodo]);
		setWrite('');
	};

	const delBtnClickHandler = id => {
		const filteredTodo = todos.filter(item => item.id !== id);
		setTodos(filteredTodo);
	};

	const handleChange = (e, id) => {
		const status = e.target.checked ? 'completed' : 'active';
		setTodos(todos.map(item => (item.id === id ? { ...item, status } : item)));
	};

	return (
		<>
			<article className="article">
				<ul>
					<li className="li">
						{todos.map(item => (
							<span className="articleTopSpan" key={item.id}>
								<span className="articleSpan">
									<input
										type="checkbox"
										id={`checkbox-${item.id}`}
										checked={item.status === 'completed'}
										onChange={e => handleChange(e, item.id)}
									/>
									<label htmlFor={`checkbox-${item.id}`}></label>
									{item.text}
								</span>
								<button className="deleteBtn" onClick={() => delBtnClickHandler(item.id)}>
									<AiFillDelete size={20} />
								</button>
							</span>
						))}
					</li>
				</ul>
			</article>
			<footer className="footer">
				<form onSubmit={addButtonHandler}>
					<input className="input" placeholder="Add Todo" value={write} onChange={writeOnchangeHandler} />
					<button className="button" type="submit" onClick={addButtonHandler}>
						Add
					</button>
				</form>
			</footer>
		</>
	);
}
