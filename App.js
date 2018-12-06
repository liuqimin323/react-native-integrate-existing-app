import React from 'react';
import { StyleSheet } from 'react-native';
import RootNav from 'navigations/RootNavigation';
import { createAppContainer } from "react-navigation";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
const store = createStore(reducers);

const AppContainer = createAppContainer(RootNav);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
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
