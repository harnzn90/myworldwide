import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    height: deviceSize.height / 3.35,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingRight: 15,
  },
  image: {
    width: 100,
    height: 200,
    borderRadius: 10,
  },
  top_container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  top_info_container: {
    marginHorizontal: 20,
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  status_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  status_text: {},
  status_circle: {
    height: 14,
    borderWidth: 1,
    borderRadius: 7,
    padding: 4,
    marginRight: 7,
  },
  status_circle_green: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  status_circle_orange: {
    backgroundColor: 'orange',
    borderColor: 'orange',
  },
  rating_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating_stars: {
    marginLeft: -5,
    marginVertical: 5,
  },
  rating_text: {
    fontWeight: '600',
    marginLeft: 10,
  },
  address: {
    fontWeight: '700',
    marginTop: 10,
  },
  restaurant_icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    borderRadius: 5,
  },
});