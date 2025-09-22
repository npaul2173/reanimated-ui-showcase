import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';
import {
  appColors,
  CardDataProps,
  dataArray,
  PADDING_HORIZONTAL_CONTAIN,
} from '../../constants';

export const Cards = () => {
  return (
    <View style={styles.cardsContainer}>
      {dataArray.map((item, index) => (
        <Animated.View
          entering={FadeInDown.delay(1500 + 300 * index)}
          key={item.id}
          style={[styles.cardWrapper, { top: 110 * index, zIndex: index }]}
        >
          <CardView item={item} />
        </Animated.View>
      ))}
    </View>
  );
};

export const CardView: React.FC<{ item: CardDataProps }> = ({ item }) => {
  return (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      {/* Title + Description */}
      <View style={styles.textBlock}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Text style={styles.textDescription}>{item.description}</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's start</Text>
      </TouchableOpacity>

      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image
          resizeMethod="resize"
          resizeMode="contain"
          style={styles.image}
          source={item.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    padding: PADDING_HORIZONTAL_CONTAIN - 5,
  },
  cardWrapper: {
    position: 'absolute',
    width: '100%',
    left: PADDING_HORIZONTAL_CONTAIN,
  },
  card: {
    borderWidth: 5,
    borderColor: appColors.wheat,
    borderRadius: 20,
    padding: PADDING_HORIZONTAL_CONTAIN,
  },
  textBlock: {
    paddingBottom: 20,
  },
  textTitle: {
    fontSize: 16,
    color: appColors.black,
    fontFamily: fontFamily.poppins.bold,
  },
  textDescription: {
    fontSize: 14,
    color: appColors.black,
    fontFamily: fontFamily.poppins.regular,
  },
  button: {
    backgroundColor: appColors.orange,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 18,
    color: appColors.white,
    letterSpacing: -0.5,
    fontFamily: fontFamily.poppins.medium,
  },
  imageWrapper: {
    position: 'absolute',
    right: PADDING_HORIZONTAL_CONTAIN,
    bottom: PADDING_HORIZONTAL_CONTAIN,
  },
  image: {
    height: 100,
    width: 100,
  },
});
