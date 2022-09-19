import React from "react"
import {View, ScrollView, Text} from 'react-native'
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
const MovieList = ({navigation})=>{
     return(
          <ScrollView>
               <Navbar />
               <View>
                    <Text style={{marginLeft: 24, marginTop: 32, fontSize: 16, fontWeight: 'bold'}}>
                         Movie List
                    </Text>
               </View>
               <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                         saya nahrowi
                    </Text>
               </View>
               <Footer />
          </ScrollView>
     )
}

export default MovieList;