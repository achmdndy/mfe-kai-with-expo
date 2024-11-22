import { create } from "zustand";

export type ApplicationMenuDto = {
	name?: string;
	url?: string;
	icon?: string;
};

export type UserTokenResponseDto = {
	accessToken?: string;
	identityToken?: string;
	tokenType?: string;
	refreshToken?: string;
	errorDescription?: string;
	expiresIn?: number;
};

export type UserCredentialDto = {
	isFirstTime?: boolean;
	credentialValue?: string;
};

export type UserInfoTokenDto = {
	userId?: string;
	userName?: string;
	contactNumber?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	customerCode?: string;
	position?: string;
	roleLevels?: number[];
	roleLevel?: number;
	menus?: ApplicationMenuDto[];
	regionLevel?: string;
	reminder?: number | null;
	description?: string;
	tokenResponse?: UserTokenResponseDto;
	userCredential?: UserCredentialDto[];
	imageName?: string;
	imagePath?: string;
	userType?: string;
	provider?: string;
	branchSupportArea?: string;
};

type AuthStore = {
	user: UserInfoTokenDto | null;
	set: (user: UserInfoTokenDto | null) => void;
};

export const useAuth = create<AuthStore>((set) => ({
	user: null,
	set: (user: UserInfoTokenDto | null) => set({ user }),
}));
