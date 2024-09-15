import {Icon, useTheme} from '@rneui/themed';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

interface TalkProps {
  talking: boolean;
  onTalk: () => void;
}

const Talk: React.FC<TalkProps> = ({onTalk, talking}) => {
  const {theme} = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onTalk();
        }}>
        <Icon
          name={talking ? 'mic' : 'mic-off'}
          size={45}
          color={theme.colors.primaryDark}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Talk;
