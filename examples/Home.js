//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const examples = [
  { title: 'Keyboard Avoid View', key: 'KeyboardView' },
  { title: 'Floating Action', key: 'FloatingView' },
  { title: 'Victory Charts', key: 'VictoryView' }
];

// create a component
class Home extends Component {
  static navigationOptions = {
    title: 'Examples'
  };

  _onPress = item => {
    return this.props.navigation.navigate(item.key);
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({ highlighted }) => (
              <View style={[highlighted && { marginLeft: 0 }]} />
            ))
          }
          data={examples}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <View style={styles.text}>
                <Text>{item.title}</Text>
              </View>
            </TouchableHighlight>
          )}
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
  },
  text: {
    backgroundColor: 'white',
    width,
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 1
  }
});

//make this component available to the app
export default Home;
