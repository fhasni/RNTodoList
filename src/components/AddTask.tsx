import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
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
    console.log(newText);
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

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 350,
    borderColor: '#EEE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#FF5A5F',
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
