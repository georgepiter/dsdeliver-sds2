import React from 'react';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Routes from './src/Routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
     <StatusBar style="auto" />
     <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
