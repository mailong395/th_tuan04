import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function ShopBook() {
  const [count, setCount] = useState(0);
  const tru = () => setCount((count) => (count <= 0 ? 0 : count - 1));
  const cong = () => setCount((count) => count + 1);

  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.info_product}>
          <View style={styles.img_product}>
            <Image
              style={{ resizeMode: "stretch" }}
              source={require("../assets/book.png")}
            />
          </View>
          <View style={styles.content_product}>
            <Text style={styles.text_bold}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.text_bold}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.text_price}>141.800 đ</Text>
            <Text
              style={{
                flex: 1,
                textDecorationLine: "line-through",
                color: "#808080",
              }}
            >
              141.800 đ
            </Text>
            <View style={styles.main_action_number}>
              <View style={styles.action_number}>
                <TouchableOpacity onPress={tru}>
                  <View style={styles.button}>
                    <Text style={{ fontWeight: "bold" }}>-</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 12 }}>{count}</Text>
                <TouchableOpacity onPress={cong}>
                  <View style={styles.button}>
                    <Text style={{ fontWeight: "bold" }}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: "#134FEC", textAlign: "right" }}>
                  Mua sau
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <Text style={styles.text_bold}>Mã giảm giá đã lưu</Text>
          <Text style={{ flex: 1, color: "#134FEC" }}>Xem tại đây</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1.5,
              flexDirection: "row",
              borderWidth: 1,
              marginRight: 20,
              padding: 10,
            }}
          >
            <View
              style={{
                margin: 5,
                paddingHorizontal: 15,
                backgroundColor: "#F2DD1B",
              }}
            ></View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Mã giảm giá
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0A5EB7",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 20 }}
            >
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box2}>
        <Text style={{ fontSize: 12, fontWeight: "bold", marginRight: 10 }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#134FEC" }}>
          Nhập tại đây?
        </Text>
      </View>
      <View style={styles.box3}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tạm tính</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#EE0D0D" }}>
          141.800 đ
        </Text>
      </View>
      <View style={styles.box4}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#808080" }}>
            Tạm tính
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#EE0D0D" }}>
            141.800 đ
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#E53935",
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 2,
    paddingHorizontal: 12,
    paddingTop: 30,
    backgroundColor: "#FFFFFF",
    marginBottom: 12,
  },
  info_product: {
    flex: 2,
    flexDirection: "row",
    marginBottom: 20,
  },
  img_product: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 12,
  },
  content_product: {
    flex: 2,
  },
  text_bold: {
    flex: 1,
    fontSize: 13,
    fontWeight: "bold",
  },
  text_price: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#EE0D0D",
  },
  main_action_number: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  action_number: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 10,
  },

  box2: {
    flex: 0.2,
    padding: 12,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    alignItems: "center",
  },

  box3: {
    flex: 0.3,
    padding: 12,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginBottom: 200,
    alignItems: "center",
    justifyContent: "space-between",
  },
  box4: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FFFFFF",
  },
});
