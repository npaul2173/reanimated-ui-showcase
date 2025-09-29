import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../../../assets/fonts';
import { flagsCircular } from '../../../assets/images/countryFlags/circular';
import { listCurrencyData } from '../constants';

export type CurrencyItem = {
  id: number;
  country: string;
  currency: string;
  code: string;
  symbol: string;
  shortCode: string;
};

interface CurrencyPickerProps {
  selectedCurrency: CurrencyItem;
  onChange: (currency: CurrencyItem) => void;
}

export const CurrencyPicker: React.FC<CurrencyPickerProps> = ({
  selectedCurrency,
  onChange,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      {/* Dropdown-style Button to open modal */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.dropdownButton}
      >
        <Image
          // @ts-ignore
          source={flagsCircular[selectedCurrency.shortCode]}
          style={styles.flagIcon}
        />
        <Text style={styles.dropdownText}>{selectedCurrency.code}</Text>
        <MaterialDesignIcons name="chevron-down" size={20} color="#444" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Select Currency</Text>

            <ScrollView>
              {listCurrencyData.map(item => (
                <Pressable
                  key={item.shortCode}
                  onPress={() => {
                    onChange(item); // use parent handler
                    setModalVisible(false);
                  }}
                >
                  <View style={styles.currencyRow}>
                    <Image
                      // @ts-ignore
                      source={flagsCircular[item.shortCode]}
                      style={styles.flagIcon}
                    />
                    <Text style={styles.currencyText}>
                      {item.symbol} - {item.country}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 99,
    alignSelf: 'flex-start', // <- THIS is important
  },
  flagIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10,
  },
  dropdownText: {
    fontSize: 16,
    fontFamily: fontFamily.poppins.bold,
  },
  chevronIcon: {
    width: 14,
    height: 14,
    tintColor: '#888',
  },
  closeButton: {
    backgroundColor: '#dc3545',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fontFamily.poppins.medium,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    maxHeight: '80%',
  },
  modalText: {
    fontSize: 18,
    fontFamily: fontFamily.poppins.bold,
    marginBottom: 10,
    alignSelf: 'center',
  },
  currencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  currencyText: {
    fontSize: 16,
    fontFamily: fontFamily.poppins.regular,
    color: '#333',
    marginLeft: 10,
  },
});
