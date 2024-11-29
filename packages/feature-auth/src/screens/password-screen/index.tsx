import { View } from "react-native";
import { PasswordForm } from "./components/password-form";
import { PassowrdHeader } from "./components/password-header";

export const PasswordScreen = () => {
	return (
		<View>
			<PassowrdHeader />
			<PasswordForm />
		</View>
	);
};
