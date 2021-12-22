import AppLoading from "expo-app-loading";
import { useAssets } from "expo-asset";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { Button, CheckBox, Image, Input, Text } from "react-native-elements";
import logo from "../../assets/images/logo.png";
import { StorageKeys } from "../../constants/StorageKeys";

import { RootTabScreenProps } from "../../types";
import { onCheckChange, onTextChange } from "../../utils/handlers";
import { getData, storeData } from "../../utils/storage";

export default function LoginScreen({
  navigation,
}: RootTabScreenProps<"Login">) {
  const [user, setUser] = useState("");
  const [pass, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const doAsynctask = async () => {
      const userStored = await getData<string>(StorageKeys.USERNAME);
      const passStored = await getData<string>(StorageKeys.PASSWORD); //TODO: Cypher it

      if (userStored && passStored && userStored !== "") {
        setUser(userStored);
        setPassword(passStored);
        setRemember(true);
      }
    };

    doAsynctask();
  }, []);

  const onLogin = () => {
    setLoading(true);

    if (remember) {
      storeData(StorageKeys.USERNAME, user);
      storeData(StorageKeys.PASSWORD, pass);
    }

    //Mock login request
    setTimeout(() => {
      setLoading(false);
      navigation.push("Dashboard");
    }, 1000);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logo}
        PlaceholderContent={<ActivityIndicator />}
      />
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
          loading={loading}
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
  logo: {
    width: 350,
    height: 50,
  },
});
