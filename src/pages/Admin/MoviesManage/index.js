import React from "react"
import { StyleSheet, View, ScrollView, Text, Image, TextInput } from 'react-native'
import spider from '../../../assets/image/spider.png'

const MoviesManage = ({ navigation }) => {
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
                         style={styles.textInput} placeholder={'Type aja'} />

                    <Text style={styles.textTitle}>
                         Category
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'Type aja'} />

                    <Text style={styles.textTitle}>
                         Director
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'Type aja'} />

                    <Text style={styles.textTitle}>
                         Cast
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'Type aja'} />

                    <Text style={styles.textTitle}>
                         Release date
                    </Text>
                    <TextInput
                         style={styles.textInput} placeholder={'Type aja'} />

                    <Text style={styles.textTitle}>
                         Synopsis
                    </Text>
                    <TextInput
                         style={[styles.textArea]}  maxLength={40} placeholder={'Type aja'} />


               </View>

          </ScrollView>

     )
}

const styles = StyleSheet.create({
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