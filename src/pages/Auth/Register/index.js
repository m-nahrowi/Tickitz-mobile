import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, Image, Pressable, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import tickitz from '../../../assets/icons/Tickitz.png'
import cover from '../../../assets/image/bg_cover.jpg'
import axios from 'axios'


const styles = StyleSheet.create({
  inputText: {
    fontSize: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  }
})

const Register = ({ navigation }) => {


  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    const data = {
      first_name,
      last_name,
      phone_number,
      email,
      password,

    }

    // post register
    axios.post(`http://10.0.2.2:2022/profile-user`, data)
      .then(res => {
        console.log(`res : `, res);
        console.log(`res : `, res.data);
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        alert(`Register succses`)
        // getData();
      }).catch(error => console.log(error))


  }

  console.log("sayang jalan dong")

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
          style={styles.inputText}
          value={first_name}
          onChangeText={(value) => setFirstName(value)}
        />
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
          style={styles.inputText}
          value={last_name}
          onChangeText={(value) => setLastName(value)} />
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
          style={styles.inputText}
          value={phone_number}
          onChangeText={(value) => setPhoneNumber(value)} />
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
          style={styles.inputText}
          value={email}
          onChangeText={(value) => setEmail(value)} />
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
          }}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <Pressable
          style={{
            backgroundColor: '#5F2EEA',
            borderRadius: 8
          }}
          onPress={submit}
          >
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



export default Register