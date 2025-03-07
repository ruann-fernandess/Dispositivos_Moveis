import { View, Text } from 'react-native';
import {viewStyle, textStyle} from './style'

function Componente3(){  
  let nome = 'Isaque Silva Venancio';
  let dataNascimento = '05/03/2005';
  let idade = 19;

  return(
    <View style={viewStyle.espacamentoEsquerda}>
      <Text style={[textStyle.tamanhoFonte, textStyle.espessuraFonte]}>Dados pessoais:</Text>
      <Text>Nome: {nome}</Text>
      <Text>Data de nascimento: {dataNascimento}</Text>
      <Text>Idade: {idade}</Text>
    </View>
  )
}

export default Componente3;