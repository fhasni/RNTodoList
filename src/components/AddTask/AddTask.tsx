import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './AddTaskStyles';

type AddTaskProps = {
  addTask: (text: string) => void;
};

export default function AddTask({addTask}: AddTaskProps) {
  const [text, setText] = useState('');

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
