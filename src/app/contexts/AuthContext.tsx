'use client';
import { createContext, ReactNode, useState } from 'react';

export interface AuthProviderProps {
	children: ReactNode;
}

interface User {
	balance: number;
}

interface AuthContextData {
	userInformation: User;
	setUserInformation: React.Dispatch<React.SetStateAction<User>>;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
	const [userInformation, setUserInformation] = useState<User>({
		balance: 1000,
	});

	return (
		<AuthContext.Provider value={{ userInformation, setUserInformation }}>
			{children}
		</AuthContext.Provider>
	);
}
