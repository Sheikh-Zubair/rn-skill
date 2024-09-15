import React from 'react';
import {View, StyleSheet} from 'react-native';

interface CustomBottomSheetProps {
  children: React.ReactNode;
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    backgroundColor: '#416ec3',
  },
});

export default CustomBottomSheet;
