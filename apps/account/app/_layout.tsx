import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
	AuthProvider,
	DeprecatedUi,
	Primitives,
	ThemeProvider,
} from "@kai/core-components";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const { ToastProvider } = DeprecatedUi;
const { PortalHost } = Primitives;

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
	return (
		<ThemeProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<BottomSheetModalProvider>
					<AuthProvider>
						<Stack
							initialRouteName="(account)"
							screenOptions={{
								headerShown: false,
							}}
						>
							<Stack.Screen
								name="(account)"
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name="+not-found"
								options={{
									headerShown: false,
								}}
							/>
						</Stack>
					</AuthProvider>
				</BottomSheetModalProvider>
			</GestureHandlerRootView>
			<PortalHost />
			<ToastProvider />
		</ThemeProvider>
	);
}
