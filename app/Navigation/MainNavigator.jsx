import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import DrawerNavigator from "./DrawerNavigator";

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator>
      {/* Tab Navigation as default in Drawer */}
      <Drawer.Screen
        name=" Main "
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="FAQS"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Log out"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

