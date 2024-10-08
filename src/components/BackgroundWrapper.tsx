import React from 'react';
import {StyleSheet, ScrollView, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  gradientColors: string[];
  bottomGradientColors?: string[];
  containerBgColor: string;
  scrollBgColor: string;
  containerStyle?: ViewStyle;
}

/**
 * @summary A wrapper component that provides a gradient overlay at the top and bottom of the screen
 * and a scrollable content area in the middle with a background color
 */
const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  gradientColors = ['#00000000'],
  bottomGradientColors = gradientColors,
  containerBgColor = '#FFF',
  scrollBgColor = '#FFF',
  containerStyle,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...(containerStyle ? containerStyle : {}),
        backgroundColor: containerBgColor,
      }}>
      {/* This LinearGradient is responsible for showing gradient overlay at the top */}
      <LinearGradient colors={gradientColors} style={styles.linearGradient} />
      {/* This LinearGradient is responsible for showing gradient overlay at the bottom */}
      <LinearGradient
        colors={[...bottomGradientColors.slice().reverse()]}
        style={styles.linearGradientBottom}
      />
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
    // this is important to make sure the content beneath the gradient overlay is still accessible
    pointerEvents: 'none',
  },
  linearGradientBottom: {
    position: 'absolute',
    zIndex: 90,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '30%',
    // this is important to make sure the content beneath the gradient overlay is still accessible
    pointerEvents: 'none',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default BackgroundWrapper;
