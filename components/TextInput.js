import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';

export default function TextInput({ icon, ...otherProps }) {
  const validationColor = '#223e4b';
  const styles = StyleSheet.create({
          container: {
              flex: 1,
              //justifyContent: "space-between",
              borderBottomColor: 'white',
              borderBottomWidth: 0.4,
              marginBottom: 0,
          },
          bottom: {
              fontSize: 36,
              alignSelf: 'auto',
              color: 'white',
           },
      });
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        padding: 8
      }}
    >
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='grey'
          {...otherProps}
        />
      </View>
    </View>
  );
}