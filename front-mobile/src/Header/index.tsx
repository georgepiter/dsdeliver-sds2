import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from '../Header/styles';

export default function Header() {
const navigation = useNavigation();

const handleOnPress = () => {
  navigation.navigate('Home');
}

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.text}>DS DELIVERY</Text>
      </View>
    </TouchableWithoutFeedback>

  );
}

