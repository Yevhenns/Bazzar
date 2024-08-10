import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  outlined?: boolean;
};

export const Button = ({title, onPress, outlined = false}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, outlined ? styles.outlined : styles.primary]}>
      <Text
        style={[
          styles.title,
          outlined ? styles.colorBlack : styles.colorWhite,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  primary: {
    backgroundColor: 'teal',
  },

  outlined: {
    borderColor: 'grey',
    borderWidth: 1,
  },

  title: {
    fontSize: 16,
  },

  colorBlack: {
    color: 'black',
  },

  colorWhite: {
    color: 'white',
  },
});
