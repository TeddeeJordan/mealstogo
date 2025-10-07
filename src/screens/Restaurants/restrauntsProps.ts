import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  search: {
    height: theme.sizes.lg,
    justifyContent: "center",
  },
  list: {
    flexGrow: 0.93,
    backgroundColor: theme.colors.bg.primary,
    paddingTop: theme.spacing.md,
  },
  listItemContainer: {
    paddingVertical: theme.spacing.md,
  },
});
