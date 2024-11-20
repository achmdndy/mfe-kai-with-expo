import 'expo-dev-client';
import './global.css';

import { MicroAppRoot } from '@kai/core-navigation';
import { registerRootComponent } from 'expo';
import { enableScreens } from 'react-native-screens';

const contexts = [
  {
    context: require.context("./app", true, /.*/),
    prefix: ".",
  },
  {
    context: require.context("../train/app/(train)", true, /.*/),
    prefix: "(train)",
  },
];

export function App() {
  enableScreens(false);

  return <MicroAppRoot contexts={contexts}/>;
}

registerRootComponent(App);
