import * as React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function LoginScreen({
  navigation,
}: RootTabScreenProps<"Login">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Usuario" />
        <TextInput style={styles.input} placeholder="Contraseña" />
        <Button title="Acceder" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 1,
    width: "75%",
    maxHeight: "25%",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
