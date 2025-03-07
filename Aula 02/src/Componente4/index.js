import { View, Text } from 'react-native';
import {viewStyle, textStyle} from './style'

function Componente4(){  
  let formacaoAnterior = 'Técnico: Informática para Internet';
  let formacaoAtual = 'Cursando ensino superior';

  return(
    <View style={viewStyle.espacamentoEsquerda}>
      <Text style={[textStyle.tamanhoFonte, textStyle.espacamentoSuperior, textStyle.espessuraFonte]}>Formação:</Text>
      <Text>- {formacaoAnterior}</Text>
      <Text>- {formacaoAtual}</Text>
    </View>
  )
}

export default Componente4;