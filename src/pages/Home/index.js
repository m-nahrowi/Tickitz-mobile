import React, { useState, useEffect } from 'react'
import {StyleSheet, FlatList, ScrollView, View, Image, Text, TextInput, TouchableOpacity } from "react-native"
import logo from '../../assets/image/bg.png'
import spider from '../../assets/image/spider.png'
import lion from '../../assets/image/lion.png'
import widow from '../../assets/image/widow.png'
import witches from '../../assets/image/witches.png'
import tikit from '../../assets/icons/Tickitz.png'
import ebu from '../../assets/icons/ebu.png'
import cine from '../../assets/icons/cineOne.png'
import hiflix from '../../assets/icons/hiflix.png'
import fb from '../../assets/icons/fb.png'
import ig from '../../assets/icons/ig.png'
import tw from '../../assets/icons/twiter.png'
import yt from '../../assets/icons/yt.png'
import kanan from '../../assets/icons/kanan.png'
import axios from 'axios'

const styles = StyleSheet.create({
   titleText : 
   { 
    color: 'black',
    marginBottom: 4, 
    fontSize: 14, 
    fontWeight: '600', 
    textAlign: 'center', 
    marginTop: 12,
    width: 130
   }

})

const MovieList = (
   {
      cover,
      title,
      categories,
      navigation
   }
) => {
   return (
      <ScrollView horizontal={false} style={{ flexDirection: 'row', margin: 24}}>
         <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetail')}>
            <View style={{ padding: 16, borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 6, marginRight: 16, alignSelf: 'center' }}>
               <Image source={widow} width='120' height='185' />
               <Text style={styles.titleText}>
                  {title}
               </Text>
               <Text style={{ color: '#A0A3BD', fontSize: 11, textAlign: 'center' }}>
                  {categories}
               </Text>
               <View style={{ borderWidth: 2, borderColor: '#5F2EEA', paddingHorizontal: 40, paddingVertical: 5, marginTop: 24, borderRadius: 4 }}>
                  <Text style={{ color: '#5F2EEA' }}>
                     Detail
                  </Text>
               </View>
            </View>
         </TouchableOpacity>
      </ScrollView>

   )
}

const LandingPage = ({ navigation }) => {
   const [movies, setMovies] = useState([]);
   useEffect(() => {
      getData();
   })

   const getData = () => {
      axios.get(`http://10.0.2.2:2022/movies/`)
         .then(res => {
            console.log(`res : `, res.data)
            setMovies(res.data)
         })
   }



   return (
      <ScrollView>

         {/* <FlatList 
      data = {data}
      renderItem={renderItem}
      keyExtractor = {(item) => item.id}

      /> */}

         <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginVertical: 20,
            alignItems: "center"
         }}>


            <Image source={tikit}
               style={{
                  height: 30,
                  width: 100,
                  resizeMode: 'cover'
               }}
            />
            <Image source={kanan} />
         </View>

         <View style={{
            marginBottom: 167,
         }}>

            <View
               style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between'
               }}>
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
            </View>


            <View style={{
               marginLeft: 24,
               marginBottom: 64,
               marginTop: 57,
            }}>
               <Text style={{
                  color: '#A0A3BD',
                  fontSize: 14,
                  fontWeight: '400'
               }}>
                  Nearest Cinema, Newest Movie,
               </Text>
               <Text style={{
                  fontSize: 32,
                  color: '#5F2EEA',
                  fontWeight: '800',
                  // lineHeight: 18
               }}>
                  Find out now!
               </Text>
            </View>

            <View style={{
               alignItems: 'center',
               justifyContent: 'center'
            }}>
               <Image source={logo} style={{
                  width: 327, height: 327,

               }} />
            </View>
         </View>

         <View style={{
            backgroundColor: '#D6D8E7',
            // marginHorizontal: 24
         }}>
            <View style={{
               flexDirection: 'row',
               marginTop: 48,
               justifyContent: 'space-between',
               marginHorizontal: 24,
            }}>
               <Text style={{
                  color: '#752EEA',
                  fontSize: 18,
                  fontWeight: '700',
               }}>
                  Now Showing
               </Text>
               <Text style={{
                  color: '#752EEA',
                  fontSize: 14,
                  fontWeight: '600',
               }}>
                  view all
               </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 32, justifyContent: 'center' }}>
               <View style={{
                  flexDirection: 'row',
                  borderColor: 'white',
                  padding: 16,
                  borderWidth: 2,
                  justifyContent: 'center',
                  marginRight: 10,
                  marginBottom: 56


               }}>
                  <Image source={spider} style={{
                     width: 122,
                     height: 185,

                  }} />

               </View>
               <View style={{
                  flexDirection: 'row',
                  borderColor: 'white',
                  padding: 16,
                  borderWidth: 2,
                  justifyContent: 'center',
                  marginBottom: 56
               }}>
                  <Image source={lion} style={{
                     width: 122,
                     height: 185,

                  }} />

               </View>
            </View>


         </View>

         <View>
            <View style={{
               flexDirection: 'row',
               marginTop: 48,
               justifyContent: 'space-between',
               marginHorizontal: 24,
            }}>
               <Text style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: '700',
               }}>
                  Upcoming Movies
               </Text>
               <Text style={{
                  color: '#752EEA',
                  fontSize: 14,
                  fontWeight: '600',
               }}>
                  view all
               </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

               <View style={{ width: 127, height: 42, backgroundColor: '#5F2EEA', marginVertical: 24, borderRadius: 4 }}>
                  <Text style={{ color: 'white', paddingTop: 12, textAlign: 'center' }}>
                     September
                  </Text>
               </View>

               <View style={{ width: 127, height: 42, paddingTop: 10, marginHorizontal: 10, borderWidth: 2, borderColor: '#5F2EEA', marginVertical: 24, borderRadius: 4 }}>
                  <Text style={{ color: '#5F2EEA', textAlign: 'center' }}>
                     October
                  </Text>
               </View>
               <View style={{ width: 127, height: 42, paddingTop: 10, borderWidth: 2, borderColor: '#5F2EEA', marginVertical: 24, borderRadius: 4 }}>
                  <Text style={{ color: '#5F2EEA', textAlign: 'center' }}>
                     November
                  </Text>
               </View>
            </View>

         </View>


         {movies.map(movie => {
            return <MovieList 
               title={movie.title}
               cover={movie.cover}
               categories={movie.categories}
               navigation={navigation}
            />
         })}



         <View style={{ marginTop: 72, }}>
            <Text style={{ color: '#4E4B66', fontSize: 14, textAlign: 'center', marginTop: 48 }}>
               Be the vanguard of the
            </Text>
            <Text style={{ color: '#5F2EEA', fontSize: 32, fontWeight: '700', textAlign: 'center', marginBottom: 42 }}>
               Moviegoers
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
               <TextInput placeholder='Type your email' style={{ width: 263, height: 46, borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 4, paddingHorizontal: 20 }} />


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
               <View style={{ width: 263, height: 46, borderWidth: 2, borderRadius: 4, backgroundColor: '#5F2EEA', borderColor: '#5F2EEA', marginHorizontal: 58 }}>
                  <Text style={{ textAlign: 'center', color: 'white', marginTop: 10, fontSize: 14 }}>
                     Join Now
                  </Text>
               </View>
            </View>
            <Text style={{ fontWeight: '400', lineHeight: 22, letterSpacing: 0.75, textAlign: 'center', marginHorizontal: 77, marginVertical: 32, fontSize: 12 }}>
               By joining you as a Tickitz member,
               we will always send you the
               latest updates via email .
            </Text>
         </View>


         <View style={{ marginLeft: 24, width: 252 }}>
            <Image source={tikit}
               style={{
                  height: 40,
                  width: 120,
                  resizeMode: 'cover'
               }} />
            <Text style={{ letterSpacing: 0.75, color: '#6E7191', lineHeight: 24, fontSize: 14, textAlign: 'left', marginTop: 12 }}>
               Stop waiting in line. Buy tickets
               conveniently, watch movies quietly.
            </Text>
         </View>

         <View style={{ marginLeft: 24 }}>
            <Text style={{ fontWeight: '600', color: 'black', fontSize: 16, marginTop: 42, marginBottom: 12 }}>
               Explore
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
               <Text style={{ marginRight: 61 }}>
                  Home
               </Text>
               <Text>
                  List Movie
               </Text>
            </View>

            <Text style={{ fontWeight: '600', color: 'black', fontSize: 16, marginTop: 30, marginBottom: 16 }}>
               Our Sponsor
            </Text>
            <View style={{ flexDirection: 'row' }}>
               <Image source={ebu} style={{ marginRight: 24 }} />
               <Image source={cine} style={{ marginRight: 24, marginTop: 10 }} />
               <Image source={hiflix} width='100' height='50' />
            </View>

            <Text style={{ fontWeight: '600', color: 'black', fontSize: 16, marginTop: 30, marginBottom: 16 }}>
               Folllow us
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: "flex-start", marginBottom: 64 }}>
               <Image style={{ marginRight: 32 }} source={fb} />
               <Image style={{ marginRight: 32 }} source={ig} />
               <Image style={{ marginRight: 32 }} source={tw} />
               <Image source={yt} />
            </View>

            <Text style={{ marginBottom: 40 }}>
               © 2020 Tickitz. All Rights Reserved.
            </Text>
         </View>


      </ScrollView>
   )
}

export default LandingPage