import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const RegistroTareas = ({
  tarea,
  index,
  handelCambiar,
  handelEliminar,
}) => {
  return (
    <View style={styles.container}>
      <View style={tarea.realizado ? styles.cardSuccess : styles.cardAzul}>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Tarea: {index + 1}</Text>
          <Text style={styles.cardText}>{tarea.descripcion}</Text>
          <View style={styles.buttonContainer}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Pressable
                onPress={() => handelEliminar(tarea.id)}
                style={{
                  // PARTE DE BOTON
                  backgroundColor: "#d90429",
                  borderRadius: 10,
                  width: 230,
                  height: 35,
                  marginBottom: 15,

                }}
              >
                <Text style={{ color: "white", textAlign: "center",     fontFamily: 'Sitka Small Semibold', top:7 }}>
                  BORRAR
                </Text>
              </Pressable>
              <Pressable
                onPress={() => handelCambiar(tarea.id)}
                style={{
                  // PARTE DE BOTON
                  backgroundColor: "#3a86ff",
                  borderRadius: 10,
                  width: 270,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: "white", textAlign: "center",     fontFamily: 'Sitka Small Semibold', top:3 }}>
                  {tarea.realizado
                    ? "Marcar como inconclusa"
                    : "Marcar como terminada"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    top: 15
  },
  cardSuccess: {
    backgroundColor: "#38b000",
    borderRadius: 25,
    height:195,
  },
  cardAzul: {
    backgroundColor: "#0d3b66",
    borderRadius: 25,
    height: 195

  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 30,
    color: "white",
    fontFamily: 'Sitka Small Semibold',
    textAlign: 'center' //ALINIAR TEXTO
  },
  cardText: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
    fontFamily: 'Sitka Small Semibold',
    textAlign: 'center' //ALINIAR TEXTO
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});