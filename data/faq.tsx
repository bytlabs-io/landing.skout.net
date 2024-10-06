import * as React from 'react'

const faq = {
	title: "Frequently asked questions",
	// description: '',
	items: [
		{
			q: "What is SkoutNet?",
			a: (
				<>
					SkoutNet is an online platform designed to connect sport stakeholders.
					It allows users to create profiles, participate in challenges, and
					showcase their skills, while users can search for and evaluate talent
					through powerful search tools and analytics features.
				</>
			),
		},
		{
			q: "Who can use SkoutNet?",
			a: "SkoutNet is for any one interested in any sports. Athletes can create profiles to showcase their talents, and scouts can use the platform to discover, evaluate, and communicate with athletes. Even fans, did your club sign a new winger and you can't find their compilations on youtube? Download SkoutNet and watch their profile highlights, attempts and analysis provided by others.",
		},
		{
			q: "Is SkoutNet free to use?",
			a: "Yes for the most part. Premium plans provide additional features like enhanced visibility, priority messaging, and advanced analytics for users.",
		},
	],
};

export default faq
