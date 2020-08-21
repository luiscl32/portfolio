import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors as c } from 'theme/colors';

export default StyleSheet.create({
  container: {
    width: wp(40),
    height: wp(40),
    backgroundColor: `${c.dark_blue}40`,
    borderWidth: 1,
    borderColor: c.light_gray,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },

  image: {
    width: '100%',
    justifyContent: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
  },

  scroll: {
    flex: 1,
    width: wp(100),
  },
});
