import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CodeMenu from "../pages/CodeMenu";
import CodeQ from "../pages/CodeQ";
//import CodeS from "../pages/CodeS";
//import CodeN from "../pages/CodeN";
//import CodeAFI from "../pages/CodeAFI";

const Stack = createStackNavigator();

const CodeRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="CodeMenu" component={CodeMenu} />
        <Stack.Screen name="CodeQ" component={CodeQ} />
        {/*<Stack.Screen name="CodeS" component={CodeS} />
        <Stack.Screen name="CodeN" component={CodeN} />
        <Stack.Screen name="CodeAFI" component={CodeAFI} />*/}    
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CodeRoutes;
