import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
