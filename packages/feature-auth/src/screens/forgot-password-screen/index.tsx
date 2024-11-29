import { View } from "react-native";
import { ForgotPasswordForm } from "./components/forgot-password-form";
import { ForgotPasswordHeader } from "./components/forgot-password-header";

export const ForgotPasswordScreen = () => {
	return (
		<View>
			<ForgotPasswordHeader />
			<ForgotPasswordForm />
		</View>
	);
};
