import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49198909Navigator from '../features/BlankScreen49198909/navigator';
import Maps198565Navigator from '../features/Maps198565/navigator';
import Additem198564Navigator from '../features/Additem198564/navigator';
import Maps198560Navigator from '../features/Maps198560/navigator';
import UserProfile198556Navigator from '../features/UserProfile198556/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49198909: { screen: BlankScreen49198909Navigator },
Maps198565: { screen: Maps198565Navigator },
Additem198564: { screen: Additem198564Navigator },
Maps198560: { screen: Maps198560Navigator },
UserProfile198556: { screen: UserProfile198556Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
