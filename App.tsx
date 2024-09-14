/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Routes} from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {theme} from './src/theme';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = useMemo(() => colorScheme === 'dark', [colorScheme]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={{...styles.container, ...backgroundStyle}}>
      <ThemeProvider theme={{...theme, mode: isDarkMode ? 'dark' : 'light'}}>
        {/* <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        /> */}
        <View style={styles.container}>
          <Routes />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    fontFamily: 'Inter',
  },
});

export default App;
