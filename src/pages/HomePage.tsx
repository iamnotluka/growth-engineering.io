import { Page, Text } from "@geist-ui/core";
import Orb from "../components/Orb";

const HomePage = () => {
	return (
		<div>
			<div className="px-2">
				<div className="text-center h-full">
					<div className="text-center h-full">
						<div style={{ width: "100%", height: "400px", position: "relative" }}>
							<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[90%]">
								<Text
									className="font-bold text-4xl whitespace-normal text-white"
									style={{ textShadow: "0px 0px 2px rgba(255, 255, 255, 0.8)" }}
								>
									GE.io
								</Text>{" "}
							</div>
							<Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
						</div>
						<div className="flex justify-center">
							<Text h1 className="text-sm text-red-50 sm:font-bold sm:text-lg font-medium max-w-[600px] text-center">
								<span className="font-bold">We help founders scale to $500k per month </span>with a systematic,
								data-driven approach to growth - guided by{" "}
								<span className="font-bold">engineering, sales and marketing principles.</span>
							</Text>
						</div>
						<Text small type="secondary" className="text-xs font-medium max-w-[600px] text-center">
							© 2025, Growth Engineering Inc.
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
