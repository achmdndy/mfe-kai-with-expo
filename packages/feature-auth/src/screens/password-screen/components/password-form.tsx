import { Ionicons } from "@expo/vector-icons";
import {
	Button,
	Form,
	FormField,
	FormInput,
	P,
	Text,
} from "@kai/core-components";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePasswordForm } from "../hooks/use-password-form";

export const PasswordForm = () => {
	const insets = useSafeAreaInsets();
	const { form, onSubmit, showPassword, setShowPassword, goToForgotPassword } =
		usePasswordForm();

	return (
		<Form {...form}>
			<View className="px-4 pt-4 h-screen flex flex-col justify-between">
				<View className="flex flex-col gap-4">
					<P className="text-muted-foreground">
						Untuk pengguna lama Access, kamu bisa masuk dengan akun lama-mu.
						Jangan bagikan kata sandi anda kepada siapapun demi keamanan data
						anda
					</P>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormInput
								label="Kata Sandi"
								placeholder="Masukkan Kata Sandi"
								secureTextEntry={!showPassword}
								autoCapitalize="none"
								autoComplete="password"
								iconRight={() => {
									return (
										<Pressable onPress={() => setShowPassword(!showPassword)}>
											<Ionicons
												name={showPassword ? "eye" : "eye-off"}
												size={20}
											/>
										</Pressable>
									);
								}}
								{...field}
							/>
						)}
					/>

					<Pressable onPress={goToForgotPassword}>
						<Text className="text-[#2668ED]">Lupa Kata Sandi?</Text>
					</Pressable>
				</View>

				<Button
					onPress={form.handleSubmit(onSubmit)}
					className="bg-[#2668ED] w-full"
					style={{ marginBottom: insets.bottom + 110 }}
				>
					<Text className="uppercase">Lanjutkan</Text>
				</Button>
			</View>
		</Form>
	);
};
