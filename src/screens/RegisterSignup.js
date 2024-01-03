import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
//import EntypoIcon from "react-native-vector-icons/Entypo";
//import EntypoIcon from "react-native-vector-icons/MaterialCommunityIcons";

function RegisterSignup(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          {/* <EntypoIcon
            name="chevron-thin-left"
            style={styles.icon4}
          ></EntypoIcon> */}
          <FontAwesome name="chevron-left" style={styles.icon4}  />
          <Text style={styles.signUp1}>SignUp</Text>
          <Text style={styles.loremIpsum1}>Enter your details to continue</Text>
          <TextInput
            placeholder="First Name"
            style={styles.placeholder}
          ></TextInput>
          <TextInput
            placeholder="Last Name"
            style={styles.textInput}
          ></TextInput>
          <TextInput placeholder="Email" style={styles.textInput2}></TextInput>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            caretHidden={false}
            style={styles.textInput3}
          ></TextInput>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            caretHidden={false}
            style={styles.textInput4}
          ></TextInput>
          <Text style={styles.gender}>Gender</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
          </View>
          <View style={styles.placeholder6Stack}>
            <TextInput
              placeholder="placeholder"
              style={styles.placeholder6}
            ></TextInput>
             <FontAwesome name="calendar-o" style={styles.icon} />
            {/* <MaterialCommunityIconsIcon
              name="calendar-edit"
              style={styles.icon}
            ></MaterialCommunityIconsIcon> */}
          </View>
          <TextInput
            placeholder="Enter Address"
            secureTextEntry={true}
            caretHidden={false}
            style={styles.textInput5}
          ></TextInput>
          <Text style={styles.selectYourRegion}>Select your region</Text>
          <View style={styles.textInput6Stack}>
            <TextInput
              placeholder="E-11"
              secureTextEntry={true}
              caretHidden={false}
              style={styles.textInput6}
            ></TextInput>
            <FontAwesome name="chevron-down" style={styles.icon2} />
            {/* <EntypoIcon name="chevron-down" style={styles.icon2}></EntypoIcon> */}
          </View>
          <View style={styles.selectYourLocationStackStack}>
            <View style={styles.selectYourLocationStack}>
              <Text style={styles.selectYourLocation}>
                Select your location
              </Text>
              <TouchableOpacity style={styles.button3}></TouchableOpacity>
            </View>
            <FontAwesome name="map-marker" style={styles.icon3} />
            {/* <EntypoIcon name="location-pin" style={styles.icon3}></EntypoIcon> */}
          </View>
          <Text style={styles.loremIpsum2}>
            By continuing you agree to our Terms of service and{"\n"}privacy
            policy
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Untitled")}
            style={styles.button5}
          >
            <Text style={styles.signup}>Signup</Text>
          </TouchableOpacity>
          <View style={styles.loremIpsum3Row}>
            <Text style={styles.loremIpsum3}>Already have an account?</Text>
            <Text style={styles.login}>Login</Text>
          </View>
        </ScrollView>
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
  scrollArea: {
    width: 376,
    height: 819,
    marginTop: -7,
    marginLeft: -1
  },
  scrollArea_contentContainerStyle: {
    height: 819,
    width: 376
  },
  icon4: {
    color: "rgba(89,88,88,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 52,
    marginLeft: 39
  },
  signUp1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 18,
    marginLeft: 39
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    marginLeft: 39
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 306,
    marginTop: 29,
    marginLeft: 39
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 306,
    marginTop: 9,
    marginLeft: 39
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 306,
    marginTop: 8,
    marginLeft: 39
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 306,
    marginTop: 8,
    marginLeft: 39
  },
  textInput4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 306,
    marginTop: 9,
    marginLeft: 39
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  gender: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 39
  },
  button: {
    width: 23,
    height: 20,
    backgroundColor: "#E6E6E6"
  },
  button2: {
    width: 23,
    height: 20,
    backgroundColor: "#E6E6E6",
    marginLeft: 130
  },
  buttonRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 77,
    marginRight: 123
  },
  placeholder6: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 306
  },
  icon: {
    top: 3,
    left: 266,
    position: "absolute",
    color: "rgba(65,117,5,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  placeholder6Stack: {
    width: 306,
    height: 39,
    marginTop: 12,
    marginLeft: 39
  },
  textInput5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 306,
    marginTop: 5,
    marginLeft: 39
  },
  selectYourRegion: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 3,
    marginLeft: 39
  },
  textInput6: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 306
  },
  icon2: {
    top: 8,
    left: 270,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 23,
    width: 20
  },
  textInput6Stack: {
    width: 306,
    height: 39,
    marginLeft: 39
  },
  selectYourLocation: {
    top: 0,
    left: 13,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)"
  },
  button3: {
    top: 0,
    left: 0,
    width: 180,
    height: 28,
    position: "absolute"
  },
  selectYourLocationStack: {
    top: 4,
    left: 0,
    width: 180,
    height: 28,
    position: "absolute"
  },
  icon3: {
    top: 0,
    left: 136,
    position: "absolute",
    color: "rgba(65,117,5,1)",
    fontSize: 26,
    height: 28,
    width: 26,
    marginLeft:10
  },
  selectYourLocationStackStack: {
    width: 180,
    height: 32,
    marginLeft: 88
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    fontSize: 12,
    letterSpacing: 0,
    marginLeft: 36
  },
  button5: {
    width: 310,
    height: 49,
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 16,
    marginTop: 7,
    marginLeft: 33
  },
  signup: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 18,
    marginLeft: 130
  },
  textInput7: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(72,72,72,1)",
    width: 164,
    height: 17
  },
  login: {
    top: 0,
    left: 161,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(65,117,5,1)"
  },
  loremIpsum3Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 40,
    marginRight: 137
  },
  textInput7Stack: {
    width: 196,
    height: 17,
    marginTop: 17,
    marginLeft: 35
  }
});

export default RegisterSignup;
