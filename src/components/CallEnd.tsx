import React from 'react';
import {Icon, useTheme} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

interface CallEndProps {
  onCallEnd: () => void;
}

const CallEnd: React.FC<CallEndProps> = ({onCallEnd = () => {}}) => {
  const {theme} = useTheme();
  return (
    <View
      style={{...styles.container, backgroundColor: theme.colors.primaryRed}}>
      <TouchableOpacity onPress={onCallEnd}>
        <Icon name={'call'} size={45} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CallEnd;
