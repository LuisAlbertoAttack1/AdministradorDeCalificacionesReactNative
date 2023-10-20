import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  const TituloDeProyecto = 'APLICACION MOVIL';
  const SubTituloDeProyecto = 'Administrador De Tareas'
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>{TituloDeProyecto}</Text>
        <Text style={styles.description}>{SubTituloDeProyecto}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "#", AQUI LE QUITE EL COLOR
    boxShadow: "0px 1px 0px ",
    height: "20%", 
    width: "100%",
    justifyContent: "center",
  },
  headerContent: {
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    fontFamily: 'Sitka Small Semibold'
  },
  description: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: 'Sitka Small Semibold'
  },
});