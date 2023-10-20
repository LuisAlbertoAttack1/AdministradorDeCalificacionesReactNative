import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Footer = ({ porcentaje }) => {
  if (isNaN(porcentaje) || porcentaje <= 0) {
    return null;
  }

  return (
    <View style={styles.progressContainer}>
      <View
        style={{
          ...styles.progressBar,
          width: `${porcentaje * 100}%`,
        }}
      >
        <Text style={styles.progressBarText}>
          {Math.floor(porcentaje * 100)}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  progressBar: {
    backgroundColor: "#7c3626", // BARRA DE COLOR
    height: 25, 
    justifyContent: "center",
    borderRadius: "50px"
  },
  progressBarText: {
    color: "white", // Color del texto
    textAlign: "center", //Centrar texto
  },
});