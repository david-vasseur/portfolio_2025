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
				"transition-bg absolute top-0 left-0 z-0 flex h-[100vh] w-[100vw] flex-col items-center justify-center text-slate-100",
				className,
				)}
				{...props}
			>
				<div
					className="absolute inset-0 overflow-hidden"
					style={{
						"background": "linear-gradient(to top left, #6E56CF 0%, #6E56CF 1%, #1B1525 90%, #1B1525 100%)",
						"--aurora":
							"repeating-linear-gradient(100deg,#5A44C2_10%,#A890FF_15%,#8E77FF_20%,#BBAAFF_25%,#6E56CF_30%)",
						"--dark-gradient":
							"repeating-linear-gradient(100deg,#1B1525_0%,#1B1525_7%,transparent_10%,transparent_12%,#1B1525_16%)",
						"--white-gradient":
							"repeating-linear-gradient(100deg,#D9D6E8_0%,#D9D6E8_7%,transparent_10%,transparent_12%,#F7F_16%)",

						"--blue-300": "#8E77FF",
						"--blue-400": "#6E56CF",
						"--blue-500": "#5A44C2",
						"--indigo-300": "#A890FF",
						"--violet-200": "#BBAAFF",
						"--black": "#1B1525",
						"--white": "#D9D6E8",
						"--transparent": "transparent",
						} as React.CSSProperties}
				>
					<div
						//   I'm sorry but this is what peak developer performance looks like // trigger warning
						className={cn(
						`after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] `,

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
