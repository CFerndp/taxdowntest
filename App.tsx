import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import { useColorScheme } from "react-native-appearance";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import theme from "./theme/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  let colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme} useDark={colorScheme === "dark"}>
          <Navigation />
          <StatusBar />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
