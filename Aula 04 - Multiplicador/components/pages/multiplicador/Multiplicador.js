import { View, Text, Button, TextInput } from 'react-native'
import {styles} from './Styles'
import {useState} from 'react'

function Multiplicador (){

  const [n1, setN1] = useState (0)
  const [n2, setN2] = useState (0)
  const [res, setRes] = useState (0)


  function exibirRes(){

    if (n1 === '' || n2 === ''){
      alert('Número inválido')
      return;
    }
    
    /*Ft. Isaque */
    if(isNaN(n1) || isNaN(n2) ){ 
      setRes('Número inválido')
    }else{
      setRes(n1*n2)
    }

  }

  return(
    <View style={styles.view}>
      <Text style={styles.titulo}> Multiplicador </Text>
      <TextInput style={styles.input} placeholder="Digite o primeiro numero:" onChangeText={setN1}/>
      <TextInput style={styles.input} placeholder="Digite o segundo numero:" onChangeText={setN2}/>
      <Button color='green' style={styles.button} title="Exibir Resultado" onPress={exibirRes}/>
      <Text style={styles.texto}> Resultado: {res} </Text>
    </View>   
  )

}

export default Multiplicador