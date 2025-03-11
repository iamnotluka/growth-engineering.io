import { Text } from "@geist-ui/core";

const About = () => {
	return (
		<div className="px-4 pb-10">
			<div className="text-center h-full">
				<div className="text-left h-full">
					<div className="flex justify-left max-w-[600px] mx-auto pt-2">
						<Text h3 className=" font-bold max-w-[600px] text-left">
							The Anti-Agency
						</Text>
					</div>
					<div className="flex justify-left pb-4">
						<Text small className="max-w-[600px] text-left">
							Working on this now...
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
