import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
