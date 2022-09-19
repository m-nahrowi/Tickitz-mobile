import React, { useState, useEffect } from 'react'
import { Alert,StyleSheet, FlatList, ScrollView, View, Image, Text, TextInput, TouchableOpacity, Pressable } from "react-native"
// import logo from '../../assets/image/bg.png'
// import spider from '../../assets/image/spider.png'
// import lion from '../../assets/image/lion.png'
// import widow from '../../assets/image/widow.png'
// import witches from '../../assets/image/witches.png'
// import tikit from '../../assets/icons/Tickitz.png'
// import ebu from '../../assets/icons/ebu.png'
// import cine from '../../assets/icons/cineOne.png'
// import hiflix from '../../assets/icons/hiflix.png'
// import fb from '../../assets/icons/fb.png'
// import ig from '../../assets/iconss/ig.png'
import tw from '../../assets/icons/twiter.png'
import yt from '../../assets/icons/yt.png'
import kanan from '../../assets/icons/kanan.png'
import axios from 'axios'
import strange from '../../assets/image/strange.jpg'
import star from '../../assets/icons/star.png'
import disney from '../../assets/image/disney_2.jpg'
import marvel from '../../assets/image/marvel1.jpg'
import xx1 from '../../assets/image/xx1.png'
import cinepolis from '../../assets/image/Cinepolis.jpg'
import cinema from '../../assets/image/cinema.jpeg'
import messaging from '@react-native-firebase/messaging';

const styles = StyleSheet.create({
   titleText:
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
      navigation,
      duration,
      direction,
      casts
   }
) => {
   return (
      <ScrollView
         // horizontal={false} 
         style={{
            // marginHorizontal: 
            marginBottom: 50

         }}>
         <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetail')}>
            <View
               style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // padding: 16, 
                  borderWidth: 2,
                  // borderColor: '#ffd700', 
                  // borderRadius: 6,
                  // marginRight: 16, 
                  // alignSelf: 'center' 
               }}>
               <View>
                  <Image
                     style={{
                        flex: 1,
                        resizeMode: 'contain',
                        height: 200,
                        width: 200

                     }} source={strange} />
               </View>
               <View
                  style={{
                     flex: 3,
                     flexDirection: 'column',
                     alignContent: 'space-between'
                  }}>
                  <Text
                     style={{
                        fontSize: 16,
                        color: 'white'
                        // flex: 1
                     }}>
                     {title}
                  </Text>
                  <Text
                     style={{
                        marginTop: 5,
                        color: 'white'
                     }}>
                     {duration}
                  </Text>
                  <Text style={{
                     // flex: 1,
                     marginTop: 80,
                     color: '#A0A3BD',
                     fontSize: 12,
                     // textAlign: 'center'
                  }}>
                     {categories}
                  </Text>
                  <View style={{
                     // flex: 1,
                     borderWidth: 2,
                     //  borderColor: '#ffd700', 
                     //  paddingHorizontal: 40, 
                     //  paddingVertical: 5, 
                     //  marginTop: 24, 
                     //  borderRadius: 4 
                  }}>
                     {/* <Text style={{
                        marginTop: 30,
                        color: '#ffd700'
                     }}>
                        Detail
                     </Text> */}
                  </View>
                  <View style={{
                     marginTop: 5,
                     flexDirection: 'row'
                  }}>
                     <Image
                        style={{
                           resizeMode: 'contain',
                           height: 18,
                           width: 18
                        }} source={star} />
                     <Image
                        style={{
                           resizeMode: 'contain',
                           height: 18,
                           width: 18
                        }} source={star} />
                     <Image
                        style={{
                           resizeMode: 'contain',
                           height: 18,
                           width: 18
                        }} source={star} />
                     <Image
                        style={{
                           resizeMode: 'contain',
                           height: 18,
                           width: 18
                        }} source={star} />
                     <Image
                        style={{
                           resizeMode: 'contain',
                           height: 18,
                           width: 18
                        }} source={star} />
                  </View>

               </View>

            </View>
         </TouchableOpacity>
      </ScrollView>

   )
}

const LandingPage = ({ navigation }) => {
   useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
  
      return unsubscribe;
    }, []);


   const [movies, setMovies] = useState([]);
   useEffect(() => {
      getData();
   }, [])

   const getData = () => {
      axios.get(`http://10.0.2.2:2022/movies/`)
         .then(res => {
            console.log(`res : `, res.data)
            setMovies(res.data)
         })
   }



   return (
      <ScrollView style={{
         backgroundColor: '#010114'
      }}>

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


            {/* <Image source={tikit}
               style={{
                  height: 30,
                  width: 100,
                  resizeMode: 'cover'
               }}
            />
            <Image source={kanan} /> */}
         </View>

         <View style={{
            marginBottom: 50,
         }}>


            <TouchableOpacity
               onPress={() => navigation.navigate('Route')}>
               <View
                  style={{
                     // flexDirection: 'column',
                     // justifyContent: 'space-between',
                     // padding: 5,
                     // margin: 10,
                     // height:100,
                     // width: 100,
                     // borderWidth: 2,
                     // borderColor: '#ffd700',
                     // backgroundColor: '#ffd700'
                  }}>
                  <Text style={{
                     borderWidth: 2,
                     borderColor: '#ffd700',
                     backgroundColor: '#ffd700',
                     fontSize: 20,
                     color: 'black',
                     fontWeight: 'bold',
                     // margin: 30,
                     marginLeft: 25,
                     padding: 5,
                     borderRadius: 4,
                     width: 100,
                     textAlign: 'center'
                  }}>
                     Route
                  </Text>
               </View>
            </TouchableOpacity>




            <View style={{
               marginLeft: 24,
               marginBottom: 80,
               marginTop: 17,
            }}>
               <Text style={{
                  // color: '#ffd700',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '400'
               }}>
                  Nearest Cinema, Newest Movie,
               </Text>
               <Text style={{
                  fontSize: 32,
                  color: '#ffd700',
                  // color: 'white',
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
               <Image source={strange} style={{
                  // marginHorizontal: ,
                  width: '100%', height: 450,
                  resizeMode: 'contain'
               }} />
            </View>
            <View>
               <ScrollView
                  horizontal
                  style={{
                     marginHorizontal: 48,
                     flexDirection: 'row'
                  }}>
                  <Image
                     style={{
                        height: 100,
                        width: 100,
                        resizeMode: 'contain',
                        marginRight: 10,
                        borderWidth: 1,
                        // borderColor: 'red'
                     }} source={xx1} />
                  <Image
                     style={{
                        height: 100,
                        width: 100,
                        resizeMode: 'contain',
                        marginRight: 10
                     }} source={cinepolis} />
                  <Image
                     style={{
                        height: 100,
                        width: 100,
                        resizeMode: 'contain',
                        marginRight: 10
                     }} source={xx1} />
                  <Image
                     style={{
                        height: 100,
                        width: 100,
                        resizeMode: 'contain',
                        marginRight: 10
                     }} source={marvel} />

               </ScrollView>
            </View>
         </View>

         <ScrollView
            horizontal={true}
            style={{
               marginBottom: 30,
               marginHorizontal: 30,
               flexDirection: 'row',
               // justifyContent: 'space-evenly'
            }}>
            <Pressable
               style={{
                  flex: 1,
                  borderWidth: 2,
                  borderColor: '#ffd700',
                  padding: 5,
                  marginRight: 15,
                  borderRadius: 4
               }}>
               <Text
                  style={{
                     color: 'white',
                     fontWeight: 'bold',
                     fontSize: 16
                  }}>
                  Trending
               </Text>
            </Pressable>
            <Pressable
               style={{
                  flex: 1,
                  borderWidth: 2,
                  borderColor: '#ffd700',
                  padding: 5,
                  marginRight: 15,
                  borderRadius: 4
               }}>
               <Text
                  style={{
                     color: 'white',
                     fontWeight: 'bold',
                     fontSize: 16
                  }}>
                  Adventure
               </Text>
            </Pressable>
            <Pressable
               style={{
                  flex: 1,
                  borderWidth: 2,
                  borderColor: '#ffd700',
                  padding: 5,
                  marginRight: 15,
                  borderRadius: 4
               }}>
               <Text
                  style={{
                     color: 'white',
                     fontWeight: 'bold',
                     fontSize: 16
                  }}>
                  Humor
               </Text>
            </Pressable>
            <Pressable
               style={{
                  flex: 1,
                  borderWidth: 2,
                  borderColor: '#ffd700',
                  padding: 5,
                  marginRight: 15,
                  borderRadius: 4
               }}>
               <Text
                  style={{
                     color: 'white',
                     fontWeight: 'bold',
                     fontSize: 16
                  }}>
                  Fiction
               </Text>
            </Pressable>

         </ScrollView>

         {/* <View style={{
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


         </View> */}

         {/* <View>
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

         </View> */}

         <ScrollView horizontal={false} style={{ backgroundColor: 'black' }}>
            {movies.map(movie => {
               return <MovieList
                  title={movie.title}
                  cover={movie.cover}
                  categories={movie.categories}
                  duration={movie.duration}
                  direction={movie.direction}
                  casts={movie.casts}
                  navigation={navigation}
               />
            })}

         </ScrollView>

         <View style={{ marginTop: 72, }}>
            <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', marginTop: 48 }}>
               Be the vanguard of the
            </Text>
            <Text style={{ color: 'yellow', fontSize: 32, fontWeight: '700', textAlign: 'center', marginBottom: 42 }}>
               Moviegoers
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
               <TextInput placeholder='Type your email' style={{ width: 263, height: 46, borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 4, paddingHorizontal: 20, color: 'white' }} />


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


         {/* <View style={{ marginLeft: 24, width: 252 }}>
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
         </View> */}

         {/* <View style={{ marginLeft: 24 }}>
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
         </View> */}


      </ScrollView>
   )
}

export default LandingPage