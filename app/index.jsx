import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push("/Navigation/MainNavigator"); // Adjust the route based on your structure
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <Button title="Go to Home" onPress={handleNavigateToHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
