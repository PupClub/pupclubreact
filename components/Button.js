import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 100,
        height: 45,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e437f2'
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 18, color: 'white', textTransform: 'uppercase' }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}