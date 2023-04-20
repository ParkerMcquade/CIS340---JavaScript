import React from 'react';
import {Text,Image, View } from 'react-native';

export default function CatApp() {
  let pic = {
    uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/mydog.jpg'};
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image source = {pic}
      style={{width: 200, height: 200}}
      />
      <Text> Hello, I am your cat!</Text>
    </View>
  );
}
