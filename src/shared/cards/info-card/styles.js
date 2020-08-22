import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors as c } from 'theme/colors';

export default StyleSheet.create({
  container: {
    width: wp(43),
    height: 'auto',
    padding: 12,
    margin: 5,
    borderColor: c.light_gray,
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: `${c.dark_blue}40`,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
