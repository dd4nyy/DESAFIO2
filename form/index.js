import React from "react";
import { View, Text, Image } from "react-native";

export default function Lista(){
  const image1 = require('./../assets/image/8.jpeg')


return(
  <View>
    <Text>Meus Filmes Favoritos</Text>
     
          <Image source={image1}/>
          
  </View>
)} 

