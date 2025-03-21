import { View, Text, Button, TextInput, Image } from 'react-native'
import {styles} from './Style'
import {useState} from 'react'  

function Calculador(){
  const[peso, setPeso] = useState('')
  const[altura, setaltura] = useState('')
  const[res, setRes] = useState('')

  function Conta(){
       const resultado = peso / (altura * altura)
       setRes(resultado.toFixed(1)) 
    }

  return(
    <View> 
      <Text style={styles.titulo}> Calculo de IMC </Text>
      <Image style={styles.image} source={require('../../../assets/balanca-imc.jpg')} />
      <TextInput style={styles.input} placeholder="Peso:" onChangeText={setPeso} />
      <TextInput style={styles.input} placeholder="Altura:" onChangeText={setaltura}/>
      <Button color='green' style={styles.button} title="Verificar" onPress={() => Conta()}/>
      <Text style={styles.texto}> Resultado: {res} </Text>
    </View>
  )
}

export default Calculador