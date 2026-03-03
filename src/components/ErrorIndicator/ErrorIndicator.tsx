import React from "react";
import { styles, IErrorIndicator } from "./errorIndicatorProps";
import { Text } from "react-native-paper";

export default function ErrorIndicator({ error }: IErrorIndicator) {
  return <Text style={styles.errorText}>{error}</Text>;
}
