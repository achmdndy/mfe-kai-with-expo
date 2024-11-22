import { useAuth, useLocalStorage } from "@kai/core-hooks";
import { useEffect, useState } from "react";

export const useOnboarding = () => {
	const { getItem } = useLocalStorage();
	const [loading, setLoading] = useState<boolean>(true);
	const [showOnboarding, setShowOnboarding] = useState<boolean>(true);
	const { user } = useAuth();

	const checkOnboarding = async () => {
		try {
			const value = await getItem("showOnboarding");

			if (value !== null) setShowOnboarding(false);
		} catch (error) {
			console.error(`[ERROR]: ${error}`);
		} finally {
			setLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		checkOnboarding();
	}, []);

	return { loading, showOnboarding, checkOnboarding, user };
};
