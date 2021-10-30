import React from 'react';
import {StyleSheet, View} from 'react-native';

type CardProps = React.ComponentProps<typeof View>;

export default function Card({children, style, ...rest}: CardProps) {
  return (
    <View style={[style, styles.container, styles.shadow]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 8,
    margin: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
