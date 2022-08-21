
import { Image, ScrollView,Alert, StyleSheet, Text, View, TextInput, Pressable, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import avatar from '../../assets/image/nahrowiii.jpg'
import axios from 'axios'

const Item = ({ name, email, bidang, onPress, onDelete }) => {
     return (
          <View style={styles.Item}>
               <TouchableOpacity onPress={onPress}>
                    <Image style={{
                         marginRight: 20,
                         resizeMode: 'contain',
                         height: 100,
                         width: 100,
                         borderRadius: 100
                    }} source={{ uri: 
                    // `https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80` 
                    `https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`
                    }} />
               </TouchableOpacity>
               <View style={styles.desc}>
                    <Text style={styles.descName}>
                         {name}
                    </Text>
                    <Text>
                         {email}
                    </Text>
                    <Text>
                         {bidang}
                    </Text>
               </View>

               <TouchableOpacity onPress={onDelete}>
                    <Text style={styles.delete}>
                         X
                    </Text>
               </TouchableOpacity>
          </View>
     )
}

export default function LocalAPI({ navigation }) {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [bidang, setBidang] = useState("");
     const [users, setUsers] = useState([]);
     const [button, setButton] = useState(`Simpan`);
     const [selectedUser, setSelectedUser] = useState({})

     useEffect(() => {
          getData();
     }, [])

     const submit = () => {
          const data = {
               name,
               email,
               bidang,
          }
          console.log('data before send: ', data)
          // axios post
          if (button === "Simpan") {
               axios.post(`http://10.0.2.2:2022/users`, data)
                    .then(res => {
                         console.log(`res :`, res);
                         console.log(`res :`, res.data);
                         setName("");
                         setEmail("");
                         setBidang("");
                         getData();
                    }).catch(error => console.log(error))
          } else if (button === "Update") {
               axios.put(`http://10.0.2.2:2022/users/${selectedUser.id}`, data)
                    .then(res => {
                         console.log(`res update : `, res);
                         setName("");
                         setEmail("");
                         setBidang("");
                         getData()
                         setButton("Simpan")
                    })
          }
     }

     const getData = () => {
          axios.get(`http://10.0.2.2:2022/users/`)
               .then(res => {
                    console.log(`res`, res.data)
                    setUsers(res.data)
               })
     }

     const selectItem = (item) => {
          console.log(`selected item : `, item);
          setSelectedUser(item)
          setName(item.name);
          setEmail(item.email);
          setBidang(item.bidang);
          setButton("Update")
     }

     const deleteItem = (item) =>{
          console.log(item)
          axios.delete(`http://10.0.2.2:2022/users/${item.id}`)
          .then(res => {
               console.log(`res delete : `, res);
               getData();
          })
     }


     console.log("bismillah jalaaaNNNN")
     return (
          <ScrollView style={styles.container}>
               <Text style={styles.title}>LocalAPI</Text>
               <Text style={styles.data}>
                    Masukan data :
               </Text>
               <TextInput style={styles.input} placeholder='Nama Lengkap' value={name} onChangeText={(value) => setName(value)} />
               <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(value) => setEmail(value)} />
               <TextInput style={styles.input} placeholder='Bidang' value={bidang} onChangeText={(value) => setBidang(value)} />
               <Button title={button} onPress={submit} />
               {/* <Pressable style={styles.button}
                    onPress={submit}
                    >
                    <Text style={{
                         color: 'white'
                    }}>
                         Simpan
                    </Text>
               </Pressable> */}

               <View style={styles.line}></View>
               {users.map(user => {
                    return <Item 
                    key={user.id}
                    name={user.name} 
                    email={user.email} 
                    bidang={user.bidang} 
                    onPress={() => selectItem(user)} 
                    onDelete={() => Alert.alert(`Peringatan`, `Anda yakin akan menghapus user ini?`,
                    [
                         {
                              text: 'Tidak',
                              onPress: () => console.log(`button tidak`)
                         },
                         {
                              text: `Ya`,
                              onPress: () => deleteItem(user)
                         }
                    ]
                    )}
                    />
               })}
               {/* <Item /> */}

          </ScrollView>
     )
}

const styles = StyleSheet.create({
     desc: {
          flex: 1
     },
     descName: {
          fontSize: 16,
          fontWeight: 'bold'
     },
     delete: {
          color: 'red',
          fontSize: 16,
          fontWeight: 'bold'
     },
     container: {
          paddingHorizontal: 30
     },
     title: {
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 30
     },
     data: {
          textAlign: 'center',
          fontSize: 20
     },
     input: {
          marginVertical: 10,
          borderWidth: 1,
          borderRadius: 20,
          borderColor: 'blue'
     },
     button: {
          alignItems: 'center',
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 10
     },
     line: {
          marginVertical: 20,
          height: 2,
          backgroundColor: 'black'
     },

     Item: {
          flexDirection: 'row',
          alignItems: 'center',
     }

})