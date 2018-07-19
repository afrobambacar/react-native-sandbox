import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import FBLogin from '../screens/FBLogin';
import Random from '../screens/Random';
import Counter from '../screens/Counter';
import Reddit from '../screens/Reddit';
import Googoodan from '../screens/Googoodan';

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerTitle: 'Detail',
    },
  },
  FBLogin: {
    screen: FBLogin,
    navigationOptions: {
      headerTitle: 'FBLogin'
    }
  },
  Random: {
    screen: Random,
    navigationOptions: {
      headerTitle: 'Random List',
    },
  },
  Counter: {
    screen: Counter,
    navigationOptions: {
      headerTitle: 'Counter',
    },
  },
  Reddit: {
    screen: Reddit,
    navigationOptions: {
      headerTitle: 'Reddit API'
    }
  },
  Googoodan: {
    screen: Googoodan,
    navigationOptions: {
      headerTitle: '아빠수학'
    }
  }
});