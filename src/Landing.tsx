import { Tabs, Text } from "@geist-ui/core";
import TopNav from "./TopNav";
import { Home, Info, TrendingUp } from "@geist-ui/icons";
import CaseStudies from "./pages/CaseStudies";
import HomePage from "./pages/HomePage";
import Hypothesis from "./pages/Hypothesis";

const Landing = () => {
	return (
		<div>
			<TopNav />
			<Tabs initialValue="1" align="left" leftSpace={0.5}>
				<Tabs.Item
					label={
						<>
							<Home />
							Home
						</>
					}
					value="1"
				>
					<HomePage />
				</Tabs.Item>
				<Tabs.Item
					label={
						<>
							<Info />
							Hypothesis{" "}
						</>
					}
					value="2"
				>
					<Hypothesis />
				</Tabs.Item>
				<Tabs.Item
					label={
						<>
							<TrendingUp />
							Case Studies{" "}
						</>
					}
					value="3"
				>
					<CaseStudies />
				</Tabs.Item>
			</Tabs>
		</div>
	);
};

export default Landing;
