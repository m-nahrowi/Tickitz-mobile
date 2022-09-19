import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function Route({navigation}) {
  return (
    <ScrollView>
      <Text>Route</Text>
      <TouchableOpacity
                  onPress={() => navigation.navigate('ProfileDetail')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     Profile
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     Login
                  </Text>
               </TouchableOpacity>


               <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     Resgister
                  </Text>
               </TouchableOpacity>


               <TouchableOpacity
                  onPress={() => navigation.navigate('Forgot')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     Forgot
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={() => navigation.navigate('Payment')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     Payment
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={() => navigation.navigate('MovieList')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     Movie List
                  </Text>
               </TouchableOpacity>

               {/* uji CRUD */}
               <TouchableOpacity
                  onPress={() => navigation.navigate('TestCRUD')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     CRUD TEST
                  </Text>
               </TouchableOpacity>

               {/* axios */}
               <TouchableOpacity
                  onPress={() => navigation.navigate('AxiosApi')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     Axios Test
                  </Text>
               </TouchableOpacity>

               {/* Local API */}
               <TouchableOpacity
                  onPress={() => navigation.navigate('LocalAPI')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     Local API
                  </Text>
               </TouchableOpacity>

               {/* Movies manage */}
               <TouchableOpacity
                  onPress={() => navigation.navigate('MoviesManage')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     MoviesManage | Admin
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={() => navigation.navigate('QrCode')}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 30 }}>
                     Generate QrCode
                  </Text>
               </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})