import {
	Button,
	Form,
	OTPInput,
	Spinner,
	Text,
	cn,
} from "@kai/core-components";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useForgotPasswordForm } from "../hooks/use-forgot-password-form";

export const ForgotPasswordForm = () => {
	const insets = useSafeAreaInsets();
	const { form, onSubmit, email, formatTime, timeLeft, tryAgain, onSendOTP } =
		useForgotPasswordForm();

	return (
		<Form {...form}>
			<View className="px-4 pt-8 h-screen flex flex-col justify-between">
				<View className="flex flex-col gap-4">
					<Text className="text-lg">
						Kami telah mengirimkan kode OTP ke email kamu{" "}
						<Text className="font-bold text-gray-900">{email}</Text>
					</Text>

					<OTPInput digits={6} onComplete={() => {}} />

					{/* <FormFielda
						control={form.control}
						name="otp"
						render={({ field }) => <FormInput {...field} />}
					/> */}

					<View className="flex flex-row items-center justify-between">
						<Pressable onPress={onSendOTP} disabled={!tryAgain}>
							<Text
								className={cn(
									tryAgain ? "text-[#2668ED]" : "text-muted-foreground",
								)}
							>
								Belum Menerima OTP?
							</Text>
						</Pressable>

						{!tryAgain && (
							<View className="flex flex-row items-center gap-2">
								<Spinner size={26} />
								<Text className="font-bold tracking-widest">
									{formatTime(timeLeft)}
								</Text>
							</View>
						)}
					</View>
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
