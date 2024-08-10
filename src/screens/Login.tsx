import * as React from 'react';
import {Button} from '../components/Button';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../components/Input';
import {Wrapper} from '../components/Wrapper';
import {useGetContacts} from '../hooks/useGetContacts';
import {useState} from 'react';
import {LoginScreenNavigationProp} from '../../App';

type LoginProps = {
  navigation: LoginScreenNavigationProp;
};

export const Login = ({navigation}: LoginProps) => {
  const [phoneNumber, setPhonenumber] = useState('');

  const contacts = useGetContacts();

  const login = () => {
    contacts.some(contact => contact.number === phoneNumber)
      ? Alert.alert('Login')
      : Alert.alert("The number doesn't exist");
  };

  return (
    <Wrapper text="Please enter your details.">
      <View style={styles.form}>
        <Input
          title="Phone number"
          placeholder="+38 099 111 2233"
          onChangeText={newText => setPhonenumber(newText)}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        <Button
          title="Login"
          onPress={login}
          disabled={phoneNumber.trim().length !== 13}
        />
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
