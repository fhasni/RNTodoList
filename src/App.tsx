import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header/Header';
import AddTask from './components/AddTask/AddTask';
import ListTasks from './components/ListTasks/ListTasks';
import Card from './common/Card';
import {Provider} from 'react-redux';
import {store} from './state/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header titel="Todo List" />
        <Card>
          <AddTask />
        </Card>
        <Card style={styles.lastItem}>
          <ListTasks />
        </Card>
      </SafeAreaView>
    </Provider>
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
