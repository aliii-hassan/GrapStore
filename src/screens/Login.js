import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/login_foreground.png")}
          resizeMode="stretch"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.loginToYourStore1}>Login to your store</Text>

          <TextInput placeholder="Email" style={styles.email1}></TextInput>
          <TextInput
            placeholder="Password"
            style={styles.textInput1}
          ></TextInput>
          <Text style={styles.loremIpsum1}>Forgot your password?</Text>
          <View style={styles.login1Stack}>
          
            <Text style={styles.login1}>Login</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MainPage")}
              //on_press={()=>navigation.navigate("Login")}
              style={styles.button2}
            >
              <Text style={styles.login2}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.or1}>-or-</Text>
          <View style={styles.register1Stack}>
            <Text style={styles.register1}>Register</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("RegisterOnBoarding")}
              style={styles.button1}
            >
              <Text style={styles.register2}>Register</Text>
              
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Image
          source={require("../assets/images/grapp_logo_white.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:10,
    backgroundColor:'#ffff'
   
  },
  image: {
    top: 138,
    width: 611,
    height: 611,
    position: "absolute",
    left: 0,
  },
  image_imageStyle: {},
  loginToYourStore1: {
    fontFamily: "roboto-regular",
    color: "rgba(84,83,83,1)",
    marginTop: 43,
    marginLeft: 247,
    
  },
  email1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 310,
    marginTop: 47,
    marginLeft: 150
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 310,
    marginTop: 12,
    marginLeft: 150
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    marginLeft: 234
  },
  login1: {
    top: 16,
    left: 132,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  button2: {
    top: 0,
    left: 0,
    width: 310,
    height: 49,
    position: "absolute",
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 16
  },
  login2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 16,
    marginLeft: 137
  },
  login1Stack: {
    width: 310,
    height: 49,
    marginTop: 50,
    marginLeft: 150
  },
  or1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 17,
    marginLeft: 295
  },
  register1: {
    top: 16,
    left: 124,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  button1: {
    top: 0,
    left: 0,
    width: 310,
    height: 49,
    position: "absolute",
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 16
  },
  register2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 16,
    marginLeft: 129
  },
  register1Stack: {
    width: 310,
    height: 49,
    marginTop: 19,
    marginLeft: 150
  },
  image1: {
    top: 0,
    left: 191,
    width: 230,
    height: 158,
    position: "absolute",
    tintColor:"#417505"
  },
  imageStack: {
    width: 611,
    height: 749,
    marginTop: 63,
    marginLeft: -118
  }
});

export default Login;
