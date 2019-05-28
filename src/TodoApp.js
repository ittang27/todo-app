import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

export default class TodoApp extends Component {
	state = {
		todos: [],
		visibilityFilter: 'SHOW_ALL_TODOS'
	};

	render() {
		return (
			<View style={styles.container}>
				<AddTodo />
				<ScrollView>
					<View>
						<VisibleTodos />
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40
	}
});
