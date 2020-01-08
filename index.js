import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
import AppNavigator from './src/navigation/Navigator';

YellowBox.ignoreWarnings(
    [
        'ViewPagerAndroid',
        'Warning: componentWillReceiveProps is deprecated',
        'Warning: componentWillMount is deprecated'
    ])

AppRegistry.registerComponent(appName, () => AppNavigator);
