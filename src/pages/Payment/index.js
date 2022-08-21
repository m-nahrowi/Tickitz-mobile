import React from "react"
import { View, Text, ScrollView, Image, StyleSheet, TextInput, Pressable } from "react-native"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import google_pay from '../../assets/icons/google.png'
import visa from '../../assets/icons/visa.png'
import gopay from '../../assets/icons/gopay.png'
import paypal from '../../assets/icons/paypal.png'
import ovo from '../../assets/icons/ovo.png'
import dana from '../../assets/icons/dana.png'

const Payment = ({ navigation }) => {
     return (
          <ScrollView>
               <Navbar />
               <View
                    style={{
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         paddingHorizontal: 24,
                         paddingVertical: 40,
                         backgroundColor: 'white'
                    }}>
                    <Text
                         style={{
                              fontSize: 20,
                              color: '#AAAAAA'
                         }}>
                         Total Payment
                    </Text>
                    <Text
                         style={{
                              fontSize: 20,
                              color: 'black',
                         }}>
                         $30.00
                    </Text>
               </View>
               <Text
                    style={{
                         color: 'black',
                         fontSize: 18,
                         marginTop: 40,
                         paddingHorizontal: 24,
                         fontWeight: 'bold',
                         marginBottom: 30
                    }}>
                    Payment Method
               </Text>

               <View
                    style={{
                         backgroundColor: 'white',
                         padding: 20,
                         marginHorizontal: 24,
                         borderRadius: 20
                    }}>

                    <View
                         style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                         }}>
                         <View
                              style={{
                                   borderWidth: 2,
                                   borderRadius: 10,
                                   paddingVertical: 10,
                                   paddingHorizontal: 15,
                                   borderColor: '#DEDEDE'
                              }}>
                              <Image
                                   style={{
                                        height: 26,
                                        width: 65,
                                        resizeMode: 'contain',
                                   }} source={google_pay} />
                         </View>

                         <View style={styles.wrap}>
                              <Image
                                   style={{
                                        height: 26,
                                        width: 65,
                                        resizeMode: 'contain'
                                   }} source={visa} />
                         </View>


                         <View style={styles.wrap}>
                              <Image
                                   style={{
                                        height: 26,
                                        width: 65,
                                        resizeMode: 'contain'
                                   }} source={gopay} />
                         </View>
                    </View>

                    <View
                         style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 30,
                         }}>
                         <View style={styles.wrap}>
                              <Image
                                   style={{
                                        height: 26,
                                        width: 65,
                                        resizeMode: 'contain',
                                   }} source={paypal} />
                         </View>


                         <View style={styles.wrap}>
                              <Image
                                   style={{
                                        height: 20,
                                        width: 60,
                                        resizeMode: 'contain'
                                   }} source={ovo} />
                         </View>

                         <View style={styles.wrap}>
                              <Image
                                   style={{
                                        height: 26,
                                        width: 65,
                                        resizeMode: 'contain'
                                   }} source={dana} />
                         </View>
                    </View>
                    <Text
                         style={{
                              textAlign: "center",
                              fontSize: 14,
                              color: '#6E7191',
                              marginTop: 30,
                              marginBottom: 20
                         }}>
                         Pay via cash. <Text style={{ color: '#5F2EEA', fontWeight: 'bold' }}>See how it work</Text>
                    </Text>
               </View>

               <View>
                    <Text
                         style={{
                              color: 'black',
                              fontSize: 18,
                              marginTop: 40,
                              paddingHorizontal: 24,
                              fontWeight: 'bold',
                              marginBottom: 30
                         }}>
                         Personal Info
                    </Text>
                    <View
                         style={{
                              marginHorizontal: 24,
                              padding: 24.,
                              backgroundColor: 'white',
                              borderRadius: 20,
                         }}>
                         <Text style={{
                              marginBottom: 10,
                              fontSize: 16,
                              color: 'black'
                         }}>
                              Full Name
                         </Text>
                         <TextInput
                              style={{
                                   borderWidth: 2,
                                   borderRadius: 10,
                                   paddingHorizontal: 15,
                                   fontSize: 16

                              }}
                         />

                         <Text style={{
                              marginTop: 20,
                              marginBottom: 10,
                              fontSize: 16,
                              color: 'black'
                         }}>
                              Email
                         </Text>
                         <TextInput
                              style={{
                                   borderWidth: 2,
                                   borderRadius: 10,
                                   paddingHorizontal: 15,
                                   fontSize: 16
                              }}
                         />

                         <Text style={{
                              marginTop: 20,
                              marginBottom: 10,
                              fontSize: 16,
                              color: 'black'
                         }}>
                              Phone Number
                         </Text>
                         <TextInput
                              style={{
                                   borderWidth: 2,
                                   borderRadius: 10,
                                   paddingHorizontal: 15,
                                   fontSize: 16
                              }}
                         />
                    </View>

                    <Pressable 
                         style={{
                              backgroundColor: '#5F2EEA',
                              margin: 24,
                              marginHorizontal: 48,
                              borderRadius: 10,
                         }}>
                         <Text 
                              style={{
                                   textAlign: 'center',
                                   paddingVertical: 13,
                                   color: 'white',
                                   fontWeight: 'bold'
                              }}>
                              Pay your order
                         </Text>
                    </Pressable>
               </View>
               <Footer />
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     wrap: {
          borderWidth: 2,
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderColor: '#DEDEDE',
     }
})

export default Payment