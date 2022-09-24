import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OptionPhone({ navigation, route }) {
  const phone = route.params;
  const [isPhone, setPhone] = useState();

  function updatePhone(color) {
    switch (color) {
      case "white":
        setPhone(
          () => (
            (phone.url = require("../assets/phone_white.png")),
            (phone.color = "Trắng")
          )
        );
        break;
      case "red":
        setPhone(
          () => (
            (phone.url = require("../assets/phone_red.png")),
            (phone.color = "Đỏ")
          )
        );
        break;
      case "black":
        setPhone(
          () => (
            (phone.url = require("../assets/phone_black.png")),
            (phone.color = "Đen")
          )
        );
        break;
      case "blue":
        setPhone(
          () => (
            (phone.url = require("../assets/phone_blue.png")),
            (phone.color = "Xanh")
          )
        );
        break;
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.imgPhones}>
          <Image
            style={{ width: "90%", height: "100%", resizeMode: "stretch" }}
            source={phone.url}
          />
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 15, fontWeight: "400", marginBottom: 9 }}>
            {phone.name}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "400", marginBottom: 9 }}>
            Màu: <Text style={{ fontWeight: "bold" }}>{phone.color}</Text>
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "400", marginBottom: 9 }}>
            Cung cấp bởi
            <Text style={{ fontWeight: "bold" }}> Tiki Tradding</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 9 }}>
            {phone.price}
          </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 13 }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={styles.listBox}>
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              backgroundColor: "#C5F1FB",
              marginBottom: 13,
            }}
            onPress={() => updatePhone("white")}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              backgroundColor: "#F30D0D",
              marginBottom: 13,
            }}
            onPress={() => updatePhone("red")}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              backgroundColor: "#000000",
              marginBottom: 13,
            }}
            onPress={() => updatePhone("black")}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              backgroundColor: "#234896",
              marginBottom: 13,
            }}
            onPress={() => updatePhone("blue")}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "rgba(25, 82, 226, 0.58)",
            padding: 12,
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate({
              name: "Home",
              params: { color: phone.color, url: phone.url },
              merge: true,
            });
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#F9F2F2" }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box1: {
    flex: 0.4,
    flexDirection: "row",
    marginBottom: 16,
  },
  imgPhones: {
    flex: 0.8,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  content: {
    flex: 1.2,
    paddingTop: 25,
  },

  box2: {
    flex: 1.6,
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  listBox: {
    flex: 1,
    alignItems: "center",
  },
});
