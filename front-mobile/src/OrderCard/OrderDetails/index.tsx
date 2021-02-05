import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking } from 'react-native';
import { Alert, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../../api';
import Header from '../../Header';
import OrderCard from '..';
import { Order } from '../../type';
import styles from './styles';

type Props = {
    route: {
        params: {
            order: Order;
        }
    }
}

export function OrderDetails({route}: Props) {
const { order } = route.params;
const navigation = useNavigation();

const handleOnCancel = () => {
  navigation.navigate('Orders');
}

const handleOnConfirmDelivery = () => {
    confirmDelivery(order.id)
    .then(() => {
        Alert.alert(`Pedido ${order.id} confirmado com sucesso!`)
        navigation.navigate('Orders');
    })
    .catch(() => {
        Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`);
    })
}

const handleStarNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)

  }

return (
     <>
        <Header />
        <View style={styles.container}>
            <Text style={styles.dtl}>Detalhes do pedido {order.id}</Text>
                <OrderCard order={order}/>
                    <RectButton style={styles.button}onPress={handleStarNavigation}>
                        <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO ATÉ O CLIENTE</Text>
                    </RectButton>
                    <RectButton style={styles.button}onPress={handleOnConfirmDelivery}>
                        <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
                    </RectButton>
                    <RectButton style={styles.button} onPress={handleOnCancel}>
                        <Text style={styles.buttonText}>CANCELAR ENTREGA</Text>
                    </RectButton>
        </View>
     </>
  );
}

export default OrderDetails;