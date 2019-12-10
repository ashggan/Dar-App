
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import languages from './src/components/languages';
import Splash from './src/pages/intro/splash';
import login from './src/pages/auth/login';
import Switch from './src/pages/intro/switch';
import Main from './src/pages/auth/main';

AppRegistry.registerComponent(appName, () => login);
