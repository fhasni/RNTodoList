import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Task} from '../../models/Task';
import styles from './ListTasksStyles';
import ListTasksItem from './ListTasksItem/ListTasksItem';

type ListTasksPros = {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export default function ListTasks({
  tasks,
  toggleTask,
  deleteTask,
}: ListTasksPros) {
  return (
    <View style={styles.container}>
      {tasks.length > 0 ? (
        <FlatList<Task>
          style={styles.list}
          renderItem={({item}: {item: Task}) => (
            <ListTasksItem
              task={item}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          )}
          data={tasks}
        />
      ) : (
        <Text style={styles.emptyListText}>Empty list</Text>
      )}
    </View>
  );
}
