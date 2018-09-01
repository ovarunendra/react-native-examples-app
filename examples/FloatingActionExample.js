//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FloatingAction } from 'react-native-floating-action';

// create a component
class FloatingActionExample extends Component {
  renderMainButton = () => {
    return (
      <View style={styles.overlay}>
        <Icon name="home" size={100} />
      </View>
    );
  };
  render() {
    const actions = [
      {
        text: 'Accessibility',
        icon: require('../images/ic_accessibility_white.png'),
        name: 'bt_accessibility',
        position: 2
      },
      {
        text: 'Language',
        icon: <Icon name="language" size={20} style={{ color: '#fff' }} />,
        name: 'bt_language',
        position: 1
      },
      {
        text: 'Location',
        icon: (
          <Icon name="location-arrow" size={20} style={{ color: '#fff' }} />
        ),
        name: 'bt_room',
        position: 3
      },
      {
        text: 'Video',
        icon: <Icon name="video-camera" size={20} style={{ color: '#fff' }} />,
        name: 'bt_videocam',
        position: 4
      }
    ];
    console.log(React.isValidElement(<Icon name="home" size={100} />));
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff', fontSize: 20 }}>
          Floating Action Example
        </Text>
        <FloatingAction
          actions={actions}
          position="right"
          onPressItem={name => {
            Alert.alert('Icon pressed', `the icon ${name} was pressed`);
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
});

//make this component available to the app
export default FloatingActionExample;
