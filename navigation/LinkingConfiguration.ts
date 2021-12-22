import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Login: {
        screens: {
          LoginScreen: "login",
        },
      },
      Dashboard: {
        screens: {
          Active: "active",
          Inactive: "inactive",
        },
      },
      NotFound: "*",
    },
  },
};

export default linking;
