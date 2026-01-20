import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { AntDesign, Entypo, Feather, Fontisto } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Card } from "tamagui";

// Custom plus button component
function PlusButton() {
  const router = useRouter();

  return (
    <Card
      bg="$purple9"
      position="absolute"
      top={-20}
      borderColor="$purple9"
      borderRadius="$10"
      width={60}
      height={60}
      alignSelf="center"
    >
      <Pressable
        onPress={() => router.push("/new-entry")}
        style={({ pressed }) => [
          { opacity: pressed ? 0.8 : 1 },
          styles.plusButtonInner,
        ]}
      >
        <Fontisto size={24} name="plus-a" color="white" />
      </Pressable>
    </Card>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e1e1e1",
          height: 90,
          paddingBottom: 20,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="entries"
        options={{
          title: "Entries",
          tabBarIcon: ({ color }) => (
            <Entypo size={28} name="open-book" color={color} />
          ),
        }}
      />

      {/* Center Plus Button */}
      <Tabs.Screen
        name="journal"
        options={{
          title: "",
          tabBarIcon: () => <PlusButton />,
          tabBarButton: () => <PlusButton />,
        }}
      />

      <Tabs.Screen
        name="ai-chat"
        options={{
          title: "AI Chat",
          tabBarIcon: ({ color }) => (
            <Fontisto size={28} name="hipchat" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  plusButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
