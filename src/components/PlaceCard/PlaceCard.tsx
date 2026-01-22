import { Image, View } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import { styles, PlaceCardProps } from "./placeCardProps";
import Star from "assets/svg/starPath.svg";
import Open from "assets/svg/openPath.svg";
import { TPhotos } from "./mock/mocks.types";

function PlaceCard({
  name,
  icon,
  photos,
  address,
  isOpenNow,
  rating,
  isClosedTemporarily,
}: PlaceCardProps): React.JSX.Element {
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  const image =
    photos[0].htmlAttributions[0].length > 0
      ? photos[0].htmlAttributions[0]
      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  console.log("IMAGE", image);

  return (
    <View style={styles.container}>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{
            uri: image,
            height: photos[0].height,
            width: photos[0].width,
          }}
        />
        <Card.Content>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.ratingContainer}>
            {ratingArray.map((element, index) => (
              <Star key={index} height={20} width={20} />
              // <SvgXml key={index} xml={starPath} height={20} width={20} />
            ))}
            <View style={styles.openContainer}>
              {isClosedTemporarily && (
                <View>
                  <Text style={styles.closedText}>CLOSED TEMPORARILY</Text>
                </View>
              )}
              {isOpenNow && <Open height={20} width={20} />}
              <Image style={styles.icon} source={{ uri: icon }} />
            </View>
          </View>
          <Text style={styles.address}>{address}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

export default PlaceCard;
