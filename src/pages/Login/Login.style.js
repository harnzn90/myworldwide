import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
  },
  textinput: {
    backgroundColor: 'azure',
    padding: 5,
    borderBottomWidth: 1,
    margin: 10,
    fontSize: 20,
    width: 400,
  },
  button: {
    backgroundColor: 'azure',
    width: 200,
    height: 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  header_container: {flex: 1, justifyContent: 'center'},
  textinput_container: {flex: 2},
});
