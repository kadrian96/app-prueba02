import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BienvenidaScreen({ navigation }:any) {
  return (
    <View style={styles.contain}>
      <Text style={styles.titulo}>Kevin Martinez</Text>
      <Image style={styles.image} source={require("../assets/img/fondocelular.jpg")}/>
     <Pressable style={styles.loginbtn} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.txtbtn}>Login</Text>
     </Pressable>
     <Pressable style={styles.registerbtn} onPress={()=>navigation.navigate("Registro")}>
        <Text style={styles.txtbtn}>Registro</Text>
     </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#ACE1AF'
    },
    titulo:{
        fontSize:30,
        marginTop:20,
        marginBottom:20,
        color:'#3B7A57',
        fontWeight:'bold'
      },
    image: {
        resizeMode: "contain",
        height: 300,
        width: "80%",
        marginTop: 20,
      },
      registerbtn:{
        width:100,
        height:50,
        backgroundColor:'#007FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
      },
      loginbtn:{
        width:100,
        height:50,
        backgroundColor:'#7BB661',
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
      },
      txtbtn:{
        fontSize:15,
        color:'white',
        fontWeight:'bold'
      }
      

})