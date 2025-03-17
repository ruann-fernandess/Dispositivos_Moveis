import { View, Text, Button, TextInput, Image } from 'react-native'
import {styles} from './Style'
import {useState} from 'react'

function Calculador (){

  const[alcool, setAlcool] = useState('')
  const[gasolina, setGasolina] = useState('')
  const[res, setRes] = useState('')

  function Conta(){

      if(alcool/gasolina < 0.7){
        setRes("Alcool")
      } else{
        setRes("Gasolina")
      }
    }

  return(
    <View> 
      <Text style={styles.titulo}> Alcool ou Gasolina </Text>
      <Image style={styles.image} source={require('../../../assets/acool-gasolina.jpg')} />
      <TextInput style={styles.input} placeholder="Preço do Alcool:" onChangeText={setAlcool} />
      <TextInput style={styles.input} placeholder="Preço da Gasolina:" onChangeText={setGasolina}/>
      <Button color='green' style={styles.button} title="Verificar" onPress={() => Conta()}/>
      <Text style={styles.texto}> Resultado: {res} </Text>
    </View>
  )
}

export default Calculador
