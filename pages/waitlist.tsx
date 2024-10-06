import { NextPage } from "next";
import NextLink from "next/link";
import "react-phone-number-input/style.css";

import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Heading,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Br, Form, Link, LoadingSpinner } from "@saas-ui/react";

import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Section } from "components/section";
import siteConfig from "data/config";

import PhoneInput from "react-phone-number-input";

import { PageTransition } from "components/motion/page-transition";
import { FallInPlace } from "components/motion/fall-in-place";
import { useState } from "react";
import toast from "react-hot-toast";

type Tagged<A, T> = A & { __tag: T };

export type E164Number = Tagged<string, "E164Number">;

const Login: NextPage = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [phone, setPhone] = useState<E164Number | undefined>();

	const submitForm = () => {
		// Perform form validation and submission logic here
		setLoading(true);
		const waitlisturl = "https://api.getwaitlist.com//api/v1/signup";
		const waitlist_id = 20930;
		const fetch_request = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				first_name: firstname,
				last_name: lastname,
				email,
				waitlist_id,
				phone: phone,
			}),
		};
		fetch(waitlisturl, fetch_request).then(() => {
			setLoading(false);
			toast("You have been successfully added to the waitlist!", {
				duration: 5000,
			});
			setFirstname("");
			setLastname("");
			setEmail("");
			setSubmitted(true);
		});
	};

	const goToSurvey = () => {
		// open new page in new tab
		window.open(
			"https://8qz8xu6gow6.typeform.com/to/d6W1uECI",
			"_blank",
			"noopener noreferrer"
		);
	};
	return (
		<Section height="100vh" innerWidth="container.xl">
			<BackgroundGradient
				zIndex="-1"
				width={{ base: "full", lg: "50%" }}
				left="auto"
				right="0"
				borderLeftWidth="1px"
				borderColor="gray.200"
				_dark={{
					borderColor: "gray.700",
				}}
			/>
			<PageTransition height="100%" display="flex" alignItems="center">
				<Stack
					width="100%"
					alignItems={{ base: "center", lg: "flex-start" }}
					spacing="20"
					flexDirection={{ base: "column", lg: "row" }}
				>
					<Box pe="20">
						<NextLink href="/">
							<Box
								as={siteConfig.logo}
								width="160px"
								ms="4"
								mb={{ base: 0, lg: 16 }}
							/>
						</NextLink>
						<Features
							display={{ base: "none", lg: "flex" }}
							columns={1}
							iconSize={4}
							flex="1"
							py="0"
							ps="0"
							maxW={{ base: "100%", xl: "80%" }}
							features={siteConfig.waitlist.features.map((feature) => ({
								iconPosition: "left",
								variant: "left-icon",

								...feature,
							}))}
						/>
					</Box>
					<Center height="100%" flex="1">
						{loading ? (
							<Box width="container.sm" pt="8" px="8">
								<LoadingSpinner />
							</Box>
						) : submitted ? (
							<Box width="container.sm" pt="8" px="8">
								<Text>
									Would you like to fill a quick survey on our product?
								</Text>
								<ButtonGroup spacing={4} alignItems="center" marginY={2}>
									<Button
										type="button"
										colorScheme="primary"
										onClick={goToSurvey}
									>
										Yes
									</Button>
									{/* <Button
										type="button"
										colorScheme="primary"
										onClick={goToSurvey}
									>
										Go Back
									</Button> */}
								</ButtonGroup>
							</Box>
						) : (
							<Box width="container.sm" pt="8" px="8">
								<Form
									name="waitlist"
									title={siteConfig.waitlist.title}
									onSubmit={(e) => {
										submitForm();
									}}
									// loginLink={<Link href="/login">Log in</Link>}
								>
									<FallInPlace delay={0.8}>
										<Heading as="h2" size="lg">
											Join the Waitlist
										</Heading>
										<Br />
										<Input
											marginY={2}
											type="text"
											placeholder="First Name"
											name="firstname"
											value={firstname}
											onChange={(e) => setFirstname(e.target.value)}
											className=""
										></Input>
										<Input
											marginY={2}
											type="text"
											placeholder="Last Name"
											name="lastname"
											value={lastname}
											onChange={(e) => setLastname(e.target.value)}
										></Input>
										<Br />
										<Input
											marginY={2}
											type="email"
											placeholder="email"
											name="email"
											value={email}
											required
											onChange={(e) => setEmail(e.target.value)}
										></Input>
										<Br />
										<PhoneInput
											placeholder="Enter phone number"
											value={phone}
											name="phone"
											required
											onChange={(e) => setPhone(e)}
										/>
										<Br />
										<ButtonGroup spacing={4} alignItems="center" marginY={2}>
											<Button type="submit" colorScheme="primary">
												Join
											</Button>
										</ButtonGroup>

										<Text color="muted" fontSize="sm">
											By signing up you agree to our{" "}
											<Link href={siteConfig.termsUrl} color="white">
												Terms of Service
											</Link>{" "}
											and{" "}
											<Link href={siteConfig.privacyUrl} color="white">
												Privacy Policy
											</Link>
										</Text>
									</FallInPlace>
								</Form>
							</Box>
						)}
					</Center>
				</Stack>
			</PageTransition>
		</Section>
	);
};

export default Login;

export const getStaticProps = () => {
	return {
		props: {
			header: {
				display: "none",
			},
			footer: {
				borderTopWidth: "1px",
			},
		},
	};
};
