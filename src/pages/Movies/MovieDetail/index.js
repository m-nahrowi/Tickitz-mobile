import { View, Text, ScrollView, Image } from "react-native"
import React from "react"

// import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import spider from '../../../assets/image/spider.png'


const MovieDetail = () => {
   return (

      // <View>
      <ScrollView>
         {/* <View> */}
            <Navbar />
            <View
               style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  borderWidth: 2,
                  padding: 30,
                  marginHorizontal: 80,
                  marginTop: 40,
                  borderRadius: 10,
                  borderColor: '#DEDEDE'

               }}>
               <Image
                  style={{
                     alignSelf: 'center',
                     resizeMode: 'cover',
                     width: 160,
                     height: 245
                  }} source={spider} />
            </View>

            <Text
               style={{
                  marginTop: 32,
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: '600'

               }}>
               Spider-Man: Homecoming
            </Text>

            <Text
               style={{
                  textAlign: 'center',
                  marginTop: 8,
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#4E4B66'
               }}>
               Adventure, Action, Sci-Fi
            </Text>

            <View
               style={{
                  flexDirection: 'row',
                  marginHorizontal: 24,
                  marginTop: 32
               }}>
               <View
                  style={{
                     flex: 1
                  }}>
                  <Text
                     style={{
                        fontSize: 13,
                        color: '#8692A6',
                        fontWeight: '400',
                     }}>
                     Release date
                  </Text>
                  <Text
                     style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#121212'
                     }}>
                     June 28, 2017
                  </Text>
                  <Text
                     style={{
                        marginTop: 24,
                        color: '#8692A6',
                        fontWeight: '400',
                        fontSize: 13
                     }}>
                     Duration
                  </Text>
                  <Text
                     style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#121212'
                     }}>
                     2 hrs 13 min
                  </Text>
               </View>

               <View
                  style={{
                     flex: 1
                  }}>
                  <Text
                     style={{
                        fontSize: 13,
                        fontWeight: '400',
                        color: '#8692A6'
                     }}>
                     Directed by
                  </Text>
                  <Text
                     style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#121212'
                     }}>
                     Jon Watss
                  </Text>
                  <Text
                     style={{
                        marginTop: 24,
                        color: '#8692A6',
                        fontWeight: '400',
                        fontSize: 13
                     }}>
                     Casts
                  </Text>
                  <Text
                     style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#121212'
                     }}>
                     Tom Holland,
                     Robert Downey Jr.,
                     etc.
                  </Text>
               </View>
            </View>



            <Footer />
         {/* </View> */}
      </ScrollView>
      // </View>

   )
}
export default MovieDetail