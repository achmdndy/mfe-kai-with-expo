import { Feather } from "@expo/vector-icons";
import { Button, H1, Muted, Separator } from "@kai/core-components";
import { useRef } from "react";
import { Animated, ScrollView, View } from "react-native";
import { AuthDynamicHeader } from "./components/auth-dynamic-header";
import { AuthForm } from "./components/auth-form";
import { AuthSocial } from "./components/auth-social";

export const AuthScreen = () => {
	const scrollOffsetY = useRef(new Animated.Value(0)).current;

	return (
		<View>
			<AuthDynamicHeader value={scrollOffsetY} />
			<ScrollView
				className="bg-white"
				scrollEventThrottle={5}
				showsVerticalScrollIndicator={false}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
					{
						useNativeDriver: false,
					},
				)}
			>
				<View className="px-[24px]">
					<H1 className="text-2xl">Selamat Datang di Access!</H1>
					<Muted className="mt-2">
						Masuk atau Daftar sekarang! untuk menikmati semua fitur yang
						tersedia di Access.
					</Muted>

					<View className="mt-8">
						<AuthForm />
						<View className="flex flex-row items-center gap-4 my-4">
							<Separator className="flex-1" />
							<Muted className="flex-4 text-center text-sm">
								atau gunakan akun
							</Muted>
							<Separator className="flex-1" />
						</View>
						<AuthSocial />
						<Button
							variant={"outline"}
							className="flex flex-row items-center justify-center gap-4 mt-6"
						>
							<Feather name="phone-call" size={16} color={"#2668ED"} />
							<Muted className="text-sm">Mengalami Kendala? Hubungi Kami</Muted>
							<Feather name="arrow-right-circle" size={16} color={"#2668ED"} />
						</Button>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
