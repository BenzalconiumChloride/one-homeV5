import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import "react-native-gesture-handler";
import LogOut from "./DrawerNav/LogOut";
import AboutUs from "./DrawerNav/AboutUs";
import FAQs from "./DrawerNav/FAQs";


const Drawer = createDrawerNavigator();

function FAQScreen() {
  return (
    <View>
      <FAQs />
    </View>
  );
}

function AboutUsScreen() {
  return (
    <View>
      <AboutUs />
    </View>
  );
}

function LogoutScreen() {
  return (
    <View>
      <LogOut />
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FAQS" component={FAQScreen}  />
      <Drawer.Screen name="AboutUs" component={AboutUsScreen}  />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

