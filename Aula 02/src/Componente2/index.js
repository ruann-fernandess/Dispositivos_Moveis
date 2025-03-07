import { View, Image } from 'react-native';
import {styles} from './style'
import myImage from '../../assets/images/eu.jpg';

function Componente2(){  
  return(
    <View>
      <Image source={myImage} style={[styles.altura, styles.largura, styles.espacamentoSuperior, styles.espacamentoInferior, styles.espacamentoEsquerda, styles.espacamentoDireita]} />
    </View>
  )
}

export default Componente2;