import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useAuth } from "./use-auth";
import { useLocalStorage } from "./use-local-storage";

export const useLogout = () => {
	const { removeItem } = useLocalStorage();
	const insets = useSafeAreaInsets();

	const { set } = useAuth();

	const onSubmit = () => {
		Toast.show({
			type: "success",
			text1: "Success!",
			text2: "Your session has ended, please log in again if needed.",
			props: {
				icon: <Feather name="check" />,
			},
			visibilityTime: 3000,
			topOffset: insets.top === 0 ? 12 : insets.top,
		});

		set(null);
		removeItem("user");
		router.replace("/login");
	};

	return { onSubmit };
};
