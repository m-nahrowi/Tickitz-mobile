import { View, Image, ScrollView } from "react-native"
import React from "react"
import tikit from '../../assets/icons/Tickitz.png'
import kanan from '../../assets/icons/kanan.png'

const Navbar = ()=>{
   return(
      <View>
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
      </View>
   )
}

export default Navbar