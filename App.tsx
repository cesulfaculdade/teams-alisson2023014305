import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import theme from '@theme/index';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

import { ThemeProvider, useTheme } from 'styled-components/native';


export default function App() {
  
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes/> : <Loading/> }
    
    </ThemeProvider>


  );
}


