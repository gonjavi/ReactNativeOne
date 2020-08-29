import React , { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishDetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
}, {
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff'
    }
  }
})

class Main extends Component {
 
  render() {
    return (
      <View>
        <MenuNavigator style={{ flex: 1, padding: Platform.OS === 'ios' ? 0 : ExpoStatusBar.Constants.statusBarHeight }} />
        <Dishdetail 
          dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
        />
      </View>
    );
  }
}

export default Main;
