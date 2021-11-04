import React from 'react';
import {View} from 'react-native';
import styles from './CardStyles';
type CardProps = React.ComponentProps<typeof View>;

export default function Card({children, style, ...rest}: CardProps) {
  return (
    <View style={[style, styles.container, styles.shadow]} {...rest}>
      {children}
    </View>
  );
}
