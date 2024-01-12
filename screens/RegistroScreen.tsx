import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { db } from '../config/Config';
//firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Config";
import { onValue, ref, remove, set, update } from "firebase/database";

export default function RegistroScreen( {navigation}:any) {
    const [correo, setcorreo] = useState('')
    const [contrasenia, setcontrasenia] = useState('')
    const [nick, setnick] = useState('')
    const [edad, setedad] = useState('')

    //REGISTRO DE USUARIO

    function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            Alert.alert("Mensaje", "Registro Exitoso");
            navigation.navigate("Top_Welcome");
    
            //console.log('Registro exitoso')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
    
            switch (errorCode) {
              case "auth/email-alredy-in-use":
                Alert.alert("Error", "El correo ingresado ya esta en uso");
                break;
              case "auth/missing-password":
                Alert.alert("Autenticación", "Ingrese la contraseña");
                break;
              case "auth/missing-email":
                Alert.alert("Autenticación", "Ingrese el Correo");
                break;
              default:
                Alert.alert(errorCode, errorMessage);
            }
          });
          setcorreo("")
          setcontrasenia("")
          setedad("")
          setnick("")
      }
      // GUARDADO EN BASE DE DATOS
      function guardar(nick:string, edad:number, correo:string) {
  
        if(nick.trim()==="" || edad==0){  //trim borra los espacios al principio y al final de un string
            Alert.alert("Error", "No se permiten campos en blanco")
          }
          else{
            set(ref(db, 'usuarios/' + nick), {
                name: nick,
                age: edad,
                email:correo
              });
              Alert.alert('Mensaje','Datos guardados')
          }
          
         
       
        
      }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <TextInput
         style={styles.input}
         placeholder='Ingresar correo'
         onChangeText={(texto)=>setcorreo(texto)}
         keyboardType='email-address'
         autoCapitalize='none' // por defecto la primera letra sera en minusculas
         value={correo}
      />
      <TextInput
         style={styles.input}
         placeholder='Ingresar nick'
         onChangeText={(texto)=>setnick(texto)}
         value={nick}
      />
      <TextInput
         style={styles.input}
         placeholder='Ingresar edad'
         onChangeText={(texto)=>setedad(texto)}
         keyboardType='numeric'
         value={edad}
      />
      <TextInput
         style={styles.input}
         placeholder='Ingresar contraseña'
         onChangeText={(texto)=>setcontrasenia(texto)}
         value={contrasenia}
      />
      <Button title='Registrar' onPress={()=>(registro(),guardar(nick,Number(edad),correo))}/>
      


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