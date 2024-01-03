import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
//import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
// import EntypoIcon from "react-native-vector-icons/Entypo";
// import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

function MainPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.grapMarketStoreRow}>
        <Text style={styles.grapMarketStore}>GRAP Market Store</Text>
        <FontAwesome name="bell" style={styles.icon} />
{/* 
        <MaterialCommunityIconsIcon
          name="bell"
          style={styles.icon}
        ></MaterialCommunityIconsIcon> */}
      </View>
      <TextInput
        placeholder="Search"
        style={styles.placeholder}
      ></TextInput>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Image
            source={require("../assets/images/wallet_top_img.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </ScrollView>
      </View>
      <Text style={styles.shopByCategory}>Shop By Category</Text>
      <View style={styles.scrollArea2}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        ></ScrollView>
      </View>
      <Text style={styles.featuredProducts}>Featured Products</Text>
      <View style={styles.scrollArea3}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea3_contentContainerStyle}
        ></ScrollView>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}
        onPress={() => props.navigation.navigate("MainPage")}>
        <FontAwesome name="shopping-bag" style={styles.icon2} />
          {/* <EntypoIcon name="shop" style={styles.icon2}></EntypoIcon> */}
          <Text style={styles.shop10}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}
        onPress={() => props.navigation.navigate("Schedule")}>
        <FontAwesome name="calendar-o" style={styles.icon3} />
          {/* <IoniconsIcon name="md-calendar" style={styles.icon3}></IoniconsIcon> */}
          <Text style={styles.schedule}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}
        onPress={() => props.navigation.navigate("Cart")}
        >
        <FontAwesome name="cart-plus" style={styles.icon4} />
          {/* <IoniconsIcon name="ios-cart" style={styles.icon4}></IoniconsIcon> */}
          <Text style={styles.cart}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
        <FontAwesome name="heart-o" style={styles.icon5} />
          {/* <FontAwesomeIcon
            name="heart-o"
            style={styles.icon5}
          ></FontAwesomeIcon> */}
          <Text style={styles.favourite}>Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button5} onPress={() => props.navigation.navigate("Account")}>
          <View style={styles.icon6Stack}>
          <FontAwesome name="user-o" style={styles.icon6} />
            {/* <MaterialCommunityIconsIcon
              name="account-outline"
              style={styles.icon6}
            ></MaterialCommunityIconsIcon> */}
            <Text style={styles.account}>Account</Text>
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
  grapMarketStore: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 7
  },
  icon: {
    color: "#F8AB1C",
    fontSize: 25,
    marginLeft: 166
  },
  grapMarketStoreRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 48,
    marginLeft: 24,
    marginRight: 21
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 32,
    width: 330,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(207,206,206,1)",
    marginTop: 17,
    marginLeft: 24
  },
  scrollArea: {
    width: 330,
    height: 137,
    backgroundColor: "#E6E6E6",
    marginTop: 12,
    marginLeft: 24
  },
  scrollArea_contentContainerStyle: {
    width: 658,
    height: 137
  },
  image: {
    width: 926,
    height: 137,
    marginLeft: -268
  },
  shopByCategory: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 15,
    marginLeft: 26
  },
  scrollArea2: {
    width: 330,
    height: 69,
    backgroundColor: "#E6E6E6",
    marginTop: 9,
    marginLeft: 24
  },
  scrollArea2_contentContainerStyle: {
    width: 330,
    height: 69
  },
  featuredProducts: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 17,
    marginLeft: 24
  },
  scrollArea3: {
    width: 330,
    height: 310,
    backgroundColor: "#E6E6E6",
    marginTop: 11,
    marginLeft: 24
  },
  scrollArea3_contentContainerStyle: {
    width: 330,
    height: 310
  },
  button: {
    width: 25,
    height: 40
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  shop10: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 1
  },
  button2: {
    width: 41,
    height: 40,
    marginLeft: 35
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 12
  },
  schedule: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft:5
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
  cart: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 3
  },
  button4: {
    width: 41,
    height: 38,
    marginLeft: 45,
    marginTop: 2
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 7
  },
  favourite: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10
  },
  button5: {
    width: 37,
    height: 39,
    marginLeft: 28
  },
  icon6: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  account: {
    top: 26,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10
  },
  icon6Stack: {
    width: 37,
    height: 39
  },
  buttonRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 40,
    marginRight: 25
  }
});

export default MainPage;
