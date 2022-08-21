import { 
    ImageBackground, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View, 
    Image, 
    Pressable,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import tickitz from '../../../assets/icons/Tickitz.png'
import cover from '../../../assets/image/bg_cover.jpg'

const Login = ({ navigation }) => {
    return (
        <View>
            <ScrollView
                style={{
                    // flex: 1,
                    backfaceVisibility: 'white',
                    padding: 30,
                }}>
                <ImageBackground
                    style={{ flex: 1, justifyContent: 'center' }} source={tickitz} resizeMode="cover">
                    {/* <Text style={styles.text}>Inside</Text> */}
                </ImageBackground>
                <Image
                    style={{
                        height: 25,
                        width: 90,
                        resizeMode: 'cover'
                    }} source={tickitz} />
                <Text
                    style={{
                        fontSize: 26,
                        fontWeight: '600',
                        color: 'black',
                        marginTop: 40
                    }}>
                    Sign In
                </Text>
                <Text
                    style={{
                        marginTop: 12,
                        fontSize: 15,
                        color: '#8692A6'
                    }}>
                    Sign in with your data that you entered during
                    your registration
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        marginTop: 24,
                        color: 'black',
                        marginBottom: 12
                    }}>
                    Email
                </Text>
                <TextInput
                    placeholder='Write your email'
                    style={{
                        fontSize: 16,
                        paddingHorizontal: 20,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,

                    }} />
                <Text
                    style={{
                        fontSize: 16,
                        marginTop: 24,
                        color: 'black',
                        marginBottom: 12
                    }}>
                    Password
                </Text>
                <TextInput
                    placeholder='Write your password'
                    style={{
                        fontSize: 16,
                        paddingHorizontal: 20,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        marginBottom: 40
                    }} />

                <Pressable
                    style={{
                        backgroundColor: '#5F2EEA',
                        borderRadius: 8
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            padding: 15,
                            fontSize: 16,
                            fontWeight: '700'
                        }}>
                        Login
                    </Text>
                </Pressable>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 16,
                        marginTop: 24,
                        fontWeight: '500',
                        color: '#8692A6'

                    }}>
                    Forgot your password?
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Forgot')}>
                        <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 16, marginTop: 24,color: '#5F2EEA', textDecorationLine: 'underline' }}>
                            Reset now
                        </Text>
                    </TouchableOpacity>
                </Text>

                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: '500',
                        color: '#8692A6',
                    }}>
                    Don’t have an account?
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={{textAlign:'center',fontSize: 16,fontWeight: 'bold' ,color: '#5F2EEA', textDecorationLine: 'underline' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </Text>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Login