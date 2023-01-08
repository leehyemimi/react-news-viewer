import './App.css';
import axios from 'axios'
import { useState } from "react";
function App() {
	const [data, setData] = useState([]);
	function onClick() {
		axios.get('https://jsonplaceholder.typicode.com/todos/1').then((Response) => {
			setData(Response.data);
		}).catch((Error) => {
			console.log(Error);
		})
	}

	return (
		<div className="App">
			<button onClick={onClick}>불러오기</button>
			<div>
				{data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
			</div>
		</div>
	);
}

export default App;
