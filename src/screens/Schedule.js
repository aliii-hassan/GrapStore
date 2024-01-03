import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
//import EntypoIcon from "react-native-vector-icons/Entypo";
//import IoniconsIcon from "react-native-vector-icons/Ionicons";
//import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
//import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

function Schedule(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1Row}>
        {/* <EntypoIcon name="chevron-thin-left" style={styles.icon1}></EntypoIcon> */}
        <FontAwesome name="chevron-left" style={styles.icon1}  />
        <Text style={styles.text}>Schedule</Text>
      </View>
      <Text style={styles.yourCartIsEmpty}>No schedule avaliable</Text>
      <Image
        source={require("../assets/images/empty_cart.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.button5Row}>
        <TouchableOpacity style={styles.button5} onPress={() => props.navigation.navigate("MainPage")}>
        <FontAwesome name="shopping-bag" style={styles.icon6} />
          {/* <EntypoIcon name="shop" style={styles.icon6}></EntypoIcon> */}
          <Text style={styles.shop1}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={() => props.navigation.navigate("Schedule")}>
        <FontAwesome name="calendar-o" style={styles.icon5} />
          {/* <IoniconsIcon name="md-calendar" style={styles.icon5}></IoniconsIcon> */}
          <Text style={styles.schedule1}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => props.navigation.navigate("Cart")}>
        <FontAwesome name="cart-plus" style={styles.icon4} />
          {/* <IoniconsIcon name="ios-cart" style={styles.icon4}></IoniconsIcon> */}
          <Text style={styles.cart1}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
        <FontAwesome name="heart-o" style={styles.icon3} />
          {/* <FontAwesomeIcon
            name="heart-o"
            style={styles.icon3}
          ></FontAwesomeIcon> */}
          <Text style={styles.favourite1}>Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("Account")}>
          <View style={styles.icon2Stack}>
          <FontAwesome name="user-o" style={styles.icon2} />
            {/* <MaterialCommunityIconsIcon
              name="account-outline"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon> */}
            <Text style={styles.account1}>Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon1: {
    color: "rgba(89,88,88,1)",
    fontSize: 30
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 17,
    marginTop: 2
  },
  icon1Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 38,
    marginRight: 260
  },
  yourCartIsEmpty: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 378,
    marginLeft: 130
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -251,
    alignSelf: "center"
    
  },
  button5: {
    width: 25,
    height: 40
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  shop1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 1
  },
  button4: {
    width: 41,
    height: 40,
    marginLeft: 35
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 12
  },
  schedule1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 5
  },
  button3: {
    width: 20,
    height: 40,
    marginLeft: 38
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  cart1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 3
  },
  button2: {
    width: 41,
    height: 38,
    marginLeft: 45,
    marginTop: 2
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 7
  },
  favourite1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10
  },
  button1: {
    width: 37,
    height: 39,
    marginLeft: 28
  },
  icon2: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  account1: {
    top: 26,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10
  },
  icon2Stack: {
    width: 37,
    height: 39
  },
  button5Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 313,
    marginLeft: 40,
    marginRight: 25
  }
});

export default Schedule;
