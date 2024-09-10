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
				<DockIcon className="bg-black/10 dark:bg-white/10 p-3">
					<Icons.gitHub className="size-full" />
				</DockIcon>
				<DockIcon className="bg-black/10 dark:bg-white/10 p-3">
					<Icons.googleDrive className="size-full" />
				</DockIcon>
				<DockIcon className="bg-black/10 dark:bg-white/10 p-3">
					<Icons.notion className="size-full" />
				</DockIcon>
				<DockIcon className="bg-black/10 dark:bg-white/10 p-3">
					<Icons.whatsapp className="size-full" />
				</DockIcon>
			</Dock>
		</div>
	);
}

const Icons = {
	gitHub: (props: IconProps) => <FaTelegramPlane />,
	notion: (props: IconProps) => <BsTwitterX />,
	googleDrive: (props: IconProps) => <FaMedium />,
	whatsapp: (props: IconProps) => <SiGitbook />,
};
