import React from 'react'
import { ScrollView, View, Image, Text, TextInput } from "react-native"
import ebu from '../../assets/icons/ebu.png'
import cine from '../../assets/icons/cineOne.png'
import hiflix from '../../assets/icons/hiflix.png'
import fb from '../../assets/icons/fb.png'
import ig from '../../assets/icons/ig.png'
import tw from '../../assets/icons/twiter.png'
import yt from '../../assets/icons/yt.png'


const Footer = () => {
   return (
      <View style={{ marginLeft: 24, marginTop: 10}}>
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
      </View>
   )
}

export default Footer