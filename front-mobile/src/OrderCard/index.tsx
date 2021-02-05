import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Order } from '../type';
import { formatPrice } from '../Helpers/helpers';
import styles from '../OrderCard/styles'
import { dateFromNow } from '../Helpers/helpers'

type Props = {
  order: Order;
}

export default function OrderCard({ order }: Props) {
    return (        
          <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.orderName}>PEDIDO {order.id}</Text>
                <Text style={styles.orderPrice}>{formatPrice(order.total)}</Text>
              </View>
                <Text style={styles.text}>{dateFromNow(order.moment)}</Text>
              <View style={styles.productsList}>
                  {order.products.map(product => (
              <Text key={product.id} style={styles.text}>{product.name}</Text>
                  ))}
              </View>
           </View>
    );
}


