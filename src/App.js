

import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";

function App() {
	return (
		<>
			<Categories></Categories>
			<Routes>
				<Route index element={<NewsList />} />
				<Route path="/:category" element={<NewsList />} />
			</Routes>
		</>
	);
}

export default App;
