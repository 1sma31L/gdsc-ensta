export default function Home() {
	return (
		<main className="flex flex-col gap-2 justify-center items-center w-full h-screen">
			<div className="flex justify-around items-center container mx-auto px-2">
				<div className="hidden lg:block">
					<img src="/gdsc_logo.svg" alt="" />
				</div>

				<div className="flex flex-col justify-center gap-5">
					<h1 className="text-lg lg:text-5xl font-extrabold font-unbounded text-gdsc-red text-center lg:text-left">
						WE ARE GDSC ENSTA
					</h1>
					<p className="text-sm lg:text-lg w-full lg:w-[550px] font-geistMono text-center self-center">
						We think slightly out of the box, we believe that a club’s resources
						must not only be channeled into conducting events but also to
						propagate learning and teaching, symbiotically.
					</p>
				</div>
			</div>
		</main>
	);
}
