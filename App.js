import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/preferences" element={<Preferences />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
