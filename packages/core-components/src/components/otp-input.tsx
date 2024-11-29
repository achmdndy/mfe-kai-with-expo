import React, { useRef, useState } from "react";
import { Dimensions, Keyboard, type TextInput, View } from "react-native";
import { Input } from "./ui";

type OTPInputProps = {
	digits: number;
	onComplete: (otp: string) => void;
};

export const OTPInput = ({ digits = 6, onComplete }: OTPInputProps) => {
	const [otp, setOtp] = useState<string[]>(Array(digits).fill(""));
	const inputs = useRef<TextInput[]>([]);

	const screenWidth = Dimensions.get("window").width;
	const containerPadding = 20;
	const spacing = 10;
	const availableWidth =
		screenWidth - containerPadding * 2 - spacing * (digits - 1);
	const inputWidth = Math.min(availableWidth / digits, 60);

	const handleChange = (text: string, index: number) => {
		const newOtp = [...otp];
		newOtp[index] = text.slice(-1);
		setOtp(newOtp);

		if (text && index < digits - 1) {
			inputs.current[index + 1]?.focus();
		}

		if (newOtp.join("").length === digits) {
			Keyboard.dismiss();
			onComplete(newOtp.join(""));
		}
	};

	const handleKeyPress = (key: string, index: number) => {
		if (key === "Backspace" && !otp[index] && index > 0) {
			inputs.current[index - 1]?.focus();
		}
	};

	return (
		<View
			className="flex flex-row gap-2"
			style={{ width: inputWidth, height: inputWidth }}
		>
			{otp.map((_, index) => (
				<Input
					key={index.toString()}
					// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
					// biome-ignore lint/style/noNonNullAssertion: <explanation>
					ref={(ref) => (inputs.current[index] = ref!)}
					keyboardType="number-pad"
					maxLength={1}
					value={otp[index]}
					onChangeText={(text) => handleChange(text, index)}
					onKeyPress={({ nativeEvent }) =>
						handleKeyPress(nativeEvent.key, index)
					}
					className="border border-gray-300 text-center rounded-md text-lg"
					style={{
						width: inputWidth,
						height: inputWidth,
						marginHorizontal: spacing / 2,
					}}
				/>
			))}
		</View>
	);
};
