import React from 'react';
import {View, StyleSheet} from 'react-native';
import BackgroundWrapper from '../components/BackgroundWrapper';
import {useTheme} from '@rneui/themed';
import UserCard from '../components/UserCard';
import {useGetUsers} from '../hooks/users.hook';

const Home: React.FC = () => {
  const {theme} = useTheme();
  const {users} = useGetUsers();
  return (
    <BackgroundWrapper
      gradientColors={theme.colors.primaryLightGradient}
      containerBgColor={theme.colors.primaryLight}
      scrollBgColor={theme.colors.primaryLight}>
      <View style={styles.container}>
        {users.map(user => (
          <React.Fragment key={user.id}>
            <UserCard
              name={user.name}
              title={user.title}
              message={user.message}
            />
          </React.Fragment>
        ))}
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    gap: 25,
  },
  text: {
    fontSize: 20,
    color: '#000',
    flex: 1,
  },
});

export default Home;
