import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './page/NewsPage';

import './App.scss';

function App() {
	return (
		<Routes>
			<Route path="/" element={<NewsPage />} />
			<Route path='/:category' element={<NewsPage />} />
		</Routes>
	)

}

export default App;