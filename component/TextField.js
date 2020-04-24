// @flow
import * as React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import styleGuide from '../config/styles';

type TextFieldProps = {
  label?: string,
  keyboardType?: string,
  secureTextEntry?: boolean,
  inputStyle?: {},
};

export default class TextField extends React.Component<TextFieldProps> {
  static defaultProps = {
    secureTextEntry: false,
  };

  // $FlowFixMe
  input = React.createRef();

  focus = () => this.input.current.focus();

  render(): React.Node {
    let {value, onChangeText} = this.props;
    return (
      <OutlinedTextField
        ref={this.input}
        value={value}
        onChangeText={onChangeText}
        // formatText={this.formatText}
        //  onSubmitEditing={this.onSubmit}
        // style={[styles.textInput, this.props.inputStyle]}
        //  underlineColorAndroid="transparent"
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    ...styleGuide.styles.borderRadius,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    padding: styleGuide.spacing.tiny,
    marginBottom: styleGuide.spacing.small,
    ...styleGuide.typography.body,
    ...styleGuide.styles.shadow,
  },
});
