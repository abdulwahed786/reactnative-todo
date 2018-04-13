import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button
} from 'react-native';

import Task from './Task';

type Props = {};
export default class Home extends Component<Props> {
	constructor(props) {
		super(props);

		this.onDelete = this.onDelete.bind(this);

		this.tasks =
			[
				{
					id: 1,
					name: "Bring veggies",
					done: false
				},
				{
					id: 2,
					name: "Bring meat",
					done: false
				},
				{
					id: 3,
					name: "Eat stuff",
					done: false
				}
			];
		super(props);
		this.state = {
			text: '',
			tasks: this.tasks
		};
	}

	onDelete(id) {
		this.state.tasks.forEach((task, idx) => {
			if (task.id === id) this.tasks.splice(idx, 1);
		});

		this.setState({
			tasks: this.tasks
		});

	}

	render() {
		return (
			<View>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
					placeholder={"Enter a task"}
				/>
				<Button
					onPress={() => {
						this.tasks.push({
							//generate random id
							id: Math.floor(Math.random() * 1000),
							name: this.state.text,
							done: false
						});

						this.setState({
							tasks: this.tasks
						});
					}}
					title="Add"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
				{
					this.state.tasks.map((task, index) => <Task onDelete={this.onDelete} task={task} key={index}/>)
				}
			</View>
		);
	}
}
