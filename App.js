import React from 'react';
import { StyleSheet } from 'react-native';
import RootNav from 'navigations/RootNavigation';
import { createAppContainer } from "react-navigation";

const AppContainer = createAppContainer(RootNav);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
