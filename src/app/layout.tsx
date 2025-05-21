import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./__styles/globals.css";
import "./__styles/ux.css";
import Logo from "./__components/ux/Logo";
import NavBar from "./__components/layout/NavBar";
import { PageProvider } from "@/hooks/pageContext";
import { AuroraBackground } from "./__components/ux/AuroraBackground";

const notoSans = localFont({
	src: [
		{
			path: '../fonts/NotoSans-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/NotoSans-Black.ttf',
			weight: '900',
			style: 'normal',
		}
	]
});

export const metadata: Metadata = {
	title: "David Vasseur",
	description: "Portfolio 2025",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		
		<PageProvider>
			<html lang="en">
				<body className={`${notoSans.className} relative`}>
					<AuroraBackground />
					<Logo className="hidden sm:fixed left-2 top-2 z-2" />
					<NavBar className="fixed left-[50%] top-2 z-2 scale-[0.8] 2xl:scale-[1]" />
						{children}
				</body>
				
			</html>
		</PageProvider>
		
	);
}
