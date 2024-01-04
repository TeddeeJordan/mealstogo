import { StyleSheet } from "react-native";
import React from "react";
import { Searchbar as PaperSearchBar } from "react-native-paper";

type SearchBarProps = {
  placeholder: string;
  value: string;
};

const Searchbar = ({ placeholder, value }: SearchBarProps): JSX.Element => {
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
