/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @style file for welcome component
 */

import {StyleSheet} from 'react-native';
import styleGuide from '../../config/styles';

export default (styles = StyleSheet.create({
  scrollView: {
    backgroundColor: styleGuide.palette.lightGray,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: styleGuide.palette.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: styleGuide.palette.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: styleGuide.palette.darkGray,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: styleGuide.palette.darkGray,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
}));
