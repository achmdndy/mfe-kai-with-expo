import { Feather } from "@expo/vector-icons";
import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export const useNetwork = () => {
	const insets = useSafeAreaInsets();

	const [isConnect, setIsConnect] = useState<boolean | null>(null);

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener((state) => {
			const isConnected = state.isInternetReachable || state.isConnected;

			if (isConnect !== null && isConnected !== isConnect) {
				Toast.show({
					type: isConnected ? "success" : "error",
					text1: isConnected ? "You're Online!" : "You're Offline!",
					text2: isConnected
						? "Enjoy uninterrupted access to all features."
						: "Some features may be limited. Check your connection.",
					props: {
						icon: isConnected ? (
							<Feather name="check" />
						) : (
							<Feather name="alert-triangle" />
						),
					},
					visibilityTime: 3000,
					topOffset: insets.top === 0 ? 12 : insets.top,
				});
			}

			setIsConnect(isConnected);
		});

		return () => {
			unsubscribe();
		};
	}, [insets, isConnect]);

	return { isConnect };
};
