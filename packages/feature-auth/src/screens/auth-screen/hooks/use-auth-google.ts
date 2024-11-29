import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router"; // Import router for navigation
import { useCallback } from "react";

export const useAuthGoogle = () => {
	const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
	const router = useRouter();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const onPress = useCallback(async () => {
		try {
			const response = await startOAuthFlow({
				redirectUrl: Linking.createURL("/dashboard", {
					scheme: "apps-main",
				}),
			});

			const { createdSessionId, signIn, signUp, setActive } = response;
			router.navigate("/./(tabs)");
			if (createdSessionId) {
				setActive?.({ session: createdSessionId });
			} else {
				console.log("No createdSessionId, handle signIn or signUp");
			}
		} catch (err) {
			console.error("OAuth error", err);
		}
	}, []);

	return { onSignInGoogle: onPress };
};
