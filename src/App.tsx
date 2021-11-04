import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header/Header';
import {v4 as uuid} from 'uuid';
import {Task} from './models/Task';
import AddTask from './components/AddTask/AddTask';
import ListTasks from './components/ListTasks/ListTasks';
import {mockTasks} from '../mocks/tasks';
import Card from './common/Card';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const addTask = (text: string) => {
    console.log('ADD', text);
    setTasks(prevTasks => {
      return [{id: uuid(), text, isDone: false}, ...prevTasks];
    });
  };

  const deleteTask = (id: string) => {
    console.log('DELETE', id);
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== id);
    });
  };

  const toggleTask = (id: string) => {
    console.log('TOGGLE', id);
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header titel="Todo List" />
      <Card>
        <AddTask addTask={addTask} />
      </Card>
      <Card style={styles.lastItem}>
        <ListTasks
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  lastItem: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default App;
