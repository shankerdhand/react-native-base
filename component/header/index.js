// @flow
import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import styleGuide from '../../config/styles';
import {Text} from '../index';
import AppConstant from '../../config/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

/*
 * @Declaration props used in component.
 */
type Props = {
  label?: string,
  imageProfile?: string,
};

export default class Header extends React.Component<Props> {
  constructor(props) {
    super(props);
    Ionicons.loadFont();
  }

  /*
   * @Default props values.
   */
  static defaultProps = {
    label: AppConstant.appName,
  };

  render(): React.Node {
    let {isBack, label, navigation, color} = this.props;
    return (
      <SafeAreaView>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 45,
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            {/* if isBack is true, Back button shown in header*/}
            {isBack && (
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons
                  name={'ios-arrow-back'}
                  color={color ? color : 'grey'}
                  size={30}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}>
              <Ionicons
                name={'md-menu'}
                color={color ? color : 'grey'}
                size={30}
              />
            </TouchableOpacity>
          </View>
          {/* Header title */}
          <Text
            type={'title2'}
            align={'center'}
            style={{flexShrink: 1, marginHorizontal: 10}}
            color={color ? color : styleGuide.palette.primary}>
            {label}
          </Text>
          <View style={{width: 30}} />
        </View>
      </SafeAreaView>
    );
  }
}

/*
 * @styles const common StyleSheet
 */
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
