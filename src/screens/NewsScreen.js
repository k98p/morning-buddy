import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, FlatList, View } from "react-native";

import Card from "../components/Card";

import {
  articles_url,
  country_code,
  category,
  api_key,
} from "../config/rest_config";

let api_uri = `${articles_url}?country=${country_code}&category=${category}&apiKey=${api_key}`;

const NewsScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api_uri)
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.flatlist}
          data={data}
          keyExtractor={(data) => data.url.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={({ distanceFromEnd }) => {
            console.log("on end reached ", distanceFromEnd);
            // this.loadMore();
          }}
          renderItem={({ item }) => (
            <Card
              title={item.title.split(" - ")[0]}
              subTitle={item.source.name}
              image={item.urlToImage}
              onPress={() => navigation.navigate("NewsDetails", item)}
            />
          )}
        />
      )}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  flatlist: {
    padding: 18,
  },
});
