import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNav from "./src/navigation/BottomTabNav";

// function NewsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>News</Text>
//       <Button title="Next Page" onPress={() => navigation.navigate("News2")} />
//     </View>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
}
