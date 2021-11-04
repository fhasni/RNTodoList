import React from 'react';
import {View, Text} from 'react-native';
import styles from './HeaderStyles';
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
