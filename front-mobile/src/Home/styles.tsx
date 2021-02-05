import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center'        
    },
    title: {
        color: '#2e2a29',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    },
    subTitle: {
        color: '#2e2a29',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
    },
    piter: {
        fontSize: 16,
        marginTop: 100,
        lineHeight: 22,
        textAlign: 'center'   
    },
    button: {
        backgroundColor: '#2e2a29',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    }
  });
  
  export default styles;