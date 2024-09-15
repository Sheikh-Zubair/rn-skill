import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {ROUTES} from '../constants/routes';
import {Header, useTheme} from '@rneui/themed';
import Back from '../components/Back';
import CustomAvatar from '../components/CustomAvatar';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

/**
 * The Routes component is responsible for defining the navigation stack for the app.
 */
export const Routes = () => {
  const {theme} = useTheme();
  return (
    <NavigationContainer>
      {/* Default initial route, if not provided it will pick the first route  */}
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          // This will navigation bar at the bottom of the
          navigationBarHidden: true,
        }}>
        <Stack.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{
            // A custom header component for the Home screen
            // eslint-disable-next-line react/no-unstable-nested-components
            header: () => (
              <Header
                containerStyle={{
                  ...styles.container,
                  backgroundColor: theme.colors?.primaryLight,
                }}
                statusBarProps={{
                  backgroundColor: theme.colors?.primaryLight,
                }}
                leftContainerStyle={styles.leftContainer}
                rightContainerStyle={styles.rightContainer}
                leftComponent={
                  <Back onPress={() => console.log('Back button pressed')} />
                }
                rightComponent={<CustomAvatar title="A" />}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
