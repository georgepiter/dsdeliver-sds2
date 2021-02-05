import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      paddingRight: '5%',
      paddingLeft: '5%'
    },
    loading: {
      flexDirection: 'row-reverse',
      borderRadius: 150,
      marginTop: 100,
      textAlign: 'center',
      justifyContent: 'flex-start',
      fontSize: 30,
      fontFamily: 'OpenSans_700Bold',
      fontWeight: 'bold'
    },
    progressBar: {
     height: 20,
     flex: 1,
     width: '100%',
     backgroundColor: '#da5c5c',
     borderColor: '#000',
     borderWidth: 4,
     borderRadius: 10,
     position: 'relative',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0
   }
  });

  export default styles;