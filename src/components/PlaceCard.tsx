import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import { theme } from "../theme/theme";
import { SvgXml } from "react-native-svg";

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
  const ratingArray = Array.from(new Array(Math.floor(rating)));

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
          <View style={styles.ratingContainer}>
            {ratingArray.map((element, index) => (
              <SvgXml key={index} xml={starPath} height={20} width={20} />
            ))}
            <View style={styles.openContainer}>
              {isClosedTemporarily && (
                <View>
                  <Text style={styles.closedText}>CLOSED TEMPORARILY</Text>
                </View>
              )}
              {isOpenNow && <SvgXml xml={openPath} height={20} width={20} />}
              <Image style={styles.icon} source={{ uri: icon }} />
            </View>
          </View>
          <Text style={styles.address}>{address}</Text>
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

const starPath = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<path style="fill:#FFDC64;" d="M452.71,157.937l-133.741-12.404L265.843,22.17c-3.72-8.638-15.967-8.638-19.686,0l-53.126,123.362
	L59.29,157.937c-9.365,0.868-13.149,12.516-6.084,18.723l100.908,88.646l-29.531,131.029c-2.068,9.175,7.841,16.373,15.927,11.572
	L256,339.331l115.49,68.576c8.087,4.802,17.994-2.397,15.927-11.572l-29.532-131.029l100.909-88.646
	C465.859,170.453,462.074,158.805,452.71,157.937z"/>
<g>
	<path style="fill:#FFF082;" d="M119.278,17.923c6.818,9.47,26.062,50.14,37.064,73.842c1.73,3.726-2.945,7.092-5.93,4.269
		C131.425,78.082,98.96,46.93,92.142,37.459c-5.395-7.493-3.694-17.941,3.8-23.336C103.435,8.728,113.883,10.43,119.278,17.923z"/>
	<path style="fill:#FFF082;" d="M392.722,17.923c-6.818,9.47-26.062,50.14-37.064,73.842c-1.73,3.726,2.945,7.092,5.93,4.269
		c18.987-17.952,51.451-49.105,58.27-58.575c5.395-7.493,3.694-17.941-3.8-23.336C408.565,8.728,398.117,10.43,392.722,17.923z"/>
	<path style="fill:#FFF082;" d="M500.461,295.629c-11.094-3.618-55.689-9.595-81.612-12.875c-4.075-0.516-5.861,4.961-2.266,6.947
		c22.873,12.635,62.416,34.099,73.51,37.717c8.778,2.863,18.215-1.932,21.078-10.711
		C514.034,307.928,509.239,298.492,500.461,295.629z"/>
	<path style="fill:#FFF082;" d="M11.539,295.629c11.094-3.618,55.689-9.595,81.612-12.875c4.075-0.516,5.861,4.961,2.266,6.947
		c-22.873,12.635-62.416,34.099-73.51,37.717c-8.778,2.863-18.215-1.932-21.078-10.711S2.761,298.492,11.539,295.629z"/>
	<path style="fill:#FFF082;" d="M239.794,484.31c0-11.669,8.145-55.919,13.065-81.582c0.773-4.034,6.534-4.034,7.307,0
		c4.92,25.663,13.065,69.913,13.065,81.582c0,9.233-7.485,16.718-16.718,16.718C247.279,501.029,239.794,493.543,239.794,484.31z"/>
</g>
<path style="fill:#FFC850;" d="M285.161,67.03l-19.319-44.86c-3.72-8.638-15.967-8.638-19.686,0L193.03,145.532L59.29,157.937
	c-9.365,0.868-13.149,12.516-6.084,18.723l100.908,88.646l-29.531,131.029c-2.068,9.175,7.841,16.373,15.927,11.572l15.371-9.127
	C181.08,235.66,251.922,115.918,285.161,67.03z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;

const openPath = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.952 511.952" style="enable-background:new 0 0 511.952 511.952;" xml:space="preserve">
<path style="fill:#F2F2F2;" d="M410.643,161.145L43.709,251.811l137.6-230.4L410.643,161.145z M74.643,228.345l297.6-73.6
	l-185.6-112L74.643,228.345z"/>
<path style="fill:#FF7058;" d="M510.909,373.411l-52.267-212.267c-4.267-17.067-22.4-27.733-39.467-23.467L24.509,235.811
	c-17.067,4.267-27.733,21.333-23.467,38.4l52.267,213.333c4.267,17.067,22.4,27.733,39.467,23.467l394.667-98.133
	C504.509,408.611,515.176,391.545,510.909,373.411z"/>
<g>
	<path style="fill:#FFFFFF;" d="M168.509,378.745c-6.4,10.667-16,17.067-27.733,20.267c-12.8,3.2-23.467,1.067-34.133-4.267
		c-10.667-6.4-17.067-16-20.267-27.733c-3.2-12.8-1.067-23.467,5.333-34.133c6.4-10.667,16-17.067,27.733-20.267
		c12.8-3.2,23.467-1.067,34.133,4.267c10.667,6.4,17.067,16,20.267,27.733C177.043,357.411,174.909,369.145,168.509,378.745z
		 M154.643,349.945c-2.133-7.467-5.333-13.867-11.733-17.067c-6.4-4.267-12.8-5.333-19.2-3.2c-7.467,1.067-12.8,5.333-17.067,11.733
		c-3.2,6.4-4.267,13.867-2.133,21.333s5.333,12.8,11.733,17.067c6.4,4.267,12.8,5.333,19.2,3.2c7.467-2.133,11.733-5.333,16-12.8
		C155.709,363.811,156.776,357.411,154.643,349.945z"/>
	<path style="fill:#FFFFFF;" d="M238.909,292.345c7.467,3.2,11.733,10.667,14.933,21.333c2.133,10.667,1.067,19.2-3.2,25.6
		c-5.333,6.4-13.867,10.667-25.6,13.867l-10.667,3.2l5.333,23.467l-20.267,4.267l-20.267-84.267l29.867-7.467
		C221.843,289.145,231.443,289.145,238.909,292.345z M233.576,329.678c2.133-3.2,2.133-7.467,1.067-11.733
		c-1.067-5.333-3.2-7.467-6.4-9.6c-3.2-1.067-8.533-1.067-13.867,0l-10.667,2.133l7.467,28.8l12.8-3.2
		C227.176,335.011,231.443,331.811,233.576,329.678z"/>
	<path style="fill:#FFFFFF;" d="M321.043,264.611l4.267,17.067l-41.6,10.667l4.267,17.067l37.333-9.6l4.267,16l-37.333,9.6
		l4.267,17.067l42.667-10.667l4.267,17.067l-61.867,14.933l-20.267-84.267L321.043,264.611z"/>
	<path style="fill:#FFFFFF;" d="M397.843,245.411l19.2-4.267l20.267,84.267l-19.2,4.267l-53.333-42.667l12.8,53.333l-19.2,4.267
		l-20.267-84.267l17.067-4.267l54.4,43.733L397.843,245.411z"/>
</g>
<path style="fill:#334A5E;" d="M226.109,31.011c5.333,22.4-8.533,43.733-29.867,49.067c-21.333,5.333-43.733-7.467-49.067-29.867
	s7.467-43.733,29.867-49.067C198.376-4.189,220.776,9.678,226.109,31.011z"/>
<circle style="fill:#40596B;" cx="186.643" cy="40.611" r="19.2"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
