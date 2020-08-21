import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors as c } from 'theme/colors';

export default StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: c.dark_blue,
    elevation: 0,
  },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  titleContainer: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
