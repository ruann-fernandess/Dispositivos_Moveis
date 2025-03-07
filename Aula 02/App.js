import { View, Text, Image } from 'react-native';

import Componente1 from './src/Componente1/index'
import Componente2 from './src/Componente2/index'
import Componente3 from './src/Componente3/index'
import Componente4 from './src/Componente4/index'
import Componente5 from './src/Componente5/index'
import Componente6 from './src/Componente6/index'

function MeuPerfilProfissional(){
  return(
     <View>
        <Componente1/>
        <Componente2/>
        <Componente3/>
        <Componente4/>
        <Componente5/>
        <Componente6/>
      </View>
  )
}

export default MeuPerfilProfissional;