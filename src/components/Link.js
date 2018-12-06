import React from 'react'
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
  <TouchableOpacity
    onPress={onClick}
    disabled={active}
    style={{
      marginTop: 8,
      marginLeft: 4,
      borderWidth: 1,
      borderColor: active ? '#333333' : '#999999',
      borderRadius: 2,
      paddingHorizontal: 16,
      paddingVertical: 8,
    }}
  >
    <Text style={{
        color: active ? '#333333' : '#999999',
    }}>
        {children}
    </Text>
  </TouchableOpacity>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link