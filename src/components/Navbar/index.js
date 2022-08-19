import { View, Image, ScrollView, TouchableOpacity } from "react-native"
import React from "react"
import tikit from '../../assets/icons/Tickitz.png'
import kanan from '../../assets/icons/kanan.png'

const Navbar = ({ navigation }) => {
   return (
      <View>

         <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginVertical: 20,
            alignItems: "center"
         }}>
            {/* <TouchableOpacity
               onPress={() => navigation.navigate('Home')}> */}
               <Image source={tikit}
                  style={{
                     height: 30,
                     width: 100,
                     resizeMode: 'cover'

                  }} />
            {/* </TouchableOpacity> */}

            <Image source={kanan} />
         </View>
      </View>
   )
}

export default Navbar