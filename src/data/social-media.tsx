import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export type SocialMediaAccount = {
	name: string;
	url: string;
	icon: React.ReactNode;
	color?: string;
}[];

const socialMediaAccounts: SocialMediaAccount = [
	{
		name: "Instagram",
		url: "https://www.instagram.com/gdsc_ensta/",
		icon: <FaInstagram />,
		color: "hover:text-[#E4405F]",
	},
	{
		name: "Facebook",
		url: "https://www.facebook.com/gdscensta",
		icon: <FaFacebook />,
		color: "hover:text-blue-400",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/company/google-developer-student-club-ensta",
		icon: <FaLinkedin />,
		color: "hover:text-blue-600",
	},
];

export default socialMediaAccounts;
