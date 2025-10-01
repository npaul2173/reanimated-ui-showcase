import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { CurrencyItem, CurrencyPicker } from '../CurrencyPicker';
import { TypingField } from '../TypingField';
import { listCurrencyData } from '../constants';
import { convertCurrencyCountry } from '../util';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Screen = () => {
  const [firstField, setFirstField] = useState('0');
  const [secondField, setSecondField] = useState('0');
  const [fromCurrency, setFromCurrency] = useState(listCurrencyData[0]);
  const [toCurrency, setToCurrency] = useState(listCurrencyData[1]);
  console.log(fromCurrency, toCurrency);

  const onFirstFieldChange = (data: string) => {
    console.log('FIRST DFIELD -- > ', data);

    const convertedAmount = convertCurrencyCountry(
      Number(data),
      fromCurrency,
      toCurrency,
    );
    setFirstField(data);
    setSecondField(convertedAmount);
  };

  const onFirstCurrencyChange = (data: CurrencyItem) => {
    const convertedAmount = convertCurrencyCountry(
      Number(firstField),
      fromCurrency,
      data,
    );
    setFromCurrency(data);
    setFirstField(convertedAmount);
    console.log({ convertedAmount });
  };

  const onSecondFieldChange = (data: string) => {
    console.log('SECOND DFIELD -- > ', data);

    const convertedAmount = convertCurrencyCountry(
      Number(data),
      fromCurrency,
      toCurrency,
    );
    setSecondField(data);
    setFirstField(convertedAmount);
  };

  const onSecondCurrencyChange = (data: CurrencyItem) => {
    const convertedAmount = convertCurrencyCountry(
      Number(firstField),
      fromCurrency,
      data,
    );
    setToCurrency(data);
    setSecondField(convertedAmount);
    console.log({ convertedAmount });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <View style={{ padding: 30, backgroundColor: 'white', borderRadius: 20 }}>
        <View>
          <CurrencyPicker
            selectedCurrency={fromCurrency}
            onChange={onFirstCurrencyChange}
          />
          <View style={{ width: '100%' }}>
            <TypingField
              value={firstField}
              onChangeText={onFirstFieldChange}
              fontSize={80}
              isFocused
              backgroundStyles={{ backgroundColor: 'transparent' }}
            />
          </View>
        </View>

        <View>
          <CurrencyPicker
            selectedCurrency={toCurrency}
            onChange={onSecondCurrencyChange}
          />
          <View style={{ width: '100%' }}>
            <TypingField
              value={secondField}
              onChangeText={onSecondFieldChange}
              fontSize={80}
              backgroundStyles={{ backgroundColor: 'transparent' }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9dc95cff',
    padding: 20,
  },
});
