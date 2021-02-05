import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';
import styles from '../Home/styles';

function Home() {
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Orders')
      }
          
    return (
        <>
            <Header />
            <View style={styles.container}>
                    <Image source={require('../assets/deliveryman.png')} />
                <Text style={styles.title}>Acompanhe os pedidos e {'\n'} entregue no prazo!</Text>
                <Text style={styles.subTitle}>Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão</Text>
           </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>VER PEDIDOS</Text>
                </RectButton>
            </View>
                <Text style={styles.piter}>
                    App desenvolvido por George Piter
                </Text>
            
        </>
    );
}

export default Home;