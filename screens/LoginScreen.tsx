import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
//firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function LoginScreen({navigation}:any) {
    const [correo, setcorreo] = useState('')
    const [contrasenia, setcontrasenia] = useState('')

    function login(){
        signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('ACCESO CORRECTO')
        Alert.alert('Mensaje','Inicio de Sesion exitoso')
        navigation.navigate('Top_Welcome')
      })
      .catch((error) => {
        console.log('ACCESO DENEGADO')
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
       
        switch (errorCode) {
          case 'auth/invalid/credential':
            Alert.alert('Error', 'Las Credenciales son Incorrectas');
            break;
            case 'auth/missing-password':
            Alert.alert('Autenticación', 'Ingrese la contraseña')
            break;
            case 'auth/missing-email':
            Alert.alert('Autenticación', 'Ingrese el Correo')
            break;
            default:
              Alert.alert(errorCode,errorMessage)
        }
    
      });
        setcorreo("")
        setcontrasenia("")
      }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput
         style={styles.input}
         placeholder='Ingresar correo'
         onChangeText={(texto)=>setcorreo(texto)}
         keyboardType='email-address'
         autoCapitalize='none' 
         value={correo}
      />
       <TextInput
         style={styles.input}
         placeholder='Ingresar contraseña'
         onChangeText={(texto)=>setcontrasenia(texto)}
         secureTextEntry
         value={contrasenia}
      />
      <Button title='Ingresar' onPress={()=>(login())}/>


    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    },
    titulo:{
        fontSize:30,
        marginTop:20,
        marginBottom:20,
        color:'#3B7A57',
        fontWeight:'bold'
      },
      input: {
        height: 40,
        width: 300,
        borderColor: '#246BCE',
        borderWidth: 1,
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius:5,
        
        
      },
})