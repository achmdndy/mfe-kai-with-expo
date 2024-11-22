import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { BadgePercent } from "lucide-react-native";
import React from "react";

export default function TabLayout() {
	return (
		<Tabs
			initialRouteName="index"
			screenOptions={{
				tabBarActiveTintColor: "#2668ED",
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Beranda",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							size={24}
							name={focused ? "home" : "home-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="train"
				options={{
					title: "Kereta",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							size={24}
							name={focused ? "train" : "train-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="ticket"
				options={{
					title: "Tiket Saya",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							size={24}
							name={focused ? "ticket" : "ticket-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="promo"
				options={{
					title: "Promo",
					tabBarIcon: ({ color, focused }) => (
						<BadgePercent color={color} size={24} />
					),
				}}
			/>
			<Tabs.Screen
				name="account"
				options={{
					title: "Akun",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							size={24}
							name={focused ? "person" : "person-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
