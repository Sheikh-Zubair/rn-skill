import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  gradientColors: string[];
  containerBgColor: string;
  scrollBgColor: string;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  gradientColors = ['#00000000'],
  containerBgColor = '#FFF',
  scrollBgColor = '#FFF',
}) => {
  return (
    <View style={{...styles.container, backgroundColor: containerBgColor}}>
      <LinearGradient colors={gradientColors} style={styles.linearGradient} />
      <ScrollView
        style={{...styles.scrollContainer, backgroundColor: scrollBgColor}}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default BackgroundWrapper;
