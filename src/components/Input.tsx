import * as React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

type InputProps = {
  title: string;
  outlined?: boolean;
} & TextInputProps;

export const Input = ({title, placeholder}: InputProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 12,
  },
});
