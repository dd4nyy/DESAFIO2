import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/image/1.JPEG')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>TURMA DA MONICA</Text>

        <Image source={require('./assets/image/2.AVIF')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>HOMEM DE CHAPEU</Text>

        <Image source={require('./assets/image/filme3.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>GATO LARANJA</Text>

        <Image source={require('./assets/image/4.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>FAMILIA</Text>

        <Image source={require('./assets/image/5.JFIF')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>NAMORADOS</Text>

        <Image source={require('./assets/image/6.JFIF')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>NOIVA CADAVER</Text>

        <Image source={require('./assets/image/7.PNG')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>CHOCOLATE</Text>

        <Image source={require('./assets/image/8.JPEG')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>MONSTROS</Text>

        <Image source={require('./assets/image/9.JPG')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>RAPUNZEL</Text>

        <Image source={require('./assets/image/10.JFIF')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>MESA GRANDE</Text>




        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius:12,
  },
});

export default App;
