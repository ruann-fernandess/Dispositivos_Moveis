import { View, Text } from 'react-native';
import {viewStyle, textStyle} from './style'

function Componente6(){  
  let projetos = 'github.com/ruann-fernandess';

  return(
    <View style={viewStyle.espacamentoEsquerda}>
      <Text style={[textStyle.tamanhoFonte, textStyle.espacamentoSuperior, textStyle.espessuraFonte]}>Projetos:</Text>
      <Text>- {projetos}</Text>
    </View>
  )
}

export default Componente6;
