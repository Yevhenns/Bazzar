import * as React from 'react';
import {Button} from '../components/Button';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../icons/Logo';
import {HomeScreenNavigationProp} from '../../App';

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Welcome to App</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet
          phasellus augue. Neque at felis pulvinar malesuada varius egestas dis
          cras.
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Registration')}
          outlined
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: 'flex',
    gap: 32,
  },

  textWrapper: {
    display: 'flex',
    gap: 16,
  },

  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: '700',
  },

  text: {
    color: 'black',
    fontSize: 16,
  },

  buttonsWrapper: {
    display: 'flex',
    gap: 8,
  },
});
