import {createTheme} from '@rneui/themed';

export const theme = createTheme({
  lightColors: {
    primary: '#416ec3',
    primaryLight: '#5787dc',
    primaryDark: '#3c6ec3',
    transparent: '#00000000',
    primaryRed: '#e15041',
    primaryLightGradient: [
      'rgba(87, 135, 220, 0.8)',
      'rgba(87, 135, 220, 0.6)',
      'rgba(87, 135, 220, 0.4)',
      'rgba(87, 135, 220, 0.1)',
      'rgba(87, 135, 220, 0)',
      'rgba(87, 135, 220, 0)',
      'rgba(87, 135, 220, 0)',
      'rgba(87, 135, 220, 0)',
      'rgba(87, 135, 220, 0)',
    ],
    primaryDarkGradient: [
      'rgba(65,110,195,1)',
      'rgba(65,110,195,0.9)',
      'rgba(65,110,195,0.8)',
      'rgba(65,110,195,0.7)',
      'rgba(65,110,195,0.6)',
      'rgba(65,110,195,0.4)',
      'rgba(65,110,195,0.2)',
      'rgba(65,110,195,0)',
      'rgba(65,110,195,0)',
      'rgba(65,110,195,0)',
      'rgba(65,110,195,0)',
    ],
  },
  darkColors: {
    primary: '#000',
  },
});
