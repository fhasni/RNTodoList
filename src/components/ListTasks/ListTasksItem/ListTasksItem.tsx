import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Task} from '../../../models/Task';
import styles from './ListTasksItemStyles';

import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../../state/task/taskActionCreators';

type ListItemPros = {
  task: Task;
};

export default function ListTasksItem({task}: ListItemPros) {
  const dispatch = useDispatch();
  const {deleteTask, toggleTask} = bindActionCreators(actionCreators, dispatch);
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
