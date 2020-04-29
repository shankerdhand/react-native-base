// @flow
import * as React from 'react';
import {
  Image as RNImage,
  Animated,
  Platform,
} from 'react-native';
import {type ____ViewStyleProp_Internal as Style} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

/*
 * @Declaration props used in component.
 */
type ImageProps = {
  style?: Style,
  defaultSource?: number,
  preview?: string,
  uri: string,
};

/*
 * @Declaration state used in component.
 */
type ImageState = {
  uri: ?string,
  intensity: Animated.Value,
};

export default class Image extends React.Component<ImageProps, ImageState> {
  static defaultProps = {
    style: undefined,
    defaultSource: undefined,
    preview: undefined,
  };

  mounted = true;

  state = {
    uri: undefined,
    isImageReady: false,
    intensity: new Animated.Value(100),
  };

  async load({uri}: ImageProps): Promise<void> {
    if (uri) {
      this.setState({uri: uri});
    }
  }
  componentDidMount() {
    this.load(this.props);
  }

  componentDidUpdate(prevProps: ImageProps, prevState: ImageState) {
    const {preview} = this.props;
    const {uri, intensity} = this.state;
    if (this.props.uri !== prevProps.uri) {
      this.load(this.props);
    } else if (uri && preview && prevState.uri === undefined) {
      Animated.timing(intensity, {
        duration: 300,
        toValue: 0,
        useNativeDriver: Platform.OS === 'android',
      }).start();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render(): React.Node {
    const {preview, style, defaultSource, ...otherProps} = this.props;
    const {uri, intensity, isImageReady} = this.state;

    const hasPreview = !!preview;

    const computedStyle = style;
    let image = isImageReady ? uri : preview;
    return (
      <RNImage
        source={{uri: image}}
        onLoadStart={() => {}}
        onLoadEnd={() => {
          this.setState({isImageReady: true});
        }}
        onError={() => {}}
        resizeMode="cover"
        style={computedStyle}
        blurRadius={Platform.OS === 'android' ? 0.5 : 0}
      />
    );
  }
}
