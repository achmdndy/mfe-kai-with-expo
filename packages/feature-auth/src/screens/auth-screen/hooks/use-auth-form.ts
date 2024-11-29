import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const LoginSchema = z.object({
	emailOrPhone: z.string().min(1, {
		message: "Email / No. Telp harus diisi",
	}),
});

export const useAuthForm = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			emailOrPhone: "",
		},
	});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		router.navigate(`/(auth)/password?email=${values.emailOrPhone}`);
	};

	return { form, onSubmit };
};
