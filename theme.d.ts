import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    primaryLight: string;
    primaryDark: string;
    primaryLightGradient: string[];
    primaryDarkGradient: string[];
    transparent: string;
    primaryRed: string;
  }
}
