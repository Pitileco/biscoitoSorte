import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function App(){

    const [img, setImg] = useState(require('./src/biscoito.png'));
    const[textoFrase, setTextoFrase] = useState('');

    let frases = [
      'A persistência é o caminho do êxito.',
      'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
      'No meio da dificuldade encontra-se a oportunidade.',
      'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
      'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
      'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
      'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
      'É parte da cura o desejo de ser curado.',
      'O que me preocupa não é o grito dos maus. É o silêncio dos bons.'
      
    ];
    function quebraBiscoito(){
      let numeroAleatorio = Math.floor(Math.random() * frases.length)

      setTextoFrase('"' + frases[numeroAleatorio] + '"');
      setImg(require('./src/biscoitoAberto.png'))
    }

    function reiniciar(){
      setImg(require('./src/biscoito.png'))
      setTextoFrase('');

    }

  return (
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}
      />

    <Text style={styles.textoFrase}> {textoFrase} </Text>
    
    <TouchableOpacity style ={styles.botao} onPress={ quebraBiscoito }>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}>Quebrar biscoito</Text>
      </View>

    </TouchableOpacity>

    <TouchableOpacity style ={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={reiniciar}>
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, {color:'#121212'}]}>Reiniciar Biscoito</Text>
      </View>

    </TouchableOpacity>


    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
    
  },
  textoFrase:{
    fontSize: 25,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'#dd7b22'
  }
})
