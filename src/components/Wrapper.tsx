import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type WrapperProps = {
  text: string;
  children: React.ReactNode;
};

export const Wrapper = ({text, children}: WrapperProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Welcome to App</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 80,
    display: 'flex',
    gap: 40,
  },

  textWrapper: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },

  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
