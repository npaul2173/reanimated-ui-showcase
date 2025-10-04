import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';
import { DiamondButton } from '../Button';
import { AlienDataProps, appColors } from '../constants';

type AlienInfoProps = {
  activeIndex: number;
  totalItems: number;
  aliens: AlienDataProps[];
  paginateButton: (dir: 'back' | 'next') => void;
};

export const AlienInfo: React.FC<AlienInfoProps> = ({
  activeIndex,
  totalItems,
  aliens,
  paginateButton,
}) => {
  const alien = aliens[activeIndex];

  return (
    <View style={styles.container}>
      {/* Navigation Row */}
      <View style={styles.row}>
        <DiamondButton
          onPress={() => paginateButton('back')}
          direction="back"
          disabled={activeIndex === 0}
        />

        {/* Alien Name */}
        <View style={styles.textContainer}>
          <Animated.Text
            key={alien.name}
            entering={FadeIn.duration(300)}
            exiting={FadeOut.duration(300)}
            style={styles.name}
          >
            {alien.name}
          </Animated.Text>
        </View>

        <DiamondButton
          onPress={() => paginateButton('next')}
          direction="next"
          disabled={activeIndex === totalItems - 1}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Species</Text>
          <Text style={styles.detailValue}>{alien.species}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Homeworld</Text>
          <Text style={styles.detailValue}>{alien.homeworld}</Text>
        </View>
      </View>

      {/* Alien Description */}
      <View style={styles.descriptionBox}>
        <Text style={styles.description}>{alien.lore}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  row: {
    // backgroundColor: 'wheat',
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  name: {
    fontFamily: fontFamily.zolandoSans.bold,
    fontSize: 28,
    color: appColors.primeGreen,
    textAlign: 'center',
  },
  descriptionBox: {
    backgroundColor: appColors.baseBlueDark,
    borderRadius: 20,
    // height: 200,
    // paddingBottom: 50,
    marginTop: 20,
  },
  description: {
    fontFamily: fontFamily.zolandoSans.regular,
    fontSize: 14,
    padding: 16,
    color: appColors.baseBlueLight,
    textAlign: 'center',
  },

  detailsContainer: {
    marginTop: 16,
    backgroundColor: appColors.baseBlueDark,
    borderRadius: 12,
    padding: 12,
    width: '100%',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontFamily: fontFamily.zolandoSans.medium,
    fontSize: 16,
    color: appColors.primeGreen,
  },
  detailValue: {
    fontFamily: fontFamily.zolandoSans.regular,
    fontSize: 16,
    color: appColors.baseBlueLight,
    textAlign: 'right',
  },
});
