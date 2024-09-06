import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
	FiActivity,
	FiArrowRight,
	FiAward,
	FiBox,
	FiCheck,
	FiCode,
	FiCopy,
	FiFlag,
	FiGrid,
	FiLock,
	FiSearch,
	FiSliders,
	FiSmile,
	FiTerminal,
	FiThumbsUp,
	FiToggleLeft,
	FiTrendingUp,
	FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
	Highlights,
	HighlightsItem,
	HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
	return (
		<Box>
			<SEO
				title="SkoutNet"
				description="Revolutionizing Talent Discovery in Sports"
			/>
			<Box>
				<HeroSection />

				<HighlightsSection />

				<FeaturesSection />

				<TestimonialsSection />

				<FaqSection />
			</Box>
		</Box>
	);
};

const HeroSection: React.FC = () => {
	return (
		<Box position="relative" overflow="hidden">
			<BackgroundGradient height="100%" zIndex="-1" />
			<Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
				<Stack direction={{ base: "column", lg: "row" }} alignItems="center">
					<Hero
						id="home"
						justifyContent="flex-start"
						px="0"
						title={
							<FallInPlace>
								Discover. <Br />
								Connect. <Br />
								Excel.
							</FallInPlace>
						}
						description={
							<FallInPlace delay={0.4} fontWeight="medium">
								The Ultimate Sports Platform
								<Br /> Connecting Athletes, Scouts, Fans and All Worldwide.
							</FallInPlace>
						}
					>
						<FallInPlace delay={0.8}>
							<ButtonGroup spacing={4} alignItems="center">
								<ButtonLink colorScheme="primary" size="lg" href="/signup">
									Sign Up
								</ButtonLink>
								<ButtonLink
									size="lg"
									href="#"
									variant="outline"
									rightIcon={
										<Icon
											as={FiArrowRight}
											sx={{
												transitionProperty: "common",
												transitionDuration: "normal",
												".chakra-button:hover &": {
													transform: "translate(5px)",
												},
											}}
										/>
									}
								>
									View demo
								</ButtonLink>
							</ButtonGroup>
						</FallInPlace>
					</Hero>
					{/* <Box
						height="600px"
						position="absolute"
						display={{ base: "none", lg: "block" }}
						left={{ lg: "60%", xl: "55%" }}
						width="80vw"
						maxW="1100px"
						margin="0 auto"
					>
						<FallInPlace delay={1}>
							<Box overflow="hidden" height="100%">
								<Image
									src="/static/screenshots/list.png"
									layout="fixed"
									width={1200}
									height={762}
									alt="Screenshot of a ListPage in Saas UI Pro"
									quality="75"
									priority
								/>
							</Box>
						</FallInPlace>
					</Box> */}
				</Stack>
			</Container>

			{/* <Features
				id="benefits"
				columns={[1, 2, 4]}
				iconSize={4}
				innerWidth="container.xl"
				pt="20"
				features={[
					{
						title: "Accessible",
						icon: FiSmile,
						description: "All components strictly follow WAI-ARIA standards.",
						iconPosition: "left",
						delay: 0.6,
					},
					{
						title: "Themable",
						icon: FiSliders,
						description:
							"Fully customize all components to your brand with theme support and style props.",
						iconPosition: "left",
						delay: 0.8,
					},
					{
						title: "Composable",
						icon: FiGrid,
						description:
							"Compose components to fit your needs and mix them together to create new ones.",
						iconPosition: "left",
						delay: 1,
					},
					{
						title: "Productive",
						icon: FiThumbsUp,
						description:
							"Designed to reduce boilerplate and fully typed, build your product at speed.",
						iconPosition: "left",
						delay: 1.1,
					},
				]}
				reveal={FallInPlace}
			/> */}
		</Box>
	);
};

const HighlightsSection = () => {
	const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

	return (
		<Highlights>
			<HighlightsItem colSpan={[1, null, 2]} title="What is SkoutNet?">
				<VStack alignItems="flex-start" spacing="8">
					<Text color="muted" fontSize="xl">
						SkoutNet is a cutting-edge platform designed to revolutionize the
						sports scouting process. Whether you are an athlete looking to
						showcase your skills or a scout seeking the next big talent,
						SkoutNet makes talent discovery, communication, and evaluation
						simple, fast, and effective. We provide the tools to streamline your
						journey from aspiring talent to recognized star.
					</Text>
				</VStack>
			</HighlightsItem>
			<HighlightsItem title="Athletes">
				<Text color="muted" fontSize="lg">
					On SkoutNet, athletes can create dynamic, detailed profiles that
					highlight their skills, achievements, and personality. Participate in
					challenges, connect with users, and take control of your sports
					career. Our platform is designed to give you the visibility you
					deserve.
				</Text>
			</HighlightsItem>
			<HighlightsItem title="Connect & Communicate">
				Message directly within the platform to explore opportunities and
				talent.
			</HighlightsItem>
			<HighlightsItem
				colSpan={[1, null, 2]}
				title="Scouts: Find Talent Effortlessly"
			>
				<Text color="muted" fontSize="lg">
					SkoutNet provides scouts with advanced search tools, data analytics,
					and communication features, making it easier than ever to find and
					evaluate users. Discover users by filtering based on specific criteria
					and track talent with real-time updates.
				</Text>
			</HighlightsItem>
		</Highlights>
	);
};

const FeaturesSection = () => {
	return (
		<Features
			id="features"
			title={
				<Heading
					lineHeight="short"
					fontSize={["2xl", null, "4xl"]}
					textAlign="left"
					as="p"
				>
					Key Features That Set SkoutNet Apart
				</Heading>
			}
			align="left"
			columns={[1, 2, 3]}
			iconSize={4}
			features={[
				{
					title: "Advanced Search & Filtering.",
					icon: FiSearch,
					description:
						"Filter users based on specific criteria such as skill level, achievements, location, sport, and more to find the perfect fit for your team or project.",
					variant: "inline",
				},
				{
					title: "Dynamic User Profiles.",
					icon: FiUserPlus,
					description:
						"Users can create detailed profiles that highlight their skills, achievements, stats, and videos.",
					variant: "inline",
				},
				{
					title: "Challenges & Skill Showcasing",
					icon: FiAward,
					description:
						"Athletes can engage in platform-wide challenges to demonstrate their skills. ",
					variant: "inline",
				},
				{
					title: "Analytics Dashboard (For Paid Users).",
					icon: FiActivity,
					description:
						"Users can access an analytics dashboard that provides real-time insights into user performance, comparing stats and engagement data to make informed scouting decisions.",
					variant: "inline",
				},
			]}
		/>
	);
};

const TestimonialsSection = () => {
	const columns = React.useMemo(() => {
		return testimonials.items.reduce<Array<typeof testimonials.items>>(
			(columns, t, i) => {
				columns[i % 3].push(t);

				return columns;
			},
			[[], [], []]
		);
	}, []);

	return (
		<Testimonials
			title={testimonials.title}
			columns={[1, 2, 3]}
			innerWidth="container.xl"
		>
			<>
				{columns.map((column, i) => (
					<Stack key={i} spacing="8">
						{column.map((t, i) => (
							<Testimonial key={i} {...t} />
						))}
					</Stack>
				))}
			</>
		</Testimonials>
	);
};



const FaqSection = () => {
	return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
	return {
		props: {},
	};
}
