import { Text } from "@geist-ui/core";

const About = () => {
	return (
		<div>
			<div className="px-4 pb-10">
				<div className="text-center h-full">
					<div className="text-left h-full max-w-[600px] mx-auto">
						<div className="flex justify-left pt-2">
							<Text h3 className=" font-bold max-w-[600px] text-left">
								About GE.io
							</Text>
						</div>
						<div className="flex justify-left">
							<Text h2 className="text-sm text-red-50 font-bold sm:text-lg max-w-[600px] text-left">
								We are a consulting and advisory group specialising in growth strategy, marketing performance, and
								product development - providing structured strategies, frameworks, and execution plans to help
								businesses scale efficiently.
							</Text>
						</div>
						<div className="flex justify-left">
							<Text className="text-sm font-medium max-w-[600px] text-left">
								In other words... we scale you through paid advertising (highest leverage technology for online sales)
								while making sure that rest of the stuff doesn't get in the way.
								<br />
								<br />
								So what does that actually mean?
								<br />
								<br />
								<strong className="text-lg">1. We help you determine what needs to be done.</strong>
								<br />
								<br />
								<strong className="text-lg">2. We do it for you or help you execute.</strong>
							</Text>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
