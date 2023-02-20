import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import FirstExercise from "./src/screens/FirstExercise";
import ListScreen from "./src/screens/ListScreen";
import ListExercise from "./src/screens/ListExercise";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import CounterScreenWithReducer from "./src/screens/CounterScreenWithReducer";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    FirstExercise,
    ListScreen,
    ListExercise,
    ImageScreen,
    CounterScreen,
    ColorScreen,
    SquareScreen,
    CounterScreenWithReducer,
    TextScreen,
    BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
