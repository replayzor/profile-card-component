// - Font size (name and stats): 18px

// - Weights: 400, 700

function App() {
	return (
		<main
			style={{
				backgroundImage:
					"url(/images/bg-pattern-top.svg), url(/images/bg-pattern-bottom.svg)",
				backgroundRepeat: "no-repeat, no-repeat",
				backgroundPosition: "right 52vw bottom 35vh, left 48vw top 52vh",
			}}
			className="relative flex items-center justify-center h-screen overflow-hidden bg-primary-darkCyan"
		>
			<section className="relative z-10 flex flex-col h-auto bg-white shadow-2xl rounded-2xl w-96">
				<div>
					<img
						src="/images/bg-pattern-card.svg"
						alt=""
						className="w-full rounded-t-2xl"
					/>
					<div className="relative flex items-center justify-center">
						<img
							src="/images/image-victor.jpg"
							className="absolute object-cover w-24 h-24 rounded-full ring-4 ring-white"
							alt=""
						/>
					</div>
				</div>
				<div className="pt-20">
					<p className="flex items-center justify-center gap-3 text-lg font-bold text-primary-veryDarkDesaturatedBlue">
						Victor Crest
						<span className="font-normal font-kumbhSans text-primary-darkGrayishBlue">
							26
						</span>
					</p>
					<div className="divide-y divide-neutral-darkGray">
						<p className="flex items-center justify-center pt-2 pb-5 font-kumbhSans text-primary-darkGrayishBlue">
							London
						</p>
						<div className="flex items-center justify-around px-8 py-5">
							<div className="text-center">
								<p className="text-lg font-bold text-primary-veryDarkDesaturatedBlue">
									80K
								</p>
								<p className="text-xs tracking-widest font-kumbhSans text-neutral-darkGray">
									Followers
								</p>
							</div>
							<div className="text-center">
								<p className="text-lg font-bold text-primary-veryDarkDesaturatedBlue">
									803K
								</p>
								<p className="text-xs tracking-widest font-kumbhSans text-neutral-darkGray">
									Likes
								</p>
							</div>
							<div className="text-center">
								<p className="text-lg font-bold text-primary-veryDarkDesaturatedBlue">
									1.4K
								</p>
								<p className="text-xs tracking-widest font-kumbhSans text-neutral-darkGray">
									Photos
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
