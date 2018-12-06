import React from 'react'
import {View, Text} from 'react-native'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from 'actions'


const Footer = () => (
  <View style={{marginTop: 18}}>
    <Text style={{fontSize: 18}}>Show: </Text>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </View>
);

export default Footer;