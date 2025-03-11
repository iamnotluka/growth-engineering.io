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
								Here you'll learn who we help, what we do, our missions & our story.
							</Text>
						</div>
					</div>
					<div className="flex justify-left pt-2">
						<Text h4 className=" font-bold max-w-[600px] text-left">
							Who We Help
						</Text>
					</div>
					<div className="flex justify-left">
						<Text className="text-sm font-medium max-w-[600px] text-left">
							We help founders and product owners scale their businesses. We work exclusively with companies that have
							achieved proven product-market fit—generating at least $100K per month in revenue. Our clients are
							committed to delivering the best possible experience to their customers but lack the knowledge or capacity
							to scale to $500K per month and beyond.
						</Text>
					</div>
					<div className="flex justify-left pt-2">
						<Text h4 className=" font-bold max-w-[600px] text-left">
							What We Do
						</Text>
					</div>
					<div className="flex justify-left">
						<Text className="text-sm font-medium max-w-[600px] text-left">
							Scaling a business is complex, but it doesn’t have to be. We help you create clear, repeatable systems
							that drive consistent growth—without the overwhelm.
							<br />
							<br />
							<strong>1. We help you systemize your business</strong>: So growth stops feeling chaotic and starts
							becoming predictable.
							<br />
							<br />
							<strong>2. We help you measure what matters</strong>: Giving you clarity on performance and eliminating
							guesswork.
							<br />
							<br />
							<strong>3. We help you focus on what moves the needle: </strong> So you're not wasting time on things that
							don’t drive real results.
							<br />
							<br />
							<strong>4. We help you execute—or handle it for you: </strong>Whether you need guidance or a team to
							implement, we make sure things get done.
							<br />
							<br />
							<strong> 5. We help you refine and improve</strong>: Using real data and feedback to continuously push
							your growth beyond the next level.
						</Text>
					</div>
					<div className="flex justify-left pt-2">
						<Text h4 className=" font-bold max-w-[600px] text-left">
							How We Integrate
						</Text>
					</div>
					<div className="flex justify-left">
						<Text className="text-sm font-medium max-w-[600px] text-left">
							We are not an agency. We are not a coaching program. We are not employees.
							<br />
							<br />
							What we are is a highly skilled team that leverages technology and data to drive real results. We take
							ownership of revenue-generating activities—ensuring your delivery and access channels are optimized for
							maximum performance.
							<br />
							<br />
							As your business scales, eliminating waste is just as important as increasing performance. If you're
							spending $100K–$200K per month on ads, then improving performance by 10% and reducing waste by 15% at the
							same spend results in a ~30% increase in revenue and 140% increase in profit. Yes, 140% - optimisation is
							as important as scale.
							<br />
							<br />
							To make that happen, we need to own paid acquisition channels and creative execution. But we can't run
							acquisition without a strategy. We can't build a strategy without a North Star. And we can't define a
							North Star without understanding your product and funnel.
							<br />
							<br />
							With so many moving parts, where do we focus?
							<br />
							<br />
							We let data be the guide. Once your business is systemized, we can measure inputs and outputs—doubling
							down on what moves the needle while eliminating inefficiencies that hold you back.
						</Text>
					</div>
					<div className="flex justify-left pt-2">
						<Text h4 className=" font-bold max-w-[600px] text-left">
							Our Mission & Beliefs
						</Text>
					</div>
					<div className="flex justify-left">
						<Text className="text-sm font-medium max-w-[600px] text-left">
							Our mission is to get you to the point where you are too big for us to manage.
							<br />
							<br />
							<strong>Be Customer Obsessed:</strong> Start with the customer and work backwards - our customers are not
							our partners - their customers are.
							<br />
							<br />
							<strong>Take Accountability:</strong> Leaders are owners - lead, follow or get out of the way.
							<br />
							<br />
							<strong>Insist on Highest Standards:</strong> Set expectations so high they seem unreasonable — because
							that’s how real growth happens.
							<br />
							<br />
							<strong>Deliver Results:</strong> At the end of the day, results are the only thing that matters.
							<br />
							<br />
							<strong>Build Trust</strong>: "If you can't see yourself working with someone for life, don't work with
							them for a day." - Naval Ravikant
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
