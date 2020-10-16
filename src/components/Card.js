import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/*loading image dynamically not posssible */}
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          {title.length > 0 && <Text style={styles.subTitle}>{subTitle}</Text>}
          {/* <Text style={styles.subTitle}>{subTitle}</Text> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: "green",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
