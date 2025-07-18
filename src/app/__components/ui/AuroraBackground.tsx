"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  	showRadialGradient?: boolean;
}

export const AuroraBackground = ({
	className,
	showRadialGradient = true,
	...props
}: AuroraBackgroundProps) => {
	return (
		<div>
			<div
				className={cn(
				"transition-bg absolute top-0 left-0 z-0 flex h-[100vh] w-[100vw] flex-col items-center justify-cente",
				className,
				)}
				{...props}
			>
				<div
					className="absolute inset-0 overflow-hidden"
					style={{
						"background": "linear-gradient(to top left, #6E56CF 0%, #6E56CF 2%, #1B1525 90%, #1B1525 100%)",
						"--transparent": "transparent",
						} as React.CSSProperties}
				>
					<div
						//   I'm sorry but this is what peak developer performance looks like // trigger warning
						className={cn(
						`after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 grayscale-2 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--accent1)_10%,var(--accent2)_15%,var(--text2)_20%,var(--text2)_25%,var(--accent1)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--accent1)_0%,var(--accent1)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--accent1)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed]  after:content-[""] `,

						showRadialGradient &&
							`[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
						)}
					>
					</div>
				</div>
			</div>
		</div>
	);
};
