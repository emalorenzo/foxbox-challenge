import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../Theme/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: '100%',
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: wp('2%'),
    backgroundColor: colors.white,
  },
  drinkImage: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('12.5%'),
  },
  drinkTitle: {
    fontSize: hp('2.3%'),
    fontWeight: '600',
    color: colors.grayText,
    paddingLeft: wp('4%'),
  },
  list: {
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('6%'),
  },
  listFooter: {
    paddingBottom: hp('10%'),
  },
});
