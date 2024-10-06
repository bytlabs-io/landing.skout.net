import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
	logo: Logo,
	seo: {
		title: "SkoutNet",
		description: "Revolutionizing Talent Discovery in Sports",
	} as NextSeoProps,
	termsUrl: "#",
	privacyUrl: "#",
	header: {
		links: [
			{
				id: "about",
				label: "About",
			},
			{
				id: "faq",
				label: "FAQ",
			},
			// {
			// 	label: "Login",
			// 	href: "/login",
			// },
			{
				label: "Join Waitlist",
				href: "/waitlist",
				variant: "primary",
			},
		],
	},
	footer: {
		copyright: (
			<>
				Built by <Link href="https://twitter.com/bytlabs">Bytlabs © 2024</Link>
			</>
		),
		links: [
			{
				href: "mailto:skoutnet-team@bytlabs.tech",
				label: "Contact",
			},
			{
				href: "https://twitter.com/skoutnet",
				label: <FaTwitter size="14" />,
			},
			{
				href: "https://instagram.com/skoutnet",
				label: <FaInstagram size="14" />,
			},
			{
				href: "https://tiktok.com/skoutnet",
				label: <FaTiktok size="14" />,
			},
		],
	},
	waitlist: {
		title: "Join the Waiting List",
		features: [
			{
				icon: FiCheck,
				title: "Atheletes",
				description:
					"On SkoutNet, athletes can create dynamic, detailed profiles that highlight their skills, achievements, and personality.",
			},
			{
				icon: FiCheck,
				title: "Scouts",
				description:
					"SkoutNet provides scouts with advanced search tools, data analytics, and communication features, making it easier than ever to find and evaluate athletes.",
			},
			{
				icon: FiCheck,
				title: "Challenges",
				description:
					"Participate in challenges, connect with scouts, and take control of your sports career. Our platform is designed to give you the visibility you deserve.",
			},
		],
	},
};

export default siteConfig
