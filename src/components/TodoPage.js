import React from 'react'
import {View} from 'react-native';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export default () => (
    <View style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 16,
    }}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </View>
)