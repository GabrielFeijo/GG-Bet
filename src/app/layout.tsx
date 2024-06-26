import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AuthProvider } from './contexts/AuthContext';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'GG Bet',
	description: 'O melhor site de apostas que a internet tem!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={inter.className}>
				<Suspense>
					<AuthProvider>{children}</AuthProvider>
				</Suspense>
			</body>
		</html>
	);
}
