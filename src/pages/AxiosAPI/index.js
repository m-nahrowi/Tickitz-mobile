import axios from "axios";
import { Headers } from "node-fetch";
import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Button, Pressable, Image } from 'react-native'

// dinamis
const Counter = () => {
     const [number, setNumber] = useState(0);

     return (
          <View>
               <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    {number}
               </Text>
               <Pressable
                    style={{
                         height: 30,
                         marginBottom: 20,
                         // width: '100%',
                         backgroundColor: 'red'
                    }} title="Tambah" onPress={() => setNumber(number + 1)}>
                    <Text style={{ textAlign: "center", color: 'white' }}>
                         Tambah
                    </Text>
               </Pressable>
               <Button title="Kurang" onPress={() => setNumber(number - 1)} />
          </View>
     )
}


const AxiosApi = ({ navigation }) => {
     console.log('jalan bismillah')

     const [dataUser, setDataUser] = useState({
          tittle:'',
          relaese_date:'',
          director:'',
          description:'',
          casts:'',
          categories:'',
     })

     const [dataJob, setDataJob] = useState({
          name: '',
          job: '',
     })


     const getData = () => {

          // fetch(
          //      'https://reqres.in/api/users/2'
          //      // `localhost:3000/api/v1/movies`
          // )
          //      .then((response) => response.json())
          //      .then((json) => {

          //           console.log(json);
          //           setDataUser(json.data)


          //      })

          axios.get(
               `https://reqres.in/api/users/3`
               // `{{API_DEV}}/movies`
               // `localhost:3000/api/v1/movies`
               )
          .then(result => {
               setDataUser(result.data.data)
          })
          .catch(err=> console.log(`err `, err));
     }

     const postData = () => {
          const dataForAPI = {
               name: "morpheus",
               job: "leader"
          }
          // fetch(`https://reqres.in/api/users`, {
          //      method: 'POST',
          //      headers: {
          //           'Content-Type': 'application/json'
          //      },
          //      body: JSON.stringify(dataForAPI)
          // })
          //      .then(response => response.json())
          //      .then(json => {
          //           console.log('post response: ', json)
          //           setDataJob(json)

          //      })

          axios.post(`https://reqres.in/api/users`, dataForAPI)
               .then(result => {
                    setDataJob(result.data)
               })
               .catch(err=> console.log(err, 'err'))

               
     }
     return (
          <ScrollView>
               <Text style={{ textAlign: 'center' }}>
                    succes Api
               </Text>

               {/* <Counter /> */}
               {/* get data */}
               <View>
                    <Text style={{ textAlign: 'center', marginTop: 50 }}>
                         Ambil data API
                    </Text>
                    <Button title="get data" onPress={getData} />
               </View>
               <Text>
                    Response get data
               </Text>
               <View>
                    <Image style={{
                         height: 50,
                         width: 100,
                    }} source={{ uri: dataUser.avatar }} />
                    <Text>
                         {`${dataUser.first_name} ${dataUser.last_name}`}
                         {/* {dataUser.tittle} */}
                    </Text>
                    <Text>
                         {dataUser.email}
                    </Text>
               </View>

               {/* psot data */}

               <View>
                    <Text style={{ textAlign: 'center', marginTop: 50 }}>
                         Post data API
                    </Text>
                    <Button title="post data" onPress={postData} />
               </View>
               <Text>
                    Response Post dataaaa
               </Text>
               <View>
                    <Text>
                         {dataJob.name}
                    </Text>
                    <Text>
                         {dataJob.job}
                    </Text>
               </View>


          </ScrollView>
     )
}

export default AxiosApi
