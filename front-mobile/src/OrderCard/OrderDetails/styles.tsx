import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      paddingRight: '5%',
      paddingLeft: '5%'
    },
    button: {
      backgroundColor: '#2e2a29',
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    dtl: {
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontFamily: 'OpenSans_700Bold',
      fontWeight: 'bold',
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24,
      fontFamily: 'OpenSans_700Bold'
    }      
});

export default styles;