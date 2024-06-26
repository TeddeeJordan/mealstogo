import { StyleSheet } from "react-native";
import React from "react";
import {
  Searchbar as PaperSearchBar,
  SearchbarProps,
} from "react-native-paper";

const Searchbar = ({ placeholder, value }: SearchbarProps): JSX.Element => {
  return (
    <PaperSearchBar
      placeholder={placeholder}
      style={styles.searchbar}
      value={value}
    />
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchbar: {
    marginHorizontal: "5%",
  },
});
