import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons'; // optional for eye icon
import { fontFamily } from '../../../../assets/fonts';

interface InputFieldProps extends TextInputProps {
  isPassword?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  isPassword = false,
  style,
  ...rest
}) => {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        cursorColor={'#000000'}
        selectionColor={'#D7EC29'}
        selectionHandleColor={'#D7EC29'}
        style={styles.input}
        placeholderTextColor="#999"
        secureTextEntry={secure}
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setSecure(!secure)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={styles.eyeBtn}
        >
          <Ionicons
            name={secure ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#777"
          />
        </TouchableOpacity>
      )}
      {/* {isPassword && (
        <TouchableOpacity
          onPress={() => setSecure(!secure)}
          style={styles.eyeBtn}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name={secure ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#777"
          />
        </TouchableOpacity>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
    fontFamily: fontFamily.zolandoSans.regular,
  },
  eyeBtn: {
    marginLeft: 8,
  },
});
