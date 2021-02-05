import React, { constructor, useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Alert, ScrollView, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import OrderCard from '../OrderCard';
import { Order } from '../type';
import Header from '../Header';
import styles from '../Orders/styles';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(error => Alert.alert("Houve um erro ao buscar os pedidos, tente novamente!"))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused])

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', { order })
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (

          <View>
            <Text style={styles.loading}>Carregando Pedidos...</Text>
            <View style={styles.progressBar}></View>
          </View>)
          : (orders.map(order => (
            <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          )))}
      </ScrollView>
    </>
  );
}


