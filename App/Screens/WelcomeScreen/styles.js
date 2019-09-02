import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../Theme/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('4%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: hp('3.5%'),
    fontWeight: '100',
    paddingTop: hp('1%'),
    paddingBottom: hp('3%'),
  },
  bold: {
    fontWeight: '600',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  buttonTitle: {
    color: colors.grayText,
    padding: wp('5%'),
  },
});
