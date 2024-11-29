import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import type { TokenCache } from "@clerk/clerk-expo/dist/cache";
import * as SecureStore from "expo-secure-store";
import type { PropsWithChildren } from "react";
import { Platform } from "react-native";

const createTokenCache = (): TokenCache => {
	return {
		getToken: async (key: string) => {
			try {
				const item = await SecureStore.getItemAsync(key);
				if (item) {
					console.log(`${key} was used 🔐 \n`);
				} else {
					console.log("No values stored under key: ", key);
				}
				return item;
			} catch (error) {
				console.error("secure store get item error: ", error);
				await SecureStore.deleteItemAsync(key);
				return null;
			}
		},
		saveToken: (key: string, token: string) => {
			return SecureStore.setItemAsync(key, token);
		},
	};
};

export const tokenCache =
	Platform.OS !== "web" ? createTokenCache() : undefined;

const publishableKey =
	process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "CLERK_PUBLISHABLE_KEY";

if (!publishableKey) {
	throw new Error(
		"Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
	);
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
	return (
		<ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
			<ClerkLoaded>{children}</ClerkLoaded>
		</ClerkProvider>
	);
};
