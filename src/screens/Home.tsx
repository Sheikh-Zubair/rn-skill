import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import BackgroundWrapper from '../components/BackgroundWrapper';
import {Text, useTheme} from '@rneui/themed';
import UserCard from '../components/UserCard';
import {useGetUsers} from '../hooks/users.hook';
import Talk from '../components/Talk';
import CustomBottomSheet from '../components/CustomBottomSheet';
import CallEnd from '../components/CallEnd';

const Home: React.FC = () => {
  const {theme} = useTheme();
  const {users} = useGetUsers();
  const [talking, setTalking] = useState(false);
  return (
    <>
      <BackgroundWrapper
        gradientColors={theme.colors.primaryLightGradient}
        bottomGradientColors={theme.colors.primaryDarkGradient}
        containerBgColor={theme.colors.primaryLight}
        containerStyle={styles.bgWrapper}
        scrollBgColor={theme.colors.primaryLight}>
        <View style={styles.container}>
          <View style={styles.cardsContainer}>
            {users.map(user => (
              <React.Fragment key={user.id}>
                <UserCard
                  name={user.name}
                  title={user.title}
                  message={user.message}
                  image={user.imageUrl}
                />
              </React.Fragment>
            ))}
          </View>
        </View>
      </BackgroundWrapper>
      <CustomBottomSheet>
        <View
          style={{
            ...styles.bottomContainer,
            backgroundColor: theme.colors.primary,
          }}>
          <View style={styles.textContainer}>
            {talking ? (
              <Text style={{...styles.text, color: theme.colors.white}}>
                ...Zubair is talking
              </Text>
            ) : null}
          </View>
          <View style={styles.iconContainer}>
            <Talk
              talking={talking}
              onTalk={() => setTalking(value => !value)}
            />
            <CallEnd onCallEnd={() => {}} />
          </View>
        </View>
      </CustomBottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  bgWrapper: {
    marginBottom: 140,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
  },
  cardsContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    gap: 25,
  },
  textContainer: {
    height: 20,
  },
  text: {
    fontSize: 14,
  },
  bottomContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
  },
});

export default Home;
