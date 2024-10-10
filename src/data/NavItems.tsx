export type TNavItem = {
	title: string;
	href: string;
	icon: React.ReactNode;
}[];

import { AiOutlineTeam } from "react-icons/ai";
import { BiLogoBlogger } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";

const NavItems: TNavItem = [
	{
		title: "Home",
		href: "/",
		icon: <FaHome />,
	},
	{
		title: "Events",
		href: "/events",
		icon: <MdEventAvailable />,
	},
	{
		title: "Teams",
		href: "/teams",
		icon: <AiOutlineTeam />,
	},
	{
		title: "Blog",
		href: "/blog",
		icon: <BiLogoBlogger />,
	},
	{
		title: "Contact",
		href: "/contact",
		icon: <MdEmail />,
	},
];
export default NavItems;
