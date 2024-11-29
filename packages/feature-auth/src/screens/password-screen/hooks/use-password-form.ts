import { zodResolver } from "@hookform/resolvers/zod";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const LoginSchema = z.object({
	password: z.string().min(1, {
		message: "Kata Sandi harus diisi",
	}),
});

export const usePasswordForm = () => {
	const { email } = useLocalSearchParams();
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			password: "",
		},
	});

	const goToForgotPassword = () =>
		router.navigate(`/(auth)/forgot-password?email=${email}`);

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		router.navigate("/./(tabs)");
	};

	return { form, onSubmit, showPassword, setShowPassword, goToForgotPassword };
};
