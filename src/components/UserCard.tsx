import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomAvatar from './CustomAvatar';
import {Icon, Text} from '@rneui/themed';

interface UserCardProps {
  name: string;
  image?: string;
  title: string;
  message: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  title,
  message,
  image = '',
}) => {
  const [muted, setMuted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <CustomAvatar
          rounded={true}
          title={title}
          size={60}
          imgSource={image ? {uri: image} : undefined}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity onPress={() => setMuted(!muted)}>
          <Icon
            name={muted ? 'volume-off' : 'volume-up'}
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  name: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  message: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    width: '85%',
  },
});

export default UserCard;
