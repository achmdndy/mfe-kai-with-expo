import { Button, Input, Label, Text } from "@kai/core-components";
import { View } from "react-native";

export const AuthForm = () => {
	return (
		<View>
			<Label nativeID="label-uname" className="mb-2">
				Email / No. Telp
			</Label>
			<Input placeholder="Masukkan Email atau No. Telp anda" />

			<Button className="mt-6 bg-[#2668ED]">
				<Text className="uppercase">Lanjutkan</Text>
			</Button>
		</View>
	);
};
