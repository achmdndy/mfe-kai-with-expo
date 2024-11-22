import { useAuth, useLocalStorage } from "@kai/core-hooks";
import { router } from "expo-router";

export const useOnboardingSkipButton = () => {
	const { setItem } = useLocalStorage();
	const { user } = useAuth();

	const skipOnboarding = async () => {
		try {
			await setItem("showOnboarding", false);
			router.navigate(user ? "/./(tabs)" : "/(auth)");
		} catch (error) {
			console.error(`[ERROR]: ${error}`);
		}
	};

	return { skipOnboarding };
};
