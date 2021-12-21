import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function LoginScreen({
  navigation,
}: RootTabScreenProps<"Login">) {
  return (
    <View style={styles.container}>
      <Text h1>TaxDown</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Usuario" autoCompleteType="email" />
        <Input
          placeholder="Contraseña"
          autoCompleteType="password"
          secureTextEntry
        />
        <Button title="Acceder" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    width: "75%",
    maxHeight: "25%",
    marginTop: 20,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
