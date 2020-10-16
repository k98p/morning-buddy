import React from "react";
import { WebView } from "react-native-webview";

const NewsDetailsScreen = ({ route }) => {
  const news = route.params;
  return (
    <WebView
      source={{
        uri: news.url,
      }}
    />
  );
};

export default NewsDetailsScreen;
