import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export interface PlaceCardProps {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
  card: {
    padding: theme.spacing.md,
  },
  cover: {
    width: "90%",
    alignSelf: "center",
  },
  title: {
    paddingTop: theme.spacing.lg,
    fontFamily: theme.fonts.fontFamily.heading,
    fontSize: theme.fonts.fontSize.h5,
  },
  address: {
    fontFamily: theme.fonts.fontFamily.body,
    fontSize: theme.fonts.fontSize.caption,
  },
  ratingContainer: {
    flexDirection: "row",
    paddingVertical: theme.spacing.sm,
  },
  openContainer: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingRight: theme.spacing.md,
  },
  closedText: {
    color: "red",
    marginHorizontal: theme.spacing.md,
    fontFamily: theme.fonts.fontFamily.monospace,
  },
  icon: {
    width: 15,
    height: 15,
    marginLeft: theme.spacing.md,
  },
});
