import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './page/NewsPage';

import './App.scss';

import NewsList from './components/NewsList';
import Categories from "./components/Categories";

function App() {
	const [category, setCategory] = useState('all');
	const onSelect = useCallback(category => setCategory(category), []);

	return (
		<>
			<Categories category={category} onSelect={onSelect} />
			<NewsList category={category} />
		</>
	);
}

export default App;