import { StyleSheet } from "react-native";
import { theme } from "src/theme/theme";

export interface IErrorIndicator {
  error: string;
}

export const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
    fontSize: theme.sizes.md,
    textAlign: "center",
  },
});
