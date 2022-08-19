import { ScrollView, Text, View, Image, Pressable, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import profile from '../../../assets/image/nahrowiii.jpg'


const ProfileDetail = ({navigation}) => {
     return (

          <ScrollView>
               <Navbar />
               <View
                    style={{
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         padding: 48
                    }}>

                    <TouchableOpacity
                         onPress={() => navigation.navigate('ProfileDetail')}>
                         <Text
                              style={{
                                   fontSize: 16,
                                   color: 'black'
                              }}>
                              Detail Account
                         </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigation.navigate('OrderHistory')}>
                         <Text
                              style={{
                                   fontSize: 16
                              }}>
                              Order History
                         </Text>
                    </TouchableOpacity>
               </View>

               <View
                    style={{
                         backgroundColor: '#E5E5E5',
                         borderRadius: 8
                    }}
               >
                    <View
                         style={{
                              backgroundColor: 'white',
                              marginHorizontal: 24,
                              marginVertical: 32,
                              borderRadius: 15
                         }}>
                         <Text
                              style={{
                                   padding: 30,
                                   fontSize: 16,
                                   fontWeight: '800'

                              }}>
                              INFO
                         </Text>

                         <Image
                              style={{
                                   alignSelf: 'center',
                                   borderRadius: 60,
                                   height: 120,
                                   width: 120,
                              }} source={profile} />

                         <Text
                              style={{
                                   fontSize: 20,
                                   color: 'black',
                                   textAlign: "center",
                                   marginTop: 32
                              }}>
                              Muhamad Nahrowi
                         </Text>
                         <Text
                              style={{
                                   fontSize: 14,
                                   color: '#4E4B66',
                                   textAlign: 'center',
                                   marginTop: 4,
                                   marginBottom: 40
                              }}>
                              Moviegoers
                         </Text>
                         <View
                              style={{
                                   borderBottomWidth: 1,
                                   borderColor: '#DEDEDE',
                                   marginBottom: 32

                              }}>

                         </View>

                         <Pressable
                              style={{
                                   borderRadius: 14,
                                   marginHorizontal: 70,
                                   marginBottom: 27,
                                   backgroundColor: '#5F2EEA'
                              }}>
                              <Text
                                   style={{
                                        padding: 15,
                                        color: 'white',
                                        textAlign: 'center',
                                        fontSize: 16,
                                        fontWeight: '700'
                                   }}>
                                   Logout
                              </Text>
                         </Pressable>
                    </View>

                    <Text
                         style={{
                              marginLeft: 24,
                              fontWeight: '700',
                              fontSize: 18,
                              marginBottom: 39
                         }}>
                         Account Setting
                    </Text>


                    <View>
                         <View
                              style={{
                                   marginHorizontal: 24,
                                   backgroundColor: 'white',
                                   borderRadius: 10

                              }}>
                              <Text
                                   style={{
                                        fontSize: 16,
                                        marginTop: 40,
                                        paddingBottom: 5,
                                        marginHorizontal: 24,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'gray'
                                   }}>
                                   Details Information
                              </Text>

                              <Text
                                   style={{
                                        marginTop: 50,
                                        marginLeft: 24,
                                        fontSize: 16
                                   }}>
                                   Full Name
                              </Text>
                              <TextInput
                                   style={[styles.InputProfile]}
                              />

                              <Text
                                   style={[styles.TextProfile]}>
                                   E-mail
                              </Text>
                              <TextInput
                                   style={[styles.InputProfile]}
                              />

                              <Text
                                   style={[styles.TextProfile]}>
                                   Phone Number
                              </Text>
                              <TextInput
                                   style={[styles.InputProfile]}
                              />
                         </View>
                    </View>

                    <Pressable
                         style={[styles.colorPurple]}>
                         <Text
                              style={styles.textPurple}>
                              Update Change
                         </Text>
                    </Pressable>

                    <View>
                         <View
                              style={{
                                   marginHorizontal: 24,
                                   backgroundColor: 'white',
                                   borderRadius: 10

                              }}>
                              <Text
                                   style={{
                                        fontSize: 16,
                                        marginTop: 40,
                                        paddingBottom: 5,
                                        marginHorizontal: 24,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'gray'
                                   }}>
                                   Account and Privacy
                              </Text>

                              <Text
                                   style={{
                                        marginTop: 50,
                                        marginLeft: 24,
                                        fontSize: 16
                                   }}>
                                   New Password
                              </Text>
                              <TextInput
                                   style={[styles.InputProfile]}
                              />

                              <Text
                                   style={[styles.TextProfile]}>
                                   Confirm
                              </Text>
                              <TextInput
                                   style={[styles.InputProfile]}
                              />


                         </View>
                    </View>

                    <Pressable
                         style={[styles.colorPurple]}>
                         <Text
                              style={styles.textPurple}>
                              Update Change
                         </Text>
                    </Pressable>

               </View>
               <Footer />
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     MarginButtom: {
          marginBottom: 30
     },
     colorPurple: {
          backgroundColor: '#5F2EEA',
          borderRadius: 10,
          marginHorizontal: 55,
          marginVertical: 36,
     },
     textPurple: {
          textAlign: 'center',
          color: 'white',
          padding: 14,
          fontSize: 14,
          fontWeight: 'bold'

     },
     TextProfile: {
          fontSize: 16,
          marginTop: 5,
          marginLeft: 24
     },
     InputProfile: {
          backgroundColor: '#FCFDFE',
          borderRadius: 10,
          paddingHorizontal: 20,
          marginHorizontal: 24,
          paddingVertical: 8,
          marginTop: 10,
          borderWidth: 1,
          borderColor: '#DEDEDE',
          fontSize: 16,
          marginBottom: 24
     }
})



export default ProfileDetail