import { View, Text } from 'react-native';
import { styles } from './style';

function TelaContador(props) {
  let contador = props.contador;

  return (
    <View style={styles.TelaContador}>
      <Text style={styles.Contador}>
        {contador}
      </Text>
    </View>
  )
}

export default TelaContador;