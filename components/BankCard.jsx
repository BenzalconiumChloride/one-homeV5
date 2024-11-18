import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for icons
import "../global.css";
import { icons } from "../constants";
import { useRouter } from "expo-router"; // Import useRouter hook for navigation

const BankCard = ({ balance = 20000, accountNum = "1 2 3 4 5 6 7 8 9" }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true); // State to toggle visibility

  // Function to navigate to the QrReader pag
  return (
    <LinearGradient
      colors={["#022c5c", "#0052cc"]} // Gradient colors
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {/* Top Section */}
      <View className="flex flex-row">
        {/* Logo */}
        <Image source={icons.ohlogo} style={{ width: 50, height: 50 }} />
        <View className="ml-2 flex flex-col">
          <Text className="text-2xl text-white">My Wallet</Text>
          {/* Balance Row */}
          <View style={styles.balanceRow}>
            <Text style={styles.balance}>
              ₱{isBalanceVisible ? balance.toLocaleString() : "••••••"}
            </Text>
            <TouchableOpacity
              onPress={() => setIsBalanceVisible(!isBalanceVisible)} // Toggle visibility
              style={styles.eyeIconContainer}
            >
              <Image
                source={isBalanceVisible ? icons.eye : icons.eyeHide}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Account Info */}
      <View className="flex flex-col justify-between">
        <Text style={styles.accountNumber}>Account # </Text>
        <Text className="text-lg text-white font-bold">{accountNum}</Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cash In</Text>
        </TouchableOpacity>

        <View style={styles.scanArea}>
          <TouchableOpacity onPress={''}>

            <Image
              source={icons.scanner}
              style={{
                width: 25,
                height: 25,
                marginRight: 5,
                tintColor: "white",
              }}
            />
          </TouchableOpacity>

          <Text style={styles.scanText}>Scan to Pay</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 20,
    width: 300,
    alignSelf: "center",
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10, // Blur radius for shadow
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensures the eye icon is fixed at the end
    width: "90%",
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  eyeIconContainer: {
    marginLeft: 10, // Space between balance and icon
  },
  accountNumber: {
    color: "#ffffff",
    fontSize: 13,
    marginTop: 5,
  },
  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#e7e7f0",
    padding: 10,
    borderRadius: 10,
    width: 80,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#0052cc",
    fontWeight: "bold",
  },
  scanArea: {
    alignItems: "center",
  },
  scanText: {
    color: "#ffffff",
    fontSize: 12,
    marginTop: 5,
  },
});

export default BankCard;
