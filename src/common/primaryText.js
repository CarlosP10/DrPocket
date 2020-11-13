import {StyleSheet, Text} from 'react-native';

import React from 'react';

const PrimaryText = ({
  onPress,
  numberOfLines,
  onTextLayout,
  style,
  children,
}) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      onTextLayout={onTextLayout}
      style={[style]}
      ellipsizeMode="tail">
      {children}
    </Text>
  );
};

export default PrimaryText;
