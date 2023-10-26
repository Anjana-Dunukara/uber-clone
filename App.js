import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { withExpoSnack } from "nativewind";
import { styled } from "nativewind";

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default withExpoSnack(App);
