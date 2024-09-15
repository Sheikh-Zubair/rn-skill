import {Avatar, useTheme} from '@rneui/themed';
import React, {useMemo} from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';

interface AvatarProps {
  size?: number;
  title: string;
  imgSource?: ImageSourcePropType | undefined;
  rounded?: boolean;
}

const CustomAvatar: React.FC<AvatarProps> = ({
  size = 25,
  title,
  imgSource,
  rounded = false,
}) => {
  const {theme} = useTheme();
  const radius = useMemo(() => (rounded ? 50 : 5), [rounded]);
  return (
    <Avatar
      size={size}
      {...(imgSource && {source: imgSource})}
      rounded={rounded}
      title={imgSource ? '' : title}
      titleStyle={{...styles.title, color: theme.colors?.primaryLight}}
      containerStyle={{
        ...styles.avatarContainer,
        borderRadius: radius,
      }}
    />
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CustomAvatar;
