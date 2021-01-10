import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

 function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DS DELIVERY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 
    container: {
      backgroundColor: '#dba74d',
      height: 115,
      paddingTop: 80,
      flexDirection: 'row',
      justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 40,
    letterSpacing: -0.24,    
    color:'#FFF',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold'
    

  }
});


export default Header;