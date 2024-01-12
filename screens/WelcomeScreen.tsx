import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//FIREBASE
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../config/Config';


export default function WelcomeScreen({navigation}:any) {

    const cerrarSesion=()=>{

        signOut(auth).then(() => {
          // Sign-out successful.
          Alert.alert('Mensaje','Se cerro la sesion')
          navigation.navigate('Bienvenida')
        }).catch((error) => {
          // An error happened.
          const errorCode = error.code;
         const errorMessage = error.message;
          Alert.alert(errorCode,errorMessage)
        });
    
      }
     
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Welcome</Text>
      <Text style={styles.parrafo}>Bienvenido a la aplicacion puedes salir cuando gustes!</Text>
      <Image style={styles.image} source={{uri:"https://img.freepik.com/free-vector/welcome-composition-with-flat-design_23-2147895653.jpg"}} />
      <Button color='orange'title='Cerrar Sesion' onPress={()=>(cerrarSesion())}/>
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
      parrafo: {
        fontSize:20,
        marginTop:20,
        marginBottom:10,
        color:'#536872',
        
        
        
      },
      image: {
        resizeMode: "contain",
        height: 300,
        width: "80%",
        marginTop: 20,
        marginBottom:20
      },
})