import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChildComp from './Child';

export default class Parent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ChildComp text={'Some text passed from parent'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 360,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
