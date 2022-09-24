import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OptionPhone from "./OptionPhone";

export default function ShopPhone({ navigation, route }) {
  const phone = {
    name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
    price: "1.790.000 đ",
    color: "Xanh",
    url: require("../assets/phone_blue.png"),
  };
  if (route.params) {
    phone.color = route.params?.color;
    phone.url = route.params?.url;
  }

  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <Image
          style={{
            resizeMode: "stretch",
            width: "80%",
            height: "80%",
          }}
          source={phone.url}
        />
      </View>
      <View style={styles.box2}>
        <Text style={{ fontSize: 15, marginBottom: 20 }}>
          {phone.name}
          <Text>{phone.color}</Text>
        </Text>
        <View style={styles.boxText}>
          <View style={styles.star}>
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/star.png")}
            />
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/star.png")}
            />
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/star.png")}
            />
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/star.png")}
            />
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/star.png")}
            />
          </View>
          <Text style={{ fontSize: 15 }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.boxText}>
          <Text style={{ fontSize: 18, fontWeight: "800", marginRight: 40 }}>
            {phone.price}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              textDecorationLine: "line-through",
              color: "rgba(0, 0, 0, 0.58)",
            }}
          >
            {phone.price}
          </Text>
        </View>
        <View style={styles.boxText}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "700",
              color: "#FA0000",
              marginRight: 8,
            }}
          >
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/questionMark.png")}
          />
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderRadius: 10,
            flexDirection: "row",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          onPress={() => {
            navigation.navigate("Option", phone);
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              fontSize: 15,
              fontWeight: "400",
              marginRight: 71,
            }}
          >
            4 MÀU-CHỌN MÀU
          </Text>
          <Image
            style={{ width: 12, height: 14 }}
            source={require("../assets/chevroRight.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.box3}>
        <TouchableOpacity
          style={{
            flex: 1,
            borderWidth: 1,
            alignItems: "center",
            padding: 12,
            borderRadius: 10,
            backgroundColor: "#EE0A0A",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#FFFFFF" }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: 25,
    backgroundColor: "#FFFFFF",
  },
  box1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    flex: 0.7,
  },
  boxText: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    flexDirection: "row",
    marginRight: 23,
  },
  box3: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
