import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Task} from '../models/Task';
type ListItemPros = {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export default function ListTasksItem({
  task,
  toggleTask,
  deleteTask,
}: ListItemPros) {
  return (
    <TouchableOpacity onPress={() => toggleTask(task.id)}>
      <View style={styles.container}>
        <Text style={[styles.text, task.isDone ? styles.textDone : {}]}>
          {task.text}
        </Text>
        <Text style={styles.icon} onPress={() => deleteTask(task.id)}>
          X
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomColor: '#e8e8f8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    flexShrink: 1,
  },
  textDone: {
    textDecorationLine: 'line-through',
  },
  icon: {
    fontSize: 20,
    color: '#FF5A5F',
  },
});
