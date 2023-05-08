import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 7,
  },
  input: {
    container: {
      flex: 1,
    },
    textInput: {
      color: '#263238',
      borderRadius: 10,
      fontSize: 15,
      marginHorizontal: 5,
      paddingRight: 50,
      borderWidth: 1,
      borderColor: '#e0e0e0',
    },
    listView: {
      borderWidth: 1,
      borderColor: '#e0e0e0',
      marginHorizontal: 5,
      elevation: 5,
    },
    row: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#e0e0e0',
    },
  },
});