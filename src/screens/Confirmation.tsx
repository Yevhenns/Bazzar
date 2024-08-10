import * as React from 'react';
import {Button} from '../components/Button';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Wrapper} from '../components/Wrapper';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export const Confirmation = () => {
  const [value, setValue] = React.useState('');

  const CELL_COUNT = 6;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Wrapper text="Enter the confirmation code that will be sent to you by SMS">
      <View style={styles.form}>
        <View>
          <Text>Secure Code</Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <React.Fragment key={index}>
                <View
                  style={[styles.container, symbol.length !== 0 && styles.a]}
                  key={`value-${index}`}>
                  <Text
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol ||
                      (isFocused ? (
                        <Cursor />
                      ) : (
                        <Text style={styles.placeholder}>0</Text>
                      ))}
                  </Text>
                </View>
                {index === 2 ? (
                  <View key={`separator-${index}`} style={styles.separator} />
                ) : null}
              </React.Fragment>
            )}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => Alert.alert('The Code is sent')}>
          <Text style={styles.footerLink}>Resend the Code</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Sign up"
        onPress={() => Alert.alert('User is registered')}
        disabled={value.length !== 6}
      />
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

  codeFieldRoot: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    gap: 4,
  },

  container: {
    width: 52,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'grey',
  },

  a: {
    borderColor: 'purple',
  },

  cell: {
    fontSize: 40,
    fontWeight: '700',
    color: 'teal',
  },

  focusCell: {
    borderColor: '#000',
  },

  separator: {
    height: 2,
    width: 20,
    backgroundColor: 'grey',
    alignSelf: 'center',
  },

  placeholder: {
    color: 'grey',
  },
});
