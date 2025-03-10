import { Collapse, Text } from "@geist-ui/core";

const Hypothesis = () => {
	return (
		<div>
			<div className="px-2">
				<div className="text-center h-full">
					<div className="text-center h-full">
						<div className="flex justify-center">
							<Text h2 className="text-sm text-red-50 sm:font-bold sm:text-lg font-medium max-w-[600px] text-left">
								<span className="font-bold">We help founders scale to $500k per month </span>with a systematic,
								data-driven approach to growth - guided by{" "}
								<span className="font-bold">engineering, sales and marketing principles.</span>
							</Text>
						</div>
					</div>
					<div className="text-center h-full">
						<div className="flex justify-center">
							<Text className="text-sm font-medium max-w-[600px] text-left">
								This process defines relationship between business variables that establish a profitable use case,
								assuming the business operates as a machine that scales this use case effectively. <br />
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
							</Text>
						</div>
						<div className="text-center h-full">
							<div className="flex justify-center">
								<Collapse.Group className="text-sm font-medium max-w-[600px] text-left">
									<Collapse title="1: Market Identification and Validation (N, T, P)">
										<Text>Solving for the niche, transformation, and price.</Text>
									</Collapse>
									<Collapse title="2: Mechanism Validation (M)">
										<Text>
											Ensuring the mechanism effectively delivers the transformation and the resulting contribution.{" "}
										</Text>
									</Collapse>
									<Collapse title="3: Access Channel Validation (A)">
										<Text>
											Optimizing the traffic-conversion mechanism combination to result in a profitable unit case
											(contribution after marketing value).{" "}
										</Text>
									</Collapse>
									<Collapse title="4: Scaling">
										<Text>Once the NTPMA solution is validated, we focus on expansion. </Text>
									</Collapse>
								</Collapse.Group>
							</div>
						</div>
						<div className="flex justify-center">
							<Text className="text-sm font-medium max-w-[600px] text-left">
								Scaling, in simple terms, means increasing what works and eliminating what doesn’t. <br />
								<br />
								But how do we determine what works? <br />
								<br />
								The key lies in validating and systemizing the business. A system is composed of inputs, processes,
								outputs, and variables. <br />
								<br />
								Validating the NTPMA solution forces a business to adopt a systematic approach, requiring measurable
								results at each step to define success. By identifying which inputs and processes yield the best
								outputs—meaning which actions produce the most optimal outcomes—we can double down on those strategies.
								<br />
								<br />
								<strong>
									Using our software, we implement this model into your business and assist your team in execution,
									ensuring a structured, scalable, and profitable approach to growth.
								</strong>
							</Text>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hypothesis;
