import React from 'react'
import {View, TextInput, Button} from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  let value
  return (
    <View style={{paddingBottom: 16}}>
        <TextInput
            ref={node => (input = node)}
            onChangeText={(val) => value = val}
            style={{
                height: 24,
                borderColor: '#333333',
                borderWidth: 1,
                borderRadius: 2,
                marginBottom: 16,
                marginTop: 16,
            }}
        
            placeholder={'Enter todo and press button'}
        />
        <Button
            onPress={() => {
                if (!value || !value.trim()) {
                    return
                }
                dispatch(addTodo(value))
                input.clear()
                value = ''
                }}
            title='Add Todo'
        />
    </View>
  )
}

export default connect()(AddTodo)