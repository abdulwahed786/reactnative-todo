import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button
} from 'react-native';

type Props = {};

const styles = StyleSheet.create({
	taskContainer: {
		color: '#756',
		padding: '5%'
	}
});

export default class Task extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<View>
				<Text style={styles.task_container}>
					{this.props.task.name}
				</Text>
				<Button
					onPress={()=> {
						this.props.onDelete(this.props.task.id);
					}}
					style={styles.deleteBtn}
					title="Delete"
					color="red"
					accessibilityLabel="Learn more about this purple button"
				/>

			</View>
		);
	}
}
