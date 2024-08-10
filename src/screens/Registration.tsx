import * as React from 'react';
import {Button} from '../components/Button';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../components/Input';
import {Wrapper} from '../components/Wrapper';
import {RegistrationScreenNavigationProp} from '../../App';
import {useState} from 'react';
import {useGetContacts} from '../hooks/useGetContacts';

type RegistrationProps = {
  navigation: RegistrationScreenNavigationProp;
};

export const Registration = ({navigation}: RegistrationProps) => {
  const [phoneNumber, setPhonenumber] = useState('');

  const contacts = useGetContacts();

  const register = () => {
    contacts.some(contact => contact.number === phoneNumber)
      ? Alert.alert('The number already exists')
      : navigation.navigate('Confirmation');
  };

  return (
    <Wrapper text="Please enter your details.">
      <View style={styles.form}>
        <Input title="Name" placeholder="Enter name" />
        <Input title="Last name" placeholder="Enter last name" />
        <Input
          title="Phone number"
          placeholder="+38 099 111 2233"
          onChangeText={newText => setPhonenumber(newText)}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        <Button
          title="Continue"
          onPress={register}
          disabled={phoneNumber.trim().length !== 13}
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
