import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Descendant = () => {
  console.log('descendant render');
  return (
    <Text>This is descendant under child component</Text>
  );
};


class DescendantB extends React.PureComponent {
  render()  {
    console.log('descendant B render');
    return (
      <Text>This is descendantB under child component</Text>
    );
  }
};

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnColor: 'yellow',
      textColor: '#212121'
    };
  }

  onBtnPressed = () => {
    const color = this.state.btnColor == 'blue' ? 'yellow' : 'blue';
    const textColor = color == 'blue' ? '#fafafa' : '#212121';
    this.setState({btnColor: color, textColor});
  }

  render() {
    console.log('Child render');
    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
          <TouchableOpacity
            onPress={this.onBtnPressed}
            style={[styles.btn, {backgroundColor: this.state.btnColor}]}
          >
              <Text style={{color: this.state.textColor}}>
                Press to change color
              </Text>
            
          </TouchableOpacity>
        <Descendant />
        <DescendantB />
      </View>
    );
  }
}

Child.propTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  btn: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 2,
  }
});
