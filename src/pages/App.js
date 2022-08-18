import React from "react"
import { Text, View } from "react-native"
import LandingPage from "./Home"
import Register from "./Auth/Register"
import Login from "./Auth/Login"
import Forgot from "./Auth/Forgot"
import SetPassword from "./Auth/Forgot/SetPassword"
import MovieDetail from "./Movies/MovieDetail"
const App = () => {
  return (
    <View>
      {/* <StylingReactLatihan /> */}
      {/* <LandingPage /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Forgot /> */}
      {/* <SetPassword /> */}
      <MovieDetail />
    </View>
  )
}

const StylingReactLatihan = () => {
  return (
    <View style={{ backgroundColor: '#ffffff' }}>
      <Text style={{
        marginLeft: 10,
        fontSize: 18,
        color: '#000000',
      }}>
        Styling component
      </Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 4,
          borderColor: 'yellow',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
    </View>
  )
}

export default App;