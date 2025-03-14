import React, { useState } from 'react';
import { View, Button } from 'react-native';

import TelaContador from '../TelaContador/index';

function BotoesContador() {
  const [contador, setContador] = useState(0);

  function aumentarContador() {
    setContador(contador + 1);
  }

  function diminuirContador() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <View>
      <TelaContador contador={contador} />
      <Button title="+" color="green" onPress={aumentarContador} />
      <Button title="-" color="red" onPress={diminuirContador} />
    </View>
  );
}

export default BotoesContador;