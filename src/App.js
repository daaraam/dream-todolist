import React from 'react';

import './App.css';
import Article from './Components/Article';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

export default function App() {
	return (
		<div className="backgroundContainer">
			<div className="todoContainer">
				<Nav />
				<Article />
				<Footer />
			</div>
		</div>
	);
}
