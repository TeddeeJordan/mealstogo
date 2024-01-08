import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";

type PlaceCardProps = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};

const PlaceCard = ({
  name,
  icon,
  photos,
  address,
  isOpenNow,
  rating,
  isClosedTemporarily,
}: PlaceCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Card.Content>
          <Text style={styles.title}>{name}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
  card: {
    padding: "5%",
  },
  cover: {
    width: "90%",
    alignSelf: "center",
  },
  title: {
    paddingTop: 16,
  },
});
