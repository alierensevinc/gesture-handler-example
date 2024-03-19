import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomTouchable from "./components/CustomTouchable";

const App = () => {
  const onPress = () => {
    console.log("Now playing Daft Punk - Touch 🤖📀🎼💽");
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView
        style={[
          styles.container,
          { height: "100%", flexGrow: 1, backgroundColor: "#F8FAE5" },
        ]}
      >
        <CustomTouchable onPress={onPress}>
          <View style={[styles.container, styles.button]}>
            <Text style={styles.title}>Click me ! 🤖</Text>
          </View>
        </CustomTouchable>
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.container, styles.button, { marginTop: 36 }]}>
            <Text style={styles.title}>Click me !</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 160,
    aspectRatio: 1,
    backgroundColor: "#43766C",
    borderRadius: 25,
  },
  title: {
    color: "#F8FAE5",
    fontSize: 24,
  },
});

export default App;
