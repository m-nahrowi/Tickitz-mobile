import React, { useState, useEffect } from "react"
import { StyleSheet, View, ScrollView, Text, Image, TextInput, Alert, TouchableOpacity, Button } from 'react-native'
import spider from '../../../assets/image/spider.png'
import dr from '../../../assets/image/strange.jpg'
import axios from 'axios'

const OutputMovies = ({
     title,
     cover,
     release_date,
     director,
     description,
     casts,
     categories,
     onPress,
     onDelete

}) => {
     return (
          <View style={{
               padding: 32
          }}>
               <TouchableOpacity onPress={onPress}>
                    <Text style={styles.output}>
                         {`Tittle Movie : ${title}`}
                    </Text>
                    {/* <Text>
                         {cover}
                    </Text> */}
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
                              }} 
                              source={dr}
                              // source={{
                                   // uri: `${cover}`

                                   // uri: `https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`
                              // }} 

                              />
                    </View>
                    <Text style={styles.output}>
                         {`Release Date : ${release_date}`}
                    </Text>
                    <Text style={styles.output}>
                         {`Director : ${director}`}
                    </Text>
                    <Text style={styles.output}>
                         {`Synopsis : ${description}`}
                    </Text>
                    <Text style={styles.output}>
                         {`Cast : ${casts}`}
                    </Text>
                    <Text style={styles.output}>
                         {`Categories : ${categories}`}
                    </Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={onDelete}>
                    <Text style={{ backgroundColor: 'red', color: 'white', fontSize: 18, textAlign: 'center', paddingVertical: 10, marginTop: 10 }}>
                         Hapus data
                    </Text>
               </TouchableOpacity>
          </View>
     )
}

const MoviesManage = ({ navigation }) => {
     const [title, setTitle] = useState("");
     const [cover, setCover] = useState("");
     const [release_date, setReleaseDate] = useState("");
     const [director, setDirector] = useState("");
     const [description, setDescription] = useState("");
     const [casts, setCasts] = useState("");
     const [categories, setCategories] = useState("");
     const [movies, setMovies] = useState([]);
     const [button, setButton] = useState(`Simpan`);
     const [selectedMovie, setSelectedMovie] = useState({})


     useEffect(() => {
          getData();
          console.log(`ini movies `,movies)
     }, [])

     const submit = () => {
          const data = {
               title,
               cover,
               release_date,
               director,
               description,
               casts,
               categories,
          }
          console.log(`data before send : `, data)

          if (button === `Simpan`) {
               axios.post(
                    // `http://10.0.2.2:2022/movies`, data
                    `http://10.0.2.2:2022/movies`, data

               )
                    .then(res => {
                         console.log(`res : `, res);
                         console.log(`res : `, res.data);
                         setTitle("");
                         setCover("");
                         setReleaseDate("");
                         setDirector("");
                         setDescription("");
                         setCasts("");
                         setCategories("");
                         getData();
                    }).catch(error => console.log(error))
          } else if (button === `Update`) {
               axios.put(`http://10.0.2.2:2022/movies/${selectedMovie.id}`, data)
                    .then(res => {
                         console.log(`res update : `, res);
                         setTitle("");
                         setCover("");
                         setReleaseDate("");
                         setDirector("");
                         setDescription("");
                         setCasts("");
                         setCategories("");
                         getData();
                         setButton(`Simpan`);
                    })
          }
     }

     const getData = () => {
          axios.get(`http://10.0.2.2:2022/movies/`)
               .then(res => {
                    console.log(`res : `, res.data)
                    setMovies(res.data)
               })
     }

     const selectItem = (item) => {
          console.log(`selected item : `, item);
          setSelectedMovie(item);
          setTitle(item.title);
          setCover(item.cover);
          setReleaseDate(item.release_date);
          setDirector(item.director);
          setDescription(item.description);
          setCasts(item.casts);
          setCategories(item.categories);
          setButton("Update");

     }

     const deleteItem = (item) => {
          console.log(item)
          axios.delete(`http://10.0.2.2:2022/movies/${item.id}`)
               .then(res => {
                    console.log(`res delete : `, res);
                    getData();
               })
     }

     console.log(`bismillah jalan weyyyyy`)

     return (
          <ScrollView>
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

               <View style={styles.container}>

                    <Text style={styles.textTitle}>
                         Nama Movie
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'type nama title movie'}
                         value={title}
                         onChangeText={(value) => setTitle(value)}
                    />

                    <Text style={styles.textTitle}>
                         Cover
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'type cover'}
                         value={cover}
                         onChangeText={(value) => setCover(value)}
                    />

                    <Text style={styles.textTitle}>
                         Category
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'type category'}
                         value={categories}
                         onChangeText={(value) => setCategories(value)}
                    />

                    <Text style={styles.textTitle}>
                         Director
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'type director'}
                         value={director}
                         onChangeText={(value) => setCategories(value)}
                    />

                    <Text style={styles.textTitle}>
                         Cast
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'type cast'}
                         value={casts}
                         onChangeText={(value) => setCasts(value)}
                    />

                    <Text style={styles.textTitle}>
                         Release date
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'Type relese date'}

                         value={release_date}
                         onChangeText={(value) => setReleaseDate(value)}
                    />

                    <Text style={styles.textTitle}>
                         Synopsis
                    </Text>
                    <TextInput
                         style={[styles.textArea]} maxLength={40} placeholder={'synopsis'}

                         value={description}
                         onChangeText={(value) => setDescription(value)}
                    />

                    <Button title={button} onPress={submit} />


               </View>



               <View style={{
                    marginVertical: 50
               }}>
                    <Text
                         style={{
                              textAlign: 'center',
                              fontSize: 24,
                              color: `black`
                         }}>
                         OUTPUT Movies
                    </Text>

               </View>
               {movies.map(movie => {
                    return <OutputMovies
                         key={movie.id}
                         title={movie.title}
                         cover={movie.cover}
                         release_date={movie.release_date}
                         director={movie.director}
                         description={movie.description}
                         casts={movie.casts}
                         categories={movie.categories}
                         onPress={() => selectItem(movie)}
                         onDelete={() => Alert.alert(`Peringatan`, `Anda yakin akan menghapus movie ini?`,
                              [
                                   {
                                        text: 'Tidak',
                                        onPress: () => console.log(`button tidak`)
                                   },
                                   {
                                        text: `Ya`,
                                        onPress: () => deleteItem(movie)
                                   }
                              ]
                         )}


                    />
               })}


          </ScrollView>

     )
}

const styles = StyleSheet.create({
     output: {
          fontSize: 18,
          color: 'black',
          marginVertical: 10
     },
     container: {
          padding: 40
     },
     textTitle: {
          fontSize: 18,
          fontWeight: 'bold',

     },
     textInput: {
          marginTop: 10,
          marginBottom: 20,
          paddingHorizontal: 10,
          fontSize: 18,
          borderWidth: 1,
          borderRadius: 10

     },
     textArea: {
          height: 100,
          paddingVertical: 0,
          marginTop: 10,
          marginBottom: 20,
          fontSize: 18,
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 20
     }

})

export default MoviesManage