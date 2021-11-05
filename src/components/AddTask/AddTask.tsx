import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './AddTaskStyles';
import * as actionCreators from '../../state/task/taskActionCreators';

type AddTaskProps = {};

export default function AddTask({}: AddTaskProps) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const {addTask} = bindActionCreators(actionCreators, dispatch);
  const onButtonClicked = () => {
    if (text === '') {
      return;
    }
    addTask(text);
    setText('');
    console.log('Add item clicked:', text);
  };
  const onChangeText = (newText: string) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={onChangeText}
        placeholder="New task"
        style={[styles.textInput]}
      />
      <TouchableOpacity onPress={onButtonClicked} style={styles.button}>
        <View>
          <Text style={styles.buttonText}>+ Add Item</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
