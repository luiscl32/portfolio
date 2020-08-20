import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors as c} from 'theme/colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    width: wp(100),
    paddingHorizontal: 16,
    backgroundColor: c.white,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});
