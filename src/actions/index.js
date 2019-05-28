import * as Actions from './actionTypes';

let nextId = 0;
export const addTodo = (text) => ({
	type: Actions.ADD_TODO,
	id: nextId++,
	text
});

export const toggleTodo = (id) => ({
	type: Actions.TOGGLE_TODO,
	id
});
