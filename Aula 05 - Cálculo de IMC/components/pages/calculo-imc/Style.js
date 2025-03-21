import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  view:{
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 2,
    paddingBottom: 20
  },

  titulo:{
    fontSize: 30,
    color: 'Black',
    marginTop: 20,
    textAlign: 'center'
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'red'
  },

  image:{
    width: 300, 
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center', 
  }

})

export {styles}