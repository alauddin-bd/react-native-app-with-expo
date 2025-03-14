import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Colors from './../../constant/Colors'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

const signUp = () => {
  const router = useRouter();
  return (
    <View style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:100,
      padding: 25,
      flex:1,
      backgroundColor: Colors.WHITE
    }}>
      
      <Image source={require('./../../assets/images/logo.png')}
        style={{width: 180, height: 180}}
      />
      <Text style={{fontSize: 30, fontFamily: 'outfit-bold'}}>Create New Account</Text>

      <TextInput placeholder='Full Name' style={styles.inputText} />
      <TextInput placeholder='Email' style={styles.inputText} />
      <TextInput placeholder='Password' secureTextEntry={true} style={styles.inputText} />
      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        width: '100%',
        marginTop: 25,
        borderRadius: 10
      }}>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 20,
          textAlign: 'center',
          color: Colors.WHITE
        }}>Create Account</Text>
      </TouchableOpacity>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginTop: 20
      }}>
        <Text style={{fontFamily: 'outfit'}}>Already have an account? </Text>
        <Pressable onPress={()=>router.push('/auth/signIn')}><Text style={{fontFamily: 'outfit-bold', color: Colors.PRIMARY}}>Sign in Here</Text></Pressable>
      </View>
      
    </View>
  )
}

export default signUp

const styles = StyleSheet.create({
  inputText: {
    width: '100%',
    borderWidth: 1,
    padding: 15,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 8
  }
})