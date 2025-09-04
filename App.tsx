import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {  Button } from 'react-native';


export default function App() {
  const age = 16;
  let feedback = '';
  const yearsexp = 0;

  if ( age >= 18 && yearsexp >= 3)
    {
      feedback = "You are allowed to drive."
    } 
    else {
      feedback = "Still too young."
    }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Image source={{uri:'https://cdn.pixabay.com/photo/2017/10/03/15/54/car-2812943_1280.jpg',
      
      }}
      style={styles.Image}/> 
      <Text style ={styles.response}>
         {feedback}
      </Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afe',
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },

  response:{
    fontSize: 28,
     color: 'af3'
  
  },
  Image:{
    width: 400,
  height: 350
  }
  
});
