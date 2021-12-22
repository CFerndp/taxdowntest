import React, { useState } from "react";
import { Alert, Share, StyleSheet, View } from "react-native";
import { Tab, Text, TabView, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Sharing from "expo-sharing";

import { Tax } from "../../types/types";

import mockedTaxes from "./mockRequest.json";
import ListTaxes from "./partials/ListTaxes";

const Dashboard: React.FC = () => {
  const [index, setIndex] = useState(0);

  const activeTaxes: Tax[] = mockedTaxes.taxes.filter((tax) => tax.active);
  const inactiveTaxes: Tax[] = mockedTaxes.taxes.filter((tax) => !tax.active);

  const onShare = async () => {
    try {
      await Share.share({
        message: "TaxDown!!!!",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "white",
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Activate"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "eye-outline", type: "ionicon", color: "white" }}
          />
          <Tab.Item
            title="Inactivate"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "eye-off-outline", type: "ionicon", color: "white" }}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={styles.tabviewItem}>
            <ListTaxes taxes={activeTaxes} />
          </TabView.Item>
          <TabView.Item style={styles.tabviewItem}>
            <ListTaxes taxes={inactiveTaxes} />
          </TabView.Item>
        </TabView>
      </View>
      <Button title={"Share this app :D"} onPress={onShare} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  scrollView: {
    flex: 2,
  },
  share: {
    flex: 1,
    height: 50,
  },
  tabviewItem: {
    width: "100%",
    height: "100%",
  },
});

export default Dashboard;
