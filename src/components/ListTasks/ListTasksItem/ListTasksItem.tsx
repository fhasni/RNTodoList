import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Task} from '../../../models/Task';
import styles from './ListTasksItemStyles';
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
