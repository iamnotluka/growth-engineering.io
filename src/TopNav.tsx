import { Button, Grid } from "@geist-ui/core";
import { LogIn } from "@geist-ui/icons";

const TopNav = () => {
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
					<Grid>
						<div className="block">
							<Button
								type="default"
								ghost
								auto
								scale={0.7}
								placeholder={undefined}
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
								icon={<LogIn />}
								onClick={() => {
									window.location.href = "https://app.growth-engineering.io";
								}}
							>
								Log In
							</Button>
						</div>
					</Grid>
					<Grid>
						<Button
							type="secondary"
							auto
							scale={0.7}
							placeholder={undefined}
							onClick={() => {
								window.location.href = "https://calendly.com/luka-zoric/30min";
							}}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<span className="font-medium">Contact</span>
						</Button>
					</Grid>
				</Grid.Container>
			</div>
		</nav>
	);
};

export default TopNav;
