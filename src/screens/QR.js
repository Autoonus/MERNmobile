import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function QR({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const askPermissions = () => {
    (async () => {
      console.log("Asking for permissions");
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('Browse');
  };

  useEffect(() => {
    askPermissions();
  }, []);

  if (hasPermission && hasPermission) {
      console.log("Camera opened, permission true");
      return (
        <View>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 800, width: 400 }}
          />
        </View>
      );
    }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          padding: 100,
        }}
      >
        <Button title="Open camera" />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});