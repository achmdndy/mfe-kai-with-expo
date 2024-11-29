import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const LoginSchema = z.object({
	otp: z.string().min(1, {
		message: "Kata Sandi harus diisi",
	}),
});

export const useForgotPasswordForm = () => {
	const { email } = useLocalSearchParams();

	const [timeLeft, setTimeLeft] = useState<number>(180);
	const [tryAgain, setTryAgain] = useState<boolean>(false);

	useEffect(() => {
		if (timeLeft <= 0) {
			setTryAgain(true);
			return;
		}

		const timerId = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(timerId);
	}, [timeLeft]);

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
	};

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			otp: "",
		},
	});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		console.log(email, values);
	};

	const onSendOTP = () => {
		setTimeLeft(180);
		setTryAgain(false);
	};

	return { form, onSubmit, email, tryAgain, timeLeft, formatTime, onSendOTP };
};
