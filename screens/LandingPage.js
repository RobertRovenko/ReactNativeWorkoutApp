import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../img/landingimage.png")}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../img/icon.png")}
          // Adjust the filename and extension as per your image
        />
        <Text style={styles.title}></Text>
        <Text style={styles.description}>
          New research and information on exercise, diet and supplements.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("QuestionOne")} // Replace with the correct navigation route
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>

        <StatusBar style="light" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 5, 1, 0.6)", // Semi-transparent background overlay
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", // White text color
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 120,
    maxWidth: 300,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "RobotoBold",
    letterSpacing: 2, // Adjust the value as needed
    marginHorizontal: 10, // Adjust the horizontal margin as needed
  },
});

export default LandingPage;