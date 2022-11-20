import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import Subscribe from "./components/Subscribe";
import Explore from "./components/Explore";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";

export default function App() {
  const store = createStore();
  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();
  const RootHome = () => {
    return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "home") {
              iconName = "home";
            } else if (route.name === "explore") {
              iconName = "explore";
            } else if (route.name === "subscribe") {
              iconName = "subscriptions";
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tabs.Screen name="home" component={Home} />
        <Tabs.Screen name="explore" component={Explore} />
        <Tabs.Screen name="subscribe" component={Subscribe} />
      </Tabs.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          headerMode="none"
        >
          <Stack.Screen name="rootHome" component={RootHome}></Stack.Screen>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
