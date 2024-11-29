import { Ionicons } from "@expo/vector-icons";
import { Button, Text } from "@kai/core-components";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { View } from "react-native";
import { useAuthApple } from "../hooks/use-auth-apple";
import { useAuthGoogle } from "../hooks/use-auth-google";

export const useWarmUpBrowser = () => {
	useEffect(() => {
		void WebBrowser.warmUpAsync();
		return () => {
			void WebBrowser.coolDownAsync();
		};
	}, []);
};

WebBrowser.maybeCompleteAuthSession();

export const AuthSocial = () => {
	useWarmUpBrowser();
	const { onSignInApple } = useAuthApple();
	const { onSignInGoogle } = useAuthGoogle();

	return (
		<View className="flex flex-col gap-2">
			<Button
				onPress={onSignInApple}
				variant={"outline"}
				className="flex flex-row items-center justify-center gap-4"
			>
				<Ionicons name="logo-apple" size={18} />
				<Text className="text-[#2668ED]">Masuk Dengan Apple</Text>
			</Button>
			<Button
				onPress={onSignInGoogle}
				variant={"outline"}
				className="flex flex-row items-center justify-center gap-4"
			>
				<Ionicons name="logo-google" size={18} color={"red"} />
				<Text className="text-[#2668ED]">Masuk Dengan Google</Text>
			</Button>
		</View>
	);
};
