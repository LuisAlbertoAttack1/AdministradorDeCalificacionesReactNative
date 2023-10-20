import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";

export const FormularioTareas = ({
  handleInputChange,
  handleSubmit,
  descripcion,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Agregar tarea</Text>
          <View style={styles.separator} />
          <View style={styles.form}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleInputChange}
              value={descripcion}
            />
            <Pressable
              onPress={handleSubmit}
              style={{ backgroundColor: "#ffd60a", borderRadius: 15, width:210, height:40 }}
            >
              <Text style={{textAlign: "center",  fontFamily: 'Sitka Small Semibold',    fontSize: 23 }}>
                Agregar
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#ced4da",
    borderRadius: 20
    //CARD IZQUIERDA
    
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 30,
    fontFamily: 'Sitka Small Semibold',
    alignItems: "center",
    justifyContent: 'center',

  },
  separator: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 8,
  },
  label: {
    fontSize: 25,
    fontFamily: 'Sitka Small Semibold',
    marginBottom: 10,
    textAlign: 'center'
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
    height: 30,

  },
});