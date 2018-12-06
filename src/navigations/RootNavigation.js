import { createStackNavigator, createAppContainer } from "react-navigation";
import ParentScreen from 'components/Parent';
import Home from 'components/Home';
import TodoPage from 'components/TodoPage';
export default createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
          title: 'Home'
      },
    },
    Parent: {
        screen: ParentScreen,
        navigationOptions: {
            title: 'Props & States'
        },
    },
    TodoPage: {
        screen: TodoPage,
        navigationOptions: {
            title: 'Todo list',
        },
    },
  });