import { StyleSheet, Share } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors as c } from 'theme/colors';

export default StyleSheet.create({
  container: {
    width: wp(43),
    height: wp(43),
    backgroundColor: `${c.light_blue}40`,
    padding: 18,
    margin: 5,
    borderRadius: 18,
    borderColor: c.light_gray,
    borderWidth: 1,
  },

  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
