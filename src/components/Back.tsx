import {Icon, useTheme} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface BackProps {
  onPress: () => void;
  size?: number;
}

const Back: React.FC<BackProps> = ({onPress, size = 22}) => {
  const {theme} = useTheme();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        name="arrow-back-ios"
        color={theme.colors.white}
        iconStyle={styles.icon}
        size={size}
        containerStyle={styles.iconContainer}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  iconContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 1,
    paddingLeft: 10,
    borderWidth: 0.2,
    borderRadius: 5,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 18,
  },
});

export default Back;
