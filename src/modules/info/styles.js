import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors as c } from 'theme/colors';

export default StyleSheet.create({
  background: {
    padding: 0,
  },

  container: {
    width: wp(40),
    height: wp(40),
    backgroundColor: `${c.sub_titles}40`,
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
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
  },

  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
