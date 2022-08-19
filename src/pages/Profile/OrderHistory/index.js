import { ScrollView, View, Text, Image, Pressable, TouchableOpacity } from "react-native"
import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
import React from "react"
import cine from '../../../assets/icons/cineOne.png'

const OrderHistory = ({ navigation }) => {
     return (
          <ScrollView>
               <Navbar />
               <View
                    style={{

                    }}>
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
                              backgroundColor: '#E5E5E5'
                         }}>
                         <View
                              style={{
                                   backgroundColor: 'white',
                                   borderRadius: 10,
                                   marginHorizontal: 34,
                                   padding: 32,
                                   marginTop: 40,
                                   marginBottom: 40
                              }}>
                              <Image
                                   style={{
                                        height: 24,
                                        width: 150,
                                        resizeMode: 'contain'
                                   }} source={cine} />
                              <Text
                                   style={{
                                        fontSize: 13,
                                        marginTop: 20
                                   }}>
                                   Tuesday, 07 July 2020 - 04:30pm
                              </Text>
                              <Text
                                   style={{
                                        fontSize: 18,
                                        fontWeight: '700',
                                        color: 'black',
                                        marginTop: 4,
                                        borderBottomWidth: 1,
                                        paddingBottom: 32,
                                        borderBottomColor: '#DEDEDE',
                                        letterSpacing: 0.75
                                   }}>
                                   Spider-Man: Homecoming
                              </Text>
                              <Pressable
                                   style={{
                                        marginTop: 24,
                                        backgroundColor: '#00BA88',
                                        borderRadius: 5
                                   }}>
                                   <Text
                                        style={{
                                             textAlign: 'center',
                                             color: 'white',
                                             paddingVertical: 10,
                                             fontSize: 14,
                                             fontWeight: '700',
                                             letterSpacing: 0.75
                                        }}>
                                        Ticket in active
                                   </Text>
                              </Pressable>
                         </View>
                    </View>
               </View>
               <Footer />
          </ScrollView>
     )
}

export default OrderHistory