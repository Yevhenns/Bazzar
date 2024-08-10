import * as React from 'react';
import {Button} from '../components/Button';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../components/Input';
import {Wrapper} from '../components/Wrapper';

export const Registration = ({navigation}) => {
  return (
    <Wrapper text="Please enter your details.">
      <View style={styles.form}>
        <Input title="Name" placeholder="Enter name" />
        <Input title="Last name" placeholder="Enter last name" />
        <Input title="Phone number" placeholder="+33 222 111 2222" />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('Confirmation')}
        />
      </View>
      <View style={styles.footer}>
        <Text>Do you have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerLink}>Login</Text>
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
