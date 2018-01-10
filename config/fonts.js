import { Font } from 'expo';

/* eslint-disable global-require */
export default () => Font.loadAsync({
  'Roboto-900': require('../assets/fonts/Roboto-Black.ttf'),
  'Roboto-900i': require('../assets/fonts/Roboto-BlackItalic.ttf'),
  'Roboto-800': require('../assets/fonts/Roboto-Bold.ttf'),
  'Roboto-800i': require('../assets/fonts/Roboto-BoldItalic.ttf'),
  'Roboto-600': require('../assets/fonts/Roboto-Medium.ttf'),
  'Roboto-600i': require('../assets/fonts/Roboto-MediumItalic.ttf'),
  'Roboto-500': require('../assets/fonts/Roboto-Regular.ttf'),
  'Roboto-500i': require('../assets/fonts/Roboto-Italic.ttf'),
  'Roboto-300': require('../assets/fonts/Roboto-Light.ttf'),
  'Roboto-300i': require('../assets/fonts/Roboto-LightItalic.ttf'),
  'Roboto-100': require('../assets/fonts/Roboto-Thin.ttf'),
  'Roboto-100i': require('../assets/fonts/Roboto-ThinItalic.ttf'),
  crypto_icons: require('../assets/icons/crypto_icons.ttf'),
});
/* eslint-enable global-require */
