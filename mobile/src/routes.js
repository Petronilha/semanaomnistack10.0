import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Principal from './pages/Principal';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Principal: {
            screen: Principal,
            navigationOptions: {
                title: 'DevBook'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#ffffff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#444',
            }
        }
    })
)

export default Routes;