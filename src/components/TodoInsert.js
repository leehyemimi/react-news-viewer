
import React, { useCallback } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { useState } from "react";

function TodoInsert({ onInsert }) {
	const [value, setValue] = useState('');

	const onChange = useCallback(e => {
		setValue(e.target.value)
	}, []);

	const onClick = useCallback(
		(e) => {
			e.preventDefault();
			onInsert(value);
			setValue("");
		}, [onInsert, value])

	return (
		<form className="TodoInsert">
			<input
				placeholder="할 일을 입력하세요"
				value={value}
				onChange={onChange}
			/>
			<button type="submit" onClick={onClick}>
				<MdAdd />
			</button>
		</form>
	);
}

export default TodoInsert;
