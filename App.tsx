import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

function showAlert() {
  alert('Button Clicked!');
}

export default function App() {
  return (
    <View style={style.area}>
      <View style={style.KotakMerah}></View>
      <View style={style.KotakKuning}></View>
      <View style={style.KotakHijau}></View>
     </View>
  );
}


const style = StyleSheet.create({
  area :{
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    marginTop: 50,
  },

  KotakMerah : {
    width: 100, 
    height: 100, 
    backgroundColor: 'red',
  
  },

  // KotakBiru : {
  //   width: 100, 
  //   height: 100, 
  //   backgroundColor: 'blue',
  //   marginTop: 20,
  // },

  KotakHijau : {
    width: 100, 
    height: 100, 
    backgroundColor: 'green',
  },

  KotakKuning : {
    width: 100, 
    height: 100, 
    backgroundColor: 'yellow',
  },

  // KotakUngu : {
  //   width: 100, 
  //   height: 100, 
  //   backgroundColor: 'purple',
  //   marginTop: 20,
  // },

  // KotakHitam : {
  //   width: 100, 
  //   height: 100, 
  //   backgroundColor: 'black',
  //   marginTop: 20,
  // },

  // KotakPutih : {
  //   width: 100, 
  //   height: 100, 
  //   backgroundColor: 'white',
  //   marginTop: 20,
  // },
})