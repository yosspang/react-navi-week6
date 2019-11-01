import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ReduxActivity from './ReduxActivity';
import ProfileActivity from './ProfileActivity';
import ListTodo from './ListTodo'
import createTodo from './todos/createTodo'
import Detail from './todos/detailTodo'
import ListUsers from './users/ListUsers'
import DetailUser from './users/detailUser'
import UpdateTodo from './todos/updateTodo'
const RootStack = createStackNavigator(
    {
        //The Routes
        Redux: {screen:ReduxActivity},
        Profile: {screen:ProfileActivity},
        ListTodo: {screen:ListTodo},
        createTodo: {screen:createTodo},
        Detail:  {screen:Detail},
        ListUsers: {screen:ListUsers},
        DetailUser: {screen:DetailUser},
        UpdateTodo: {screen:UpdateTodo}
    },
    {
        //Default Route
        initialRouteName:'Redux'
    }
);

const Container = createAppContainer(RootStack);
export default Container;