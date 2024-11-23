import { useAuth } from "@kai/core-hooks";
import { useRouter } from "expo-router";
import { type PropsWithChildren, useEffect } from "react";
export const ProtectedProvider = ({ children }: PropsWithChildren) => {
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.replace("/(auth)");
		}
	}, [router, user]);

	return children;
};
