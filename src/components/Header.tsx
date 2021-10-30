import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type HeaderProps = {
  titel: string;
};

export default function Header({titel}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{titel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 15,
    backgroundColor: 'white',
  },
  text: {
    flex: 1,
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
