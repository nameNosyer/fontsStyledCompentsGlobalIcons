import React from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
  useFonts
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import {Dashboard} from './src/screens/Dashboard';

import {Loading} from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  })

  if(!fontsLoaded){
    return (
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

