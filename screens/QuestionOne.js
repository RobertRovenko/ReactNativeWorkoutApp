import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you have Ionicons installed

const GoalSelection = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("Frequency");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="arrow-back" style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.header}>What is your goal?</Text>

      <TouchableOpacity
        style={[styles.button]}
        onPress={() => handleButtonPress("Lose Weight")}
      >
        <Text style={styles.buttonText}>Lose Weight</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button]}
        onPress={() => handleButtonPress("Gain Weight")}
      >
        <Text style={styles.buttonText}>Gain Weight</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button]}
        onPress={() => handleButtonPress("Build Muscle")}
      >
        <Text style={styles.buttonText}>Build Muscle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress("Not Sure")}>
        <Text style={[styles.buttonText, { color: "#3498db", marginTop: 30 }]}>
          Not Sure
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831", // Set the background color here
  },
  header: {
    fontFamily: "RobotoBold",
    fontSize: 27,
    paddingBottom: 10,
    color: "#fff",
  },
  button: {
    width: "90%",
    padding: 60,
    margin: 10,
    borderRadius: 40,
    backgroundColor: "#393E46",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "RobotoBold",
    textAlign: "center",
    fontSize: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    position: "relative",
    left: 20,
    paddingBottom: 30,
  },
  backIcon: {
    fontSize: 32, // Adjust the font size to make it fat
    color: "#fff",
  },
});

export default GoalSelection;
