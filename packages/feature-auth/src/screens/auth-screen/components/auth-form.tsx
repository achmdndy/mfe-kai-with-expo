import { Button, Form, FormField, FormInput, Text } from "@kai/core-components";
import { useAuthForm } from "../hooks/use-auth-form";

export const AuthForm = () => {
	const { form, onSubmit } = useAuthForm();

	return (
		<Form {...form}>
			<FormField
				control={form.control}
				name="emailOrPhone"
				render={({ field }) => (
					<FormInput
						label="Email / No. Telp"
						placeholder="Masukkan Email atau No. Telp anda"
						autoCapitalize="none"
						autoComplete="username"
						{...field}
					/>
				)}
			/>

			<Button
				onPress={form.handleSubmit(onSubmit)}
				className="mt-6 bg-[#2668ED]"
			>
				<Text className="uppercase">Lanjutkan</Text>
			</Button>
		</Form>
	);
};
