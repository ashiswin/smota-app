import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InAppBrowser from 'react-native-inappbrowser-reborn';

class GridLinkComponent extends Component {
  onPress = async () => {
    try {
      const url = this.props.url;
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'partialCurl',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });
        console.log(JSON.stringify(result));
      } else {
        Linking.openURL(url);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this.onPress}
        underlayColor="#DDDDDD"
        style={styles.touchable_highlight}>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this.onPress}
            borderRadius={iconWidth}
            underlayColor="transparent">
            <View style={styles.icon_container}>
              <Icon
                name={this.props.icon_name}
                size={iconWidth}
                color="tomato"
              />
            </View>
          </TouchableHighlight>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const iconWidth = 24;

const styles = StyleSheet.create({
  touchable_highlight: {
    width: '25%',
  },
  container: {
    alignItems: 'center',
    flexShrink: 1,
    flexDirection: 'column',
    paddingVertical: 8,
  },
  icon_container: {
    width: iconWidth * 2,
    height: iconWidth * 2,
    padding: iconWidth / 2,
    borderRadius: iconWidth,
    backgroundColor: 'white',
    elevation: 3,
  },
});

export default GridLinkComponent;
