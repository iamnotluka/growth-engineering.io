import "./App.css";
import Markdown from "react-markdown";

function App() {
	return (
		<div
			style={{
				color: "black",
				maxWidth: "500px",
				margin: "auto",
				padding: "1.5rem",
			}}
		>
			<Markdown>{copy}</Markdown>
			<button
				onClick={() => {
					window.location.href = "https://calendar.app.google/jT7gSNV1E9HfWLD16";
				}}
				style={{
					width: "100%",
					fontSize: "15px",
					padding: "1rem",
					marginTop: "1rem",
					color: "white",
					background: "black",
					border: "none",
					textDecoration: "underline",
				}}
			>
				Book a call
			</button>
		</div>
	);
}

export default App;

const copy = `
# growth-engineering.io

----
**We help founders and product owners running seven-figure businesses scale to $500-$1M per month.**

----

I arrived at this approach by studying engineering, sales, and marketing, integrating concepts from Nick Kozmin from salesprocess.io.

This process defines relationships between business variables that establish a profitable use case, assuming the business operates as a machine that scales this use case effectively. These variables include niche, transformation, price, mechanism, and access channel.

Niche refers to a specific group of people with a particular problem in defined circumstances. We make a claim (transformation) to that niche, which is willing to pay a price to have the promise fulfilled or the transformation realized. A specific mechanism is used to deliver that transformation. The access channel, or distribution channel, consists of the traffic and conversion vehicles that bring the mechanism to the niche.

We define these variables as follows: niche (N), transformation/claim (T), price (P), mechanism (M), and access channel (A).

An NTP solution constitutes the market, meaning there is a group of people who desire a particular transformation and have the financial capacity to act on that desire.

An NTPM solution validates contribution before marketing value, ensuring that the mechanism effectively delivers the transformation and that the resulting contribution value is revealed (price minus cost of goods sold).

An NTPMA solution validates contribution after marketing value, meaning the cost of marketing and selling the mechanism through an access channel is lower than the earnings generated from that mechanism.

This framework clarifies how to prioritize activities in a business:

1. Market Identification and Validation (N, T, P) - Solving for the niche, transformation, and price.

2. Mechanism Validation (M) - Ensuring the mechanism effectively delivers the transformation and the resulting contribution.
3. Access Channel Validation (A) - Optimizing the traffic-conversion mechanism combination to result in a profitable unit case (contribution after marketing value).
4. Scaling - Once the NTPMA solution is validated, we focus on expansion.

Scaling, in simple terms, means increasing what works and eliminating what doesn’t. 

But how do we determine what works?

The key lies in validating and systemizing the business. A system is composed of inputs, processes, outputs, and variables.

Validating the NTPMA solution forces a business to adopt a systematic approach, requiring measurable results at each step to define success. By identifying which inputs and processes yield the best outputs—meaning which actions produce the most optimal outcomes—we can double down on those strategies.

----

**We implement this model into your business and assist your team in execution, ensuring a structured, scalable, and profitable approach to growth.**

If you think we can help, let's talk.
`;
