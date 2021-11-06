import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomColor: '#e8e8f8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    flexShrink: 1,
  },
  textDone: {
    textDecorationLine: 'line-through',
  },
  icon: {
    fontSize: 20,
    color: '#FF5A5F',
  },
});
