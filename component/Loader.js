// @flow
import React, {Component} from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';
import styleGuide from '../config/styles';

const Loader = props => {
  const {loading, size, backgroundColor, spinnerColor, ...attributes} = props;
  let sz = 30;
  if (size && size > 0) {
    sz = size;
  }
  let bc = styleGuide.palette.backgroundOpacity;
  if (backgroundColor) {
    bc = backgroundColor;
  }
  return (
    <Modal visible={loading} transparent>
      <View style={[styles.modalBackground, {backgroundColor: bc}]}>
        <ActivityIndicator color={styleGuide.palette.white} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 100,
  },
});

export default Loader;
