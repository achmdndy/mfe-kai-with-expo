import {
	type Theme,
	ThemeProvider as ThemeProviderNative,
} from "@react-navigation/native";
import { SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { type PropsWithChildren, useEffect, useState } from "react";
import { Platform } from "react-native";
import { setAndroidNavigationBar } from "../../lib/android-navigation-bar";
import { NAV_THEME } from "../../lib/constants";
import { useColorScheme } from "../../lib/use-color-scheme";

const LIGHT_THEME: Theme = {
	dark: false,
	colors: NAV_THEME.light,
};

SplashScreen.preventAutoHideAsync();

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	const { setColorScheme } = useColorScheme();
	const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

	useEffect(() => {
		const loadTheme = async () => {
			try {
				if (Platform.OS === "web") {
					document.documentElement.classList.add("bg-background");
				}

				setAndroidNavigationBar("light");
				setColorScheme("light");

				setIsColorSchemeLoaded(true);
			} catch (error) {
				console.error("Failed to set theme:", error);
				setIsColorSchemeLoaded(true);
			} finally {
				SplashScreen.hideAsync();
			}
		};

		loadTheme();
	}, [setColorScheme]);

	if (!isColorSchemeLoaded) {
		return null;
	}

	return (
		<ThemeProviderNative value={LIGHT_THEME}>
			<StatusBar style="dark" />
			{children}
		</ThemeProviderNative>
	);
};
