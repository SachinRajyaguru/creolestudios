import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

Text.defaultProps = {
  ...Text.defaultProps,
  style: {
    ...Text?.defaultProps?.style,
    fontSize: 24,
  },
};

AppRegistry.registerComponent(appName, () => App);
