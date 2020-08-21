import { StyleSheet } from 'react-native';
import { colors as c } from 'theme/colors';

export default StyleSheet.create({
  container: (alignS) => ({
    width: 'auto',
    heigh: 48,
    padding: 12,
    borderRadius: 8,
    backgroundColor: c.dark_blue,
    borderWidth: 1,
    borderColor: c.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: alignS,
  }),
});
