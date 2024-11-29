import { View } from "react-native";
import { HelpHeader } from "./components/help-header";
import { HelpList } from "./components/help-list";

export const HelpScreen = () => {
	return (
		<View>
			<HelpHeader />
			<HelpList />
		</View>
	);
};
