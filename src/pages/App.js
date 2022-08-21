import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, View } from "react-native"
import LandingPage from "./Home"
import Register from "./Auth/Register"
import Login from "./Auth/Login"
import Forgot from "./Auth/Forgot"
import SetPassword from "./Auth/Forgot/SetPassword"
import MovieDetail from "./Movies/MovieDetail"
import ProfileDetail from "./Profile/Detail"
import OrderHistory from "./Profile/OrderHistory"

import Navbar from "../components/Navbar";
import Payment from "./Payment";
import MovieList from "./Movies/MovieList";
import TestCRUD from "./TestCRUD";
import AxiosApi from "./AxiosAPI";
import LocalAPI from "./LocalAPI";
import MoviesManage from "./Admin/MoviesManage";
import QrCode from "./QRcode";

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={LandingPage} options={{headerShown: false}} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="TestCRUD" component={TestCRUD} />
        <Stack.Screen name="AxiosApi" component={AxiosApi} />
        <Stack.Screen name="LocalAPI" component={LocalAPI} />
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="MoviesManage" component={MoviesManage} />
        <Stack.Screen name="Navbar" component={Navbar} />
      </Stack.Navigator>
    </NavigationContainer>


    // <View>
    //   {/* <StylingReactLatihan /> */}
    //   {/* <LandingPage /> */}
    //   {/* <Register /> */}
    //   {/* <Login /> */}
    //   {/* <Forgot /> */}
    //   {/* <SetPassword /> */}
    //   {/* <MovieDetail /> */}
    //   {/* <ProfileDetail /> */}
    //   <OrderHistory />
    // </View>
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