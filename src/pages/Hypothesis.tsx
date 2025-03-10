import { Card, Collapse, Text, User } from "@geist-ui/core";
import { QuestionCircle } from "@geist-ui/icons";

const Hypothesis = () => {
	return (
		<div>
			<div className="px-4 pb-10">
				<div className="text-center h-full">
					<div className="text-left h-full">
						<div className="flex justify-center pt-2">
							<Text h3 className=" font-bold max-w-[600px] text-left">
								Read This To Understand Why What We Do Works
							</Text>
						</div>
						<div className="max-w-[600px] mx-auto">
							<div className="pb-5 ml-[-9px]">
								<User
									src="https://media.licdn.com/dms/image/v2/D5603AQGfETua-OwJpw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729278552572?e=1747267200&v=beta&t=gXFgfXK6pgW3HvKvhlqzy25zQQ9dKgdYEO4UGjIXvuc"
									name="Luka"
								>
									3 min read · Mar 2025
								</User>
							</div>
						</div>
						<hr className="h-px mb-5 bg-gray-200 border-0 dark:bg-gray-700" />

						<div className="flex justify-center">
							<Text h2 className="text-sm text-red-50 sm:font-bold sm:text-lg font-medium max-w-[600px] text-left">
								<span className="font-bold">We help founders scale to $500k per month </span>with a systematic,
								data-driven approach to growth - guided by{" "}
								<span className="font-bold">engineering, sales and marketing principles.</span>
							</Text>
						</div>
						<div className="flex justify-center">
							<Text className="text-sm font-medium max-w-[600px] text-left">
								This process defines relationship between business variables that establish a profitable unit case,
								assuming the business operates as a machine that scales this unit case effectively. <br />
								<br />
								These variables include <strong>niche, transformation, price, mechanism and access channel.</strong>
								<br></br>
								<br></br>
								Niche refers to a specific group of people with a particular problem in defined circumstances. We make a
								claim (transformation) to that niche, which is willing to pay a price to have the promise fulfilled or
								the transformation realised. A speicifc mechanism is used to deliver that transformation. The access
								channel, or districution channel, consists of the traffic and conversions vehicles that bring the
								mechanism to the niche.
								<br />
								<br />
								We define these variables as follows: niche (N), transformation/claim (T), price (P), mechanism (M) and
								access channel (A).
								<br />
								<br />
								An NTP solution constitutes the market, meaning there is a group of people who desire a particular
								transformation and have the financial capacity to act on that desire.
								<br />
								<br />
								An NTPM solution validates contribution before marketing value, ensuring that the mechanism effectively
								delivers the transformation and that the resulting contribution value is revealed (price minus cost of
								goods sold).
								<br />
								<br />
								An NTPMA solution validates contribution after marketing value, meaning the cost of marketing and
								selling the mechanism through an access channel is lower than the earnings generated from that
								mechanism.
								<br />
								<br />
								<strong>This framework clarifies how to prioritise activities in a business:</strong>
								<br />
								<ul className="list-decimal">
									<li>
										<strong>Market Identification and Validation (N, T, P)</strong>: Ensuring the mechanism effectively
										delivers the transformation and the resulting contribution{" "}
										<strong>to the market that needs it.</strong>
									</li>
									<li>
										<strong>Mechanism Validation (M)</strong>: Ensuring the mechanism effectively delivers the
										transformation and the resulting contribution.
									</li>
									<li>
										<strong>Access Channel Validation (A)</strong>: Optimizing the traffic-conversion mechanism
										combination to result in a profitable unit case (contribution after marketing value).
									</li>
									<li>
										<strong>Scaling</strong>: Once the NTPMA solution is validated, we focus on expansion.{" "}
									</li>
								</ul>
								<Card className="text-left">
									<Text className="font-bold">
										Scaling, in simple terms, means increasing what works and eliminating what doesn’t.
										<br />
										<br />
										But how do we determine what works? <br />
									</Text>
								</Card>
								<br />
								The key lies in validating and systemizing the business. A system is composed of inputs, processes,
								outputs, and variables. <br />
								<br />
								Validating the NTPMA solution forces a business to adopt a systematic approach, requiring measurable
								results at each step to define success. <br />
								<br />
								By identifying which inputs and processes yield the best outputs—meaning which actions produce the most
								optimal outcomes—we can double down on those strategies.
								<br />
								<br />
								<Card className="text-left">
									<Text className="font-bold">
										Using our software, we systemise your business and assist your team in execution, ensuring a
										structured, scalable, and profitable approach based on data which guarantees growth.
									</Text>
								</Card>
							</Text>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hypothesis;
