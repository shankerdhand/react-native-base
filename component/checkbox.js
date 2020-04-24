import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Text from './Text';
import PropTypes from 'prop-types';
import styleGuide from '../config/styles';

class CheckBox extends React.Component {
  static defaultProps = {
    size: 30,
    color: styleGuide.palette.primary,
  };

  constructor() {
    super();
    Icon.loadFont();
  }

  render() {
    let {selected, onPress, style, textStyle, size, color, text} = this.props;

    return (
      <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress}>
        <Icon
          size={size}
          color={color}
          name={selected == true ? 'ios-checkbox' : 'ios-checkbox-outline'}
        />
        <Text style={[styles.text, textStyle]} type={'subhead'}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
export default CheckBox;

CheckBox.propTypes = {
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  size: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {marginLeft: 10},
});
