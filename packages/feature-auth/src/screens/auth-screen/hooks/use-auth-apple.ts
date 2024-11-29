import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { useCallback } from "react";

export const useAuthApple = () => {
	const { startOAuthFlow } = useOAuth({ strategy: "oauth_apple" });
	const router = useRouter();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const onPress = useCallback(async () => {
		try {
			const { createdSessionId, setActive } = await startOAuthFlow({
				redirectUrl: Linking.createURL("/./(tabs)", { scheme: "apps-main" }),
			});
			router.navigate("/./(tabs)");
			if (createdSessionId) {
				setActive?.({ session: createdSessionId });
			} else {
				// Use signIn or signUp for next steps such as MFA
			}
		} catch (err) {
			console.error("OAuth error", err);
		}
	}, []);

	return { onSignInApple: onPress };
};
