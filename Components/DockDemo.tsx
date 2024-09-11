import React from "react";

import { Dock, DockIcon } from "@/Components/ui/Dock";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
	return (
		<div className="relative">
			<Dock magnification={60} distance={100}>
				<DockIcon
					className="bg-black/10 dark:bg-white/10 p-3  text-white"
					link="https://sujansthadev.com.np/"
				>
					<Icons.telgram className="size-full" />
				</DockIcon>
				<DockIcon
					link="https://sujansthadev.com.np/"
					className="bg-black/10 dark:bg-white/10 p-3 text-white"
				>
					<Icons.twitter className="size-full" />
				</DockIcon>
				<DockIcon
					link="https://sujansthadev.com.np/"
					className="bg-black/10 dark:bg-white/10 p-3 text-white"
				>
					<Icons.medium className="size-full" />
				</DockIcon>
				<DockIcon
					link="https://sujansthadev.com.np/"
					className="bg-black/10 dark:bg-white/10 p-3 text-white"
				>
					<Icons.gitbook className="size-full" />
				</DockIcon>
			</Dock>
		</div>
	);
}

const Icons = {
	telgram: (props: IconProps) => <FaTelegramPlane />,
	twitter: (props: IconProps) => <BsTwitterX />,
	medium: (props: IconProps) => <FaMedium />,
	gitbook: (props: IconProps) => <SiGitbook />,
};
