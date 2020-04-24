// @flow
import type {____ViewStyleProp_Internal as Style} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type StyleProps = {
  style?: Style,
};

export type Typography = {
  fontFamily: string,
  fontSize: number,
  lineHeight: number,
};

export type Typographies = {
  body: Typography,
  callout: Typography,
  caption: Typography,
  footnote: Typography,
  headline: Typography,
  subhead: Typography,
  title1: Typography,
  title2: Typography,
  title3: Typography,
};

export type Spacing = {
  tiny: number,
  small: number,
  base: number,
  large: number,
  xLarge: number,
};

export type Palette = {
  primary: string,
  secondary: string,
  backgroundOpacity: string,
  black: string,
  darkGray: string,
  gray: string,
  lightGray: string,
  info: string,
  success: string,
  danger: string,
  failure: 'red',
  warning: string,
  white: 'white',
  transparent: 'transparent',
};

export type Shadow = {
  shadowColor: string,
  shadowOffset: {width: number, height: number},
  shadowOpacity: number,
  shadowRadius: number,
  backgroundColor: 'black',
};

export type Styles = {
  barHeight: {
    height: number,
  },
  shadow: Shadow,
  borderRadius: {
    borderRadius: number,
  },
  separator: {
    borderBottomWidth: number,
    borderColor: string,
  },
  button: {
    height: number,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: number,
    marginBottom: number,
    borderRadius: number,
  },
  buttonIcon: {
    marginRight: number,
  },
};

export type StyleGuide = {
  palette: Palette,
  typography: Typographies,
  spacing: Spacing,
  styles: Styles,
};

const primary = 'rgb(40, 56, 120)';
const secondary = 'rgb(88,152,113)';
const backgroundOpacity = 'rgba(35,35,35,.5)';
const darkGray = '#999999';
const superDarkGray = '#111111';
const gray = '#CCCCCC';
const white = 'white';
const black = 'black';
const text = 'rgb(94, 94, 94)';
const transparent = 'transparent';
const lightGray = '#F3F3F3';
const tiny = 8;
const small = 16;
const borderRadius = tiny;
const info = '#00B2AA';
const success = '#25AD78';
const danger = '#DC0600';
const warning = '#DC4A02';
const red = 'red';

const shadow = {
  shadowColor: black,
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.18,
  shadowRadius: 2,
  backgroundColor: white,
};

const styleGuide: StyleGuide = {
  palette: {
    primary,
    secondary,
    backgroundOpacity,
    black,
    white,
    transparent,
    darkGray,
    superDarkGray,
    gray,
    lightGray,
    failure: red,
    info,
    success,
    danger,
    warning,
  },
  typography: {
    body: {
      fontSize: 17,
      fontFamily: 'Poppins-Medium',
      color: text,
    },
    callout: {
      fontSize: 16,
      fontFamily: 'Poppins-Medium',
      color: text,
    },
    caption: {
      fontSize: 11,
      fontFamily: 'Poppins-Light',
      color: text,
    },
    footnote: {
      fontSize: 13,
      fontFamily: 'Poppins-Light',
      color: text,
    },
    headline: {
      fontSize: 17,
      fontFamily: 'Poppins-Medium',
      color: text,
    },
    subhead: {
      fontSize: 15,
      fontFamily: 'Poppins-light',
      color: text,
    },
    title1: {
      fontSize: 30,
      fontFamily: 'Poppins-SemiBold',
      color: text,
    },
    title2: {
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold',
      color: text,
    },
    title3: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      color: text,
    },
  },
  spacing: {
    tiny,
    small,
    base: 24,
    large: 48,
    xLarge: 64,
  },
  styles: {
    barHeight: {
      height: 50,
    },
    shadow,
    borderRadius: {
      borderRadius,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#cbcbcb',
    },
    button: {
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: small,
      padding: tiny,
      borderRadius,
    },
    buttonIcon: {
      marginRight: tiny,
    },
  },
};

export default styleGuide;
