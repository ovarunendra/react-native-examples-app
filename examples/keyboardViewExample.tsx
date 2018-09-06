//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

interface State {
  first: string;
  second: string;
}

// create a component
class KeyboardViewExample extends Component<object, State> {
  static navigationOptions = {
    title: 'Keyboard View Example',
  };

  state = {
    first: '',
    second: '',
  };

  render() {
    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        keyboardVerticalOffset={60}
        style={{ marginVertical: 20 }}
      >
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.box}>
              <Text>KeyboardViewExample Box 1</Text>
            </View>
            <TextInput
              style={styles.textInput}
              onChangeText={first => this.setState({ first })}
              value={this.state.first}
              placeholder="First Input"
            />
            <View style={styles.box}>
              <Text>KeyboardViewExample Box 2</Text>
            </View>
            <TextInput
              style={styles.textInput}
              onChangeText={second => this.setState({ second })}
              value={this.state.second}
              placeholder="Second Input"
            />
            <View style={styles.box}>
              <Text>KeyboardViewExample Box 2</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 200,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    marginVertical: 20,
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

//make this component available to the app
export default KeyboardViewExample;
