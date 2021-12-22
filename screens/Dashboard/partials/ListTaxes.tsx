import React from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { Tax } from "../../../types/types";

interface ListTaxesProps {
  taxes: Tax[];
}

const ListTaxes: React.FC<ListTaxesProps> = ({ taxes }) => {
  return (
    <ScrollView>
      {taxes.map((tax, index) => {
        return (
          <ListItem key={index}>
            <ListItem.Content>
              <ListItem.Title>{`${tax.id}- ${tax.name}`}</ListItem.Title>
              <ListItem.Subtitle>{`year: ${tax.year}`}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default ListTaxes;
