import {
   View,
   Text,
   ScrollView,
   Image,
   Pressable,
   StyleSheet
} from "react-native"
import React, { useEffect, useState } from "react"
import axios from 'axios'

// import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import spider from '../../../assets/image/spider.png'
import ebu from '../../../assets/icons/ebu.png'

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderWidth: 2,
      padding: 30,
      marginHorizontal: 80,
      marginTop: 40,
      borderRadius: 10,
      borderColor: '#DEDEDE'
   }
})

const MovieOutput = (
   {
      title,
      cover,
      release_date,
      director,
      description,
      casts,
      categories,
   }
) => {
   return (
      <ScrollView>
         <View
            style={styles.container}>
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
            {title}
         </Text>

         <Text
            style={{
               textAlign: 'center',
               marginTop: 8,
               fontSize: 16,
               fontWeight: '400',
               color: '#4E4B66'
            }}>
            {categories}
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
                  {release_date}
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
                  {director}
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
                  {casts}
               </Text>


            </View>

         </View>

         <View
            style={{
               marginHorizontal: 20,
               marginTop: 50,
               borderBottomColor: 'black',
               borderBottomWidth: 1,
            }}>

         </View>
         <View style={{
            marginHorizontal: 24,
         }}>
            <Text
               style={{
                  color: 'black',
                  marginTop: 24,

                  fontWeight: '600',
                  fontSize: 16,

               }}>
               Synopsis
            </Text>

            <Text
               style={{
                  marginTop: 16,
                  textAlign: 'justify'
               }}>
               {description}
            </Text>

         </View>
      </ScrollView>
   )
}


const MovieDetail = () => {

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

      // <View>
      <ScrollView>
         {/* <View> */}
         <Navbar />

         {
            movies.map(movie => {
               return <MovieOutput
                  title={movie.title}
                  cover={movie.cover}
                  release_date={movie.release_date}
                  director={movie.director}
                  description={movie.description}
                  casts={movie.casts}
                  categories={movie.categories}

               />
            })
         }


         <View
            style={{
               backgroundColor: '#F5F6F8',
               marginTop: 20
            }}>
            <Text
               style={{
                  marginTop: 40,
                  textAlign: 'center',
                  fontWeight: '700',
                  color: 'black',
                  fontSize: 18
               }}>
               Showtimes and Tickets
            </Text>
            <View
               style={{
                  flex: 1,
                  // marginHorizontal: 30,
                  backgroundColor: 'green',
                  width: `100%`,
                  height: 50,
               }}>
            </View>
            <View
               style={{
                  flex: 1,
                  // marginHorizontal: 30,
                  backgroundColor: 'green',
                  width: `100%`,
                  height: 50,
               }}>
            </View>


            <View
               style={{
                  marginHorizontal: 24,
                  backgroundColor: 'white',
                  marginTop: 40,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: 'gray'
               }}>
               <Image
                  style={{
                     marginTop: 24,
                     alignSelf: 'center',
                     width: 84,
                     height: 31,
                     resizeMode: 'cover'
                  }} source={ebu} />

               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'center'
                  }}>
                  <Text
                     style={{
                        // backgroundColor: 'green',
                        marginHorizontal: 20,
                        width: 200,
                        marginTop: 8,
                        marginBottom: 23,
                        fontSize: 13,
                        textAlign: 'center'
                     }}>
                     Whatever street No.12, South Purwokerto
                  </Text>
               </View>

               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     borderTopWidth: 1,
                     borderColor: '#DEDEDE',
                     marginHorizontal: 32
                  }}>
                  <Text
                     style={{
                        fontSize: 12,
                        fontWeight: '400',
                        marginTop: 16,
                        color: 'black'
                     }}>
                     08:30 am
                  </Text>
                  <Text
                     style={{
                        fontSize: 12,
                        fontWeight: '400',
                        marginTop: 16,
                        color: 'black'
                     }}>
                     08:30 am
                  </Text>
                  <Text
                     style={{
                        fontSize: 12,
                        fontWeight: '400',
                        marginTop: 16,
                        color: 'black'
                     }}>
                     08:30 am
                  </Text>
                  <Text
                     style={{
                        fontSize: 12,
                        fontWeight: '400',
                        marginTop: 16,
                        color: 'black'
                     }}>
                     08:30 am
                  </Text>
               </View>

               <View
                  style={{
                     paddingHorizontal: 32,
                     paddingVertical: 25,
                     flexDirection: 'row',
                     justifyContent: 'space-between'
                  }}>
                  <Text>
                     Price
                  </Text>
                  <Text>
                     $10.00/seat
                  </Text>
               </View>
               <Pressable
                  style={{
                     marginHorizontal: 28,
                     marginBottom: 32,
                     borderRadius: 4,
                     marginTop: 25,
                     backgroundColor: '#5F2EEA'
                  }}>
                  <Text style={{ textAlign: 'center', color: 'white', paddingVertical: 10, fontSize: 14, fontWeight: '700' }}> Book now </Text>
               </Pressable>
            </View>

            <Text
               style={{
                  marginTop: 48,
                  textAlign: 'center',
                  color: '#5F2EEA',
                  fontWeight: '700',
                  fontSize: 14,
                  marginBottom: 40
               }}>
               view more
            </Text>
         </View>


         <Footer />
         {/* </View> */}
      </ScrollView>
      // </View>

   )
}
export default MovieDetail