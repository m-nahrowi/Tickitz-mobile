import { ScrollView, View, Text } from "react-native"
import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
import React from "react"

const OrderHistory = () => {
     return (
          <ScrollView>
               <Navbar />
               <View>
               <View
                    style={{
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         padding: 48
                    }}>
                    <Text
                         style={{
                              fontSize: 16,
                              color: 'black'
                         }}>
                         Detail Account
                    </Text>
                    <Text
                         style={{
                              fontSize: 16
                         }}>
                         Order History
                    </Text>
               </View>
               </View>
               <Footer />
          </ScrollView>
     )
}

export default OrderHistory