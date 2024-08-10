import * as React from 'react';
import {Button} from '../components/Button';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../components/Input';
import {Wrapper} from '../components/Wrapper';

export const Confirmation = () => {
  return (
    <Wrapper text="Enter the confirmation code that will be sent to you by SMS">
      <View style={styles.form}>
        <Input title="Secure Code" placeholder="000000" />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => console.log('Resend the Code')}>
          <Text style={styles.footerLink}>Resend the Code</Text>
        </TouchableOpacity>
      </View>
      <Button title="Sign up" onPress={() => console.log('Sign up')} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    gap: 24,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },
  footerLink: {
    color: 'teal',
    borderBottomWidth: 1,
    borderColor: 'teal',
  },
});
