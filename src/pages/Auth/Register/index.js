import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native'
import React from 'react'
import tickitz from '../../../assets/icons/Tickitz.png'
import cover from '../../../assets/image/bg_cover.jpg'

const Register = () => {
  return (
    <View>
      <ScrollView
        style={{
          // flex: 1,
          backfaceVisibility: 'white',
          padding: 30,
        }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center' }} source={tickitz} resizeMode="cover">
          {/* <Text style={styles.text}>Inside</Text> */}
        </ImageBackground>
        <Image
          style={{
            height: 25,
            width: 90,
            resizeMode: 'cover'
          }} source={tickitz} />
        <Text
          style={{
            fontSize: 26,
            fontWeight: '600',
            color: 'black',
            marginTop: 40
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontSize: 15,
            color: '#8692A6'
          }}>
          Fill your additional details
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 40,
            color: 'black',
            marginBottom: 12
          }}>
          First Name
        </Text>
        <TextInput
          placeholder='Write your first name'
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
          }} />
        <Text
          style={{
            fontSize: 16,
            marginTop: 24,
            color: 'black',
            marginBottom: 12
          }}>
          Last Name
        </Text>
        <TextInput
          placeholder='Write your first name'
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
          }} />
        <Text
          style={{
            fontSize: 16,
            marginTop: 24,
            color: 'black',
            marginBottom: 12
          }}>
          Phone Number
        </Text>
        <TextInput
          placeholder='Write your first name'
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,

          }} />
        <Text
          style={{
            fontSize: 16,
            marginTop: 24,
            color: 'black',
            marginBottom: 12
          }}>
          Email
        </Text>
        <TextInput
          placeholder='Write your first name'
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,

          }} />
        <Text
          style={{
            fontSize: 16,
            marginTop: 24,
            color: 'black',
            marginBottom: 12
          }}>
          Password
        </Text>
        <TextInput
          placeholder='Write your first name'
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            marginBottom: 40
          }} />

        <Pressable
          style={{
            backgroundColor: '#5F2EEA',
            borderRadius: 8
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              padding: 15,
              fontSize: 16,
              fontWeight: '700'
            }}>
            Sign Up
          </Text>
        </Pressable>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            marginTop: 16,
            fontWeight: '500'
          }}>
          Already have account ? <Text style={{ color: '#5F2EEA' }}>Sign In</Text>
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Register