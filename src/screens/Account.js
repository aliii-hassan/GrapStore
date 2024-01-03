import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

function Account(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button7}>
        <View style={styles.aboutRow}>
          <Text style={styles.about}>About</Text>
          <FontAwesome name="chevron-right" style={styles.icon9}  />
          {/* <FontAwesomeIcon
            name="chevron-right"
            style={styles.icon9}
          ></FontAwesomeIcon> */}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6}>
        <View style={styles.helpRow}>
          <Text style={styles.help}>Help</Text>
          <FontAwesome
            name="chevron-right"
            style={styles.icon8}
          ></FontAwesome>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5}>
        <View style={styles.walletRow}>
          <Text style={styles.wallet}>Wallet</Text>
          <FontAwesome
            name="chevron-right"
            style={styles.icon7}
          ></FontAwesome>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <View style={styles.promosRow}>
          <Text style={styles.promos}>Promos</Text>
          <FontAwesome
            name="chevron-right"
            style={styles.icon6}
          ></FontAwesome>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <View style={styles.paymentMethodsRow}>
          <Text style={styles.paymentMethods}>Payment Methods</Text>
          <FontAwesome
            name="chevron-right"
            style={styles.icon5}
          ></FontAwesome>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <View style={styles.profileRow}>
          <Text style={styles.profile}>Profile</Text>
          <FontAwesome
            name="chevron-right"
            style={styles.icon4}
          ></FontAwesome>
        </View>
      </TouchableOpacity>
      <View style={styles.icon1Row} onPress={() => props.navigation.navigate("MainPage")}>
      <FontAwesome name="chevron-left" style={styles.icon1} ></FontAwesome>
        {/* <EntypoIcon name="chevron-thin-left" style={styles.icon1}></EntypoIcon> */}
        <Text style={styles.text}>Account</Text>
      </View>
      <View style={styles.rect}>
        <View style={styles.icon2Row}>
          <FontAwesome name="user" style={styles.icon2}></FontAwesome>
          <View style={styles.abdulMoeidColumn}>
            <Text style={styles.abdulMoeid}>Abdul Moeid</Text>
            <Text style={styles.abdulmoeidGmailCom}>abdulmoeid@gmail.com</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.ordersRow}>
          <Text style={styles.orders}>Orders</Text>
          <FontAwesome
            name="chevron-right"
            style={styles.icon3}
          ></FontAwesome>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled")}
        style={styles.button8}
      >
        <Text style={styles.logOut}>Log out</Text>
      </TouchableOpacity>
      <View style={styles.button9Row}>
        <TouchableOpacity style={styles.button9}  onPress={() => props.navigation.navigate("MainPage")}>
        <FontAwesome name="shopping-bag" style={styles.icon10} />
          {/* <EntypoIcon name="shop" style={styles.icon10}></EntypoIcon> */}
          <Text style={styles.shop1}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button10} onPress={() => props.navigation.navigate("Schedule")}>
        <FontAwesome name="calendar-o" style={styles.icon11} />
          {/* <IoniconsIcon name="md-calendar" style={styles.icon11}></IoniconsIcon> */}
          <Text style={styles.schedule1}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button11} onPress={() => props.navigation.navigate("Cart")}>
        <FontAwesome name="cart-plus" style={styles.icon12} />
          {/* <IoniconsIcon name="ios-cart" style={styles.icon12}></IoniconsIcon> */}
          <Text style={styles.cart1}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button12}>
          <FontAwesome
            name="heart-o"
            style={styles.icon13}
          ></FontAwesome>
          <Text style={styles.favourite1}>Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button13} onPress={() => props.navigation.navigate("Account")}>
          <View style={styles.icon14Stack}>
          <FontAwesome name="user-o" style={styles.icon14} />
            {/* <MaterialCommunityIconsIcon
              name="account-outline"
              style={styles.icon14}
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
  button7: {
    width: 303,
    height: 37,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    overflow: "hidden",
    flexDirection: "row",
    marginTop: 463,
    marginLeft: 43
  },
  about: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  icon9: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 189
  },
  aboutRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 44,
    marginTop: 10
  },
  button6: {
    width: 303,
    height: 37,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    overflow: "hidden",
    flexDirection: "row",
    marginTop: -77,
    marginLeft: 43
  },
  help: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 195
  },
  helpRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 46,
    marginTop: 10
  },
  button5: {
    width: 303,
    height: 37,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    overflow: "hidden",
    flexDirection: "row",
    marginTop: -78,
    marginLeft: 43
  },
  wallet: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 185
  },
  walletRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 46,
    marginTop: 10
  },
  button4: {
    width: 303,
    height: 37,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    overflow: "hidden",
    flexDirection: "row",
    marginTop: -78,
    marginLeft: 43
  },
  promos: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 2
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 174
  },
  promosRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 47,
    marginTop: 8
  },
  button3: {
    width: 303,
    height: 37,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    overflow: "hidden",
    flexDirection: "row",
    marginTop: -80,
    marginLeft: 43
  },
  paymentMethods: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 115,
    marginTop: 1
  },
  paymentMethodsRow: {
    height: 21,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 46,
    marginTop: 9
  },
  button2: {
    width: 303,
    height: 37,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    overflow: "hidden",
    flexDirection: "row",
    marginTop: -80,
    marginLeft: 43
  },
  profile: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 179,
    marginTop: 2
  },
  profileRow: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 48,
    marginTop: 8
  },
  icon1: {
    color: "rgba(89,88,88,1)",
    fontSize: 30
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 15,
    marginTop: 8
  },
  icon1Row: {
    height: 33,
    flexDirection: "row",
    marginTop: -247,
    marginLeft: 38,
    marginRight: 240
  },
  rect: {
    width: 308,
    height: 74,
    marginTop: 24,
    marginLeft: 38
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 70,
    height: 70,
    width: 50
  },
  abdulMoeid: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginLeft: 1
  },
  abdulmoeidGmailCom: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 3
  },
  abdulMoeidColumn: {
    width: 152,
    marginLeft: 39,
    marginTop: 15,
    marginBottom: 13
  },
  icon2Row: {
    height: 70,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 5,
    marginRight: 62
  },
  button: {
    width: 303,
    height: 37,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    overflow: "hidden",
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 43
  },
  orders: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 1
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 180
  },
  ordersRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 46,
    marginTop: 10
  },
  button8: {
    width: 310,
    height: 49,
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 16,
    marginTop: 310,
    marginLeft: 32
  },
  logOut: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 18,
    marginLeft: 133
  },
  button9: {
    width: 25,
    height: 40
  },
  icon10: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  shop1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 1
  },
  button10: {
    width: 41,
    height: 40,
    marginLeft: 35
  },
  icon11: {
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
  button11: {
    width: 20,
    height: 40,
    marginLeft: 38
  },
  icon12: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  cart1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 3
  },
  button12: {
    width: 41,
    height: 38,
    marginLeft: 45,
    marginTop: 2
  },
  icon13: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 7
  },
  favourite1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10
  },
  button13: {
    width: 37,
    height: 39,
    marginLeft: 28
  },
  icon14: {
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
  icon14Stack: {
    width: 37,
    height: 39
  },
  button9Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 137,
    marginLeft: 38,
    marginRight: 27
  }
});

export default Account;
