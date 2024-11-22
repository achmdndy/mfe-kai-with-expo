import "expo-dev-client";
import "./global.css";

import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { enableScreens } from "react-native-screens";

export function App() {
	enableScreens(false);
	const ctx = require.context("./app");
	return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
