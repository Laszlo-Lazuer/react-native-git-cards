import React, { Component } from 'react';
import { Alert, AppRegistry, Button, TextInput, StyleSheet, Text, View, NavigatorIOS } from 'react-native';

//comps
import SearchComponent from './src/components/SearchComponents';


export default class App extends React.Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.container}
          initialRoute = {{
           title: 'Fetch Example',
           component: SearchComponent
         }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('AwesomeProject', () => App);
