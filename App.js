import { StyleSheet, Text, View } from "react-native";
import ShopBook from "./componets/Shop_tiki";

export default function App() {
  return (
    <View style={styles.container}>
      <ShopBook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
  },
});
