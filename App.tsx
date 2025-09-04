import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
    <View style={styles.container}>
      <Text style ={styles.response}>
         {feedback}
      </Text>
      <StatusBar style="auto" />
    </View>
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
  
  }
});
