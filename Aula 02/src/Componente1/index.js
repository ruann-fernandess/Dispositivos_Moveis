import { View, Text } from 'react-native';
import {styles} from './style'

function Componente1(){
  return(
    <View>
      <Text style={[styles.centralizar, styles.tamanhoFonte, styles.espessuraFonte]}>Meu Perfil App:</Text>
    </View>
  )
}

export default Componente1;