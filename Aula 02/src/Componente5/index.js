import { View, Text } from 'react-native';
import {viewStyle, textStyle} from './style'

function Componente5(){  
  let experiencia = 'Projetos pessoais';

  return(
    <View style={viewStyle.espacamentoEsquerda}>
      <Text style={[textStyle.tamanhoFonte, textStyle.espacamentoSuperior, textStyle.espessuraFonte]}>Experiência:</Text>
      <Text>- {experiencia}</Text>
    </View>
  )
}

export default Componente5;