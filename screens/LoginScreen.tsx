import React, { Dispatch, useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import { StorageKeys } from "../constants/StorageKeys";

import { RootTabScreenProps } from "../types";
import { onCheckChange, onTextChange } from "../utils/handlers";
import { getData, storeData } from "../utils/storage";

export default function LoginScreen({
  navigation,
}: RootTabScreenProps<"Login">) {
  const [user, setUser] = useState("");
  const [pass, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const doAsynctask = async () => {
      console.log("pap2");

      const userStored = await getData<string>(StorageKeys.USERNAME);
      const passStored = await getData<string>(StorageKeys.PASSWORD);

      if (userStored && passStored && userStored !== "") {
        setUser(userStored);
        setPassword(passStored);
        setRemember(true);

        console.log(userStored);
      }
    };

    doAsynctask();
  }, []);

  const onLogin = () => {
    if (remember) {
      storeData(StorageKeys.USERNAME, user);
      storeData(StorageKeys.PASSWORD, pass);
    }
  };
  return (
    <View style={styles.container}>
      <Text h1>TaxDown</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Usuario"
          autoCompleteType="email"
          value={user}
          onChangeText={onTextChange(setUser)}
        />
        <Input
          placeholder="Contraseña"
          autoCompleteType="password"
          secureTextEntry
          value={pass}
          onChangeText={onTextChange(setPassword)}
        />
        <CheckBox
          title="Remember?"
          checked={remember}
          onPress={onCheckChange(remember, setRemember)}
        />
        <Button
          title="Acceder"
          onPress={onLogin}
          disabled={user === "" || pass === ""}
        />
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
    backgroundColor: "white",
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
