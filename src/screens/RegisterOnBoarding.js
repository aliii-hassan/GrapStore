import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function RegisterOnBoarding(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Enter your mobile number</Text>
      <Text style={styles.mobileNumber}>Mobile Number</Text>
      <TextInput
        placeholder="03xxxxxxxxx"
        style={styles.placeholder}
      ></TextInput>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("RegisterSignup")}
        style={styles.button1}
      >
        <Text style={styles.proceed}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff',
    paddingLeft:10
    
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 105,
    marginLeft: 32
  },
  mobileNumber: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 31,
    marginLeft: 32
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 40,
    width: 307,
    marginTop: 18,
    marginLeft: 32
  },
  button1: {
    width: 310,
    height: 49,
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 16,
    marginTop: 22,
    marginLeft: 30
  },
  proceed: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 15,
    marginLeft: 130
  }
});

export default RegisterOnBoarding;
