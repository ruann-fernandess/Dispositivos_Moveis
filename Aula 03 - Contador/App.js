import { View } from 'react-native';

import TituloPrincipal from './src/TituloPrincipal/index';
import BotoesContador from './src/BotoesContador/index';

function ContadorPessoas() {
  return(
     <View style={[{flex: 1, alignItems: 'center'}]}>
        <TituloPrincipal />
        <BotoesContador />
      </View>
  )
}

export default ContadorPessoas;