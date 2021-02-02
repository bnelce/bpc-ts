import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Laws from "../pages/Laws";
import CodeMenu from "../pages/CodeMenu";
import CodeQ from "../pages/CodeQ";
import CodeS from "../pages/CodeS";
import CodeN from "../pages/CodeN";
import CodeAFI from "../pages/CodeAFI";
import NBRMenu from "../pages/NBRMenu";

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Laws" component={Laws} />
        <Stack.Screen name="CodeMenu" component={CodeMenu} />
        <Stack.Screen name="CodeQ" component={CodeQ} />
        <Stack.Screen name="CodeS" component={CodeS} />
        <Stack.Screen name="CodeN" component={CodeN} />
        <Stack.Screen name="CodeAFI" component={CodeAFI} />
        <Stack.Screen name="NBRMenu" component={NBRMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
