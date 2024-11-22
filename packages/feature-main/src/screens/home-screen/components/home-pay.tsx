import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Muted, Separator, Text } from "@kai/core-components";
import { View } from "react-native";

export const HomePay = () => {
	return (
		<View className="bg-white rounded-xl border border-gray-200">
			<View className="p-4 flex flex-row items-center gap-4">
				<View className="flex flex-col gap-2">
					<View className="flex flex-row items-center gap-1">
						<MaterialCommunityIcons name="wallet" size={22} color={"#F29D4D"} />
						<Text className="font-bold">KAI PAY</Text>
					</View>
					<Button
						variant={"outline"}
						size={"sm"}
						className="rounded-full border-[#2668ED]"
					>
						<Text className="text-[#2668ED] font-bold">Aktivasi KAIPay</Text>
					</Button>
				</View>
				<Separator orientation="vertical" className="h-full" />
				<View className="flex-1 flex-row items-center justify-between gap-2">
					<Button
						variant={"ghost"}
						className="!px-0 !py-0 items-center justify-center"
					>
						<MaterialCommunityIcons
							name="qrcode-scan"
							size={22}
							color={"#2668ED"}
						/>
						<Text className="mt-1 text-sm text-center font-bold text-muted-foreground">
							Scan
						</Text>
					</Button>
					<Button variant={"ghost"} className="!px-0 !py-0">
						<MaterialCommunityIcons
							name="wallet-plus"
							size={22}
							color={"#2668ED"}
						/>
						<Text className="mt-1 text-sm text-center font-bold text-muted-foreground">
							Top Up
						</Text>
					</Button>
					<Button variant={"ghost"} className="!px-0 !py-0">
						<MaterialCommunityIcons
							name="history"
							size={22}
							color={"#2668ED"}
						/>
						<Text className="mt-1 text-sm text-center font-bold text-muted-foreground">
							Riwayat
						</Text>
					</Button>
				</View>
			</View>
			<Separator />
			<View className="px-4 py-2">
				<View className="flex flex-row items-center gap-2">
					<FontAwesome6 name="coins" size={16} color={"#FFB101"} />
					<View className="flex flex-row items-center gap-1">
						<Text className="text-[#FF4E34]">0</Text>
						<Muted className="text-sm">RailPoin</Muted>
					</View>
				</View>
			</View>
		</View>
	);
};
