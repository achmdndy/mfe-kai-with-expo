import { BadgePercent, TabIcon } from "@kai/core-components";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: Platform.select({
					ios: {
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Beranda",
					tabBarIcon: ({ color, focused }) => (
						<TabIcon name={focused ? "home" : "home-outline"} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="train"
				options={{
					title: "Train",
					tabBarIcon: ({ color, focused }) => (
						<TabIcon name={focused ? "train" : "train-outline"} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="ticket"
				options={{
					title: "Tiket Saya",
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							name={focused ? "ticket" : "ticket-outline"}
							color={color}
							size={28}
							className="rotate-45"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="promotion"
				options={{
					title: "Promo",
					tabBarIcon: ({ color }) => <BadgePercent size={28} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="account"
				options={{
					title: "Akun",
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							name={focused ? "person" : "person-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
