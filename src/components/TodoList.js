import React from 'react';
import './TodoList.scss'; import TodoListItem from "./TodoListItem";

function TodoList({ todos, onRemove, onToggle }) {
	return (
		<div className="TodoList">
			{todos.map((todo, i) => {
				return (
					<TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
				)
			})}
		</div>
	);
}

export default TodoList;
