import { Avatar, Card, Image, Text } from "@geist-ui/core";
import { Award } from "@geist-ui/icons";

const url = "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png";
const CaseStudies = () => {
	return (
		<div>
			<div className="px-4 pb-10">
				<div className="text-center h-full">
					<div className="text-left h-full max-w-[600px] mx-auto">
						<div className="flex justify-left pt-2">
							<Text h3 className="font-bold max-w-[600px] text-left">
								Case Studies
							</Text>
						</div>
						<div className="flex justify-left pb-4">
							<Text small className="max-w-[600px] text-left">
								We Partner with businesses ready to take their business to the next level.
							</Text>
						</div>
						<hr className="h-px mb-5 bg-gray-200 border-0 dark:bg-gray-700" />

						<div className="flex justify-center pt-2">
							<Card width="100%">
								<Image src="./fitazfk_banner.webp" draggable={false} />
								<Text h4 mb={0} mt={0}>
									Transform by FITAZ: ~$100k per month profit added after 3 months.
								</Text>
								<Text type="secondary" small>
									~1.2 mil ARR saved to the through efficiency in 3 months as a result of 20% less spend, 15% more
									revenue.
								</Text>
								<Card.Footer>
									<Text className="text-xs pr-3">Tools: </Text>
									<Avatar.Group>
										<Avatar src={"./meta_logo.webp"} stacked />
										<Avatar src={"./google_logo.webp"} stacked />
										<Avatar src={"./tiktok_logo.avif"} stacked />
									</Avatar.Group>
									<Text className="text-xs px-3">
										Optimised/solved for: <strong>Mechanism, Access Channel</strong>
									</Text>
								</Card.Footer>
							</Card>
						</div>
						<div className="flex justify-center pt-5">
							<Card width="100%">
								<Image src="./brothers_green.png" draggable={false} />
								<Text h4 mb={0} mt={0}>
									The Brothers Green: $80k per month to $350k per month in 8 months.
								</Text>
								<Text type="secondary" small>
									Scaling a product market fit stage product to 100s of thousands per month allowing them to raise
									multiple investments rounds.
								</Text>
								<Card.Footer>
									<Text className="text-xs pr-3">Tools: </Text>
									<Avatar.Group>
										<Avatar src={"./meta_logo.webp"} stacked />
										<Avatar src={"./google_logo.webp"} stacked />
										<Avatar src={"./tiktok_logo.avif"} stacked />
										<Avatar src={"./klaviyo_logo.png"} stacked />
									</Avatar.Group>
									<Text className="text-xs px-3">
										Optimised/solved for: <strong>Transformation, Price, Mechanism, Access Channel</strong>
									</Text>
								</Card.Footer>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudies;
