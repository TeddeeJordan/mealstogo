import { StyleSheet, StatusBar } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flexGrow: 0.05,
    justifyContent: "center",
    paddingLeft: theme.spacing.lg,
  },
  list: {
    flexGrow: 0.95,
    backgroundColor: theme.colors.bg.primary,
    paddingTop: theme.spacing.md,
  },
  listItemContainer: {
    paddingVertical: theme.spacing.md,
  },
});
