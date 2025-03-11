import { Button, Grid, Text, Tooltip } from "@geist-ui/core";
import { LogIn } from "@geist-ui/icons";
import { useState } from "react";

const TopNav = () => {
	const [loginLoading, setLoginLoading] = useState(false);
	const [contactLoading, setContactLoading] = useState(false);
	return (
		<nav className="flex justify-between items-center bg-black px-[16px] h-[64px] border-b border-b-[#333]">
			<div className="flex items-center">
				<span>
					<div className="flex items-center space-x-2">
						<img src="/icon.ico" alt="Growth Engineering Logo" className="w-[22px] h-[22px]" />
						<p className="hidden md:block font-bold text-md">GrowthEngineering</p>
						<p className="font-bold text-md md:hidden">GE.io</p>
					</div>
				</span>
			</div>
			<div className="flex items-center">
				<Grid.Container gap={1.5}>
					<Tooltip trigger="hover" text="Coming soon.." placement="bottom">
						<Grid>
							<div className="block">
								<Button
									type="default"
									auto
									scale={0.7}
									disabled
									placeholder={undefined}
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
									icon={<LogIn />}
									loading={loginLoading}
									onClick={() => {
										setLoginLoading(true);
										window.location.href = "https://app.growth-engineering.io";
										setTimeout(() => {
											setLoginLoading(false);
										}, 1000);
									}}
								>
									Log In
								</Button>
							</div>
						</Grid>
					</Tooltip>

					<Grid>
						<Button
							type="secondary"
							auto
							scale={0.7}
							placeholder={undefined}
							loading={contactLoading}
							onClick={() => {
								setContactLoading(true);
								window.location.href = "https://calendly.com/growth-engineering-io/30min";
								setTimeout(() => {
									setContactLoading(false);
								}, 1000);
							}}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<span className="font-medium">Apply Now</span>
						</Button>
					</Grid>
				</Grid.Container>
			</div>
		</nav>
	);
};

export default TopNav;
