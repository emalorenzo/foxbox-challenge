import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import colors from '../../Theme/Colors';

export default StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true),
    backgroundColor: colors.white,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  inputContainer: {
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },
});
