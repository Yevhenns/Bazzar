import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

type ButtonProps = {
  title: string;
  outlined?: boolean;
} & TouchableOpacityProps;

export const Button = ({
  title,
  onPress,
  outlined = false,
  disabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, outlined ? styles.outlined : styles.primary]}>
      <Text
        style={[
          styles.title,
          outlined ? styles.colorBlack : styles.colorWhite,
        ]}>
        {title}
      </Text>
      {disabled && <View style={styles.disabled} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
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

  disabled: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255, 0.7)',
  },
});
