import { Tabs } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function RootLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => {
                        return focused ? (
                            <Entypo name="home" size={24} color={color} />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        );
                    },
                }}
            />
            <Tabs.Screen name="login" options={{ title: "Login" }} />
        </Tabs>
    );
}
