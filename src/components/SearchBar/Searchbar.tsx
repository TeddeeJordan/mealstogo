import React from "react";
import {
  Searchbar as PaperSearchBar,
  SearchbarProps,
} from "react-native-paper";
import { styles } from "./searchbarProps";

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
