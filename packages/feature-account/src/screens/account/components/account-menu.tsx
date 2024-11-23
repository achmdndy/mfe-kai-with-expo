import { MaterialIcons } from "@expo/vector-icons";
import { Button, Switch, Text } from "@kai/core-components";
import { View } from "react-native";

export const AccountMenu = () => {
	return (
		<View className="px-4 py-8 flex flex-col gap-4">
			<Button
				variant={"ghost"}
				className="border-b border-input px-2 flex flex-row items-center justify-between"
				size={"lg"}
			>
				<View className="flex flex-row items-center gap-4">
					<MaterialIcons name="support-agent" size={24} color={"#2668ED"} />

					<Text>Pusat Bantuan</Text>
				</View>
				<MaterialIcons name="chevron-right" size={24} color={"#2668ED"} />
			</Button>
			<Button
				variant={"ghost"}
				className="border-b border-input px-2 flex flex-row items-center justify-between"
				size={"lg"}
			>
				<View className="flex flex-row items-center gap-4">
					<MaterialIcons name="info-outline" size={24} color={"#2668ED"} />

					<Text>Tentang Access</Text>
				</View>
				<MaterialIcons name="chevron-right" size={24} color={"#2668ED"} />
			</Button>
			<Button
				variant={"ghost"}
				className="border-b border-input px-2 flex flex-row items-center justify-between"
				size={"lg"}
			>
				<View className="flex flex-row items-center gap-4">
					<MaterialIcons name="language" size={24} color={"#2668ED"} />

					<Text>Bahasa</Text>
				</View>
				<Switch checked={false} onCheckedChange={() => {}} className="z-10" />
			</Button>
		</View>
	);
};
