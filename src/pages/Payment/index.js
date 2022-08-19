import React from "react"
import { View, Text, ScrollView, Image, StyleSheet } from "react-native"
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
                                        resizeMode: 'cover',
                                   }} source={google_pay} />
                         </View>

                         <View style={styles.wrap}>
                              <Image
                                   style={{
                                        height: 26,
                                        width: 65,
                                        resizeMode: 'cover'
                                   }} source={visa} />
                         </View>


                         <View style={styles.wrap}>
                              <Image
                                   style={{
                                        height: 26,
                                        width: 65,
                                        resizeMode: 'cover'
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
                                        resizeMode: 'cover',
                                   }} source={paypal} />
                         </View>


                         <View style={styles.wrap}>
                              <Image
                                   style={{
                                        height: 26,
                                        width: 65,
                                        resizeMode: 'cover'
                                   }} source={ovo} />
                         </View>

                         <View style={styles.wrap}>
                              <Image
                                   style={{
                                        height: 26,
                                        width: 65,
                                        resizeMode: 'cover'
                                   }} source={dana} />
                         </View>
                    </View>
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