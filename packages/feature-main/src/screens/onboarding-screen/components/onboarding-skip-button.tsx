import { Ionicons } from "@expo/vector-icons";
import { Button, Text } from "@kai/core-components";
import { useOnboardingSkipButton } from "../hooks/use-onboarding-skip-button";

export const OnboardingSkipButton = () => {
	const { skipOnboarding } = useOnboardingSkipButton();

	return (
		<Button
			size={"sm"}
			variant={"secondary"}
			onPress={skipOnboarding}
			className="flex flex-row items-center justify-center gap-1"
		>
			<Text>Lewati</Text>
			<Ionicons name="chevron-forward" />
		</Button>
	);
};
