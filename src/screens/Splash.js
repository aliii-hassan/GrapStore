import React from 'react'

import { StyleSheet, Text, View,StatusBar,Image } from 'react-native'
import {Colors} from '../constants'


const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('Login')
    },8000)
    return (
        <View  style={{flex:3,flexDirection:"column",backgroundColor:'#ddd'}}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="green" />
            <Image source={require('../assets/images/grapp_splash.png')} style={{flex:1,alignSelf: 'stretch',width:'100%',backgroundColor:'#fff'}}  />    
            
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})