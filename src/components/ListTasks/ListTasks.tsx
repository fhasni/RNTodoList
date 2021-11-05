import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Task} from '../../models/Task';
import styles from './ListTasksStyles';
import ListTasksItem from './ListTasksItem/ListTasksItem';
import {useSelector} from 'react-redux';
import {RootState} from '../../state';

type ListTasksPros = {};

export default function ListTasks({}: ListTasksPros) {
  const {tasks} = useSelector((state: RootState) => state.task);
  return (
    <View style={styles.container}>
      {tasks.length > 0 ? (
        <FlatList<Task>
          style={styles.list}
          renderItem={({item}: {item: Task}) => <ListTasksItem task={item} />}
          data={tasks}
        />
      ) : (
        <Text style={styles.emptyListText}>Empty list</Text>
      )}
    </View>
  );
}
