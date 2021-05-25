import React, { useRef, useState } from "react";
import { Pressable, View, Text } from "react-native";
import DrawCore from "./DrawCore";
import { DrawItemType, DrawCoreProps } from "./types";
import { LinearGradient } from "expo-linear-gradient";

export default function DrawWithOptions() {
  const drawRef = useRef<DrawCoreProps>(null);

  const [drawingMode, setDrawingMode] = useState<DrawItemType>("ellipse");

  return (
    <View style={{ flex: 1 }}>
      <DrawCore
        ref={drawRef}
        drawingMode={drawingMode}
        image={require("./example.jpg")}
        linearGradient={LinearGradient}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Pressable
          style={{ padding: 10 }}
          onPress={() => {
            setDrawingMode("ellipse");
          }}
        >
          <Text style={drawingMode === "ellipse" ? { borderWidth: 1 } : {}}>
            circle
          </Text>
        </Pressable>
        <Pressable
          style={{ padding: 10 }}
          onPress={() => {
            setDrawingMode("pen");
          }}
        >
          <Text style={drawingMode === "pen" ? { borderWidth: 1 } : {}}>
            pen
          </Text>
        </Pressable>
        <Pressable
          style={{ padding: 10 }}
          onPress={() => {
            setDrawingMode("singleHead");
          }}
        >
          <Text style={drawingMode === "singleHead" ? { borderWidth: 1 } : {}}>
            line
          </Text>
        </Pressable>
        <Pressable
          style={{ padding: 10 }}
          onPress={() => {
            setDrawingMode("doubleHead");
          }}
        >
          <Text style={drawingMode === "doubleHead" ? { borderWidth: 1 } : {}}>
            double
          </Text>
        </Pressable>
        <Pressable
          style={{ padding: 10 }}
          onPress={() => {
            setDrawingMode("rectangle");
          }}
        >
          <Text style={drawingMode === "rectangle" ? { borderWidth: 1 } : {}}>
            rect
          </Text>
        </Pressable>
        <Pressable
          style={{ padding: 10 }}
          onPress={() => {
            setDrawingMode("text");
          }}
        >
          <Text style={drawingMode === "text" ? { borderWidth: 1 } : {}}>
            text
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            drawRef.current?.deletedSelectedItem();
          }}
        >
          <Text>Del</Text>
        </Pressable>
      </View>
    </View>
  );
}
