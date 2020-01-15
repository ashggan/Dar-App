import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
<<<<<<< HEAD
 
AppRegistry.registerComponent(appName, () => App);
=======
// import languages from './src/components/languages';
import Splash from './src/pages/intro/splash';
import login from './src/pages/auth/login';
import Switch from './src/pages/intro/switch';
import Main from './src/pages/intro/main';

AppRegistry.registerComponent(appName, () => Splash);
>>>>>>> 7a27d2492cef7232ffdbc793986d5494e522c96c
