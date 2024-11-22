import "expo-dev-client";
import "./global.css";

import { MicroAppRoot } from "@kai/core-navigation";
import { registerRootComponent } from "expo";
import { enableScreens } from "react-native-screens";

const contexts = [
	{
		context: require.context("./app", true, /.*/),
		prefix: ".",
	},
	{
		context: require.context("../auth/app/(auth)", true, /.*/),
		prefix: "(auth)",
	},
	{
		context: require.context("../train/app/(train)", true, /.*/),
		prefix: "(train)",
	},
	{
		context: require.context("../ticket/app/(ticket)", true, /.*/),
		prefix: "(ticket)",
	},
	{
		context: require.context("../promo/app/(promo)", true, /.*/),
		prefix: "(promo)",
	},
	{
		context: require.context("../account/app/(account)", true, /.*/),
		prefix: "(account)",
	},
];

export function App() {
	enableScreens(false);

	return <MicroAppRoot contexts={contexts} />;
}

registerRootComponent(App);
