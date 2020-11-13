import {Dimensions, StyleSheet} from 'react-native';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 'auto',
    zIndex: 0,
    paddingBottom:10,
    paddingTop:10,
  },
  actionsContainer: {
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor: 'black',
    paddingVertical: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
