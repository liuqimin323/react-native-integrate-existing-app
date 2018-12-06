import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class Home extends React.Component {

  onBtnPressed = () => {
      this.props.navigation.navigate('Parent');
  }

  render = () => {
    console.log('props: ' + this.props.navigation);
    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={this.onBtnPressed}
            style={styles.btn}
          >
              <Text>
                Props & States
              </Text>
            
          </TouchableOpacity>
          
        <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('TodoPage');
            }}
            style={styles.btn}
          >
              <Text>
                Redux
              </Text>
            
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 16,
  },
  btn: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 16,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#333333',
  }
});
