import { Ionicons } from "@expo/vector-icons";
import { Button, H1, P, Text } from "@kai/core-components";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export const HomeTripPlanner = () => {
	return (
		<View className="px-4 w-full">
			<View className="w-full p-4 rounded-xl">
				<LinearGradient
					colors={["#456FF7", "#4222C6"]}
					start={[0, 0]}
					end={[1, 1]}
					style={{
						borderRadius: 12,
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					}}
				/>
				<View className="flex flex-row items-center justify-between gap-2">
					<View className="w-16 h-16 bg-[#6439E0] rounded-lg flex items-center justify-center">
						<Ionicons
							name="location-outline"
							color={"#FFFFFF"}
							size={45}
							className="rotate-45"
						/>
					</View>
					<View className="w-[55%]">
						<H1 className="text-md text-white">TRIP Planner</H1>
						<P className="text-sm text-white">
							Buat perencanaan terbaik untuk perjalananmu.
						</P>
					</View>
					<Button variant={"outline"} className="bg-trasparent">
						<Text className="text-white font-bold">Buat</Text>
					</Button>
				</View>
			</View>
		</View>
	);
};
