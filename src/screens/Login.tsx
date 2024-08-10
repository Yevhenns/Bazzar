import * as React from 'react';
import {Button} from '../components/Button';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../components/Input';
import {Wrapper} from '../components/Wrapper';

export const Login = ({navigation}) => {
  return (
    <Wrapper text="Please enter your details.">
      <View style={styles.form}>
        <Input title="Phone number" placeholder="+33 222 111 2222" />
        <Button title="Login" onPress={() => console.log('login')} />
      </View>
      <View style={styles.footer}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.footerLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
