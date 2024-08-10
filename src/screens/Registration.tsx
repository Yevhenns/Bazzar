import * as React from 'react';
import {Button} from '../components/Button';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input} from '../components/Input';
import {Wrapper} from '../components/Wrapper';
import {RegistrationScreenNavigationProp} from '../../App';
import {useState} from 'react';
import {useGetUsers} from '../hooks/useGetContacts';

type RegistrationProps = {
  navigation: RegistrationScreenNavigationProp;
};

export const Registration = ({navigation}: RegistrationProps) => {
  const [phoneNumber, setPhonenumber] = useState('');

  const {users, loading, err} = useGetUsers();

  const register = () => {
    users.some(user => user.number === phoneNumber)
      ? Alert.alert('The number already exists')
      : navigation.navigate('Confirmation');
  };

  if (err) {
    return Alert.alert('Network error');
  }

  if (loading) {
    return <ActivityIndicator />;
  }

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
